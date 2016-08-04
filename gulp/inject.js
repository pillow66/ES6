/**
 * Created by 1mango01 on 16/6/25.
 */
'use strict';

/*
 * 注入文件到index.html
 */
var config = require('./config');
var path = require('path');
var gulp = require('gulp');
var glp = require('gulp-load-plugins')();

//将css,js(bower和业务逻辑)注入index.html
gulp.task('inject', ['scripts'], function () {
  var scripts = gulp.src([
    path.join(config.paths.tmp, 'js/**/*.js')
  ]);
  var options = {
    ignorePath: [path.join(config.paths.tmp)],
    addRootSlash: false
  };

  return gulp.src([path.join(config.paths.www, '/index.html')])
    //注入其他功能模块
    .pipe(glp.inject(scripts, options))
    //写入指定文件
    .pipe(gulp.dest(path.join(config.paths.tmp)));
});