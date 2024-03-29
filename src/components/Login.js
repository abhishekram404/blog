import React, { useState } from "react";
import "styles/register.scss";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  AUTHENTICATED,
  NOT_AUTHENTICATED,
  ERROR,
  SUCCESS,
} from "redux/constants";
import { Redirect } from "react-router";
import { useMutation } from "react-query";
import history from "../history";
export default function Login(props) {
  const [isSubmitting, setSubmitting] = useState(false);

  const dispatch = useDispatch();
  const { dark, isUserLoggedIn } = useSelector((state) => state.common);
  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const initialValues = { email: "", password: "" };
  const loginMutation = useMutation(
    async (v) => await axios.post("/user/login", v),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          setSubmitting(false);
          dispatch({ type: AUTHENTICATED, payload: data?.data?.details });
          dispatch({
            type: SUCCESS,
            payload: data.message,
          });
          return history.push("/");
        }
      },
      onError: (error) => {
        console.log(error);
        setSubmitting(false);
        dispatch({ type: NOT_AUTHENTICATED });
        return dispatch({
          type: ERROR,
          payload: error.response.data.message,
        });
      },
    }
  );
  const handleSubmit = async (values) => {
    setSubmitting(true);
    await loginMutation.mutateAsync(values);
  };

  if (isUserLoggedIn) {
    return <Redirect to="/" />;
  }
  // else render login page

  return (
    <div
      className={clsx(
        "register py-4 px-1 p-md-4",
        dark ? "register_dark" : "register_light"
      )}
    >
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {(errors, touched) => (
            <Form className={clsx("card p-4", isSubmitting && "disabled")}>
              <h2 className="text-center">Login</h2>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  className="form-control shadow-none"
                  required={true}
                />
                <small className="error-message text-danger">
                  <ErrorMessage name="email" />
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password <span className="text-danger">*</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  className="form-control shadow-none"
                  required={true}
                />
                <small className="error-message text-danger">
                  <ErrorMessage name="password" />
                </small>
              </div>

              <button type="submit" className="submit-btn btn btn-primary">
                {isSubmitting ? "Logging In" : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
