from django.conf.urls import url, include
from layout.views import IndexView, AboutView

urlpatterns = [
    url( r'^$', IndexView.as_view(), name = 'index' ),
    url( r'^about/$', AboutView.as_view(), name = 'about' )
]
