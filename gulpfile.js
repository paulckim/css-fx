/**
 * @file gulpfile.js
 * @author Paul Cheor Kim
 * @license MIT
 * @fileoverview Gulpfile script for building, minifying, 
 * and packaging jsx and css.
 */
const { src, task, dest, parallel } = require("gulp");
const tsc = require("gulp-typescript");
const { compilerOptions } = require("./tsconfig.json");
const prefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const concat = require("gulp-concat-css");

const SOURCE_DIR = "src";
const DEST_DIR = "dist";

/**
 * .ts Tranform Tasks
 */
const tscTask = `[ts] [/${SOURCE_DIR}]`;
task(tscTask, () => {
  return src(`${SOURCE_DIR}/**/*.ts`)
    .pipe(tsc(compilerOptions))
  .pipe(dest(DEST_DIR));
});
/**
 * .css Regular Transform Task
 */
const outFile = "css-fx.css";
const cssTask = `[css] [${outFile}]`;
task(cssTask, () => {
  return src(`${SOURCE_DIR}/**/*.css`)
    .pipe(prefixer())
      .pipe(concat(outFile))
    .pipe(dest(DEST_DIR));
});
/**
 * .css Minified Transform Task
 */
const outMinFile = "css-fx.min.css";
const cssMinTask = `[css] [${outMinFile}]`;
task(cssMinTask, () => {
  return src(`${SOURCE_DIR}/**/*.css`)
  .pipe(prefixer())
    .pipe(concat(outMinFile))
    .pipe(cssnano())
  .pipe(dest(DEST_DIR));
});

task("default", parallel([
  tscTask, cssTask, cssMinTask
]));
