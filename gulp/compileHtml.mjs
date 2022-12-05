import gulp from 'gulp';
import notify from 'gulp-notify';
import replace from 'gulp-replace';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import fileinclude from 'gulp-file-include';
import htmlbeautify from 'gulp-html-beautify';
import typograf from 'gulp-typograf';
import imgToPicture from 'gulp-html-php-picture';
import versionNumber from 'gulp-version-number';

const compileHtml = () => {
  return gulp.src(['source/html/*.html'])
      .pipe(plumber({
        errorHandler(err) {
          notify.onError({
            title: 'HTML Error',
            message: '<%= error.message %>',
          })(err);
        },
      }))
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@root',
        context: { // глобальные переменные для include
          test: 'text',
        },
      }))
      .pipe(replace(/@img\//g, 'img/'))
      .pipe(imgToPicture({
        imgFolder: './build/img',
        // loger: false,
        // sortBySize: false
      }))
      .pipe(htmlbeautify({
        'indent_size': 2,
        'preserve_newlines': true,
        'max_preserve_newlines': 0,
        'wrap_attributes': 'auto',
      }))
      .pipe(typograf({locale: ['ru', 'en-US']}))
      .pipe(gulpif(app.isProd, versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': [
            'css',
            'js'
          ],
          'output': {
            'file': 'version.json',
          },
        },
      })))
      .pipe(gulp.dest('build'));
};

export default compileHtml;
