var gulp=require('gulp');
var gulpHtml=require('gulp-minify-html');
var minicss=require('gulp-clean-css')
var minijs=require("gulp-uglify");
//压缩html文件
gulp.task('htmltask',function(){
	gulp.src('./*.html')
	.pipe(gulpHtml())
	.pipe(gulp.dest('./dist'));
})
//压缩css文件
gulp.task('csstask',function(){
	gulp.src('./css/*.css').pipe(minicss()).pipe(gulp.dest('./dist/css'));
})

//压缩js文件
gulp.task('jstask',function(){
	gulp.src('./js/*.js').pipe(minijs()).pipe(gulp.dest('./dist/js'));
})