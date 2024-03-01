from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **kwargs):
        """Create and return a `User` with an email, phone number, username and password."""
        if username is None:
            raise TypeError('Users must have a username.')
        if email is None:
            raise TypeError('Users must have an email.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Superusers must have a password.')
        if email is None:
            raise TypeError('Superusers must have an email.')
        if username is None:
            raise TypeError('Superusers must have an username.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

class Profile(models.Model):
    bio = models.TextField() 
    google_profile_image = models.CharField( max_length=100) 
    picture =  models.FileField(upload_to='profile/%Y:%m:%d', null=True)  
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True,  null=True, blank=True)
    date_joined = models.DateTimeField(verbose_name='date posted', auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    password = models.CharField( max_length=100)
    profile = models.OneToOneField(Profile, blank=True, on_delete=models.CASCADE)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"


class PasswordResetToken(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=32, unique=True)
    expiration_time = models.DateTimeField()



class Event(models.Model):
    title = models.CharField( max_length=130) 
    description = models.TextField() 
    eventbrite_link = models.CharField( max_length=150, blank=True)    
    image =  models.FileField(upload_to='events/%Y:%m:%d', null=True)  
    date_posted = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    event_date = models.DateTimeField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # location = models.CharField( max_length=50, blank=True)     # speakers = models.CharField(max_length=100) 


class Blog(models.Model):
    title = models.CharField( max_length=150) 
    tag = models.CharField( max_length=50, default="DevOps Blogs") 
    description = models.TextField() 
    image =  models.FileField(upload_to='blogs/%Y:%m:%d', null=True)  
    date_posted = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


