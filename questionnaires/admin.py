from django.contrib import admin
from .models import Questionnaire, Question, Choice, Response, Answer


@admin.register(Questionnaire)
class QuestionnaireAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')


class ChoiceInline(admin.TabularInline):
    model = Choice


class QuestionAdmin(admin.ModelAdmin):
    inlines = [ChoiceInline]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Response)
admin.site.register(Answer)
