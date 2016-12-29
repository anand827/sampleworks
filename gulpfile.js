/*-----------------------------------Gulp configuration-----------------------------------*/
//Variables
const gulp = require('gulp'); //npm install gulp --save-dev
const sass = require('gulp-sass'); //npm install gulp-sass --save-dev
const autoprefixer = require('gulp-autoprefixer'); //npm install gulp-autoprefixer --save-dev
const sourcemaps = require('gulp-sourcemaps'); //npm install gulp-sourcemaps --save-dev
const shorthand = require('gulp-shorthand'); //npm install gulp-shorthand --save-dev
const cleancss = require('gulp-clean-css'); //npm install gulp-clean-css --save-dev
const image = require('gulp-image'); //npm install gulp-image --save-dev
const browserSync = require('browser-sync').create(); //npm install browser-sync gulp --save-dev

//Sass
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(shorthand())
        .pipe(cleancss({ compatibility: '*' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('src/html/css/'));
});
//Image
gulp.task('image', function() {
    gulp.src('src/html/images/**/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10
        }))
        .pipe(gulp.dest('src/html/images/compressed'));
});
//Default
gulp.task('default', function() {
    browserSync.init({
        //proxy: "/",
        server: {
            baseDir: "./src/html/"
        }
    });
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch(['src/html/css/*.css', 'src/html/js/site/*.js', 'src/html/*.html']).on('change', browserSync.reload);
});