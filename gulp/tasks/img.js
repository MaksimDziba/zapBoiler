module.exports = function() {
  $.gulp.task('img:dev', () => {
    return $.gulp
      .src('./dev/static/img/**/*.{png,jpg,gif}')
      .pipe($.gulp.dest('./build/static/img/'));
  });

  $.gulp.task('img:build', () => {
    return $.gulp
      .src('./dev/static/img/**/*.{png,jpg,gif}')
      .pipe($.gp.tinypng(GPP87zhhWcjZ3aId5IDMZ7FwIN9yqqyg))
      .pipe($.gulp.dest('./build/static/img/'));
  });

  $.gulp.task('svg:copy', () => {
    return $.gulp
      .src('./dev/static/img/general/*.svg')
      .pipe($.gulp.dest('./build/static/img/general/'));
  });
};
