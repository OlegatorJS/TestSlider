var gulp = require('gulp'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create();


gulp.task('sass', function() {
  return gulp.src('src/sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});



gulp.task('imagemin', () =>
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream())
);


gulp.task('copyHTML', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});


gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});



gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: 'dist'
  });

  gulp.watch('src/sass/*.sass', ['sass']);
  gulp.watch('src/img/*', ['imagemin']);
  gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('dist/*.html').on('change', browserSync.reload);
});



gulp.task('default', ['imagemin', 'copyHTML', 'js', 'serve']);
