import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

//image

import { useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Flip, toast } from "react-toastify";
import { getOneClub, requestJoinIn } from "../../../api/ClubsRequest";
import { getAllPostes } from "../../../api/PostRequest";
import { FetchOneUser } from "../../../api/UserRequest";
import PostDetailsCard from "../../../components/Posts/PostDetailsCard";
import PostForm from "../../../components/Posts/PostForm";
import ClubHeader from "../../../components/partials/profile/HeaderClub";
import UpdateBureauCard from "../../../components/updateBurauCard";

const ClubDetailsPage = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(false);
  const handleClose = () => setShow(false);
  const [showModal, setShowModal] = useState(false);
  const handleModaleClose = () => setShowModal(false);
  const handleModaleShow = () => setShowModal(true);
  const { id } = useParams();
  const {
    data: Club,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Club Profile", id],
    queryFn: async () => await getOneClub(id),
  });
  const { userInfo } = useSelector((state) => state.user);
  const userid = userInfo.user._id;
  const findUser = Club?.data.otherDetails?.Bureau?.filter(
    (user) => user.membres === userid
  );
  const BoardMembers = ({ idMember, role, departement }) => {
    const { data: UserInfos } = useQuery({
      queryKey: ["UserInfo", idMember],
      queryFn: async () => await FetchOneUser(idMember),
    });
    return (
      <Link to={`/profile/${id}`}>
        <li className="mb-3">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <Image
                src={
                  UserInfos?.profilePicture
                    ? `http://localhost:5000/images/${UserInfos?.profilePicture}`
                    : `http://localhost:5000/images/defaultProfile.png`
                }
                className="rounded-circle avatar-50 align-items-center"
                alt="Responsive image"
              />
            </div>
            <div className="flex-grow-1 ms-3 align-items-center">
              <h6 className="h4">
                {" "}
                {UserInfos?.firstname + " " + UserInfos?.lastname}
              </h6>
              <p className="mb-0">{role + " " + departement}</p>
            </div>
          </div>
        </li>
      </Link>
    );
  };
  const initialValues = {
    id: id,
    userid: userInfo.user._id,
    Departement: "",
  };
  const Departements = [
    {
      Departement: "Marketing",
      id: 1,
    },
    {
      Departement: "Events",
      id: 2,
    },
    {
      Departement: "Sponsoring",
      id: 3,
    },
    {
      Departement: "Ressource Humaine",
      id: 4,
    },
  ];
  const [UserRole, setUserRole] = useState(findUser ? findUser[0] : null);

  const [inputs, setInputs] = useState({ ...initialValues });
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // You can directly use the 'values' object that Formik provides.
      const response = await requestJoinIn(values); // Do something with the response if needed
      return response;
    } catch (error) {
      error &&
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 5000,
          transition: Flip,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    } finally {
      setSubmitting(false);
      handleModaleClose(); // Close the modal after submitting the form
    }
  };

  const President = findUser?.role === "President";
  const VP = findUser?.role === "Vice President";
  const AVP = findUser?.role === "Assistant";
  const Markting = findUser?.Departement === "Marketing";
  const Events = findUser?.Departement === "Events";
  const Sponsoring = findUser?.Departement === "Sponsoring";
  const RH = findUser?.Departement === "Ressource Humaine";

  isLoading &&
    toast.info("Loading ...", {
      position: "bottom-center",
      autoClose: 2000,
      transition: Flip,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  error &&
    toast.error(error?.message, {
      position: "bottom-center",
      autoClose: 5000,
      transition: Flip,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const getUser = useQuery({
    queryKey: ["userdetails", userid],
    queryFn: async () => await FetchOneUser(userid),
  });
  const Clubid = getUser.data?.club;
  const { data } = useQuery({
    queryKey: ["Posts"],
    queryFn: getAllPostes,
  });
  const reversedData = [...(data?.data || [])].reverse();
  const [Posters, setPosters] = useState(reversedData);

  const requeste = getUser.data?.request;
  const adminState = getUser.data?.isAdmin;
  const BureauState = getUser.data?.isBureau;
  const getClubChapterId = Club?.data?.otherDetails?.ChapterId;
  const getUserChapterId = getUser.data?.Chapter;

  useEffect(() => {
    setPosters(reversedData);
  }, [reversedData]);
  return (
    <>
      <ClubHeader
        img={
          Club?.data.otherDetails?.coverImage
            ? `${Club?.data.otherDetails?.coverImage}`
            : "defaultCover.jpg"
        }
        title={Club?.data.otherDetails?.ClubName}
      />
      <div id="content-page" className="content-page">
        <Container>
          <Row>
            {/* this part for the header of Club details */}
            <Col lg="12" className="d-flex">
              <Col lg={8}>
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap col-span-2">
                  <div className="group-info d-flex align-items-center">
                    <div className="me-3">
                      <img
                        className="rounded-circle img-fluid avatar-100"
                        src={
                          Club?.data.otherDetails?.profileImage
                            ? `http://localhost:5000/images/${Club?.data.otherDetails?.profileImage}` +
                              Club?.data.otherDetails?.profileImage
                            : `http://localhost:5000/images/defaultProfile.png`
                        }
                        alt="profileImage"
                      />
                    </div>
                    <div className="info">
                      <h4>{Club?.data.otherDetails?.ClubName}</h4>
                      <p className="mb-0">
                        <i className="ri-lock-fill pe-2"></i>welcome to our
                        family . we are proud to have{" "}
                        {Club?.data.otherDetails?.Tunimateurs?.length + " "}
                        Tunimateurs
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg={5}
                className="d-flex justify-content-evenly align-items-center mr-2"
              >
                {Clubid !== id && (
                  <Button className="btn btn-danger d-block w-auto h-25">
                    follow
                  </Button>
                )}
                {!Clubid && (
                  <>
                    <Button
                      className="btn btn-danger w-auto h-25"
                      onClick={handleModaleShow}
                    >
                      request to join
                    </Button>
                    <Button className="btn btn-danger w-auto h-25">
                      follow
                    </Button>
                  </>
                )}
              </Col>
            </Col>
            {/*   this part for publication */}
            <Col lg="8">
              <Col lg={12} className="row m-0 p-0">
                {VP & Markting || AVP & Markting || President ? (
                  <Col sm={12}>
                    <PostForm id={id} />
                  </Col>
                ) : (
                  <></>
                )}
                {Posters?.filter((post) => post.createBy === id).map((post) => {
                  return (
                    <Col sm={12}>
                      <PostDetailsCard
                        createBy={post?.createBy}
                        Disc={post?.desc}
                        files={post?.content}
                      />
                    </Col>
                  );
                })}
              </Col>
              <Card>
                {/* <Card.Body>
                  <div className="post-item">
                    <div className="user-post-data py-3">
                      <div className="d-flex justify-content-between">
                        <div className=" me-3">
                          <img
                            className="rounded-circle img-fluid"
                            src={img6}
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
                                <Dropdown.Toggle variant="bg-transparent">
                                  <span className="material-symbols-outlined">
                                    more_horiz
                                  </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                  <Dropdown.Item
                                    className="dropdown-item p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <i className="material-symbols-outlined">
                                        save
                                      </i>
                                      <div className="data ms-2">
                                        <h6>Save Post</h6>
                                        <p className="mb-0">
                                          Add this to your saved items
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <i className="material-symbols-outlined">
                                        edit
                                      </i>
                                      <div className="data ms-2">
                                        <h6>Edit Post</h6>
                                        <p className="mb-0">
                                          Update your post and saved items
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <i className="material-symbols-outlined">
                                        cancel
                                      </i>
                                      <div className="data ms-2">
                                        <h6>Hide From Timeline</h6>
                                        <p className="mb-0">
                                          See fewer posts like this.
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <i className="material-symbols-outlined">
                                        delete
                                      </i>
                                      <div className="data ms-2">
                                        <h6>Delete</h6>
                                        <p className="mb-0">
                                          Remove thids Post on Timeline
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <i className="material-symbols-outlined">
                                        notifications
                                      </i>
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
                      <Link to="">
                        <img
                          className="img-fluid w-100"
                          src={img7}
                          alt="postimage"
                        />
                      </Link>
                    </div>
                    <div className="comment-area mt-3">
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="like-block position-relative d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="like-data">
                              <Dropdown>
                                <Dropdown.Toggle as={CustomToggle}>
                                  <img
                                    src={icon1}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="py-2 show">
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
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Max Emum
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Bill Yerds
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Hap E. Birthday
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Tara Misu
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Midge Itz
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Sal Vidge
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
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
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Max Emum
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Bill Yerds
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Tara Misu
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Midge Itz
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Sal Vidge
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
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
                                src={img10}
                                alt="userimg"
                                className="avatar-35 rounded-circle img-fluid"
                              />
                            </div>
                            <div className="comment-data-block ms-3">
                              <h6>Monty Carlo</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet</p>
                              <div className="d-flex flex-wrap align-items-center comment-activity">
                                <Link to="">like</Link>
                                <Link to="">reply</Link>
                                <Link to="">translate</Link>
                                <span> 5 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex">
                            <div className="user-img">
                              <img
                                src={img11}
                                alt="userimg"
                                className="avatar-35 rounded-circle img-fluid"
                              />
                            </div>
                            <div className="comment-data-block ms-3">
                              <h6>Paul Molive</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet</p>
                              <div className="d-flex flex-wrap align-items-center comment-activity">
                                <Link to="">like</Link>
                                <Link to="">reply</Link>
                                <Link to="">translate</Link>
                                <span> 5 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <form
                        className="comment-text d-flex align-items-center mt-3"
                        action=""
                      >
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder="Enter Your Comment"
                        />
                        <div className="comment-attagement d-flex">
                          <Link to="">
                            <i className="ri-link me-3"></i>
                          </Link>
                          <Link to="">
                            <i className="ri-user-smile-line me-3"></i>
                          </Link>
                          <Link to="">
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
                            src={img8}
                            alt=""
                          />
                        </div>
                        <div className="w-100">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="mb-0 d-inline-block me-1">
                                <Link to="#">Pete Sariya</Link>
                              </h5>
                              <p className=" mb-0 d-inline-block">
                                Update his Status
                              </p>
                              <p className="mb-0">7 hour ago</p>
                            </div>
                            <div className="card-post-toolbar">
                              <Dropdown>
                                <Dropdown.Toggle variant="bg-transparent">
                                  <span className="material-symbols-outlined">
                                    more_horiz
                                  </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                  <Dropdown.Item
                                    className="dropdown-item p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <i className="material-symbols-outlined">
                                        save
                                      </i>
                                      <div className="data ms-2">
                                        <h6>Save Post</h6>
                                        <p className="mb-0">
                                          Add this to your saved items
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <i className="material-symbols-outlined">
                                        edit
                                      </i>
                                      <div className="data ms-2">
                                        <h6>Edit Post</h6>
                                        <p className="mb-0">
                                          Update your post and saved items
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <i className="material-symbols-outlined">
                                        cancel
                                      </i>
                                      <div className="data ms-2">
                                        <h6>Hide From Timeline</h6>
                                        <p className="mb-0">
                                          See fewer posts like this.
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <i className="material-symbols-outlined">
                                        delete
                                      </i>
                                      <div className="data ms-2">
                                        <h6>Delete</h6>
                                        <p className="mb-0">
                                          Remove thids Post on Timeline
                                        </p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item p-3"
                                    to="#"
                                  >
                                    <div className="d-flex align-items-top">
                                      <i className="material-symbols-outlined">
                                        notifications
                                      </i>
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
                      <Link to="">
                        <img
                          src={img9}
                          alt="postimage"
                          className="img-fluid w-100"
                        />
                      </Link>
                    </div>
                    <div className="comment-area mt-3">
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="like-block position-relative d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="like-data">
                              <Dropdown>
                                <Dropdown.Toggle as={CustomToggle}>
                                  <img
                                    src={icon1}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="py-2 show">
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
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Max Emum
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Bill Yerds
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Hap E. Birthday
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Tara Misu
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Midge Itz
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Sal Vidge
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    href="#"
                                  >
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
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Max Emum
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Bill Yerds
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Hap E. Birthday
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Tara Misu
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Midge Itz
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
                                  Sal Vidge
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="dropdown-item"
                                  href="#"
                                >
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
                                src={img10}
                                alt="userimg"
                                className="avatar-35 rounded-circle img-fluid"
                              />
                            </div>
                            <div className="comment-data-block ms-3">
                              <h6>Monty Carlo</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet</p>
                              <div className="d-flex flex-wrap align-items-center comment-activity">
                                <Link to="">like</Link>
                                <Link to="">reply</Link>
                                <Link to="">translate</Link>
                                <span> 5 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex ">
                            <div className="user-img">
                              <img
                                src={img11}
                                alt="userimg"
                                className="avatar-35 rounded-circle img-fluid"
                              />
                            </div>
                            <div className="comment-data-block ms-3">
                              <h6>Paul Molive</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet</p>
                              <div className="d-flex flex-wrap align-items-center comment-activity">
                                <Link to="">like</Link>
                                <Link to="">reply</Link>
                                <Link to="">translate</Link>
                                <span> 5 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <form
                        className="comment-text d-flex align-items-center mt-3"
                        action=""
                      >
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder="Enter Your Comment"
                        />
                        <div className="comment-attagement d-flex">
                          <Link to="">
                            <i className="ri-link me-3"></i>
                          </Link>
                          <Link to="">
                            <i className="ri-user-smile-line me-3"></i>
                          </Link>
                          <Link to="">
                            <i className="ri-camera-line me-3"></i>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </Card.Body> */}
              </Card>
            </Col>
            {/* this page for activity of club */}
            <Col lg="4">
              <Card>
                <Card.Header className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Club Board</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  {(UserRole?.role === "President") &
                  (UserRole?.Departement === "Club") &
                  (Clubid === id) &
                  (getUser.data?.isClub === true) ? (
                    <ul className="list-inline p-0 m-0">
                      <Link to={`/Clubs/${id}/create-event`}>
                        <li className="mb-3 d-flex align-items-center">
                          <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center text-secondary justify-content-center me-3">
                            <i className="material-symbols-outlined">
                              card_membership
                            </i>
                          </div>
                          <h6 className="mb-0">new Event</h6>
                        </li>
                      </Link>

                      <Link to={`/Clubs/${id}/requests-list`}>
                        <li className="mb-3 d-flex align-items-center">
                          <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                            <i className="material-symbols-outlined">
                              add_reaction
                            </i>
                          </div>
                          <h6 className="mb-0">Request new Tunimateurs</h6>
                        </li>
                      </Link>
                    </ul>
                  ) : (
                    <></>
                  )}
                  {(UserRole?.role === "Vice President" ||
                    UserRole?.role === "Assistant") &
                  (UserRole?.Departement === "Ressource Humaine") &
                  (Clubid === id) ? (
                    <ul className="list-inline p-0 m-0">
                      <Link to={`/Clubs/${id}/requests-list`}>
                        <li className="mb-3 d-flex align-items-center">
                          <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                            <i className="material-symbols-outlined">
                              add_reaction
                            </i>
                          </div>
                          <h6 className="mb-0">Request new Tunimateurs</h6>
                        </li>
                      </Link>
                    </ul>
                  ) : (
                    <></>
                  )}
                  {(UserRole?.role === "Vice President" ||
                    UserRole?.role === "Assistant") &
                  (UserRole?.Departement === "Events") &
                  (Clubid === id) &
                  (getUser.data?.isClub === true) ? (
                    <ul className="list-inline p-0 m-0">
                      <Link to={`/Clubs/${id}/create-event`}>
                        <li className="mb-3 d-flex align-items-center">
                          <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center text-secondary justify-content-center me-3">
                            <i className="material-symbols-outlined">
                              card_membership
                            </i>
                          </div>
                          <h6 className="mb-0">new Event</h6>
                        </li>
                      </Link>
                    </ul>
                  ) : (
                    <></>
                  )}
                  <ul className="list-inline p-0 m-0">
                    <Link to={`/Clubs/${id}/tunimateurs`}>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                          <i className="material-symbols-outlined">explore</i>
                        </div>
                        <h6 className="mb-0">Tunimateurs List</h6>
                      </li>
                    </Link>
                    <Link to={`/Clubs/${id}/activityClub`}>
                      <li className="mb-3 d-flex align-items-center">
                        <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                          <i className="material-symbols-outlined">explore</i>
                        </div>
                        <h6 className="mb-0">Activity List</h6>
                      </li>
                    </Link>
                  </ul>
                  {(getClubChapterId === getUserChapterId) & BureauState ||
                  adminState ? (
                    <UpdateBureauCard
                      dataMembers={Club?.data.otherDetails?.Tunimateurs}
                    />
                  ) : (
                    <></>
                  )}
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Club Board</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="list-inline p-0 m-0">
                    <li className="mb-3">
                      <p className="mb-0">Meet Our Board ...</p>
                    </li>
                    {Club?.data.otherDetails?.Bureau?.map((user) => {
                      return (
                        <BoardMembers
                          idMember={user?.membres}
                          role={user?.role}
                          departement={user?.Departement}
                        />
                      );
                    })}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        size="sm"
        centered
        className="fade"
        id="post-modal"
        onHide={handleClose}
        show={showModal}
      >
        <Formik initialValues={inputs} onSubmit={handleSubmit}>
          {({ isSubmitting, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Header className="d-flex justify-content-between">
                <Modal.Title id="post-modalLabel">
                  Send Your request to join now
                </Modal.Title>
                <Link to="#" className="lh-1" onClick={handleClose}>
                  <span className="material-symbols-outlined">close</span>
                </Link>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Select onChange={handleChange} name="Departement">
                    <option>Default your departement</option>
                    {Departements.map((dep) => (
                      <option key={dep.id} value={dep.Departement}>
                        {dep.Departement}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Join the Club"}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ClubDetailsPage;
