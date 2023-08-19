import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FetchOneUser } from "../api/UserRequest";
import { addTunimateur } from "../api/ClubsRequest";
import { Flip, toast } from "react-toastify";
import { Formik } from "formik";

const RequestCard = ({ userid, Departement }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["userRequest", userid],
    queryFn: async () => await FetchOneUser(userid),
  });
  const { id } = useParams();
  const initialValues = {
    id: id,
    userid: userid,
    Departement: Departement,
  };
  const [inputs, setInputs] = useState({ ...initialValues });
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await addTunimateur(values);
      return response;
    } catch (errors) {
      errors &&
        toast.error(errors.message, {
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
    <Card className=" mb-0">
      <Formik initialValues={inputs} onSubmit={handleSubmit}>
        {({ isSubmitting, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="top-bg-image">
              <div>
                <img
                  src={
                    data?.coverPicture
                      ? "https://tlink-server.onrender.com/images/" +
                        data?.coverPicture
                      : "https://tlink-server.onrender.com/images/defaultCover.jpg"
                  }
                  className="img-fluid bg-cover w-100"
                  style={{ height: "250px" }}
                  alt="group-bg"
                />
              </div>
            </div>
            <Card.Body className=" text-center bg-white">
              <div className="group-icon">
                <img
                  src={
                    data?.profilePicture
                      ? "https://tlink-server.onrender.com/images/" +
                        data?.profilePicture
                      : " https://tlink-server.onrender.com/images/defaultProfile.png"
                  }
                  alt="profile-img"
                  className="rounded-circle img-fluid avatar-120"
                />
              </div>
              <div className="group-info pt-3 pb-3">
                <h4>
                  <Link to={`/profile/${data?._id}`}>
                    {data?.firstname + " " + data?.lastname}
                  </Link>
                </h4>
                <p>{data?.email}</p>
                <h4 className="text-primary">{Departement}</h4>
              </div>
              <div className="group-details d-inline-block pb-3">
                <ul className="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                  <li className="pe-3 ps-3">
                    <p className="mb-0">followers</p>
                    <h6>{data?.followers?.length}</h6>
                  </li>
                  <li className="pe-3 ps-3">
                    <p className="mb-0">following</p>
                    <h6>{data?.following?.length}</h6>
                  </li>
                </ul>
              </div>
            </Card.Body>
            <Card.Footer className="w-100 d-flex justify-content-evenly gap-2">
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Accept Canndidat"}
              </Button>
              <Button className="w-50" variant="danger">
                reject
              </Button>
            </Card.Footer>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default RequestCard;
