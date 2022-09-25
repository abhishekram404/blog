import axios from "axios";

const {
  TOGGLE_DARK_MODE,
  LOGOUT,
  SUCCESS,
  ERROR,
  CLEAR_ALL,
} = require("redux/constants");

export const toggle_dark_mode = (dark) => {
  //  const [isDark, toggle ] = useDarkMode()

  return {
    type: TOGGLE_DARK_MODE,
    payload: dark,
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/user/logout");
      switch (data.success) {
        case true:
          sessionStorage.removeItem("isUserLoggedIn");
          dispatch({
            type: LOGOUT,
          });
          dispatch({
            type: CLEAR_ALL,
          });
          dispatch({
            type: SUCCESS,
            payload: data.message,
          });
          break;
        case false:
          sessionStorage.removeItem("isUserLoggedIn");
          dispatch({
            type: ERROR,
            payload: data.message,
          });
          dispatch({
            type: LOGOUT,
          });
          break;
        default:
          return;
      }
    } catch (error) {
      sessionStorage.removeItem("isUserLoggedIn");
      dispatch({
        type: ERROR,
        message: "Something went wrong!",
      });
      dispatch({
        type: LOGOUT,
      });
    }
  };
};
