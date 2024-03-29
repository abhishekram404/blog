import React, { useEffect, useState } from "react";
import "styles/homeSidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineDocument } from "react-icons/hi";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "./Loading";
export default function HomeSidebar() {
  const location = useLocation();
  const { dark } = useSelector((state) => state.common);

  const [active, setActive] = useState("");
  const { isLoading, data } = useQuery("userInfo", () =>
    axios.get("/user/fetchUserInfo")
  );
  const p =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    switch (p) {
      case "":
        setActive("home");
        break;
      case "profile":
        setActive("profile");
        break;
      case "posts":
        setActive("posts");
        break;

      case "drafts":
        setActive("drafts");
        break;
      case "settings":
        setActive("settings");
        break;

      default:
        break;
    }
  });
  if (isLoading) return <Loading />;

  return (
    <div
      className={clsx(
        "home-sidebar",
        dark ? "home-sidebar-dark" : "home-sidebar-light"
      )}
    >
      <ul className="side-nav ps-2">
        <li className={clsx("side-nav-item", active === "profile" && "active")}>
          <Link to="/profile" className="nav-link p-0 profile-link">
            <img
              src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy"
              alt=""
            />
            {data.data.details.name && (
              <span>{data.data.details.name.split(" ")[0]} </span>
            )}
          </Link>
        </li>
        <li className={clsx("side-nav-item", active === "" && "active")}>
          <Link to="/">
            <span>
              <AiOutlineHome />{" "}
            </span>
            Home
          </Link>
        </li>
        <li className={clsx("side-nav-item", active === "posts" && "active")}>
          <Link to="/profile/posts">
            <span>
              <IoNewspaperOutline />{" "}
            </span>
            Posts
          </Link>
        </li>
        <li className={clsx("side-nav-item", active === "drafts" && "active")}>
          <Link to="/profile/drafts">
            <span>
              {" "}
              <HiOutlineDocument />
            </span>
            Drafts
          </Link>
        </li>
        <hr />

        <li
          className={clsx("side-nav-item", active === "settings" && "active")}
        >
          <Link to="/profile/settings">
            <span>
              <IoSettingsOutline />
            </span>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
