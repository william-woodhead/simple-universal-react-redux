const path = require('path');
const loaderUtils = require('loader-utils');

module.exports = (data, file) => {
  const { ext, name } = path.parse(file);
  if (ext === '.css') return data;
  return loaderUtils.interpolateName({}, `${name}__${data}___[hash:base64:5]`, {
    content: `${path.relative(path.resolve(__dirname, '..'), file)}+${data}`
  });
};
