import { Formik } from "formik";
import React from "react";
import { Modal } from "react-bootstrap";

const CreateGroupeModal = () => {
  return (
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
              <Modal.Title id="post-modalLabel">Create new chapter</Modal.Title>
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
  );
};

export default CreateGroupeModal;
