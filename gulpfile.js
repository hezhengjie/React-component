/**
 * Created by hezhengjie on 2016/6/11.
 */
var gulp = require('gulp'),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify"),
    minifyCss = require("gulp-minify-css"),
    less = require("gulp-less"),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task("babel", function () {
    return gulp.src("app/app.js")
        .pipe(babel({
        presets: ['es2015',"react"]
    })).pipe(gulp.dest("app/app_es6"));
});
gulp.task('clean', function(cb) {
    del(['dist/css/*', 'dist/js/*'], cb)
});
gulp.task('js', function () {
    return gulp.src('assets/js/*.js') // 要压缩的js文件
        .pipe(babel({presets: ['es2015',"react"]}))
//        .pipe(uglify())  //使用uglify进行压缩：
        .pipe(gulp.dest('dist/js')); //压缩后的路径
});
gulp.task('css', function () {
    return gulp.src('assets/less/*.less')
        .pipe(less())//编译less
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))//添加css前缀
        .pipe(gulp.dest('assets/css'))
        .pipe(minifyCss()) //压缩css
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['clean','js']);
    gulp.watch('assets/less/*.less', ['clean','css']);
});


gulp.task('default', ['clean','css','js','babel','watch']);
gulp.task('noapp', ['clean','css','js']);