const gulp = require('gulp');
const inlineCss = require('gulp-inline-css');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const pipeline = require('readable-stream').pipeline;
const htmlmin = require('gulp-htmlmin');
const strip = require('gulp-strip-comments');
const inline = require('gulp-inline');

const destFolder = 'docs';

gulp.task('html', () =>
  gulp.src('./src/index.html')
    .pipe(strip())
    // .pipe(inline({
      // base: 'public/',
      // js: uglify,
      // css: [cleanCSS],
      // disabledTypes: ['svg', 'img', 'js'], // Only inline css files
      // ignore: ['default.css', 'main.css']
    // }))
    // .pipe(inlineCss())
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(`${destFolder}/`))
);

gulp.task('css', () =>
  gulp.src('./css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${destFolder}/css/`))
);

gulp.task('js', () =>
  pipeline(
    gulp.src('./js/*.js'),
    uglify(),
    gulp.dest(`${destFolder}/js/`)
  )
);
