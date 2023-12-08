import { useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import { AddBureauChapter } from "../api/ChapterRequest";
import { fetchUsers } from "../api/UserRequest";

const AddBureauChapterCard = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery({
    queryKey: ["TunimateurChapter"],
    queryFn: fetchUsers,
  });
  const initialValues = {
    id: id,
    tunimateur: "",
    Departement: "",
    role: "",
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
    {
      Departement: "Chapter",
      id: 4,
    },
  ];
  const Role = [
    {
      role: "Coordinateur",
      id: 1,
    },
    {
      role: "Manager",
      id: 2,
    },
    {
      role: "Assistant",
      id: 3,
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputs, setInputs] = useState({ ...initialValues });
  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const TunimateurChapter = data?.filter((user) => user.Chapter === id);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // You can directly use the 'values' object that Formik provides.

      const response = await AddBureauChapter(values); // Do something with the response if needed
      handleClose(); // Close the modal after submitting the form
    } catch (error) {
      error &&
        toast.error(error.data, {
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
    <div>
      <button className="btn btn-none d-block w-100" onClick={handleShow}>
        choose the new Board
      </button>
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
                  Add the new Board to the Chapter
                </Modal.Title>
                <Link to="#" className="lh-1" onClick={handleClose}>
                  <span className="material-symbols-outlined">close</span>
                </Link>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Select onChange={handleChange} name="tunimateur">
                    <option>Choose the Tunimateur</option>
                    {TunimateurChapter?.map((user, index) => (
                      <option key={index} value={user._id}>
                        {user.firstname + " " + user.lastname}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select onChange={handleChange} name="role">
                    <option>Choose the Role</option>
                    {Role.map((role) => (
                      <option key={role.id} value={role.role}>
                        {role.role}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
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
                <Button type="submit" variant="danger" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "add to the board"}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default AddBureauChapterCard;
