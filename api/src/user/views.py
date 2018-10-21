from django.contrib import auth
from rest_framework import viewsets, mixins, response, status

from . import serializers


class SessionViewSet(viewsets.GenericViewSet,
                     mixins.CreateModelMixin):
    def get_serializer_class(self):
        serializer_class = None

        if self.action == 'list':
            serializer_class = serializers.UserSerializer
        else:
            serializer_class = serializers.SessionSerializer

        return serializer_class

    def list(self, request, *args, **kwargs):
        if request.user.is_anonymous:
            return response.Response(status=status.HTTP_404_NOT_FOUND)
        else:
            serializer = self.get_serializer(request.user)
            return response.Response(serializer.data)
