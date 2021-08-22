from rest_framework import generics, permissions, status
from accounts.api.serializer import UserSerializer, LoginSerializer, RegisterSerializer
from rest_framework.response import Response
from knox.models import AuthToken

# For Logout view
from django.contrib.auth.signals import user_logged_out
from rest_framework.views import APIView
from knox.auth import TokenAuthentication


# Will be used for every reqeust made from React
class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

class RegisterAPIView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "message":"registered",
            "user":UserSerializer(user).data
        })

class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _,token = AuthToken.objects.create(user)
        return Response({
            "message":"authenticated",
            "user": UserSerializer(user).data,
            "token":token
        })





# Custom LogoutView
class LogoutView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        request._auth.delete()
        user_logged_out.send(sender=request.user.__class__,
                             request=request, user=request.user)
        return Response(({"message":"logged_out"}), status=status.HTTP_200_OK)
