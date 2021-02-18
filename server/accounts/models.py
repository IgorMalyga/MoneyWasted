import datetime

from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='profile')
    current_money = models.FloatField(default=0)
    payday_date = models.DateField(blank=True, null=True)

    USERNAME_FIELD = 'email'

    @property
    def days_to_payday_left(self):
        return abs((self.payday_date-datetime.datetime.today().date()).days)

    @property
    def money_per_day(self):
        return self.current_money / self.days_to_payday_left

    def __str__(self):
        return "%s %s" % (self.id, self.user.email)
