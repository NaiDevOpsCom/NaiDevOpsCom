from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views.profile import addProfilePicture, profile
from .views.users import password_reset_request, password_update, register_user,delete_user,register_admin, send_password, sendMessage, update_password,users, current_user
# ,login_with_google, register_with_google
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView, TokenVerifyView)
from django.urls import include
from .views.events import EventViewSet, getTopEvent, getRegularEvent
from .views.blogs import BlogViewSet
blog_detail = BlogViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'updatesome','delete': 'destroy', })
blogs =  BlogViewSet.as_view({'get': 'list', 'post': 'create'})

event_detail = EventViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'updatesome','delete': 'destroy', })
events =  EventViewSet.as_view({'get': 'list','post': 'create'})

   
urlpatterns = [
# path('auth/',include('drf_social_oauth2.urls',namespace='drf')),
    path('users', users),
    
    path('users/register', register_user),
    # path('users/register_with_google', register_with_google),
    # path('auth/login_with_google', login_with_google),
    path('users/addstaff', register_admin),
    path('users/sendemail', sendMessage),
    path("users/current_user", current_user ),
    
    path("users/resetpassword", password_reset_request ),
    path("users/<int:pk>",delete_user),
    path("users/updatepassword", password_update),
    

    path("profile",profile),
    path("profile/add",addProfilePicture),

    path("blogs",blogs),
    path("blogs/<int:pk>",blog_detail),

    path("events",events),
    path("events/<int:pk>",event_detail),
    path("topevent",getTopEvent),
    path("regularevent",getRegularEvent),


    path('token/', TokenObtainPairView.as_view()),
    path('token/verify/', TokenVerifyView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
