from rest_framework import routers
from django.urls import path, include
from .views import QuestionnaireViewSet

router = routers.DefaultRouter()
router.register(r'questionnaires', QuestionnaireViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
