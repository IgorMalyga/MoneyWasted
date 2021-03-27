from django.core.management.base import BaseCommand, CommandError
from moneyed import CURRENCIES

from expenses.models import Currency


class Command(BaseCommand):
    help = 'Create currency objects in db from moneyed package'

    def handle(self, *args, **options):
        for currency in CURRENCIES.values():
            Currency.objects.create(
                name=currency.name, code=currency.code, countries=currency.countries)

        self.stdout.write(self.style.SUCCESS(
            "CURRENCIES SUCCESFULLY LOADED"))
