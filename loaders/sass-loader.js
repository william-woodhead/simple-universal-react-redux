const path = require('path');
const sass = require('node-sass');

// this module stop .scss files breaking the server side render
// this file is referenced in .babelrc
module.exports = (data, file) => {
  if (path.extname(file) === '.css') return data;
  try {
    return sass.renderSync({ data, file }).css.toString('utf8');
  } catch (e) {
    console.error(e);
  }
};
