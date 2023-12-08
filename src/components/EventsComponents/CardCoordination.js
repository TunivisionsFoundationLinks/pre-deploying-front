import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { sendLink } from "../../api/ActivityRequest";
import { FetchOneUser } from "../../api/UserRequest";

import { Formik } from "formik";
import ScoringCard from "./ScoringCard.js";

const UserInfo = ({ id }) => {
  const { data: UserInfos } = useQuery({
    queryKey: ["UserInfo", id],
    queryFn: async () => await FetchOneUser(id),
  });
  return (
    <Link to={`/profile/${id}`}>
      <li className="m-3 p-2 d-flex align-items-center border-bottom-5 border-danger">
        <div className="me-2">
          <img
            src={
              UserInfos?.profilePicture
                ? `https://tlinkbackendserver.onrender.com/images/${UserInfos?.profilePicture}`
                : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
            }
            className="img-fluid avatar-40 rounded-circle me-3"
            alt="user"
            loading="lazy"
          />
        </div>
        <h6 className="mb-0">
          {UserInfos?.firstname + " " + UserInfos?.lastname}
        </h6>
      </li>
    </Link>
  );
};
const CardCoordination = ({ Coordination, activity, club }) => {
  const { id } = useParams();
  const initialValues = {
    id: id,
    fblink: "",
    fbvediolink: "",
    vedios: "",
    album: "",
  };
  const [inputs, setInputs] = useState({ ...initialValues });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = localStorage.getItem("userInfo");
  const isAdmin = JSON.parse(data)?.user?.isAdmin;
  const isClub = JSON.parse(data)?.user?.isClub;
  const isBureau = JSON.parse(data)?.user?.isBureau;
  // const isBureauClub =
  const idUser = JSON.parse(data)?.user?._id;
  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const existUser = club?.Bureau?.filter((user) => user?.membres === idUser);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await sendLink(values);
      return response;
    } catch (error) {
      throw new error();
    } finally {
      setSubmitting(false);
      handleClose();
    }
  };
  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title">Event Team</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <ul className="list-inline p-0 m-0">
            {Coordination?.map((user, index) => {
              return <UserInfo key={index} id={user} className="" />;
            })}
          </ul>
        </Card.Body>
        {isAdmin & (activity?.verified === false) ? (
          <>
            <Card.Footer>
              <ScoringCard club={club} />
              <div className="header-title">
                <h4 className="card-title">Event evaluation</h4>
              </div>
              <Button
                type="button"
                variant="danger"
                className="w-100"
                onClick={handleShow}
              >
                verify content
              </Button>
            </Card.Footer>
            <Modal
              centered
              className="fade"
              id="post-modal"
              scrollable={true}
              onHide={handleClose}
              show={show}
              style={{ zIndex: "100000" }}
            >
              <Modal.Header className="d-flex justify-content-between ">
                <div>
                  <h5 className="modal-title" id="post-modalLabel">
                    EVENT
                  </h5>
                  <Link to={`/Clubs/` + club?._id} className="text-uppercase">
                    {club?.ClubName}
                  </Link>
                </div>
                <button
                  type="button"
                  className="btn lh-1"
                  onClick={handleClose}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </Modal.Header>
              <Modal.Body
                style={{
                  maxHeight: "calc(100vh - 210px)",
                  overflowY: "auto",
                }}
              >
                <div>
                  <h3>Link album FaceBook</h3>
                  <a href={activity?.albumFB} target="__blank">
                    {" "}
                    click here
                  </a>
                </div>
                <div>
                  <h3>Link after movie FaceBook</h3>
                  <a href={activity?.vediosFB} target="__blank">
                    {" "}
                    click here
                  </a>
                </div>
                <div>
                  <h3>Link Image T-Link</h3>
                  <a href={activity?.album} target="__blank">
                    {" "}
                    click here
                  </a>
                </div>
                <div>
                  <h3>Link Vedio T-Link</h3>
                  <a href={activity?.vedios} target="__blank">
                    {" "}
                    click here
                  </a>
                </div>
              </Modal.Body>
            </Modal>
          </>
        ) : null}
        {isClub & (existUser != null) ? (
          <>
            <Card.Footer>
              <div className="header-title">
                <h4 className="card-title">Event evaluation</h4>
              </div>
              <Button type="button" className="w-100" onClick={handleShow}>
                verify content
              </Button>
            </Card.Footer>
            <Modal
              centered
              className="fade"
              id="post-modal"
              scrollable={true}
              onHide={handleClose}
              show={show}
              style={{ zIndex: "100000" }}
            >
              <Formik initialValues={inputs} onSubmit={handleSubmit}>
                {({
                  isSubmitting,
                  handleSubmit,
                  handleChange,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>facebook link vedio</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="www.facebook.com/myAlbumImageFacebook"
                          name="fblink"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="www.facebook.com/MyVedioFacebook"
                          name="fbvediolink"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="www.tlink.com/albumImage"
                          name="album"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="www.tlink.com"
                          name="album"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Add"}
                      </Button>
                    </Modal.Footer>
                  </Form>
                )}
              </Formik>
            </Modal>
          </>
        ) : (
          <></>
        )}
      </Card>
    </div>
  );
};

export default CardCoordination;
