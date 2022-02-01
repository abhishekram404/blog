const { default: axios } = require("axios");
const {
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  INFO,
  FETCH_A_POST_SUCCESS,
  FETCH_A_POST_FAILURE,
  ERROR,
} = require("redux/constants");

export const fetch_a_post = (postId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/post/fetch?id=${postId}`);
      switch (data.success) {
        case true:
          return dispatch({
            type: FETCH_A_POST_SUCCESS,
            payload: data.details,
          });
        case false:
          return dispatch({
            type: FETCH_POST_FAILURE,
            payload: data.details,
          });
        default:
          return dispatch({
            type: ERROR,
            payload: "Something went wrong while fetching the post.",
          });
      }
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: "Something went wrong while fetching the post.",
      });
    }
  };
};
