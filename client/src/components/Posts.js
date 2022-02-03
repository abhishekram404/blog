import clsx from "clsx";
import React, { Suspense } from "react";
import "styles/posts.scss";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
const FeedItem = React.lazy(() => import("./FeedItem"));
export default function Posts() {
  const { dark } = useSelector((state) => state.common);
  const ownId = Cookies.get("userId");

  let { isLoading, data, isError, isSuccess, error } = useQuery(
    "profilePosts",
    () =>
      axios.get(`/post/fetchProfilePosts`, {
        params: {
          // skip: profilePosts.length,
          profile: ownId,
        },
      })
  );

  if (isSuccess) {
    data = data.data.details;
  }

  if (isError) {
    console.log(error);
  }
  if (isLoading) return <Loading />;
  return (
    <div className={clsx("posts", dark ? "posts-dark" : "posts-light")}>
      <h3>My Posts</h3>
      <div className="posts-list p-3">
        <Suspense fallback={<Loading />}>
          {isSuccess &&
            data.map((post) => {
              return (
                <FeedItem
                  title={post.title}
                  category={post.category}
                  author={post.author}
                  key={post._id}
                  tags={post.tags}
                  id={post._id}
                  selfMode={true}
                />
              );
            })}
        </Suspense>
      </div>
    </div>
  );
}
