export default function (state = {}, action) {
  switch (action.type) {
    case 'RES_DATA': return resData(state, action);
    default: return state;
  }
}

function resData(state, action) {
  const { data } = action;
  state.data = data;
  return state;
}
