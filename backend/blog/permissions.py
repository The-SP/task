from rest_framework import permissions


class IsAuthor(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:  # Safe=GET
            return True

        # Write permissions (POST, PUT, PATCH, DELETE) are only allowed to the author
        return obj.author == request.user
