from django.shortcuts import render
from django.views import generic
from core.models import Member

class IndexView( generic.TemplateView ) :
    template_name = 'layout/index.html'

class AboutView( generic.ListView ) :
    template_name = 'layout/about.html'
    context_object_name = 'members_list'

    def get_queryset( self ) :
        return Member.objects.all()
