// https://medium.com/devux/minifying-your-css-js-html-files-using-gulp-2113d7fcbd16
'use strict';

const gulp = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;


gulp.task('copyall', () => {
    return gulp.src('./src/**/*').pipe(gulp.dest('./dist'));
});

gulp.task('styles', () => {
    return gulp.src('./src/**/*.css')
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('scripts', () => {
    return gulp.src('./src/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('pages', () => {
    return gulp.src(['./src/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean', () => del(['dist']));

gulp.task('default', gulp.series('clean', 'copyall', gulp.parallel('styles', 'scripts', 'pages')));

