/**
 * Created by 1mango01 on 16/8/4.
 */
'use strict';

/*
 * 清除文件
 */
var config = require('./config');
var path = require('path');
var gulp = require('gulp');
var glp = require('gulp-load-plugins')({
    pattern: [
        'del',
        'q'
    ]
});

//清除.tmp
gulp.task('clean:tmp', function () {
    var deferred = glp.q.defer();
    var fileList = [
        path.join(config.paths.tmp, '/')
    ];

    glp.del(fileList).then(function () {
        deferred.resolve();
    }, function () {
        deferred.reject();
    });

    return deferred.promise;
});