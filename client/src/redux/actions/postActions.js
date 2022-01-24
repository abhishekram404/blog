const { default: axios } = require("axios");
const {
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  INFO,
  FETCH_PROFILE_POST_SUCCESS,
  FETCH_PROFILE_POST_FAILURE,
  FETCH_A_POST_SUCCESS,
  FETCH_A_POST_FAILURE,
  ERROR,
} = require("redux/constants");

export const fetch_posts = (skip = 0) => {
  return async (dispatch) => {
    const { data } = await axios.get("/post/fetchHomepagePosts?skip=" + skip);

    const { success, details } = await data;

    switch (success) {
      case true:
        return dispatch({
          type: FETCH_POST_SUCCESS,
          payload: details,
        });
      case false:
        return dispatch({
          type: FETCH_POST_FAILURE,
        });
      default:
        return dispatch({
          type: INFO,
          payload: "Something went wrong while fetching the posts.",
        });
    }
  };
};

export const fetch_profile_post = ({ skip, profile }) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/post/fetchProfilePosts`, {
      params: {
        skip,
        profile,
      },
    });
    const { success, details } = await data;
    switch (success) {
      case true:
        return dispatch({
          type: FETCH_PROFILE_POST_SUCCESS,
          payload: details,
        });
      case false:
        return dispatch({
          type: FETCH_PROFILE_POST_FAILURE,
        });
      default:
        return dispatch({
          type: INFO,
          payload: "Something went wrong while fetching the posts.",
        });
    }
  };
};

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
