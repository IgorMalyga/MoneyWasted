import datetime

from django.db import models
from django.contrib.postgres.fields import ArrayField


class Currency(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=8)
    countries = ArrayField(models.CharField(
        max_length=255, blank=True), size=8)

    class Meta:
        verbose_name_plural = "Currencies"

    def __str__(self):
        return '%d %s' % (self.id, self.name)


class Wallet(models.Model):
    name = models.CharField(max_length=255, default="Main")
    user = models.ForeignKey(
        'accounts.User', on_delete=models.CASCADE, related_name='wallets')
    current_money = models.FloatField(default=0)
    payday_date = models.DateField(blank=True, null=True)
    currency = models.ForeignKey(
        'expenses.Currency', null=True, on_delete=models.PROTECT, related_name='+')
    is_active = models.BooleanField(default=False)

    @property
    def days_to_payday_left(self):
        return abs((self.payday_date-datetime.datetime.today().date()).days)

    @property
    def money_per_day(self):
        return self.current_money / self.days_to_payday_left

    def __str__(self):
        return "%s %s" % (self.id, self.user.email)


# class Category(models.Model):
#     name = models.CharField(max_length=255)
#     created_by = models.ForeignKey(
#         'accounts.Profile', on_delete=models.CASCADE, related_name='categories')

#     class Meta:
#         verbose_name_plural = "Categories"

#     def __str__(self):
#         return self.name


# class Cheque(models.Model):
#     created_by = models.ForeignKey(
#         'accounts.Profile', on_delete=models.CASCADE, related_name='cheques')
#     category = models.ForeignKey(
#         'expenses.Category', on_delete=models.CASCADE, related_name='cheques')
#     amount = models.FloatField(default=0)
