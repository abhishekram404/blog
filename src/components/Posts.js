import clsx from "clsx";
import React, { Suspense } from "react";
import "styles/posts.scss";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { useQuery } from "react-query";
import axios from "axios";
const FeedItem = React.lazy(() => import("./FeedItem"));
export default function Posts() {
  const { dark } = useSelector((state) => state.common);

  let {
    isLoading,
    data,
    isSuccess,
    refetch: refetchPosts,
  } = useQuery("profilePosts", () => axios.get(`/post/fetchOwnPosts`));

  if (isLoading) return <Loading />;

  if (isSuccess) {
    data = data.data.details;
  }

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
                  refetchPosts={refetchPosts}
                />
              );
            })}
        </Suspense>
      </div>
    </div>
  );
}
