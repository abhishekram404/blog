import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "redux/store";
import axios from "axios";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { QueryClientProvider, QueryClient } from "react-query";
const isProduction = process.env.REACT_APP_NODE_ENV === "production";

axios.defaults.baseURL = isProduction
  ? "https://abhishekram404-blog-simple.herokuapp.com/api/"
  : "http://localhost:4000/api/";

axios.defaults.withCredentials = true;
const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AlertProvider
          transition={transitions.FADE}
          position={positions.BOTTOM_LEFT}
          template={AlertTemplate}
          timeout={5000}
          offset="30px"
        >
          <App />
        </AlertProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
