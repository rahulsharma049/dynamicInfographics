var fs = ('graceful-fs'),
	minimatch = require("minimatch"),
	gulp = require('gulp'),
    sass = require('gulp-sass'),
	react = require('react'),
	cssClean = require('gulp-clean-css'),
	minify = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	rename = require("gulp-rename"),
	watch = require('gulp-watch');
	
var sourceLess = '';
var targetCss = 'style';
/*var headerFooter = [ targetCss+'navigation.css',
					 targetCss+'footer.css'
					 
					]*/
	
gulp.task('sass', function () {
  return gulp.src(sourceLess+'./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(targetCss));
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
gulp.task('default', ['sass','watch']);