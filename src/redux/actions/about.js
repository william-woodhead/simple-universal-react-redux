import TYPE from '../types/about';

export function getAboutData() {
  return (dispatch) => {
    dispatch({ type: TYPE.REQ_DATA });

    return new Promise((resolve, reject) => {
      dispatch({
        type: TYPE.RES_DATA,
        data: { some: 'async about data' }
      });
      resolve();
    });
  };
}
