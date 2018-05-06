import TYPE from '../types/home';

export function getData() {
  return (dispatch) => {
    dispatch({ type: TYPE.REQ_DATA });

    return new Promise((resolve, reject) => {
      dispatch({
        type: TYPE.RES_DATA,
        data: { some: 'async data' }
      });
      resolve();
    });
  };
}
