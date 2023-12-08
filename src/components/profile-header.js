import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CreateChapter } from "../api/ChapterRequest";

const ProfileHeader = (props) => {
  const initialValues = {
    id: "",
    departement: "",
    password: "",
    coverImage: null,
    profileImage: null,
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputs, setInputs] = useState({ ...initialValues });
  const { userInfo } = useSelector((state) => state.user);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, type, files } = e.target;

    const inputfiles = type === "file" ? files[0].name : value;
    setInputs(
      (prev) => (
        { ...prev, [e.target.name]: e.target.value },
        { ...prev, [name]: inputfiles }
      )
    );
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("coverImage", values.coverImage);
      formData.append("profileImage", values.profileImage);
      const response = await CreateChapter(values);
      return response;
    } catch (error) {
      console.error(error);
      throw new error();
    } finally {
      handleClose();
      setSubmitting(false);
    }
  };
  return (
    <>
      <div className="header-for-bg">
        <div className="background-header position-relative">
          <img src={props.img} className="img-fluid w-100" alt="header-bg" />
          <div className="title-on-header">
            <div className="data-block">
              <h2>{props.title}</h2>
            </div>
          </div>
          {userInfo.user.isAdmin && (
            <ul className="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
              <li>
                <Button
                  className="rounded"
                  variant="danger"
                  onClick={handleShow}
                >
                  <i className="ri-pencil-line"></i>
                </Button>
              </li>
            </ul>
          )}
        </div>
      </div>
      <Modal
        size="xl"
        centered
        className="fade"
        id="post-modal"
        style={{ zIndex: "100000" }}
        onHide={handleClose}
        show={show}
      >
        <Formik initialValues={inputs} onSubmit={handleSubmit}>
          {({ isSubmitting, handleSubmit, handleChange, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Header className="d-flex justify-content-between">
                <Modal.Title id="post-modalLabel">
                  Create new chapter
                </Modal.Title>
                <Link to="#" className="lh-1" onClick={handleClose}>
                  <span className="material-symbols-outlined">close</span>
                </Link>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Chapter Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tunivisions Chapter X"
                    name="ChapterName"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="emailChapters"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label>Upload Profile Photo:</Form.Label>
                  <Form.Control
                    onChange={(event) =>
                      setFieldValue(
                        "profileImage",
                        event.currentTarget.files[0]
                      )
                    }
                    type="file"
                    required="required"
                    name="profileImage"
                    accept="image/*"
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label>Upload Cover Photo:</Form.Label>
                  <Form.Control
                    onChange={(event) =>
                      setFieldValue("coverImage", event.currentTarget.files[0])
                    }
                    type="file"
                    name="coverImage"
                    required="required"
                    accept="image/*"
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" variant="danger" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Create Chapter"}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};
export default ProfileHeader;
