import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const followUser = async () => {
    await fetch(`http://localhost:5000/user/follow/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Breare " + token,
      },
      body: JSON.stringify({
        id: id,
        userId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className="profile-header ">
        <div className="position-relative">
          <img
            loading="lazy"
            src={
              coverPicture
                ? `http://localhost:5000/images/${coverPicture}`
                : `http://localhost:5000/images/defaultCover.jpg`
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
        <div
          className="user-detail text-center mx-auto"
          style={{ width: "200px" }}
        >
          <div className="profile-img">
            <img
              loading="lazy"
              src={
                profilePicture
                  ? `http://localhost:5000/images/${profilePicture}`
                  : `http://localhost:5000/images/defaultProfile.png`
              }
              alt="profile-img1"
              className="avatar-130 img-fluid"
            />
          </div>

          <div className="profile-detail w-100">
            <h3>{firstname + " " + lastname}</h3>
          </div>
          <div className="social-info ">
            <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
              <li className="text-center ps-3">
                <h6>TPoints</h6>
                <p className="mb-0">{points}</p>
              </li>
              <li className="text-center ps-3">
                <h6>Followers</h6>
                <p className="mb-0">{follower}</p>
              </li>
              <li className="text-center ps-3">
                <h6>Following</h6>
                <p className="mb-0">{following}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-info p-5 d-flex align-items-center justify-content-between position-relative">
          {/* <div className="social-links">
                        <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                            <li className="text-center pe-3">
                                <Link to="#">
                                    <img
                                        loading="lazy"
                                        src={img3}
                                        className="img-fluid rounded"
                                        alt="facebook"
                                    />
                                </Link>
                            </li>
                            <li className="text-center pe-3">
                                <Link to="#">
                                    <img
                                        loading="lazy"
                                        src={img4}
                                        className="img-fluid rounded"
                                        alt="Twitter"
                                    />
                                </Link>
                            </li>
                            <li className="text-center pe-3">
                                <Link to="">
                                    <img
                                        loading="lazy"
                                        src={img5}
                                        className="img-fluid rounded"
                                        alt="Instagram"
                                    />
                                </Link>
                            </li>
                            <li className="text-center pe-3">
                                <Link to="#">
                                    <img
                                        loading="lazy"
                                        src={img6}
                                        className="img-fluid rounded"
                                        alt="Google plus"
                                    />
                                </Link>
                            </li>
                            <li className="text-center pe-3">
                                <Link to="#">
                                    <img
                                        loading="lazy"
                                        src={img7}
                                        className="img-fluid rounded"
                                        alt="You tube"
                                    />
                                </Link>
                            </li>
                            <li className="text-center md-pe-3 pe-0">
                                <Link to="#">
                                    <img
                                        loading="lazy"
                                        src={img8}
                                        className="img-fluid rounded"
                                        alt="linkedin"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div> */}
          {id !== userId && (
            <div className="buttons-info d-flex align-items-center">
              <button
                type="button"
                onClick={() => followUser()}
                className="btn btn-primary ms-2 btn-sm d-flex align-items-center"
              >
                <span className="material-symbols-outlined  md-16">add</span>
                Follow
              </button>
            </div>
          )}
          {id === userId && (
            <div className="buttons-info d-flex align-items-center">
              <Link to={`/user-profile-edit/` + id}>
                <button
                  type="button"
                  className="btn btn-primary ms-2 btn-sm d-flex align-items-center"
                >
                  <span className="material-symbols-outlined  md-16">
                    <span className="material-icons-outlined">edit</span>
                  </span>
                  Update
                </button>
              </Link>
              {/* if profile owner show "update" else if friend profile show "Ajouter" ans "Message" */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
