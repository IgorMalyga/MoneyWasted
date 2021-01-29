from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)
    created_by = models.ForeignKey(
        'accounts.Profile', on_delete=models.CASCADE, related_name='categories')

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Cheque(models.Model):
    created_by = models.ForeignKey(
        'accounts.Profile', on_delete=models.CASCADE, related_name='cheques')
    category = models.ForeignKey(
        'expenses.Category', on_delete=models.CASCADE, related_name='cheques')
    amount = models.FloatField(default=0)
