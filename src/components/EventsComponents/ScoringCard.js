import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Scoring } from "../../api/ActivityRequest";

const ScoringCard = ({ club }) => {
  const { id } = useParams();
  const initialValues = {
    id: id,
    scoringCard: "",
    pointCoordination: "",
    pointBureau: "",
    point: "",
  };
  const [inputs, setInputs] = useState({ ...initialValues });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = localStorage.getItem("userInfo");
  const isAdmin = JSON.parse(data)?.user?.isAdmin;
  const isClub = JSON.parse(data)?.user?.isClub;
  const idUser = JSON.parse(data)?.user?._id;
  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await Scoring(values);

      return response;
    } catch (error) {
      throw new error();
    } finally {
      setSubmitting(false);
      handleClose();
    }
  };
  return (
    <>
      <div className="header-title">
        <h4 className="card-title">score Event evaluation</h4>
      </div>
      <Button
        type="button"
        variant="danger"
        className="w-100"
        onClick={handleShow}
      >
        score donation
      </Button>

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
          {({ isSubmitting, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Club</Form.Label>
                  <Form.Control
                    type="number"
                    name="point"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Bureau Club</Form.Label>
                  <Form.Control
                    type="number"
                    name="pointBureau"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Coordination</Form.Label>
                  <Form.Control
                    type="number"
                    name="pointCoordination"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" variant="danger" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Add"}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ScoringCard;
