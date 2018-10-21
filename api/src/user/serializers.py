from django.contrib import auth
from rest_framework import serializers
from social_django import utils as social_utils


class SessionSerializer(serializers.Serializer):
    auth_token = serializers.CharField()

    def validate(self, data):
        # validate the user against the social backend
        social_strategy = social_utils.load_strategy()
        backend = social_utils.load_backend(social_strategy, 'google-oauth2', None)
        user = backend.do_auth(data['auth_token'])

        if not user:
            raise serializers.ValidationError('bad token')

        # return the user as the validated data
        return {'user': user}

    def create(self, validated_data):
        request = self.context['request']
        user = validated_data['user']

        # login the user
        auth.login(request, user)

        # return the user data serialized
        return UserSerializer(user).data


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = auth.get_user_model()
        fields = ('id', 'email')
