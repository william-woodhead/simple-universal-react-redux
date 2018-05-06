import TYPE from '../types/home';

export default function (state = {}, action) {
  switch (action.type) {
    case TYPE.RES_DATA: return resData(state, action);
    default: return state;
  }
}

function resData(state, action) {
  const { data } = action;
  state.data = data;
  return state;
}
