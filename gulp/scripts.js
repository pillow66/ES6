/**
 * Created by 1mango01 on 16/8/4.
 */
'use strict';

/*
 * 处理网站业务逻辑js代码
 */
var config = require('./config');
var path = require('path');
var gulp = require('gulp');
var glp = require('gulp-load-plugins')();

gulp.task('scripts', function () {
    return gulp.src(path.join(config.paths.www, 'js/**/*.js'))
        //处理es6代码
        .pipe(glp.babel({
            presets: ['es2015']
        }))
        //写入tmp/scripts
        .pipe(gulp.dest(path.join(config.paths.tmp, '/js')));
});