'use strict';

module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            open: false,
            server: './build',
            notify: false
        });
    $.browserSync.watch('build', $.browserSync.reload);
    });
};