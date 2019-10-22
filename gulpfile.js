const gulp = require('gulp');
const inlineCss = require('gulp-inline-css');
let cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
  return gulp.src('./src/index.html')
    .pipe(inlineCss())
    .pipe(gulp.dest('./'));
});

gulp.task('css', () =>
  gulp.src('./css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css/'))
);