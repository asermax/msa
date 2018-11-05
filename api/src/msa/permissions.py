from rest_framework import permissions


class IsAuthenticatedOrCreateOnly(permissions.BasePermission):
    """ Allows anyone to create instances but only logged in users can view and edit them. """

    def has_permission(self, request, view):
        return (
            request.method == 'POST' or
            request.user and
            request.user.is_authenticated
        )
