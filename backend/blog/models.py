from django.db import models

from user_system.models import UserAccount

class Blog(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='blogs')

    def __str__(self):
        return self.title