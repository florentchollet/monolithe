var gulp = require('gulp'),
	gulp-util = require('gulp-util'),
	less = require('gulp-less'),
	recess = require('gulp-recess'),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch'),
	paths = {
		scripts: 'path/to/scripts',
		styles: 'path/to/styles',
		images: 'path/to/img'
	};


// Uglify and concat js
gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('path/to/dest/scripts'));
});


// Compile, minify and concat css
gulp.task('styles', function() {
	return gulp.src(paths.styles)
		.pipe(less())	
		.pipe(minifyCSS())
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('path/to/dest/styles'));
});


// Return the task when a file changes
gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
});


// The default task
gulp.task('default', [
	'scripts',
	'styles',
	'watch'
]);