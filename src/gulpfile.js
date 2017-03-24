var gulp = require( 'gulp' ),
    babel = require( 'babelify' ),
    browserify = require( 'browserify' ),
    clean = require( 'gulp-clean' ),
    plumber = require( 'gulp-clean' ),
    sass = require( 'gulp-sass' ),
    source = require('vinyl-source-stream'),
    source_maps = require( 'gulp-sourcemaps' );

var config = require( './app_config.js' );

// Assembly
gulp.task( 'assemble', [ 'assemble:html', 'assemble:styles', 'assemble:scripts', 'assemble:fonts' ] );

gulp.task( 'assemble:html', function(){
  gulp.src( config.markup.src_files )
      .pipe( gulp.dest( config.markup.dest ) );
} );

gulp.task( 'assemble:scripts', function(){
  return browserify( { entries : config.scripts.src + '/application.js' } )
        .transform(babel, { presets : [ 'es2015' ], plugins : [ 'transform-class-properties' ] } )
        .bundle()
        .pipe( source( 'bundle.js' ) )
        .pipe( gulp.dest( config.scripts.dest ) );
} );

gulp.task( 'assemble:styles', function(){
  return  gulp.src( config.styles.src + '/layout.scss' )
      				.pipe( source_maps.init() )
      				.pipe( sass( { outputStyle : 'compressed' } ) )
      				.pipe( source_maps.write( '.' ) )
      				.pipe( gulp.dest( config.styles.dest ) );
} );

gulp.task( 'assemble:fonts', function(){
  return  gulp.src( config.fonts.src_files )
              .pipe( gulp.dest( config.fonts.dest ) );
} );

// Watch
gulp.task( 'watch', function(){
  gulp.watch( config.markup.src_files, [ 'assemble:html' ] );
  gulp.watch( config.styles.src_files, [ 'assemble:styles' ] );
  gulp.watch( config.scripts.src_files, [ 'assemble:scripts' ] );
} );

// Clean
gulp.task( 'clean', function(){
	return 	gulp.src( [ config.static, config.templates ], { read: false } )
				      .pipe( clean( { force : true } ) );
} );

gulp.task( 'default', [ 'clean' ], function(){
  gulp.start( 'assemble' );
  gulp.start( 'watch' );
} );
