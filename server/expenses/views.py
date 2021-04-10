from rest_framework import generics

from .models import Wallet
from .serializers import WalletSerializer

class WalletsList(generics.ListAPIView):
    serializer_class = WalletSerializer

    def get_queryset(self):
        """
            Returns queryset of Wallets of current user.
        """
        return Wallet.objects.filter(user_id=self.request.user.id)