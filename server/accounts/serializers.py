from rest_framework import serializers
from rest_framework_jwt.settings import api_settings

from expenses.serializers import WalletSerializer
from .models import User


class UserSerializer(serializers.ModelSerializer):
    active_wallet = WalletSerializer(source='get_active_wallet')

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name',
                  'last_name', 'email', 'active_wallet']

    def validate(self, data):
        if self.initial_data['password1'] == self.initial_data['password2']:
            data['password'] = self.initial_data['password1']
            return data
        else:
            raise serializers.ValidationError("Password didn't match")

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class UserSignUp(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')
