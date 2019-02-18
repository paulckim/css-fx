const { src, task, dest, parallel } = require("gulp");
const babel = require("gulp-babel");

const TransformTaskName = `transform-task`;
const PackageTaskName = `package-task`;
const components = [
  "Card",
  "Container",
  "SplitCard"
];
const tasks = [];
const transformTasks = components.map(component => `${TransformTaskName}<${component}>`);
const cssPkgTasks = components.map(component => `${component}-CSS-Package`);
components.forEach(component => {
  const jsxTask = `transform-task [jsx] [${component}]`;
  const cssTask = `package-task [css] [${component}]`;
  tasks.push(jsxTask);
  tasks.push(cssTask);

  const destDir = `dist/${component}`;
  task(jsxTask, () => {
    return src(`src/${component}/**/*.js`)
      .pipe(babel({
        plugins: [ "@babel/plugin-transform-react-jsx" ]
      }))
      .pipe(dest(destDir));
  });
  task(cssTask, () => {
    return src(`src/${component}/**/*.css`)
      .pipe(dest(destDir));
  });
});

task("default", parallel(...tasks));
