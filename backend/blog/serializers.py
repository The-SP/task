from rest_framework import serializers

from .models import Blog


class BlogSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = "__all__"

    def get_author_name(self, obj):
        return obj.author.name


# HiddenField is used to hide the `author` field in the serializer while still setting the current user as the default value. It will still be passed to the serializer and saved to the database, but it will not be displayed to the user.
class CreateBlogSerializer(serializers.ModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Blog
        fields = ['title', 'content', 'author']
