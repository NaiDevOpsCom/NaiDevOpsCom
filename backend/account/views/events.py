import datetime
import os
from django.conf import settings
from rest_framework.response import Response
from account.serializers import EventSerializer
from account.models import Event
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS
from rest_framework import viewsets, status
from rest_framework.decorators import permission_classes
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.utils.timezone import now

from django.utils.timezone import localtime 



# Permission for data fetching
class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS
# ==============================EVENTS=====================================
class EventViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated|ReadOnly]

    queryset = Event.objects.all()
    serializer_class = EventSerializer
     
    def list(self, request):
        queryset = Event.objects.all().order_by('-id')
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request): 
        title = request.data.get('title')
        sub_title = request.data.get('sub_title')
        description =request.data.get('description')
        speakers =request.data.get('speakers')
        price =request.data.get('price')
        location =request.data.get('location')
        meeting_link =request.data.get('meetingLink')
        event_date =request.data.get('event_date')
        image = request.data.get('image')
        add_to_homepage = json.loads(request.data.get('add_to_homepage')) #converting boolean from react
        regular_event = json.loads(request.data.get('regular_event')) #converting boolean from react

        if regular_event:
            events_count = Event.objects.filter(regular_event=True).count()
            print(events_count)
            if(events_count>0):
                Event.objects.all().update(regular_event=False)


        serializer = self.serializer_class(data=request.data)            
        if serializer.is_valid():
            if location !=None:
                if sub_title != None:
                    serializer.save(title=title,price=price,location=location,sub_title=sub_title, description=description,add_to_homepage=add_to_homepage, regular_event=regular_event, speakers=speakers, event_date=event_date,image=image,  user=request.user )
                else:
                    serializer.save(title=title,price=price,location=location, description=description,add_to_homepage=add_to_homepage, regular_event=regular_event, speakers=speakers, event_date=event_date,image=image,  user=request.user )
                    
            elif meeting_link != None:
                if sub_title != None:
                    serializer.save(title=title,price=price,meeting_link=meeting_link,sub_title=sub_title, description=description,add_to_homepage=add_to_homepage, regular_event=regular_event, speakers=speakers, event_date=event_date,image=image,  user=request.user )
                else:
                    serializer.save(title=title,price=price,meeting_link=meeting_link,description=description,add_to_homepage=add_to_homepage, regular_event=regular_event, speakers=speakers, event_date=event_date,image=image,  user=request.user )
        

            return Response({"success":"Event created successfully!"}, status=201)
        else:
            return Response(serializer.errors, status=status.HTTP_406_NOT_ACCEPTABLE)

        
    def retrieve(self, request, pk=None):
        today = datetime.datetime.now()
        # print("xxxxxxx local ",localtime(today))
        print("uuuuu ", today)
        # desired_datetime = localtime(stored_datetime)

        queryset = self.queryset.all()
        event = get_object_or_404(queryset, pk=pk)
        serializer = EventSerializer(event)
        return Response(serializer.data)

    # 
    def updatesome(self, request, pk=None):
        instance = self.queryset.get(pk=pk)
        serializer = self.serializer_class(instance, data=request.data)
        
        image = request.data.get('image')
        events = Event.objects.filter(pk=pk).count()
        if events > 0 and image:
            event = self.queryset.get(pk=pk)
             # Check first if the image exists before deleting from the directory
            if os.path.exists(os.path.join(settings.MEDIA_ROOT, str(event.image)) ):
                os.remove(os.path.join(settings.MEDIA_ROOT, str(event.image) ))

                dir = os.path.join(settings.MEDIA_ROOT, ("/".join(str(event.image).split("/",-2)[:2])) )
                list_dir = os.listdir(dir)
                print("Dir length ",len(list_dir))
                if len(list_dir) == 0:
                    os.rmdir(dir)
                    
        if serializer.is_valid():
            serializer.save()
            return Response({"success":"Event Updated successfully!"}, status=201)
        else:
            return Response({"error":"Error Updating the event!"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        

    def update(self, request, pk=None):
        instance = self.queryset.get(pk=pk)
        serializer = self.serializer_class(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)        
    
    def destroy(self, request, pk=None):
        events = Event.objects.filter(pk=pk).count()
        if events > 0:
            event = self.queryset.get(pk=pk)
    
            # Check first if the file exists before deleting from the directory
            if os.path.exists(os.path.join(settings.MEDIA_ROOT, str(event.image)) ):
                os.remove(os.path.join(settings.MEDIA_ROOT, str(event.image) ))

                dir = os.path.join(settings.MEDIA_ROOT, ("/".join(str(event.image).split("/",-2)[:2])) )

                list_dir = os.listdir(dir)
                if len(list_dir) == 0:
                    os.rmdir(dir)
 
            event.delete()
            return Response({"success":"Deleted Successfully!"},status=201)
        else:
            return Response({"error":"Event does not exist!"},status=status.HTTP_204_NO_CONTENT)

# Get the top event
@csrf_exempt
@api_view(('GET',))
def getTopEvent(request):    
    data = request.data
    serializer = EventSerializer(data=data)
    today = datetime.datetime.now()

    event_exists=Event.objects.filter(add_to_homepage=True, event_date__gt=today).count()

    if(event_exists < 1):
        return Response({"event_error":"No upcoming event!"}, status=status.HTTP_406_NOT_ACCEPTABLE)

    else:
        queryset = Event.objects.filter(add_to_homepage=True, event_date__gt=today).order_by("event_date")
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data[0], status=201)


# Get the regular event
@csrf_exempt
@api_view(('GET',))
def getRegularEvent(request):    
    data = request.data
    serializer = EventSerializer(data=data)
    today = datetime.datetime.now()

    event_exists=Event.objects.filter(regular_event=True, event_date__gt=today).count()

    if(event_exists < 1):
        return Response({"event_error":"No regular event!"}, status=200)

    else:
        queryset = Event.objects.filter(regular_event=True, event_date__gt=today).order_by("event_date")
        serializer = EventSerializer(queryset, many=True)
        print(serializer.data)
        return Response(serializer.data[0], status=201)
