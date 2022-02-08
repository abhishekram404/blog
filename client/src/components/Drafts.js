import clsx from "clsx";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import "styles/drafts.scss";
import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
const DraftItem = React.lazy(() => import("./DraftItem"));
export default function Drafts() {
  const { dark } = useSelector((state) => state.common);
  const ownId = Cookies.get("userId");

  let {
    data,
    isError,
    isSuccess,
    error,
    refetch: refetchDrafts,
  } = useQuery("draftPosts", () =>
    axios.get(`/post/fetchDrafts`, {
      params: {
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

  return (
    <div className={clsx("drafts  ", dark ? "drafts-dark" : "drafts-light")}>
      <h3>Drafts</h3>
      <div className="drafts-list p-2">
        <Suspense fallback={<Loading />}>
          {isSuccess && data.length > 0 ? (
            data.map((post) => (
              <DraftItem
                title={post.title}
                id={post._id}
                refetchDrafts={refetchDrafts}
                key={post._id}
              />
            ))
          ) : (
            <h3>No drafts</h3>
          )}
        </Suspense>
      </div>
    </div>
  );
}
