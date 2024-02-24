import json
from rest_framework.response import Response
from account.serializers import QuestionSerializer
from account.models import Question, Tag
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes


# Permission for data fetching
class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS
    
# =================Questions==================================
@csrf_exempt
@api_view(['GET', 'POST'])
def question_list(request):
    if request.method == 'GET':
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        title = request.data.get('title')
        content = request.data.get('content')
        screenshot = request.data.get('image')
        tags_data = request.data.get('tags')
        print(request.user)

        if title!=None or tags_data!=None or content!=None:
            print("00000000000000009")
            tags = []
            # for tag_name in tags_data:
            #     tag= Tag.objects.get_or_create(name=tag_name)
            #     tags.append(tag)
            tags = [Tag.objects.get_or_create(name=tag_name)[0] for tag_name in tags_data]

            print(tags)
            quiz = Question( title=title,
            user=request.user, content=content,
            screenshot=screenshot)
            quiz.save()
        
            # Set the many-to-many relationship for tags
            quiz.tags.set(tags)
   
            
            return Response({"success":"Question created"}, status=status.HTTP_201_CREATED)

        return Response({"error":"All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def question_detail(request, pk):
    try:
        question = Question.objects.get(pk=pk)
    except Question.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = QuestionSerializer(question)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = QuestionSerializer(question, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        question.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
