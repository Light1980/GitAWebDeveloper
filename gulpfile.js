var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssnested = require('postcss-nested'),
cssImport = require('postcss-import')

gulp.task('default', function() {
	console.log("Hi, here is your first gulp task.")
})

gulp.task('html', function() {
	console.log('Ok, here is the html task.')
})

gulp.task('styles', function() {
	return gulp.src('app/assets/styles/styles.css')
		.pipe(postcss([cssImport, autoprefixer,cssvars, cssnested]))
		.pipe(gulp.dest('app/temp/styles'))
})

// gulp-watch

gulp.task('watch', function() {
	watch('app/index.html', function () {
		gulp.start('html');
	})

	watch('app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	})
})