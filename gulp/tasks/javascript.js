'use strict';

module.exports = function() {
  $.gulp.task('javascript', function() {
    return $.gulp.src('./source/js/**/*')
    .pipe($.gulp.dest('./build/js'));
  });
}