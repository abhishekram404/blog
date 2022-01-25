import clsx from "clsx";
import React, { Suspense } from "react";
import Loading from "./Loading";
import "styles/post.scss";
import { useDispatch, useSelector } from "react-redux";
import parser from "html-react-parser";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetch_a_post } from "redux/actions/postActions";
import moment from "moment";
export default function Post({ title, body, category, preview = false }) {
  const { dark } = useSelector((state) => state.common);
  const { id } = useParams();
  const dispatch = useDispatch();
  const visitedPosts = useSelector((state) =>
    state.post.visitedPosts.filter((post) => post._id === id)
  );

  const [post] = visitedPosts;
  useEffect(() => {
    if (visitedPosts.some((post) => post._id === id)) {
      return;
    }
    dispatch(fetch_a_post(id));
  }, []);
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
                {post ? post.title : "Post title goes here..."}
              </h1>
            </div>
          </div>
          <div className="info-row mb-3">
            <span className="author-col">
              Article by <b>{post ? post.author.authorName : "Author name"}</b>
            </span>
            &nbsp; &bull; &nbsp; Published on{" "}
            {post ? moment(post.createdAt).format("LLL") : "Time"} &nbsp; &bull;
            &nbsp; {post ? post.category : "Undefined"}
          </div>

          <div className="post-body">
            {post ? parser(post.content) : <Loading />}
          </div>
        </article>
      </div>
    </div>
  );
}
