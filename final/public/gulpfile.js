var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat')
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');

var jsFiles = 'js/**/*.js',
    jsDest = 'dist/scripts',
    cssFiles = 'style/*.css',
    cssDest = 'dist/style',
    imgDest = '../src/components/img/*';

gulp.task('concat-minify-js', () => {
    return gulp.src(jsFiles) 
        .pipe(plumber())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest)); 
});

gulp.task('concat-minify-css', () => {
    return gulp.src(cssFiles)
    .pipe(plumber())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(cssDest))
    .pipe(rename('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssDest));
});

gulp.task('image-minify', () => {
    return gulp.src(imgDest)
    .pipe(imagemin())
    .pipe(gulp.dest('../src/components/img-min'));
});

gulp.task('default', gulp.series('concat-minify-js', 'concat-minify-css', 'image-minify'));