from django.db import models

class Member( models.Model ) :
    first_name = models.CharField( max_length = 15, default = 'First Name' )
    last_name = models.CharField( max_length = 15, default = 'Last Name' )
    title = models.CharField( blank=True, null=True, max_length = 30 )
    nickname = models.CharField( blank=True, null=True, max_length = 15 )
    description = models.TextField( blank=True, null=True )
    profile_image = models.ImageField( blank=True, null=True )
    character_image = models.ImageField( blank=True, null=True )

    def __str__( self ) :
        return self.first_name
