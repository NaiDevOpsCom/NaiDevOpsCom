from django.utils import timezone
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password, check_password
from ..email import send_message, send_reset_token, send_staff_credentials
from account.serializers import PasswordResetSerializer, UserSerializer
from account.models import PasswordResetToken, User, Profile
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404

from rest_framework_simplejwt.tokens import RefreshToken
import requests
import string    
import random  



def index(request):
    return render(request, "index.html")

# Permission for data fetching
class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS
    

# ======================================================
# fetch users
@api_view(('GET',))
@permission_classes((IsAuthenticated, ))
def users(request):    
    queryset = User.objects.filter(is_staff=True).order_by('-id')
    serializer = UserSerializer(queryset, many=True)
    return Response(serializer.data)


# Create a new user
@csrf_exempt
@api_view(('POST',))
def register_user(request):    
    data = request.data
    serializer = UserSerializer(data=data)

    username = "kip"
    # request.data.get('username')
    email = request.data.get('email')
    password = "kkkk"
    #  request.data.get('password')

    print("SEXXXXY")
    email_exists=User.objects.filter(email=email).count()
    username_exists=User.objects.filter(username=username).count()

    if(email_exists > 0):
        return Response({"email_error":"User with this email already exist!"}, status=status.HTTP_406_NOT_ACCEPTABLE)

    elif(username_exists > 0):
        return Response({"username_error":"User with this username exist!"}, status=status.HTTP_406_NOT_ACCEPTABLE)
    else:
        serializer = UserSerializer(data=request.data)            
        if serializer.is_valid():
            profile = Profile()
            profile.save()
            serializer.save(
                username=username,
                email=email,
                # is_admin=True,
                profile=profile,
                password=make_password(password),
            )
            return Response({"success":"User created successfully!"}, status=201)
        else:
            return Response({"error":"Something went wrong!"}, status=status.HTTP_406_NOT_ACCEPTABLE)


# Create a new user with google
@csrf_exempt
@api_view(('POST',))
def register_with_google(request):    
    data = request.data
    serializer = UserSerializer(data=data)

    username = request.data.get('family_name') if request.data.get('family_name') else request.data.get('given_name')
    email = request.data.get('email')
    picture = request.data.get('picture')


    email_exists=User.objects.filter(email=email).count()
    username_exists=User.objects.filter(username=username).count()

    if(email_exists > 0):
        return Response({"email_error":"User with this email already exist!"}, status=status.HTTP_406_NOT_ACCEPTABLE)

    elif(username_exists > 0):
        return Response({"username_error":"User with this username exist!"}, status=status.HTTP_406_NOT_ACCEPTABLE)
    else:
        serializer = UserSerializer(data=request.data)            
        if serializer.is_valid():
            profile = Profile(google_profile_image=picture)
            profile.save()
            serializer.save(
                username=username,
                email=email,
                # is_admin=True,
                profile=profile
            )
            return Response({"success":"User created successfully!"}, status=201)
        else:
            return Response({"error":"Something went wrong!"}, status=status.HTTP_406_NOT_ACCEPTABLE)



# Create a new admin 
@csrf_exempt
@api_view(('POST',))
def register_admin(request):    
    data = request.data
    serializer = UserSerializer(data=data)

    email = request.data.get('email')        
    username = email[:email.index("@")]
    password = ''.join(random.choices(string.ascii_uppercase + string.digits, k = 6))    

    if username:        
        username_exists=User.objects.filter(username=username).count()
        if(username_exists > 0):
                    return Response({"username_error":"User with this username exist!"}, status=status.HTTP_406_NOT_ACCEPTABLE)
                
    email_exists=User.objects.filter(email=email).count()
    if(email_exists > 0):
        return Response({"email_error":"User with this email already exist!"}, status=status.HTTP_406_NOT_ACCEPTABLE)

    else:
        serializer = UserSerializer(data=request.data)            
        if serializer.is_valid():
            serializer.save(
                username=username,
                is_staff=True,
                email=email,
                password=make_password(password)
            )
            print("pion ")
            # x=
            send_staff_credentials(username,password, email)
            # print("operate ", x)
            return Response({"success":"Staff added successfully!"}, status=201)
        else:
            return Response(serializer.errors, status=400)

