import { useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getOneClub } from "../../api/ClubsRequest";
import { CreatePost } from "../../api/PostRequest";
import { FetchOneUser } from "../../api/UserRequest";
import img1 from "../../assets/images/small/07.png";

const PostForm = ({ id }) => {
  let location = useLocation();
  const { userInfo } = useSelector((state) => state.user);
  const initialValues = {
    id: id ? id : userInfo.user?._id,
    desc: "",
    images: null,
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [shows, setShows] = useState("A");
  const { data: users } = useQuery({
    queryKey: ["Creator", id],
    queryFn: async () => await FetchOneUser(id),
  });
  const { data: club } = useQuery({
    queryKey: ["Club", id],
    queryFn: async () => getOneClub(id),
  });
  const [inputs, setInputs] = useState(initialValues);
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    const imageUrls = selectedImages.map((image) => URL.createObjectURL(image));
    setInputs((prev) => ({ ...prev, images: selectedImages, imageUrls }));
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("desc", values.desc);

      values.images = inputs.images;
      values.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });
      const response = await CreatePost(values);
      handleClose();
      return response;
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  const userid = userInfo.user._id;
  const { data: userAuth } = useQuery({
    queryKey: ["authUser", userid],
    queryFn: async () => await FetchOneUser(userid),
  });
  return (
    <Card id="post-modal-data" className="card-block card-stretch">
      <div className="card-header d-flex justify-content-between">
        <div className="header-title">
          <h4 className="card-title">Create Post</h4>
        </div>
      </div>
      <Card.Body>
        <div className="d-flex align-items-center">
          <div className="user-img rounded-circle">
            {location.pathname === "/clubs/:id" ? (
              <img
                src={
                  club?.otherDetails?.profileImage &&
                  `https://tlinkbackendserver.onrender.com/images/${club?.otherDetails?.profileImage}`
                }
                alt="user1"
                className="avatar-100 rounded-circle"
              />
            ) : (
              <img
                src={
                  userAuth?.profilePicture
                    ? `https://tlinkbackendserver.onrender.com/images/${userAuth?.profilePicture}`
                    : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
                }
                alt="user1"
                className="avatar-60 rounded-circle"
              />
            )}
          </div>
          <form className="post-text ms-3 w-100 " onClick={handleShow}>
            <input
              type="text"
              className="form-control rounded"
              placeholder="Write something here..."
              style={{ border: "none" }}
            />
          </form>
        </div>
        <hr></hr>
        <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
          <li className="me-3 mb-md-0 mb-2">
            <Link to="#" className="btn btn-soft-danger">
              <img src={img1} alt="icon" className="img-fluid me-2" />{" "}
              Photo/Video
            </Link>
          </li>
        </ul>
      </Card.Body>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting, handleSubmit, handleChange, setFieldValue }) => (
          <Modal
            size="lg"
            centered
            className="fade"
            id="post-modal"
            onHide={handleClose}
            show={show}
          >
            <Form onSubmit={handleSubmit}>
              <Modal.Header className="d-flex justify-content-between">
                <Modal.Title id="post-modalLabel">Create Post</Modal.Title>
                <Link to="#" className="lh-1" onClick={handleClose}>
                  <span className="material-symbols-outlined">close</span>
                </Link>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex align-items-center">
                  <div className="user-img">
                    {location.pathname === "/clubs/:id" ? (
                      <img
                        src={
                          club?.otherDetails?.profileImage &&
                          `https://tlinkbackendserver.onrender.com/images/${club?.otherDetails?.profileImage}`
                        }
                        alt="user1"
                        className="avatar-100 rounded-circle"
                      />
                    ) : (
                      <img
                        src={
                          userAuth?.profilePicture
                            ? `https://tlinkbackendserver.onrender.com/images/${userAuth?.profilePicture}`
                            : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
                        }
                        alt="user1"
                        className="avatar-60 rounded-circle"
                      />
                    )}
                  </div>
                  <form
                    className="post-text ms-3 w-100 "
                    data-bs-toggle="modal"
                    data-bs-target="#post-modal"
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control rounded"
                        onChange={handleChange}
                        name="desc"
                        placeholder="Write something here..."
                        style={{ border: "none" }}
                      />
                    </div>
                    <div>
                      <fieldset
                        className={`${
                          shows === "addImage" ? "d-block w-100" : "d-none"
                        }`}
                      >
                        <Form.Group className="form-group gap-2">
                          {inputs.images?.map((image, index) => (
                            <img
                              key={index}
                              className="img-fluid avatar-70 my-3 mx-2"
                              src={URL.createObjectURL(image)}
                              alt={`uploaded-image-${index}`}
                            />
                          ))}
                          <Form.Control
                            type="file"
                            onChange={handleImageChange}
                            name="images"
                            multiple
                          />
                        </Form.Group>
                      </fieldset>
                    </div>
                  </form>
                </div>
                <hr />
                <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                  <li className=" mb-3">
                    <div className="bg-soft-primary rounded p-2 pointer me-3">
                      <Button onClick={() => setShows("addImage")}>
                        <img src={img1} alt="icon" className="img-fluid" />{" "}
                        Photo/Video
                      </Button>
                    </div>
                  </li>
                </ul>
                <hr />

                <button
                  type="submit"
                  variant="primary"
                  className="d-block w-100 mt-3 btn btn-primary"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  Post
                </button>
              </Modal.Body>
            </Form>
          </Modal>
        )}
      </Formik>
    </Card>
  );
};

export default PostForm;
