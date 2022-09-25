import axios from "axios";
import Cookies from "js-cookie";
const {
  TOGGLE_DARK_MODE,
  AUTHENTICATED,
  NOT_AUTHENTICATED,
  LOADING_ON,
  LOADING_OFF,
  LOGOUT,
  ALREADY_AUTHENTICATED,
} = require("redux/constants");

const commonReducer = (
  state = { dark: false, isUserLoggedIn: null },
  action
) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        dark: action.payload,
      };
    case LOADING_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADING_OFF:
      return {
        ...state,
        loading: false,
      };

    case AUTHENTICATED:
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload?.token}`;
      Cookies.set("jwt", action.payload?.token, { expires: 7 });
      return {
        ...state,
        isUserLoggedIn: true,
      };

    case ALREADY_AUTHENTICATED:
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload}`;
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case NOT_AUTHENTICATED:
      axios.defaults.headers.common["Authorization"] = `Bearer`;
      Cookies.remove("jwt");
      return {
        ...state,
        isUserLoggedIn: false,
      };
    case LOGOUT:
      axios.defaults.headers.common["Authorization"] = `Bearer`;
      Cookies.remove("jwt");
      return {
        ...state,
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
};

export default commonReducer;
