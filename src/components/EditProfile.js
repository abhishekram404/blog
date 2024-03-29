import React from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "styles/editProfile.scss";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Loading from "./Loading";
import axios from "axios";
import moment from "moment";
import { SUCCESS } from "redux/constants";
import { history } from "../history";
export default function EditProfile() {
  const queryClient = useQueryClient();
  const { dark } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const schema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long.")
      .max(60, "Name must be maximum 30 characters long.")
      .required("Name is required."),
    username: Yup.string()
      .min(3, "Username must be minimum 3 characters long.")
      .max(30, "Username must be maximum 30 characters long.")
      .required("Username is required."),
    bio: Yup.string().max(200, "Bio must be maximum 200 characters long."),
    email: Yup.string().email("Invalid email").required("Email is required."),
    dob: Yup.date(),
    address: Yup.string(),
  });

  let initialValues = {
    name: "",
    username: "",
    bio: "",
    email: "",
    dob: "",
    address: "",
  };

  let { data, isLoading, isError, isSuccess, error } = useQuery(
    "profileInfo",
    () => axios.get("/user/fetchUserInfo")
  );

  if (isError) {
    console.log(error.response);
  }

  if (isSuccess) {
    Object.keys(data.data.details).map(async (key) => {
      if (!initialValues.hasOwnProperty(key)) {
        delete data.data.details[key];
      }
    });
    initialValues = Object.assign({}, initialValues, data.data.details, {
      dob: data.data.details.dob
        ? moment(data.data.details.dob).format("YYYY-MM-DD")
        : "",
    });
  }

  const mutation = useMutation(
    async (v) => await axios.put("/user/update", v),
    {
      onSuccess: ({ data }) => {
        queryClient.invalidateQueries("userData");
        queryClient.invalidateQueries("profileInfo");
        dispatch({
          type: SUCCESS,
          payload: data.message,
        });
        return history.push("/profile");
      },
      onError: (error) => console.log(error),
    }
  );

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      className={clsx(
        "edit-profile  px-1 px-md-4 py-4",
        dark ? "edit-profile-dark" : "edit-profile-light"
      )}
    >
      <div className="container">
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          {(props) => (
            <Form className="card p-4">
              <h2>Edit profile</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field className="form-control" name="name" />
                <small className="error-msg text-danger">
                  <ErrorMessage name="name" />
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <Field className="form-control" name="username" />
                <small className="error-msg text-danger">
                  <ErrorMessage name="username" />
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">
                  Bio
                </label>
                <Field className="form-control" name="bio" />
                <small className="error-msg text-danger">
                  <ErrorMessage name="bio" />
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field className="form-control" name="email" type="email" />
                <small className="error-msg text-danger">
                  <ErrorMessage name="email" />
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">
                  Date of birth
                </label>
                <Field className="form-control" name="dob" type="date" />
                <small className="error-msg text-danger">
                  <ErrorMessage name="dob" />
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <Field className="form-control" name="address" />
                <small className="error-msg text-danger">
                  <ErrorMessage name="address" />
                </small>
              </div>
              <div className="">
                <Link className="btn me-2 cancel-btn" to="/profile">
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={!props.isValid}
                >
                  Update
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
