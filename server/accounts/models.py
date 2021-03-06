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
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    avatar = models.ImageField(null=True, upload_to='avatars')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    @property
    def get_active_wallet(self):
        return self.wallets.filter(is_active=True).first()
