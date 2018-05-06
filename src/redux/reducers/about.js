import TYPE from '../types/about';

export default function (state = null, action) {
  switch (action.type) {
    case TYPE.RES_DATA: return resData(state, action);
    default: return state;
  }
}

function resData(state, action) {
  const { data } = action;
  return data;
}
