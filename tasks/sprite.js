// const gulp = require('gulp');
// const { reload } = require('browser-sync');
// const notify = require('gulp-notify');
// const plumber = require('gulp-plumber');
// // const sprite = require('gulp-svg-sprite');
// const svgSymbols = require('gulp-svg-symbols')
// const path = require('path');
//
// const config = require('../config');
//
// gulp.task('sprite', () =>
//   gulp
//     .src(path.join(config.root.dev, config.sprite.dev, '*/*.svg'))
//     .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
//     .pipe(svgSymbols())
//     .pipe(gulp.dest(path.join(config.root.dev, config.sprite.dev)))
//     .pipe(reload({ stream: true })));
