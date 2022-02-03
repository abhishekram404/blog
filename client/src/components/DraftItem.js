import axios from "axios";
import clsx from "clsx";
import React from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { SUCCESS } from "redux/constants";
import "styles/draftItem.scss";
export default function DraftItem({ title, id, refetchDrafts }) {
  const { dark } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const deleteDraftMutation = useMutation(
    (postId) => axios.delete(`/post/delete?postId=${postId}`),
    {
      onSuccess: ({ data }) => {
        dispatch({
          type: SUCCESS,
          payload: data.message,
        });
        refetchDrafts();
      },
      onError: (error) => console.log(error),
    }
  );

  const deleteDraft = (postId) => {
    deleteDraftMutation.mutate(postId);
  };

  return (
    <div
      className={clsx(
        "draft-item mb-3 row card align-items-center flex-column",
        dark ? "draft-item-dark" : "draft-item-light"
      )}
    >
      <div className="col title-row p-3">
        <h4>{title}</h4>
      </div>
      <div className="col buttons-row px-3 py-2">
        <button className="btn btn-light btn-sm me-2 shadow-none">Edit</button>
        <button
          className="btn btn-danger btn-sm me-2 shadow-none"
          onClick={() => deleteDraft(id)}
        >
          Delete
        </button>
        <button className="btn btn-primary btn-sm me-2 shadow-none">
          Publish
        </button>
      </div>
    </div>
  );
}
