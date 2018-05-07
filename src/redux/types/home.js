import prefixer from './prefixer';

const prefix = '@@homeTypes';

const types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null
};

export default prefixer(types, prefix);
