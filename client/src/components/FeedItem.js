import React from "react";
import { Link } from "react-router-dom";
import "styles/feedItem.scss";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { useMutation } from "react-query";
import axios from "axios";
import { SUCCESS } from "redux/constants";
import moment from "moment";
import { AiOutlineClockCircle } from "react-icons/ai";
const FeedItem = ({
  title,
  tags,
  author,
  selfMode,
  id,
  refetchPosts,
  createdAt,
}) => {
  const { dark } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const deletePostMutation = useMutation(
    (postId) => axios.delete(`/post/delete?postId=${postId}`),
    {
      onSuccess: ({ data }) => {
        dispatch({
          type: SUCCESS,
          payload: data.message,
        });
        refetchPosts();
      },
      onError: (error) => console.log(error),
    }
  );

  const deletePost = (postId) => {
    deletePostMutation.mutate(postId);
  };

  return (
    <div
      className={clsx(
        "border-1  card feed-item mb-4",
        dark ? "feed-item-dark" : "feed-item-light"
      )}
    >
      <div className="thumbnail-cont"></div>
      <div className="card-body post-cont">
        <Link to={`/post/${id}`}>
          <h3 className="card-title post-title">{title}</h3>
          <p className="card-text post-body">
            {tags &&
              tags.map((tag, index) => {
                return <span key={index}>{`#${tag}`}</span>;
              })}
          </p>
        </Link>
      </div>
      <div className="card-body py-1">
        <div className="row  align-items-center g-2 py-2">
          {selfMode ? (
            <>
              <button className="col edit-btn btn  me-1 ">Edit</button>
              <button
                className="col delete-btn btn btn-danger ms-1"
                onClick={() => deletePost(id)}
              >
                Delete
              </button>
            </>
          ) : (
            <>
              <div className="col-2 col-sm-1 p-1 profile-pic-cont ">
                <img
                  src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy"
                  alt="Profile"
                  className="profile-pic"
                />
              </div>
              <div className="col-7 col-sm-7 px-1 px-sm-3 px-md-3 d-flex flex-column">
                <span className="author-name">{author?.authorName}</span>
                <small className="author-username">
                  <Link to="/user/abhishek">@{author?.authorUsername}</Link>
                </small>
              </div>
              <small className="createdAt text-right">
                <AiOutlineClockCircle />{" "}
                <span>
                  {createdAt &&
                    `${moment(createdAt).startOf("second").fromNow()}`}
                </span>
              </small>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default FeedItem;
