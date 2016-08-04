/**
 * Created by 1mango01 on 16/8/4.
 */
'use strict';

/*
 * 监控文件
 */
var config = require('./config');
var path = require('path');
var gulp = require('gulp');
var glp = require('gulp-load-plugins')({
    pattern: [
        'gulp-*',
        'browser-sync'
    ]
});

gulp.task('reload:js', function () {
    return gulp.src([
        path.join(config.paths.tmp, '/js/**/*.js')
    ])
        .pipe(glp.browserSync.reload({stream: true}));
});

gulp.task('reloadScripts', function (callBack) {
    glp.sequence('inject', 'reload:js')(callBack);
});

//监控
gulp.task('watch', function () {
    //监控js
    gulp.watch([path.join(config.paths.www, '/js/**/*.js')], function () {
        gulp.start('reloadScripts');
    });
});