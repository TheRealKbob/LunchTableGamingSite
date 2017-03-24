from django.contrib import admin
from core.models import Member

@admin.register( Member )
class MemberAdmin( admin.ModelAdmin ) :
    fieldsets = (
        ( None, {
            'fields' : (
                ( 'first_name', 'last_name' ),
                'nickname',
                'title',
                'description',
                ( 'profile_image', 'character_image' )
            )
        } )
    ),
    list_display = ( 'first_name', 'last_name', 'title' )
