var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');

gulp.task('build-style', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded',
        }).on('error', sass.logError))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
    gulp.watch(['./sass/**/*.scss'], ['build-style']);
});

gulp.task('default', ['build-style']);
