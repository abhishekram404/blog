const {
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_PROFILE_POST_SUCCESS,
  FETCH_PROFILE_POST_FAILURE,
  CLEAR_ALL,
  FETCH_A_POST_SUCCESS,
  UPDATE_POST_VIA_SOCKET,
} = require("redux/constants");

const postReducer = (
  state = {
    fetchedPosts: [],
    profilePosts: [],
    userPosts: [],
    visitedPosts: [],
  },
  action
) => {
  switch (action.type) {
    case CLEAR_ALL:
      return {
        fetchedPosts: [],
        profilePosts: [],
        userPosts: [],
        visitedPosts: [],
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        fetchedPosts: [
          // ...state.fetchedPosts,
          ...action.payload,
        ],
      };
    case FETCH_POST_FAILURE:
      return state;
    case FETCH_PROFILE_POST_SUCCESS:
      return {
        ...state,
        profilePosts: [
          // ...state.profilePosts,
          ...action.payload,
        ],
      };
    case FETCH_PROFILE_POST_FAILURE:
      return state;
    case FETCH_A_POST_SUCCESS:
      return {
        ...state,
        visitedPosts: [...state.visitedPosts, action.payload],
      };
    case UPDATE_POST_VIA_SOCKET:
      const postIndex = state.fetchedPosts.findIndex(
        (post) => post._id === action.payload.post_id
      );
      let newArr = [...state.fetchedPosts];
      newArr[postIndex].likes = action.payload.likes;
      newArr[postIndex].comments = action.payload.comments;
      return {
        ...state,
        fetchedPosts: newArr,
      };
    default:
      return state;
  }
};

export default postReducer;
