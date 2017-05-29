/**
 * Created by Administrator on 2017/4/9.
 */
var gulp = require('gulp');
var rev = require('gulp-rev'); // ͨ�������ݹ�ϣ���ӵ��ļ���
var revReplace = require('gulp-rev-replace'); // ��д��gulp-rev���������ļ���
var useref = require('gulp-useref'); // �����Դ����ļ����ӵ�������С��Ȼ���ļ����͵���
// ͨ��ʹ��globģʽ���й��ˣ�ʹ���ܹ�����ԭʼ�ļ����Ӽ�����ɺ���Ҫ���е�ԭʼ�ļ�����ֻ��ʹ��restore��
var filter = require('gulp-filter');
var uglify = require('gulp-uglify'); // ʹ��UglifyJS2����СJavaScript
var csso = require('gulp-csso'); // ʹ��CSSO�� CSS

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
