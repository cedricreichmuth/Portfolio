var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");

gulp.task("sass", function() {
  return gulp
  .src("./sass/*.scss")
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ["last 2 versions"]
  }))
  .pipe(gulp.dest("./build/css"))
  .pipe(cssnano())
  .pipe(rename({
    extname: ".min.css"
  }))
  .pipe(gulp.dest("./build/css"))
});
gulp.task("scripts", function() {
  return gulp
  .src("./js/*.js")
  .pipe(plumber())
  .pipe(uglify())
  .pipe(rename({
    extname: ".min.js"
  }))
  .pipe(gulp.dest("./build/js"))
});
gulp.task('watch', function() {
  gulp.watch('js/*.js', gulp.series('scripts'));
  gulp.watch('sass/*.scss', gulp.series('sass'));
});
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
});
gulp.watch(['build/css/*.css', 'build/js/*.js']).on('change', browserSync.reload);
});
gulp.task('default', gulp.parallel('browser-sync', 'watch'));
