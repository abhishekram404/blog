import React, { Suspense, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProtectedRoute from "components/ProtectedRoute";
import clsx from "clsx";
import "styles/app.scss";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import {
  INFO,
  CLEAR_ALERT,
  ERROR,
  SUCCESS,
  NOT_AUTHENTICATED,
  ALREADY_AUTHENTICATED,
} from "redux/constants";
import Cookies from "js-cookie";
import Loading from "components/Loading";
import Error404 from "components/Error404";
const Homepage = React.lazy(() => import("components/Homepage"));
const Post = React.lazy(() => import("components/Post"));
const Register = React.lazy(() => import("components/Register"));
const Login = React.lazy(() => import("components/Login"));
const CreatePost = React.lazy(() => import("components/CreatePost"));
const Profile = React.lazy(() => import("components/Profile"));
function App() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.common);
  const { type, message } = useSelector((state) => state.alert);
  const alertOnClose = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  const [token] = useState(() => Cookies.get("jwt"));
  useEffect(() => {
    if (!token) {
      dispatch({
        type: NOT_AUTHENTICATED,
      });
    } else {
      dispatch({
        type: ALREADY_AUTHENTICATED,
        payload: token,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    switch (type) {
      case SUCCESS:
        alert.success(message, {
          onClose: alertOnClose,
        });
        break;
      case ERROR:
        alert.error(message, {
          onClose: alertOnClose,
        });
        break;
      case INFO:
        alert.info(message, {
          onClose: alertOnClose,
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, message]);

  return (
    <Router>
      <div className={clsx("app", dark ? "app_dark" : "app_light")}>
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/post/:id" component={Post} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/create-post" component={CreatePost} />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="*" component={Error404} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
