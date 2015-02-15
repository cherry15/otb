var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass = require('gulp-ruby-sass'),
  server = require('gulp-server-livereload'),
  bower_files = require('bower-files')(),
  inject = require('gulp-inject'),
  del = require('del'),
  karma = require('gulp-karma'),
  jasmine = require('gulp-jasmine');
  // source and destination folders
  src = 'app/',
  dest = 'dist/';

gulp.task('bower', function () {
    gulp.src(bower_files.ext('js').files)
      .pipe(concat('bower.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(dest));
});

gulp.task('distServer', function () {
    gulp.src(dest)
      .pipe(server({
          livereload: true,
          log: 'debug',
          open: true
      }));
});

gulp.task('localServer', function () {
    gulp.src(src)
      .pipe(server({
          livereload: true,
          log: 'debug',
          open: true
      }));
});

gulp.task('sass-local', function () {
    return sass(src + 'app.scss', {style: 'expanded'})
      .pipe(gulp.dest(src));
});

// Concatenate and compress JS Files
// exclude any spec (test) files
gulp.task('scripts', function () {
    return gulp.src([
        src + 'app.js',
        src + 'components/**/*.js',
        src + '**/*.js',
        '!' + src + 'components/**/*.spec.js',
        '!' + src + '**/*.spec.js'
    ])
      .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest(dest));
});

//Concatenate and compress sass files
gulp.task('sass', function () {
    return sass(src + 'app.scss', {style: 'compressed'})
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(dest));
});
// Delete everything in destination folder
/*gulp.task('clean', function (cb) {
  del([
    dest
  ], cb);
});*/
// Copy all the files
//gulp.task('copy', function () {return gulp.src([src + '**/*'], { base: src }).pipe(gulp.dest(dest));});

gulp.task('build-dist', ['scripts', 'sass', 'bower']);
gulp.task('serve-dist', ['distServer']);
gulp.task('serve', ['sass-local', 'localServer']);
