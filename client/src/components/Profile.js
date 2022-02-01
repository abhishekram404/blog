import React, { Suspense, useState } from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { IoLocationOutline } from "react-icons/io5";
import "styles/profile.scss";
import { AiOutlineStar } from "react-icons/ai";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Loading from "./Loading";
import moment from "moment";
import { useQuery } from "react-query";
import axios from "axios";
import { ERROR } from "redux/constants";
const EditProfile = React.lazy(() => import("./EditProfile"));
const FeedItem = React.lazy(() => import("./FeedItem"));
const Error404 = React.lazy(() => import("./Error404"));
const Posts = React.lazy(() => import("./Posts"));
const Drafts = React.lazy(() => import("./Drafts"));
const Saved = React.lazy(() => import("./Saved"));
const HomeSidebar = React.lazy(() => import("./HomeSidebar"));
export default function Profile() {
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.common);
  const { user } = useSelector((state) => state.user);
  const [profilePosts, setProfilePosts] = useState([]);
  // const { profilePosts } = useSelector((state) => state.post);
  const { url } = useRouteMatch();
  const query = useQuery(
    "profilePosts",
    () =>
      axios.get(`/post/fetchProfilePosts`, {
        params: {
          // skip: profilePosts.length,
          profile: user.username,
        },
      }),
    {
      onSuccess: ({ data }) => setProfilePosts(data.details),
      onError: () =>
        dispatch({
          type: ERROR,
          payload: "Failed to fetch profile posts.",
        }),
    }
  );

  return (
    <Switch>
      <div
        className={clsx(
          "profile py-4 px-1 p-md-4",
          dark ? "profile_dark" : "profile_light"
        )}
      >
        <div className="container mx-auto">
          <div className="row g-5 justify-content-between ">
            <div className="col-12 main-section col-md-9">
              <Route path={`${url}/`} exact>
                <Suspense fallback={<Loading />}>
                  <div className="profile-section  p-3">
                    <div className="avatar-section">
                      <img
                        src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy"
                        alt=""
                      />
                    </div>
                    <br />
                    <div className="details-section">
                      <h3>{user.name ? user.name : "No name"}</h3>
                      <div className="username">
                        {user.username ? `@${user.username}` : "No username"}
                      </div>
                      <div className="bio">
                        {user.bio ? (
                          user.bio
                        ) : (
                          <Link to="/edit" className="btn-link">
                            Add bio
                          </Link>
                        )}
                      </div>

                      <div className="address">
                        <IoLocationOutline className="icon" />
                        {user.address ? (
                          `Lives in ${user.address}`
                        ) : (
                          <Link to={`${url}/edit`} className="btn-link">
                            Add address
                          </Link>
                        )}
                      </div>
                      {user?.joined ? (
                        <div className="joined">
                          <AiOutlineStar className="icon" /> Joined &nbsp;
                          {moment(user.joined).startOf("min").fromNow()}&nbsp; (
                          {moment(user.joined).format("ll")})
                        </div>
                      ) : null}
                      <Link
                        to={`${url}/edit`}
                        className="edit-profile-btn btn btn-sm btn-light px-4 d-inline"
                      >
                        Edit profile
                      </Link>
                    </div>
                  </div>
                  <div className=" profile-feed-section  p-3">
                    <h4>My posts</h4>
                    <Suspense fallback={<Loading />}>
                      {profilePosts && profilePosts.length > 0 ? (
                        profilePosts.map((post) => {
                          return (
                            <FeedItem
                              title={post.title}
                              category={post.category}
                              author={post.author}
                              key={post._id}
                            />
                          );
                        })
                      ) : (
                        <h4>No posts </h4>
                      )}
                    </Suspense>
                  </div>
                </Suspense>
              </Route>
              <Route path={`${url}/edit`}>
                <Suspense fallback={<Loading />}>
                  <EditProfile />
                </Suspense>
              </Route>
              <Route path={`${url}/posts`}>
                <Suspense fallback={<Loading />}>
                  <Posts />
                </Suspense>
              </Route>
              <Route path={`${url}/drafts`}>
                <Suspense fallback={<Loading />}>
                  <Drafts />
                </Suspense>
              </Route>
              <Route path={`${url}/saved`}>
                <Suspense fallback={<Loading />}>
                  <Saved />
                </Suspense>
              </Route>
            </div>
            <div className="sidebar-section col-md-3 p-3 d-none d-md-block">
              Quick links
              <hr className="mt-2 mb-3" />
              <Suspense fallback={<Loading />}>
                <HomeSidebar />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <Route path={`${url}/*`}>
        <Suspense fallback={<Loading />}>
          <Error404 />
        </Suspense>
      </Route>
    </Switch>
  );
}
