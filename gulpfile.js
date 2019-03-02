'use strict';

global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    img: require('gulp-imagemin')
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug',
        'img',
        'fonts'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));