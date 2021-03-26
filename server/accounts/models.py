import datetime
from django.contrib.auth.models import AbstractUser, BaseUserManager


from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    avatar = models.ImageField(null=True, upload_to='avatars')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()


# class Profile(models.Model): # TODO rework this class into wallet with different currencies
#     user = models.OneToOneField(
#         User, on_delete=models.CASCADE, related_name='profile')
#     current_money = models.FloatField(default=0)
#     payday_date = models.DateField(blank=True, null=True)
#     avatar = models.ImageField(null=True, upload_to='avatars')

#     @property
#     def days_to_payday_left(self):
#         return abs((self.payday_date-datetime.datetime.today().date()).days)

#     @property
#     def money_per_day(self):
#         return self.current_money / self.days_to_payday_left

#     def __str__(self):
#         return "%s %s" % (self.id, self.user.email)
