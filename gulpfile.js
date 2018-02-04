var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress'),
	clean = require('gulp-clean'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin'),
	htmlmin = require('gulp-htmlmin'),
	autoprefixer = require('gulp-autoprefixer'),
	useref = require('gulp-useref'),
	inlineSource = require('gulp-inline-source');

gulp.task('default', ['copy'], function () {
	gulp.start('build-img', 'build-js', 'build-css', 'build-html');
});

gulp.task('copy', ['clean'], function () {
	return gulp.src([
			'dev/**/*',
			'!dev/css/**'
		])
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
	return gulp.src('dist')
		.pipe(clean());
});

gulp.task('build-img', function () {
	gulp.src('dev/img/**/*')
		.pipe(imagemin([
			imagemin.gifsicle(),
			imageminJpegRecompress({
				loops: 6,
				min: 25,
				max: 75,
				quality: 'low'
			}),
			imagemin.optipng(),
			imagemin.svgo()
		]))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('build-css', function () {
	gulp.src('dev/css/*.css')
		.pipe(cssmin())
		.pipe(autoprefixer())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('build-js', function () {
	gulp.src('dev/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('build-html', function () {
	return gulp.src('dev/*.php')
		.pipe(useref())
		.pipe(inlineSource())
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dist'));
});