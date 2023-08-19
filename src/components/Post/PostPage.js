import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomToggle from "../dropdowns";
import ShareOffcanvas from "../share-offcanvas";

import user9 from "../../assets/images/user/1.jpg";
import user10 from "../../assets/images/user/04.jpg";
import user11 from "../../assets/images/user/02.jpg";
import user12 from "../../assets/images/user/03.jpg";
import user13 from "../../assets/images/user/01.jpg";
import user14 from "../../assets/images/user/01.jpg";
import small1 from "../../assets/images/small/07.png";
import small2 from "../../assets/images/small/08.png";
import small3 from "../../assets/images/small/09.png";
import small4 from "../../assets/images/small/10.png";
import small5 from "../../assets/images/small/11.png";

import img2 from "../../assets/images/page-img/52.jpg";
import img5 from "../../assets/images/user/1.jpg";
import icon1 from "../../assets/images/icon/01.png";
import icon2 from "../../assets/images/icon/02.png";
import icon3 from "../../assets/images/icon/03.png";
import icon4 from "../../assets/images/icon/04.png";
import icon5 from "../../assets/images/icon/05.png";
import icon6 from "../../assets/images/icon/06.png";
import icon7 from "../../assets/images/icon/07.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import FromPost from "./FromPost";

const PostPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className="col">
      <FromPost />
      <Card>
        <Card.Body className="gap-2">
          <div className="post-item">
            <div className="user-post-data pb-3">
              <div className="d-flex justify-content-between">
                <div className=" me-3">
                  <img
                    className="rounded-circle img-fluid"
                    src={user10}
                    alt=""
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="mb-0 d-inline-block">
                        <Link to="#">Paige Turner</Link>
                      </h5>
                      <p className="mb-0">8 hour ago</p>
                    </div>
                    <div className="card-post-toolbar">
                      <Dropdown>
                        <Dropdown.Toggle as={CustomToggle}>
                          <i className="ri-more-fill h4"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu m-0 p-0">
                          <Dropdown.Item className="dropdown-item p-3" to="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-save-line h4"></i>
                              <div className="data ms-2">
                                <h6>Save Post</h6>
                                <p className="mb-0">
                                  Add this to your saved items
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item p-3" to="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-pencil-line h4"></i>
                              <div className="data ms-2">
                                <h6>Edit Post</h6>
                                <p className="mb-0">
                                  Update your post and saved items
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item p-3" to="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-close-circle-line h4"></i>
                              <div className="data ms-2">
                                <h6>Hide From Timeline</h6>
                                <p className="mb-0">
                                  See fewer posts like this.
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item p-3" to="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-delete-bin-7-line h4"></i>
                              <div className="data ms-2">
                                <h6>Delete</h6>
                                <p className="mb-0">
                                  Remove thids Post on Timeline
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item p-3" to="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-notification-line h4"></i>
                              <div className="data ms-2">
                                <h6>Notifications</h6>
                                <p className="mb-0">
                                  Turn on notifications for this post
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-post">
              <Link to="#">
                <img src={img2} alt="postimage" className="img-fluid w-100" />
              </Link>
            </div>
            <div className="comment-area mt-3">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="like-block position-relative d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="like-data">
                      <Dropdown>
                        <Dropdown.Toggle as={CustomToggle}>
                          <img src={icon1} className="img-fluid" alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu py-2">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Like</Tooltip>}
                            className="ms-2 me-2"
                          >
                            <img
                              src={icon1}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Love</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon2}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Happy</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon3}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>HaHa</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon4}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Think</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon5}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Sade</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon6}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Lovely</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon7}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="total-like-block ms-2 me-3">
                      <Dropdown>
                        <Dropdown.Toggle as={CustomToggle}>
                          140 Likes
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Max Emum
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Bill Yerds
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Hap E. Birthday
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Tara Misu
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Midge Itz
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Sal Vidge
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Other
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="total-comment-block">
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}>
                        20 Comment
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Max Emum
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Bill Yerds
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Hap E. Birthday
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Tara Misu
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Midge Itz
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Sal Vidge
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Other
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <ShareOffcanvas />
              </div>
              <hr />
              <ul className="post-comments p-0 m-0">
                <li className="mb-2">
                  <div className="d-flex">
                    <div className="user-img">
                      <img
                        src={user11}
                        alt="userimg"
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
                        src={user12}
                        alt="userimg"
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
              </form>
            </div>
          </div>
          <div className="post-item">
            <div className="user-post-data py-3">
              <div className="d-flex justify-content-between">
                <div className="media-support-user-img me-3">
                  <img
                    className="rounded-circle img-fluid"
                    src={user13}
                    alt=""
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="mb-0 d-inline-block me-1">
                        <Link to="#">Pete Sariya</Link>
                      </h5>
                      <p className=" mb-0 d-inline-block">Update his Status</p>
                      <p className="mb-0">7 hour ago</p>
                    </div>
                    <div className="card-post-toolbar">
                      <Dropdown>
                        <Dropdown.Toggle as={CustomToggle}>
                          <i className="ri-more-fill h4"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu m-0 p-0">
                          <Dropdown.Item className="dropdown-item p-3" to="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-save-line h4"></i>
                              <div className="data ms-2">
                                <h6>Save Post</h6>
                                <p className="mb-0">
                                  Add this to your saved items
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item p-3" to="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-pencil-line h4"></i>
                              <div className="data ms-2">
                                <h6>Edit Post</h6>
                                <p className="mb-0">
                                  Update your post and saved items
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item p-3" to="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-close-circle-line h4"></i>
                              <div className="data ms-2">
                                <h6>Hide From Timeline</h6>
                                <p className="mb-0">
                                  See fewer posts like this.
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item p-3" to="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-delete-bin-7-line h4"></i>
                              <div className="data ms-2">
                                <h6>Delete</h6>
                                <p className="mb-0">
                                  Remove thids Post on Timeline
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item p-3" to="#">
                            <div className="d-flex align-items-top">
                              <i className="ri-notification-line h4"></i>
                              <div className="data ms-2">
                                <h6>Notifications</h6>
                                <p className="mb-0">
                                  Turn on notifications for this post
                                </p>
                              </div>
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-post">
              <Link to="#">
                <img src={user14} alt="postimage" className="img-fluid w-100" />
              </Link>
            </div>
            <div className="comment-area mt-3">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="like-block position-relative d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="like-data">
                      <Dropdown>
                        <Dropdown.Toggle as={CustomToggle}>
                          <img src={icon1} className="img-fluid" alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu py-2">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Like</Tooltip>}
                            className="ms-2 me-2"
                          >
                            <img
                              src={icon1}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Love</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon2}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Happy</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon3}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>HaHa</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon4}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Think</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon5}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Sade</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon6}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Lovely</Tooltip>}
                            className="me-2"
                          >
                            <img
                              src={icon7}
                              className="img-fluid me-2"
                              alt=""
                            />
                          </OverlayTrigger>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="total-like-block ms-2 me-3">
                      <Dropdown>
                        <Dropdown.Toggle as={CustomToggle}>
                          140 Likes
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item className="dropdown-item" to="#">
                            Max Emum
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" to="#">
                            Bill Yerds
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" to="#">
                            Hap E. Birthday
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" to="#">
                            Tara Misu
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" to="#">
                            Midge Itz
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" to="#">
                            Sal Vidge
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" to="#">
                            Other
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="total-comment-block">
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}>
                        20 Comment
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item" to="#">
                          Max Emum
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Bill Yerds
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Hap E. Birthday
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Tara Misu
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Midge Itz
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Sal Vidge
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" to="#">
                          Other
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <ShareOffcanvas />
              </div>
              <hr />
              <ul className="post-comments p-0 m-0">
                <li className="mb-2">
                  <div className="d-flex ">
                    <div className="user-img">
                      <img
                        src={user11}
                        alt="userimg"
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
                  <div className="d-flex ">
                    <div className="user-img">
                      <img
                        src={user12}
                        alt="userimg"
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
              </form>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostPage;
