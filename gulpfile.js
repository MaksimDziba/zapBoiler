global.$ = {
  path: {
    task: require('./gulp/paths/tasks.js'),
  },
  gulp: require('gulp'),
  del: require('del'),
  fs: require('fs'),
  browserSync: require('browser-sync').create(),
  smartgrid: require('smart-grid'),
  gp: require('gulp-load-plugins')(),
};
$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task(
  'dev',
  $.gulp.series(
    'clean',
    $.gulp.parallel(
      'sass:dev',
      'pug',
      'babel',
      'libsJS:dev',
      'js:copy',
      'svg',
      'img:dev',
      'fonts',
      'svg:copy',
    ),
  ),
);

$.gulp.task(
  'build',
  $.gulp.series(
    'clean',
    $.gulp.parallel(
      'sass:build',
      'pug',
      'babel',
      'libsJS:build',
      'js:copy',
      'svg',
      'img:build',
      'fonts',
      'svg:copy',
    ),
  ),
);

// create responsive grid with breakpoints 1440, 1200, 992, 768, 544, 320 px
$.gulp.task('smartgrid');

$.gulp.task('default', $.gulp.series('dev', $.gulp.parallel('watch', 'serve')));
