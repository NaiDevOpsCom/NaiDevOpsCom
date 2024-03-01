import os
from django.conf import settings
from rest_framework.response import Response
from account.serializers import BlogSerializer
from account.models import Blog
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS
from rest_framework import viewsets, status
from rest_framework.decorators import permission_classes


# Permission for data fetching
class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS
# ===============================Blog================================================
class BlogViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated|ReadOnly]

    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    
    def list(self, request):
        queryset = self.queryset.all().order_by('-id')
        serializer = BlogSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request): 
        serializer = self.serializer_class(data=request.data)            
        title = request.data.get('title')
        image = request.data.get('file')
        description =request.data.get('description')
        tag=request.data.get('tag')
    
        if serializer.is_valid():
            serializer.save(title=title,description=description,
            image=image,tag=tag, user=request.user )
            return Response({"success":"Saved successfully!!"},status=201)

        print(serializer.errors)
        return Response({"error":"Post couldn't be saved!!"},status=status.HTTP_406_NOT_ACCEPTABLE)
    
    def retrieve(self, request, pk=None):
        queryset = Blog.objects.all()
        blog = get_object_or_404(queryset, pk=pk)
        serializer = BlogSerializer(blog)
        return Response(serializer.data)

    def updatesome(self, request, pk=None):
        instance = self.queryset.get(pk=pk)
        serializer = self.serializer_class(instance, data=request.data)
        # serializer.is_valid(raise_exception=True)
        file = request.data.get('file')

        blogs = Blog.objects.filter(pk=pk).count()
        if blogs > 0 and file:
            blog = self.queryset.get(pk=pk)
             # Check first if the file exists before deleting from the directory
            if os.path.exists(os.path.join(settings.MEDIA_ROOT, str(blog.file)) ):
                os.remove(os.path.join(settings.MEDIA_ROOT, str(blog.file) ))

                dir = os.path.join(settings.MEDIA_ROOT, ("/".join(str(blog.file).split("/",-2)[:2])) )
                list_dir = os.listdir(dir)
                print("Dir length ",len(list_dir))
                if len(list_dir) == 0:
                    os.rmdir(dir)

        if serializer.is_valid():
            serializer.save()
            return Response({"success":"Updated successfully!!"},status=201)
        else:
            print(serializer.errors)
            return Response({"error":"Post couldn't be updated!!"},status=status.HTTP_406_NOT_ACCEPTABLE)
        

    def update(self, request, pk=None):
        instance = self.queryset.get(pk=pk)
        serializer = self.serializer_class(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


    def destroy(self, request, pk=None):
        blogs = Blog.objects.filter(pk=pk).count()
        if blogs > 0:
            blog = self.queryset.get(pk=pk)
    
            # Check first if the file exists before deleting from the directory
            if os.path.exists(os.path.join(settings.MEDIA_ROOT, str(blog.file)) ):
                os.remove(os.path.join(settings.MEDIA_ROOT, str(blog.file) ))

                dir = os.path.join(settings.MEDIA_ROOT, ("/".join(str(blog.file).split("/",-2)[:2])) )
                list_dir = os.listdir(dir)
                print("Dir length ",len(list_dir))
                if len(list_dir) == 0:
                    os.rmdir(dir)
 
            blog.delete()
            return Response({"success":"Deleted Successfully!"},status=201)
        else:
            return Response({"error":"Blog does not exist!"},status=status.HTTP_204_NO_CONTENT)


