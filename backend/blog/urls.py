from django.urls import path
from . import views

urlpatterns = [
    path('', views.BlogList.as_view(), name='blog-list'),
    path('<int:pk>/', views.BlogDetail.as_view(), name='blog-detail'),
    path('create/', views.BlogCreate.as_view(), name='blog-create'),
    path('<int:pk>/update/', views.BlogUpdateDestroy.as_view(), name='blog-update'),
    path('<int:pk>/delete/', views.BlogUpdateDestroy.as_view(), name='blog-delete'),
    path('user/', views.UserBlogList.as_view(), name='user-blog-list'),
]