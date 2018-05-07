import TYPE from '../../types/home';

export default function getData() {
  return (dispatch) => {
    dispatch({ type: TYPE.REQ_DATA });

    // here is where you can make async api requests for data
    return new Promise((resolve, reject) => {
      dispatch({
        type: TYPE.RES_DATA,
        data: { text: 'This is some text for the HOME page fetched asynchronously' }
      });
      return resolve();
    });
  };
}
