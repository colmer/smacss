var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	runSequence = require('run-sequence'),
	rename = require('gulp-rename'),
	pug = require('gulp-pug'),
	browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src([
        './dev/sass/index.sass'
	])
	.pipe(sass().on('error', sass.logError))
	.pipe(rename('main.css'))
	.pipe(gulp.dest('./public'));
});

gulp.task('pug', function(){
	return gulp.src([
        './dev/pug/*.pug'
	])
	.pipe(pug())
	.pipe(gulp.dest('./public'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'pug'], function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("./dev/sass/*.sass", ['sass']);
    gulp.watch("./dev/pug/*.pug", ['pug']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('default', function(callback){
	gutil.log(gutil.colors.green('Start creating package!'));

	runSequence(['sass', 'jade'], callback);
});