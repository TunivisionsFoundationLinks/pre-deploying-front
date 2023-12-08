import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChapterCard = ({
  id,
  profileImage,
  coverImage,
  ChapterName,
  emailChapters,
  Clubs,
  EventNational,
}) => {
  return (
    <Card className=" mb-0" key={id}>
      <div className="top-bg-image">
        <div>
          <img
            src={
              coverImage
                ? `https://tlinkbackendserver.onrender.com/images/${coverImage}`
                : `https://tlinkbackendserver.onrender.com/images/defaultCover.jpg`
            }
            className="img-fluid bg-cover w-100"
            style={{ height: "250px" }}
            alt="group-bg"
          />
        </div>
      </div>
      <Card.Body className=" text-center bg-white">
        <div className="group-icon">
          <img
            src={
              profileImage
                ? `https://tlinkbackendserver.onrender.com/images/${profileImage}`
                : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
            }
            alt="profile-img"
            className="rounded-circle img-fluid avatar-120"
          />
        </div>
        <div className="group-info pt-3 pb-3">
          <h4>
            <Link to={`/Chapters/${id}`}>{ChapterName}</Link>
          </h4>
          <p>{emailChapters}</p>
        </div>
        <div className="group-details d-inline-block pb-3">
          <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
            <li className="pe-3 ps-3">
              <p className="mb-0">Clubs</p>
              <h6>{Clubs.length}</h6>
            </li>
            <li className="pe-3 ps-3">
              <p className="mb-0">Events National</p>
              <h6>{EventNational.length}</h6>
            </li>
          </ul>
        </div>

        <Link to={`/Chapters/${id}`} className="btn btn-danger d-block w-100">
          Visit
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ChapterCard;
