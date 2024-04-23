from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Blog
from .serializers import BlogSerializer, CreateBlogSerializer
from .permissions import IsAuthor


class BlogList(generics.ListAPIView):
    queryset = Blog.objects.all().order_by("-date")
    serializer_class = BlogSerializer


class BlogDetail(generics.RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class BlogCreate(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Blog.objects.all()
    serializer_class = CreateBlogSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# Allow author to update or delete
class BlogUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated, IsAuthor]
    queryset = Blog.objects.all()
    serializer_class = CreateBlogSerializer

    def perform_update(self, serializer):
        serializer.save(author=self.request.user)
