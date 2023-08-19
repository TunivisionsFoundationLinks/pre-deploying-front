import React from "react";
import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/small/07.png";
import { Formik } from "formik";
import { CreatePost } from "../../api/PostRequest";

const PostForm = ({ id }) => {
  const { userInfo } = useSelector((state) => state.user);
  const initialValues = {
    id: userInfo.user?._id,
    desc: "",
    images: null,
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [shows, setShows] = useState("A"); // Updated state variable name

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
      console.log(values);
      const response = await CreatePost(values);
      handleClose();
      return response;
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Card id="post-modal-data" className="card-block card-stretch card-height">
      <div className="card-header d-flex justify-content-between">
        <div className="header-title">
          <h4 className="card-title">Create Post</h4>
        </div>
      </div>
      <Card.Body>
        <div className="d-flex align-items-center">
          <div className="user-img">
            <img
              src={
                userInfo.user.profilePicture
                  ? `https://tlink-server.onrender.com/images/${userInfo.user.profilePicture}`
                  : `https://tlink-server.onrender.com/images/defaultProfile.png`
              }
              alt="user1"
              className="avatar-60 rounded-circle"
            />
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
            <Link to="#" className="btn btn-soft-primary">
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
                    <img
                      src={
                        userInfo.user.profilePicture
                          ? `https://tlink-server.onrender.com/images/${userInfo.user.profilePicture}`
                          : `https://tlink-server.onrender.com/images/defaultProfile.png`
                      }
                      alt="user1"
                      className="avatar-60 rounded-circle img-fluid"
                    />
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
                  <li className="col-md-6 mb-3">
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
                  className="btn btn-primary d-block w-100 mt-3"
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
