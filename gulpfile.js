const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// compile scss to css
function style() {
//1 where is my scss file
  return gulp.src('./scss/**/*.scss')
  // 2 pass that file through the sass compiler
  .pipe(sass().on('error', sass.logError))
 // 3 where do I save the compiled CSS?
  .pipe(gulp.dest('./css'))
// stream changes to all browser
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    watch: true,
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}


exports.style = style;
exports.watch = watch;
