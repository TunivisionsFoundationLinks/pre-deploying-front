import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestJoinIn } from "../api/ClubsRequest";
import { useQuery } from "@tanstack/react-query";
import { FetchOneUser } from "../api/UserRequest";
import { Flip, toast } from "react-toastify";

const ClubCard = ({
  id,
  ClubName,
  Tunimateurs,
  Events,
  emailClubs,
  ImageCover,
  ImageProfile,
  score,
}) => {
  const { userInfo } = useSelector((state) => state.user);
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
  const uuserid = userInfo.user._id;
  const { data, error, isloading, loading } = useQuery({
    queryKey: ["userInfo", uuserid],
    queryFn: async () => await FetchOneUser(uuserid),
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputs, setInputs] = useState({ ...initialValues });
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // You can directly use the 'values' object that Formik provides.
      const response = await requestJoinIn(values); // Do something with the response if needed

      handleClose(); // Close the modal after submitting the form
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
    }
  };

  return (
    <Card className="mb-0" key={id}>
      <div className="top-bg-image">
        <img
          src={
            ImageCover
              ? "http://localhost:5000/images/" + ImageCover
              : "http://localhost:5000/images/defaultCover.jpg"
          }
          className="img-fluid w-100"
          alt="group-bg"
        />
      </div>
      <Card.Body className=" text-center">
        <div className="group-icon">
          <img
            src={
              ImageProfile
                ? "http://localhost:5000/images/" + ImageProfile
                : "http://localhost:5000/images/defaultProfile.png"
            }
            alt="profile-img"
            className="rounded-circle img-fluid avatar-120"
          />
        </div>
        <div className="d-grid w-100 h-100 align-item-center">
          <div className="group-info pt-3 d-grid align-item-center">
            <div className="h-50 d-block">
              <h5>
                <Link to={`/Clubs/${id}`}>{ClubName}</Link>
              </h5>
            </div>
            <div className=" d-block">
              <p>{emailClubs}</p>
            </div>
          </div>
          <hr />
          <div className="group-details d-inline-block pb-3 d-flex justify-content-evenly ">
            <div>
              <p className="font-weight-bold">Tunimateurs</p>
              <p>{Tunimateurs}</p>
            </div>
            <div>
              <p className="font-weight-bold">Events</p>
              <p>{Events}</p>
            </div>
            <div>
              <p className="font-weight-bold">Score</p>
              <p>{score}</p>
            </div>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        {data?.club || data?.request ? (
          <Link to={`/Clubs/${id}`} className="btn btn-primary d-block w-100">
            Visit
          </Link>
        ) : (
          <div className="d-flex justify-content-evenly w-100">
            <Button
              className="btn btn-primary d-block w-50"
              onClick={handleShow}
            >
              request to join
            </Button>
            <DropdownButton id="dropdown-item-button w-50" title="Details Club">
              <Link to={`/Clubs/${id}`}>
                <Dropdown.Item as="button">Visit</Dropdown.Item>
              </Link>{" "}
              <Dropdown.Divider />
              <Dropdown.Item as="button">follow</Dropdown.Item>
            </DropdownButton>
          </div>
        )}
      </Card.Footer>
      <Modal
        size="sm"
        centered
        className="fade"
        id="post-modal"
        onHide={handleClose}
        show={show}
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
    </Card>
  );
};

export default ClubCard;
