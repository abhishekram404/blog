import clsx from "clsx";
import React, { useState } from "react";
import Loading from "./Loading";
import "styles/post.scss";
import { useDispatch, useSelector } from "react-redux";
import parser from "html-react-parser";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useQuery } from "react-query";
import axios from "axios";
import { ERROR } from "redux/constants";
export default function Post({ title, body, category, preview = false }) {
  const { dark } = useSelector((state) => state.common);
  const { id } = useParams();
  const dispatch = useDispatch();
  let [post, setPost] = useState({ title: "", category: "", content: "" });

  let { isLoading, isError } = useQuery(
    "fetchedPost",
    () => axios.get(`/post/fetch?id=${id}`),
    {
      enabled: !preview,
      onSuccess: ({ data }) => {
        setPost(data.details);
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    dispatch({
      type: ERROR,
      payload: "Something went wrong while fetching the post.",
    });
  }
  if (preview) {
    post = { title, category, content: body };
  }

  return (
    <div
      className={clsx(
        "post py-4 px-1 p-md-4",
        dark ? "post_dark" : "post_light",
        preview && "border"
      )}
    >
      <div className="container ">
        <article>
          <div className={clsx("title-bar row align-items-start ")}>
            <div className="col-12 title-row">
              <h1 className="post-title">
                {post.title || "Post title goes here..."}
              </h1>
            </div>
          </div>
          <div className="info-row mb-3">
            <span className="author-col">
              Article by <b>{post?.author?.authorName || "Author name"}</b>
            </span>
            &nbsp; &bull; &nbsp; Published on{" "}
            {post.createdAt ? moment(post.createdAt).format("LLL") : "Time"}{" "}
            &nbsp; &bull; &nbsp; {post.category || "Undefined"}
          </div>

          <div className="post-body">
            {post ? parser(post.content) : <Loading />}
          </div>
        </article>
      </div>
    </div>
  );
}
