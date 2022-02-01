const {
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CLEAR_ALL,
  FETCH_A_POST_SUCCESS,
} = require("redux/constants");

const postReducer = (
  state = {
    fetchedPosts: [],
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

    case FETCH_A_POST_SUCCESS:
      return {
        ...state,
        visitedPosts: [...state.visitedPosts, action.payload],
      };
    default:
      return state;
  }
};

export default postReducer;
