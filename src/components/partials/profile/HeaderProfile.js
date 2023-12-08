import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Following, unfollow } from "../../../api/UserRequest";

const HeaderProfile = ({
  id,
  firstname,
  lastname,
  coverPicture,
  profilePicture,
  follower,
  following,
  points,
}) => {
  const { userInfo } = useSelector((state) => state.user);
  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  const QueryClient = useQueryClient();
  const userId = userInfo.user._id;
  const [isFollowing, setIsFollowing] = useState(follower?.includes(id));
  const data = {
    id: id,
    userId: userId,
  };
  const toggleFollow = async () => {
    if (isFollowing) {
      // Unfollow user
      const response = await unfollow(data);
      setIsFollowing(false);
      QueryClient.invalidateQueries(["profile", data.id]);

      return response;
    } else {
      // Follow user
      const response = await Following(data);
      setIsFollowing(true);
      QueryClient.invalidateQueries(["profile", data.id]);
      return response;
    }
  };
  useEffect(() => {
    if (isFollowing) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, []);

  return (
    <>
      <div className="profile-header ">
        <div className="position-relative">
          <img
            loading="lazy"
            src={
              coverPicture
                ? `https://tlinkbackendserver.onrender.com/images/${coverPicture}`
                : `https://tlinkbackendserver.onrender.com/images/defaultCover.jpg`
            }
            alt="profile-bg"
            className="rounded img-fluid w-100"
          />
          <ul className="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0 z-100">
            <li>
              <Link
                to="/dashboard/app/user-profile-edit"
                className="material-symbols-outlined "
              >
                edit
              </Link>
            </li>
          </ul>
        </div>
        <div className="user-detail text-center mx-auto">
          <div className="">
            <img
              loading="lazy"
              src={
                profilePicture
                  ? `https://tlinkbackendserver.onrender.com/images/${profilePicture}`
                  : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
              }
              alt="profile-img1"
              className="avatar-100 img-fluid rounded-circle"
            />
          </div>

          <div className="profile-detail w-100">
            <h3>{firstname + " " + lastname}</h3>
          </div>
          <div className="social-info w-100 mx-auto">
            <ul className="social-data-block d-flex align-items-center justify-content-center list-inline p-0 m-0">
              <li className="text-center ps-3">
                <h6>TPoints</h6>
                <p className="mb-0">{points}</p>
              </li>
              <li className="text-center ps-3">
                <h6>Followers</h6>
                <p className="mb-0">{follower?.length}</p>
              </li>
              <li className="text-center ps-3">
                <h6>Following</h6>
                <p className="mb-0">{following?.length}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-info p-5 d-flex align-items-center justify-content-between position-relative">
          {id !== userId && (
            <div className="buttons-info d-flex align-items-center">
              <button
                type="button"
                onClick={toggleFollow}
                className={`btn btn-danger ms-2 btn-sm d-flex align-items-center ${
                  isFollowing ? "btn-unfollow" : ""
                }`}
              >
                <span className="material-symbols-outlined  md-16">
                  {isFollowing ? "remove" : "add"}
                </span>
                {isFollowing ? "Unfollow" : "Follow"}
              </button>
            </div>
          )}
          {id === userId && (
            <div className="buttons-info d-flex align-items-center">
              <Link to={`/user-profile-edit/` + id}>
                <button
                  type="button"
                  className="btn btn-danger ms-2 btn-sm d-flex align-items-center"
                >
                  <span className="material-symbols-outlined  md-16">
                    <span className="material-icons-outlined">edit</span>
                  </span>
                  Update
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
