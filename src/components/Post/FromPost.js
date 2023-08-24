import React from "react";
import { useState } from "react";
import { Button, Card, Dropdown, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import img1 from "../../assets/images/small/07.png";
import img2 from "../../assets/images/page-img/52.jpg";

const FromPost = (data) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [shows, AccountShow] = useState("A");

  const [inputs, setInputs] = useState({
    desc: "",
    images: [],
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const inputfiles = type === "file" ? files[0].name : value;
    setInputs(
      (prev) => (
        { ...prev, [e.target.name]: e.target.value },
        { ...prev, [name]: inputfiles }
      )
    );
  };
  const { userInfo } = useSelector((state) => state.user);
  const user1 = userInfo.user.profilePicture;
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
                  ? `https://tlinkbackendserver.onrender.com/images/${userInfo.user.profilePicture}`
                  : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
              }
              alt="user1"
              className="avatar-60 rounded-circle"
            />
          </div>
          <form className="post-text ms-3 w-100 " onClick={handleShow}>
            <input
              type="text"
              onChange={handleChange}
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
      <Modal
        size="lg"
        centered
        className="fade"
        id="post-modal"
        onHide={handleClose}
        show={show}
      >
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
                  user1
                    ? `https://tlinkbackendserver.onrender.com/images/${userInfo.user.profilePicture}`
                    : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
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
              <input
                type="text"
                className="form-control rounded"
                onChange={handleChange}
                placeholder="Write something here..."
                style={{ border: "none" }}
              />

              <fieldset
                className={`${shows === "addImage" ? "d-block" : "d-none"}`}
              >
                <Form.Group className="form-group">
                  {inputs.images && (
                    <img
                      className="img-fluid avatar-70 me-3"
                      src={
                        "https://tlinkbackendserver.onrender.com/images/1677365962829WhatsApp%20Image%202022-12-29%20%C3%A0%2014.12.07.jpg"
                      }
                      alt="post"
                    />
                  )}
                  <Form.Control
                    type="file"
                    onChange={handleChange}
                    name="images"
                    multiple
                  />
                </Form.Group>
              </fieldset>
            </form>
          </div>
          <hr />
          <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
            <li className="col-md-6 mb-3">
              <div className="bg-soft-primary rounded p-2 pointer me-3">
                <Button onClick={() => AccountShow("addImage")}>
                  <img src={img1} alt="icon" className="img-fluid" />{" "}
                  Photo/Video
                </Button>
              </div>
            </li>
          </ul>
          <hr />

          <button type="submit" className="btn btn-primary d-block w-100 mt-3">
            Post
          </button>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default FromPost;
