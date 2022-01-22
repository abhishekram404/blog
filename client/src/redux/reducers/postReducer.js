const {
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_PROFILE_POST_SUCCESS,
  FETCH_PROFILE_POST_FAILURE,
  CLEAR_ALL,
  FETCH_A_POST_SUCCESS,
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
      // let postAlreadyExists = state.visitedPosts.some(
      //   (post) => post._id === action.payload._id
      // );
      // console.log("Already exists", postAlreadyExists);
      // if (postAlreadyExists) {
      //   return;
      // }
      return {
        ...state,
        visitedPosts: [...state.visitedPosts, action.payload],
      };
    default:
      return state;
  }
};

export default postReducer;