# Send new password to user
@csrf_exempt
@api_view(('POST',))
def send_password(request):    
    email=request.data.get('email')
    random_password = ''.join(random.choices(string.ascii_uppercase + string.digits, k = 5))    

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({"email_error":"User with this email doesn't exist!"}, status=status.HTTP_406_NOT_ACCEPTABLE)

    if request.method=="POST":
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            user = serializer.save(password = make_password(random_password))
            send_reset_token(user.id,user.username,random_password,email)
            return Response({"success":"Email sent, check email!"}, status=201)
        else:
            return Response({"error":"Something went wrong!"}, status=201)




# new
@api_view(['POST'])
def password_reset_request(request):
    serializer = PasswordResetSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        user = get_object_or_404(User, email=email)
        token = ''.join(random.choices(string.ascii_letters + string.digits, k=32))
        expiration_time = timezone.now() + timezone.timedelta(minutes=10)
        PasswordResetToken.objects.create(user=user, token=token, expiration_time=expiration_time)
        
        send_reset_token(user.username,token,email)
        return Response({'success': 'Password reset link sent successfully'}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def password_update(request):
    serializer = PasswordResetSerializer(data=request.data)
    if serializer.is_valid():
        token = serializer.validated_data['token']
        password = serializer.validated_data['password']
        reset_token = get_object_or_404(PasswordResetToken, token=token)
        if reset_token.expiration_time > timezone.now():
            user = reset_token.user
            user.set_password(password)
            user.save()
            reset_token.delete()
            return Response({'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Reset token has expired'}, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)













# Update new password to user
@csrf_exempt
@api_view(('PATCH',))
@permission_classes((IsAuthenticated, ))
def update_password(request):    
    oldpassword=request.data.get('oldpassword')
    newpassword=request.data.get('newpassword')

    try:
        user = User.objects.get(email=request.user.email)
    except User.DoesNotExist:
        return Response({"email_error":"User with this email doesn't exist!"}, status=status.HTTP_406_NOT_ACCEPTABLE)

    if request.method=="PATCH":
        user=User.objects.get(email=request.user.email)
        print("Check pass ",user.check_password(oldpassword))
        if user.check_password(oldpassword):
            serializer = UserSerializer(user, data=request.data)
            if serializer.is_valid():
                user = serializer.save(password = make_password(newpassword))
                return Response({"success":"Password updated successfully!"}, status=201)
            else:
                return Response({"error":"Something went wrong!"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            return Response({"password_error":"Your old password doesn't match with our records!"}, status=status.HTTP_406_NOT_ACCEPTABLE)

# Update username 
@csrf_exempt
@api_view(('PATCH',))
@permission_classes((IsAuthenticated, ))
def updateUsername(request):    
    username=request.data.get('username')  
    
    username_exists=User.objects.filter(username=request.user.username).count()
    user = User.objects.get(username=request.user.username)
 
    if(username_exists > 0 and user.username==request.user.username):
        if(user.username==username):
            return Response({"error":"You've made no changes!"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            user.username = username
            user.save()
            return Response({"success":"Username updated successfully!"}, status=201)
                
    else:
            return Response({"error":"User with this username already exist!"}, status=status.HTTP_406_NOT_ACCEPTABLE)


@csrf_exempt
@api_view(('DELETE',))
@permission_classes((IsAuthenticated, ))
def delete_user(request, pk=None):
    user = User.objects.filter(pk=pk).count()
    if user > 0:
        user = User.objects.get(pk=pk)
        user.delete()
        return Response({"success":"Deleted Successfully!"},status=201)
    else:
        return Response({"error":"User does not exist!"},status=status.HTTP_406_NOT_ACCEPTABLE)

# Send user message 
@csrf_exempt
@api_view(('POST',))
def sendMessage(request):    
    # subject=request.data.get('subject')
    message=request.data.get('message')
    email=request.data.get('email')  
    name=request.data.get('name') 

    if request.method=="POST":
        send_message(name,message, email)
        return Response({"success":"Email sent succesfully!"}, status=201)

@api_view(['GET'])
def current_user(request):
    user = request.user
    user = UserSerializer(user)
    return Response(user.data)