const gulp = require('gulp');

const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');

const paths = {
    src: {
        js: 'src/js/**/*.{js,jsx}',
        sass: 'src/sass/**/*.scss'
    },
    build: {
        js: 'build/js',
        css: 'build/css'
    }
};

gulp.task('react', function(){
    return gulp.src(paths.src.js)
        .pipe(sourcemaps.init())
        .pipe(babel({
            compact: false, presets: ['react']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.build.js));
});

gulp.task('sass', function(){
    return gulp.src(paths.src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.build.css));
});

gulp.task('default', ['react', 'sass'], function(){
    gulp.watch(paths.src.js, ['react']);
    gulp.watch(paths.src.sass, ['sass']);
});
