const { src, dest, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');

function minifyCSS() {
  return src('src/*.css')
    .pipe(cleanCSS())
    .pipe(dest('dist'));
}

exports.default = series(minifyCSS);
