var appID = '/layout';

var src = 'application',
    dest = '../django-env';

var static = dest + appID + '/static' + appID,
    templates = dest + appID + '/templates' + appID;

var markup = '/markup',
    scripts = '/scripts',
    styles = '/styles',
    fonts = '/fonts';

module.exports = {
  src : src,
  dest : dest,

  static : static,
  templates : templates,

  markup : {
    src : src + markup,
    src_files : src + markup + '/**/*.html',
    dest : templates
  },

  scripts : {
    src : src + scripts,
    src_files : src + scripts + '/**/*.{js,jsx}',
    dest : static + scripts
  },

  styles : {
    src : src + styles,
    src_files : src + styles + '/**/*.{scss,css}',
    dest : static + styles
  },

  fonts : {
    src : src + fonts,
    src_files : src + fonts + '/**/*.{eot,svg,ttf,woff,woff2,otf}',
    dest : static + fonts
  }
}
