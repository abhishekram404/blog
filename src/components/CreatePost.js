import React, { useState, useCallback, Suspense } from "react";
import clsx from "clsx";
import "styles/createPost.scss";
import { WithContext as ReactTags } from "react-tag-input";
import { pascalCase } from "change-case";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { debounce as db } from "lodash";
import { AiOutlineEye } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import Loading from "./Loading";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ERROR, SUCCESS } from "redux/constants";
import { withRouter, useHistory } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
const Post = React.lazy(() => import("./Post"));
function CreatePost() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { dark, isUserLoggedIn } = useSelector((state) => state.common);
  const [user, setUser] = useState({});

  useQuery("userData", async () => await axios.get("/user/fetchUserInfo"), {
    onSuccess: ({ data }) => {
      setUser(data.details);
    },
    enabled: Boolean(isUserLoggedIn),
  });

  const [tags, setTags] = useState([]);
  const [previewMode, setPreviewMode] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Undefined",
    tags: [],
    content: "",
  });
  const validatonSchema = Yup.object({
    title: Yup.string().required("Post title is required."),
    category: Yup.string(),
    tags: Yup.array(),
    content: Yup.string(),
  });

  const KeyCodes = {
    comma: 188,
    enter: [10, 13],
  };
  const delimiters = [...KeyCodes.enter, KeyCodes.comma];
  const handleAdd = (tag) => {
    tag = pascalCase(tag.text);
    if (!tag) {
      return;
    }
    if (tags.some((tagText) => tagText.text === tag)) {
      return;
    }
    setTags([...tags, { id: tag, text: tag }]);
  };
  const handleDelete = (indexToRemove) => {
    setTags(() => tags.filter((_, i) => indexToRemove !== i));
  };
  // eslint-disable-next-line
  const debounce = useCallback(
    db((value) => {
      setFormData(Object.assign(formData, { content: value }));
    }, 300),
    []
  );

  const generatePreviewData = async (values) => {
    let tagsList = [];
    tags.forEach((tagObj) => {
      tagsList.push(tagObj.id);
    });

    setFormData(
      Object.assign(
        formData,
        { title: values.title, category: values.category },
        { tags: tagsList },
        {
          authorId: user._id,
          authorName: user.name,
          authorUsername: user.username,
        }
      )
    );
  };

  const createPostMutation = useMutation((v) =>
    axios.post("/post/create-post?submitType=publish", v)
  );

  const createDraftMutation = useMutation((v) =>
    axios.post("/post/create-post?submitType=draft", v)
  );

  const handleSubmit = async (values, props) => {
    await generatePreviewData(values);
    createPostMutation.mutate(formData, {
      onSuccess: async ({ data }) => {
        if (data.success) {
          props.resetForm();
          setFormData({
            title: "",
            category: "",
            tags: [],
            content: "",
          });

          dispatch({
            type: SUCCESS,
            payload: await data?.message,
          });
          return history.push("/");
        }
        dispatch({
          type: ERROR,
          payload: await data?.message,
        });
      },
      onError: (error) => {
        dispatch({
          type: ERROR,
          payload: error.response.data.message,
        });
      },
    });
  };

  const handleDraftSubmit = async (props) => {
    await generatePreviewData(props.values);
    createDraftMutation.mutate(formData, {
      onSuccess: async ({ data }) => {
        if (data.success) {
          props.resetForm();
          setFormData({
            title: "",
            category: "",
            tags: [],
            content: "",
          });

          dispatch({
            type: SUCCESS,
            payload: await data?.message,
          });
          return history.push("/");
        }
        dispatch({
          type: ERROR,
          payload: await data?.message,
        });
      },
      onError: (error) => {
        dispatch({
          type: ERROR,
          payload: error.response.data.message,
        });
      },
    });
  };

  return (
    <div
      className={clsx(
        "create_post py-4 p-2 p-sm-4",
        dark ? "create_post_dark" : "create_post_light"
      )}
    >
      <div className="container">
        <div className="row mb-2 align-items-center">
          <div className="col-8 col-sm-9">
            <h2>{previewMode ? "Preview mode" : "Create a post"}</h2>
          </div>
          <div className="col-4 col-sm-3 preview-btn ">
            <button
              className="btn btn-sm  ms-auto shadow-none"
              onClick={() => setPreviewMode(!previewMode)}
            >
              {previewMode ? (
                <>
                  Edit <IoCreateOutline />
                </>
              ) : (
                <>
                  {" "}
                  Preview <AiOutlineEye />
                </>
              )}
            </button>
          </div>
        </div>
        {previewMode ? (
          <Suspense fallback={<Loading />}>
            <Post
              title={formData.title}
              category={formData.category}
              body={formData.content}
              preview={true}
            />
          </Suspense>
        ) : (
          <Formik
            initialValues={formData}
            onSubmit={handleSubmit}
            validationSchema={validatonSchema}
          >
            {(props) => (
              <Form
                className="p-3"
                onBlur={() => generatePreviewData(props.values)}
              >
                <div className="mb-3">
                  <Field
                    as="textarea"
                    onKeyDown={(e) => {
                      if (parseInt(e.target.style.height) >= 300) {
                        return;
                      }
                      e.target.style.height = "inherit";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    name="title"
                    className="form-control shadow-none post-title"
                    placeholder="New post title here"
                  />
                  <small className="text-danger">
                    <ErrorMessage name="title" />
                  </small>
                </div>
                <div className="mb-3 tags-cont">
                  <label htmlFor="post-tags" className="form-label">
                    Tags
                  </label>
                  <ReactTags
                    tags={tags}
                    autofocus={false}
                    handleAddition={handleAdd}
                    handleDelete={handleDelete}
                    delimiters={delimiters}
                    inputFieldPosition="inline"
                    allowUnique={false}
                    classNames={{
                      tags: "tags",
                      tag: "tag",
                      tagInput: "tagInput",
                      tagInputField: "tagInputField",
                      remove: "tagRemoveBtn",
                    }}
                  />
                </div>
                <div className="mb-3 category-cont">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <Field
                    as="select"
                    name="category"
                    id="category"
                    className="form-control shadow-none"
                  >
                    <option value="Undefined">Undefined</option>
                    <option value="Crime">Crime</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Fashion">Fashion</option>
                    <option value="DIY">DIY</option>
                    <option value="Music">Music</option>
                    <option value="Sports">Sports</option>
                    <option value="E-sports">E-sports</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Business">Business</option>
                    <option value="Politics">Politics</option>
                    <option value="Movie">Movie</option>
                    <option value="Science">Science</option>
                    <option value="Technology">Technology</option>
                    <option value="News">News</option>
                  </Field>
                </div>
                <div className="editor-cont mb-3">
                  <label htmlFor="post-body" className="form-label">
                    Body
                  </label>

                  <Suspense fallback={<Loading />}>
                    <CKEditor
                      editor={Editor}
                      data={formData.content}
                      onChange={(event, editor) => debounce(editor.getData())}
                    />
                  </Suspense>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-secondary shadow-none me-3"
                    onClick={() => {
                      handleDraftSubmit(props);
                    }}
                    type="button"
                  >
                    Save draft
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary  shadow-none"
                    disabled={!props.isValid}
                  >
                    Post
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}

export default withRouter(CreatePost);
