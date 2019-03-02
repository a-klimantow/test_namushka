'use strict';

module.exports = function() {
  $.gulp.task('img', function() {
    return $.gulp.src('./source/img/**/*')
    .pipe($.gp.imagemin())
    .pipe($.gulp.dest('./build/img'));
  });
}