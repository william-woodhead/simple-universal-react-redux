import reduce from 'lodash/reduce';

export default function prefixer(types, prefix) {
  return reduce(types, (result, value, key) => {
    result[key] = `${prefix}/${key}`; // eslint-disable-line no-param-reassign
    return result;
  }, {});
}
