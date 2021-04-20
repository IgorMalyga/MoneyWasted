from rest_framework import serializers

from .models import Wallet, Currency


class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = ('id', 'code')


class WalletSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True, required=False)
    currency = CurrencySerializer()

    class Meta:
        model = Wallet
        fields = ('__all__')

    def create(self, validated_data):
        if 'user' not in validated_data:
            validated_data['user'] = self.context['request'].user

        return super(WalletSerializer, self).create(validated_data)
