var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	runSequence = require('run-sequence'),
	rename = require('gulp-rename');

gulp.task('sass', function(){
	gulp.src([
        './dev/sass/index.sass'
	])
	.pipe(sass().on('error', sass.logError))
	.pipe(rename('main.css'))
	.pipe(gulp.dest('./public'));
});

gulp.task('default', function(callback){
	gutil.log(gutil.colors.green('Start creating package!'));

	runSequence(['sass'], callback);

	gutil.log(gutil.colors.green('Create package is done!'));
});