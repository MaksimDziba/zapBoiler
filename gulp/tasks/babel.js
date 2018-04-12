module.exports = function() {
  $.gulp.task('babel', () => {
    return $.gulp
      .src('./dev/static/js/main.js')
      .pipe($.gp.babel({ presets: ['env', 'stage-3'] }))
      .on(
        'error',
        $.gp.notify.onError(function(error) {
          return {
            title: 'Babel',
            message: error.message,
          };
        }),
      )
      .pipe($.gp.concat('main.min.js'))
      .pipe($.gp.uglifyjs())
      .pipe($.gulp.dest('./build/static/js/'))
      .on('end', $.browserSync.reload);
  });
};
