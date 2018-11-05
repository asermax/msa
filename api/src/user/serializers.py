from django.contrib import auth
from rest_framework import serializers
from social_django import utils as social_utils


class SessionSerializer(serializers.Serializer):
    code = serializers.CharField()

    def validate(self, data):
        # validate the user against the social backend
        social_strategy = social_utils.load_strategy()
        backend = social_utils.load_backend(social_strategy, 'google-oauth2', None)
        backend.data = data
        backend.redirect_uri = social_strategy.get_setting(
            'SOCIAL_AUTH_GOOGLE_OAUTH2_REDIRECT_URI'
        )
        params = backend.auth_complete_params()
        response = backend.request_access_token(
            backend.access_token_url(),
            data=params,
            headers=backend.auth_headers(),
            auth=backend.auth_complete_credentials(),
            method=backend.ACCESS_TOKEN_METHOD
        )
        backend.process_error(response)
        user = backend.do_auth(response['access_token'], response=response)

        if not user:
            raise serializers.ValidationError('bad token')

        # return the user as the validated data
        return {'user': user}

    def create(self, validated_data):
        request = self.context['request']
        user = validated_data['user']

        # login the user
        auth.login(request, user)

        # return the user
        return user

    def to_representation(self, instance):
        # the instance of this serializer is actually an user (once it got created)
        return UserSerializer(instance).data


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = auth.get_user_model()
        fields = ('id', 'email')
