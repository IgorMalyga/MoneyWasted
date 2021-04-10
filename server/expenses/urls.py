from django.urls import path

from .views import WalletsList

urlpatterns = [
    path('wallets/', WalletsList.as_view())
]