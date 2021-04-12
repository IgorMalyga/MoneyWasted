from rest_framework import generics

from .models import Currency, Wallet
from .serializers import WalletSerializer, CurrencySerializer


class WalletsList(generics.ListAPIView):
    serializer_class = WalletSerializer

    def get_queryset(self):
        """
            Returns queryset of Wallets of current user.
        """
        return Wallet.objects.filter(user_id=self.request.user.id)


class CurrenciesList(generics.ListAPIView):
    serializer_class = CurrencySerializer

    def get_queryset(self):
        """
            Returns queryset of currencies for wallets.
        """
        code = self.request.query_params.get('code', '')
        if code:
            return Currency.objects.filter(code__icontains=code)
        return Currency.objects.all()
