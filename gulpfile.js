const gulp = require('gulp');
const inlineCss = require('gulp-inline-css');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const pipeline = require('readable-stream').pipeline;
const htmlmin = require('gulp-htmlmin');
var strip = require('gulp-strip-comments');


gulp.task('html', () =>
  gulp.src('./src/index.html')
    // .pipe(inlineCss())
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(strip())
    .pipe(gulp.dest('./'))
);

gulp.task('css', () =>
  gulp.src('./css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css/'))
);

gulp.task('js', () =>
  pipeline(
    gulp.src('./js/*.js'),
    uglify(),
    gulp.dest('js/')
  )
);
