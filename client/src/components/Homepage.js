import React, { Suspense, useEffect } from "react";
import "styles/Homepage.scss";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { useQuery } from "react-query";
import axios from "axios";
import { ERROR } from "redux/constants";
const FeedItem = React.lazy(() => import("./FeedItem"));
const HomeSidebar = React.lazy(() => import("./HomeSidebar"));
export default function Homepage() {
  const dispatch = useDispatch();
  const { dark, isUserLoggedIn } = useSelector((state) => state.common);
  const { user } = useSelector((state) => state.user);

  const { isLoading, data, isError } = useQuery("homepagePosts", () =>
    axios.get("/post/fetchHomepagePosts")
  );
  if (isError) {
    dispatch({
      type: ERROR,
      payload: "Something went wrong while fetching the posts.",
    });
  }

  console.log(data);

  if (isLoading) return <Loading />;
  return (
    <div
      className={clsx(
        "homepage px-1 px-md-4 py-4",
        dark ? "homepage_dark" : "homepage_light"
      )}
    >
      <div className="container  mx-auto">
        <div className="row g-5">
          <div className="col-12 feed col-md-9">
            <h2 className="page-title">Feed</h2>
            <Suspense fallback={<Loading />}>
              {data.data.details.length > 0 ? (
                data.data.details.map((post) => (
                  <FeedItem
                    title={post.title}
                    tags={post.tags}
                    category={post.category}
                    author={post.author}
                    key={post._id}
                    id={post._id}
                    createdAt={post.createdAt}
                  />
                ))
              ) : (
                <h4>No posts</h4>
              )}
            </Suspense>
          </div>

          {isUserLoggedIn && (
            <div className="col-md-3 sidebar-section p-3 d-none d-md-block">
              Quick links
              <hr className="mt-2 mb-3" />
              <Suspense fallback={<Loading />}>
                <HomeSidebar />
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
