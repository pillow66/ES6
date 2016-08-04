/**
 * Created by 1mango01 on 16/6/24.
 */
'use strict';

/*
 * 启动服务
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

gulp.task('browser', function () {
    browserSyncInit([config.paths.tmp]);
});

//启动浏览器
function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var server = {
        baseDir: baseDir
    };

    /*
     * You can add a proxy to your backend by uncommenting the line bellow.
     * You just have to configure a context which will we redirected and the target url.
     * Example: $http.get('/users') requests will be automatically proxified.
     *
     * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.0.5/README.md
     */
    // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', proxyHost: 'jsonplaceholder.typicode.com'});

    glp.browserSync.instance = glp.browserSync.init({
        startPath: '/',
        server: server,
        browser: browser,
        port: 8000,
        ui: {
            port: 8001
        },
        notify: false
    });
};

gulp.task('serve', glp.sequence('clean:tmp', 'inject', ['browser', 'watch']));