/**
 * Created by Administrator on 2017/4/9.
 */
var gulp = require('gulp');
var rev = require('gulp-rev'); // 通过将内容哈希附加到文件名
var revReplace = require('gulp-rev-replace'); // 重写由gulp-rev重命名的文件名
var useref = require('gulp-useref'); // 它可以处理文件连接但不能缩小。然后将文件传送到流
// 通过使用glob模式进行过滤，使您能够处理原始文件的子集。完成后，想要所有的原始文件，你只需使用restore流
var filter = require('gulp-filter');
var uglify = require('gulp-uglify'); // 使用UglifyJS2来缩小JavaScript
var csso = require('gulp-csso'); // 使用CSSO简化 CSS

gulp.task('default', function() {
    var jsFilter = filter('**/*.js', { restore: true });
    var cssFilter = filter('**/*.css', { restore: true });
    var indexHtmlFilter = filter(['**/*', '!**/index.html'], { restore: true });

    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));
});
