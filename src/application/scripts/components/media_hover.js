export default class MediaHover
{
  constructor()
  {
    $( '.media' ).hover( this.hoverIn, this.hoverOut );
  }

  hoverIn( e )
  {
    var target = $( this ).find( '.media-hover-image' );
    if( !target.hasClass( 'active' ) )
      target.addClass( 'active' );
  }

  hoverOut( e )
  {
    var target = $( this ).find( '.media-hover-image' );
    if( target.hasClass( 'active' ) )
      target.removeClass( 'active' );
  }
}
