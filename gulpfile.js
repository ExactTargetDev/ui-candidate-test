var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build-style', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded',
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./assets'));
});

gulp.task('watch', function () {
    gulp.watch(['./src/sass/**/*.scss'], ['build-style']);
});

gulp.task('default', ['build-style']);
