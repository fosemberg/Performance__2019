const gulp = require('gulp');
const inlineCss = require('gulp-inline-css');

gulp.task('default', function() {
  return gulp.src('./src/index.html')
    .pipe(inlineCss())
    .pipe(gulp.dest('build/'));
});