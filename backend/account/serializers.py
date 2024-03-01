from account.models import User,Profile,Event, Blog
from rest_framework import serializers


class ProfileSerializer(serializers.ModelSerializer): 
    picture = serializers.CharField(required=False)
    bio = serializers.CharField(required=False)
    class Meta:
            model = Profile        
            fields = '__all__'

            
class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=False)
    email = serializers.CharField(required=False)
    profile= ProfileSerializer(read_only=True)
    # date_joined = serializers.CharField(required=False)
    class Meta:
        model = User        
        extra_kwargs = {'password': {'write_only': True}}
        fields = ('id', 'username', 'email',"profile", "is_admin","date_joined","is_staff")
        # read_only_field = ["id",'is_active', 'created', 'updated']
        

class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    token = serializers.CharField(required=False, allow_blank=True)
    password = serializers.CharField(required=False, allow_blank=True)
    
class EventSerializer(serializers.ModelSerializer):
    user = serializers.CharField(required=False)
    title = serializers.CharField(required=False)
    description = serializers.CharField(required=False)
    eventbrite_link = serializers.CharField(required=False)
    event_date = serializers.CharField(required=False)
    event_date = serializers.CharField(required=False)
    image = serializers.FileField(required=False)

    class Meta:
        model = Event
        fields = ("__all__")

class BlogSerializer(serializers.ModelSerializer):
    title = serializers.CharField(required=False)
    tag = serializers.CharField(required=False)
    description = serializers.CharField(required=False)
    user = UserSerializer(required=False)
    # serializers.CharField(required=False)
   
    class Meta:
        model = Blog
        fields = ("__all__")