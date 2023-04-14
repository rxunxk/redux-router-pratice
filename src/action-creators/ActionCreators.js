export const removeCart = (count) => {
  return (dispatch) => {
    dispatch({
      type: "remove",
      payload: count
    });
  };
};

export const addCart = (count) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: count
    });
  };
};

export const callAPI = (parameter) => {
  return (dispatch) => {
    dispatch({
      type: "api",
      payload: parameter
    });
  };
};

export const showTitle = (title) => {
  return (dispatch) => {
    dispatch({
      type: "title",
      payload: title
    });
  };
};
