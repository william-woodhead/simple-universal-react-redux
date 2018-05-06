export function getData() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'RES_DATA',
        data: { some: 'async data' }
      });
      resolve();
    });
  };
}
