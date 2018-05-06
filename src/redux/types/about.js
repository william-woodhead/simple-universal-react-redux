import mirror from 'key-mirror';
import reduce from 'lodash/reduce';

const prefix = '@@aboutTypes';

const constants = mirror({
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null
});

export default reduce(constants, (result, value, key) => {
  result[key] = `${prefix}/${value}`;
  return result;
}, {});
