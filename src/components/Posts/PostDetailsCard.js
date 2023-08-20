import React from "react";
import {
  Button,
  Card,
  Carousel,
  Dropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

//image

import icon1 from "../../assets/images/icon/01.png";

import { Link } from "react-router-dom";

import ShareOffcanvas from "../share-offcanvas";
import { useQuery } from "@tanstack/react-query";
import { FetchOneUser } from "../../api/UserRequest";

const PostDetailsCard = ({ createBy, Disc, files }) => {
  const { data: users } = useQuery({
    queryKey: ["Creator", createBy],
    queryFn: async () => await FetchOneUser(createBy),
  });
  const getFileType = (url) => {
    const fileExtension = url
      ?.substring(url.lastIndexOf(".") + 1)
      .toLowerCase();

    if (["jpg", "jpeg", "png"].includes(fileExtension)) {
      return "image";
    } else if (fileExtension === "mp4") {
      return "video";
    } else if (fileExtension === "pdf") {
      return "pdf";
    } else {
      return "unknown";
    }
  };
  return (
    <Card className=" card-block card-stretch card-height">
      <Card.Body>
        <div className="user-post-data">
          <div className="d-flex justify-content-between">
            <div className="me-3 w-auto h-50">
              <img
                className="rounded-circle img-fluid avatar-50"
                src={
                  users?.profilePicture
                    ? `https://tlink-server.onrender.com/images/${users?.profilePicture}`
                    : `https://tlink-server.onrender.com/images/defaultProfile.png`
                }
                alt=""
              />
            </div>
            <div className="w-100">
              <Link to="#">
                <h5 className="mb-0 d-inline-block">
                  {users?.firstname + " " + users?.lastname}
                </h5>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p>{Disc}</p>
        </div>
        <div className="user-post">
          <Carousel>
            {files?.map((file, index) => {
              const fileType = getFileType(file);

              switch (fileType) {
                case "image":
                  return (
                    <Carousel.Item key={index}>
                      <img
                        src={`https://tlink-server.onrender.com/images/${file}`}
                        alt={`post${index}`}
                        className="img-fluid rounded h-50"
                      />
                    </Carousel.Item>
                  );
                case "video":
                  return (
                    <Carousel.Item key={index}>
                      <video controls className="img-fluid rounded h-50">
                        <source
                          src={`https://tlink-server.onrender.com/images/${file}`}
                          type="video/mp4"
                        />
                      </video>
                    </Carousel.Item>
                  );
                case "pdf":
                  // Render the PDF viewer component here
                  return (
                    <Carousel.Item key={index}>
                      {/* Render the PDF viewer component */}
                    </Carousel.Item>
                  );
                default:
                  return null;
              }
            })}
          </Carousel>
        </div>
        <div className="comment-area mt-3">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="like-block position-relative d-flex align-items-center">
              <div className="d-flex align-items-center">
                <div className="like-data">
                  <button className="bg-white border-0">
                    <img src={icon1} className="img-fluid" alt="" />
                  </button>
                  {/* <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                    <Dropdown.Menu className=" py-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Like</Tooltip>}
                        className="ms-2 me-2"
                      >
                        <img src={icon1} className="img-fluid me-2" alt="" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Love</Tooltip>}
                        className="me-2"
                      >
                        <img src={icon2} className="img-fluid me-2" alt="" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Happy</Tooltip>}
                        className="me-2"
                      >
                        <img src={icon3} className="img-fluid me-2" alt="" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>HaHa</Tooltip>}
                        className="me-2"
                      >
                        <img src={icon4} className="img-fluid me-2" alt="" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Think</Tooltip>}
                        className="me-2"
                      >
                        <img src={icon5} className="img-fluid me-2" alt="" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Sade</Tooltip>}
                        className="me-2"
                      >
                        <img src={icon6} className="img-fluid me-2" alt="" />
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Lovely</Tooltip>}
                        className="me-2"
                      >
                        <img src={icon7} className="img-fluid me-2" alt="" />
                      </OverlayTrigger>
                    </Dropdown.Menu>
                  </Dropdown> */}
                </div>
                <div className="total-like-block ms-2 me-3">
                  <h6> 140 Likes</h6>
                </div>
              </div>
              {/* <div className="total-comment-block">
                <h6> 20 Comment</h6>
              </div> */}
            </div>
            <ShareOffcanvas />
          </div>
          <hr />
          {/* <ul className="post-comments list-inline p-0 m-0">
            <li className="mb-2">
              <div className="d-flex">
                <div className="user-img">
                  <img
                    src={user2}
                    alt="user1"
                    className="avatar-35 rounded-circle img-fluid"
                  />
                </div>
                <div className="comment-data-block ms-3">
                  <h6>Monty Carlo</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet</p>
                  <div className="d-flex flex-wrap align-items-center comment-activity">
                    <Link to="#">like</Link>
                    <Link to="#">reply</Link>
                    <Link to="#">translate</Link>
                    <span> 5 min </span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex">
                <div className="user-img">
                  <img
                    src={user3}
                    alt="user1"
                    className="avatar-35 rounded-circle img-fluid"
                  />
                </div>
                <div className="comment-data-block ms-3">
                  <h6>Paul Molive</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet</p>
                  <div className="d-flex flex-wrap align-items-center comment-activity">
                    <Link to="#">like</Link>
                    <Link to="#">reply</Link>
                    <Link to="#">translate</Link>
                    <span> 5 min </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <form className="comment-text d-flex align-items-center mt-3">
            <input
              type="text"
              className="form-control rounded"
              placeholder="Enter Your Comment"
            />
            <div className="comment-attagement d-flex">
              <Link to="#">
                <i className="ri-link me-3"></i>
              </Link>
              <Link to="#">
                <i className="ri-user-smile-line me-3"></i>
              </Link>
              <Link to="#">
                <i className="ri-camera-line me-3"></i>
              </Link>
            </div>
          </form> */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostDetailsCard;
