/**
 * @file gulpfile.js
 * @author Paul Cheor Kim
 * @license MIT
 * @fileoverview Gulpfile script for building, minifying, 
 * and packaging jsx and css.
 */
const { src, task, dest, parallel } = require("gulp");
const babel = require("gulp-babel");
const minifyCss = require('gulp-clean-css');

const tasks = [];
/**
 * Jsx Tranform Tasks
 */
[
  "SplitCard",
  "styles"
].forEach(component => {
  const jsxTask = `[transform-task] [jsx] [${component}]`;
  tasks.push(jsxTask);
  const destDir = `dist/${component}`;
  task(jsxTask, () => {
    return src(`src/${component}/**/*.js`)
      .pipe(babel({
        plugins: [ "@babel/plugin-transform-react-jsx" ]
      }))
      .pipe(dest(destDir));
  });
});
/**
 * CSS minification Gulp Tasks
 */
[
  "SplitCard",
  "styles"
].forEach(styleDir => {
  const minifyTask = `[package-task] [css] [${styleDir}]`;
  tasks.push(minifyTask);
  const destDir = `dist/${styleDir}`;
  task(minifyTask, () => {
    return src(`src/${styleDir}/**/*.css`)
      .pipe(minifyCss({
        compatibility: "ie8"
      }))
      .pipe(dest(destDir));
  });
});

task("default", parallel(...tasks));
