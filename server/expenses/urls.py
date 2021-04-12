from django.urls import path

from .views import WalletsList, CurrenciesList

urlpatterns = [
    path('wallets/', WalletsList.as_view()),
    path('currencies/', CurrenciesList.as_view())
]
