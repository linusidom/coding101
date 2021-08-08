from rest_framework.generics import GenericAPIView, RetrieveAPIView
from rest_framework import permissions
from rest_framework.response import Response
from knox.models import AuthToken
from accounts.api.serializer import UserSerializer, RegisterSerializer, LoginSerializer

# Register API
class RegisterAPI(GenericAPIView):
    serializer_class = RegisterSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


class LoginAPI(GenericAPIView):
    serializer_class = LoginSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        print('Data', serializer, request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validate(request.data)
        _,token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })
    
    
# Protected Route that needs a valid token
class UserAPI(RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
    