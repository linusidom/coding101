from rest_framework import serializers
from django.contrib.auth import authenticate, get_user_model

User = get_user_model()

# User Serializer - Verify user - will be used for each request we make to the api to verify if the user is real or not
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, data):
        user = User.objects.create_user(**data)
        return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, validated_data):
        user = authenticate(**validated_data)
        if user:
            return user
        raise serializers.ValidationError({"custom_message":"Custom Message - Incorrect Login - Change this in production"})