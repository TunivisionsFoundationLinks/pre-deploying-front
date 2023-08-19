import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";

//Sweet alert
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../../api/UserRequest";
import { Flip, toast } from "react-toastify";
import { getClub } from "../../../api/ClubsRequest";
const SearchPage = () => {
  const URL = process.env.SERVER_URL_IMAGE;
  const questionAlert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: "btn btn-outline-primary btn-lg ms-2",
        confirmButton: "btn btn-primary btn-lg",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "cancel",
        confirmButtonText: "Yes, delete it!",

        reverseButtons: false,
        showClass: {
          popup: "animate__animated animate__zoomIn",
        },
        hideClass: {
          popup: "animate__animated animate__zoomOut",
        },
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your Request has been deleted.",
            icon: "success",
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__zoomOut",
            },
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Your Request is safe!",
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__zoomOut",
            },
          });
        }
      });
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchUsers,
  });
  const {
    data: Clubs,
    isError,
    isLoading: load,
  } = useQuery({
    queryKey: ["Clubs"],
    queryFn: getClub,
  });

  const [filters, setFilters] = useState({ data: data, Club: Clubs });
  const [Input, setInput] = useState();
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    searchWord ? setInput(searchWord) : setInput("");
    const newData = data?.filter((row) => {
      return (
        row.lastname
          ?.toLowerCase()
          ?.replace(/\s/g, "")
          ?.includes(e.target.value?.toLowerCase()?.replace(/\s/g, "")) ||
        row.firstname
          ?.toLowerCase()
          ?.replace(/\s/g, "")
          ?.includes(e.target.value?.toLowerCase()?.replace(/\s/g, "")) ||
        row.email
          ?.toLowerCase()
          ?.replace(/\s/g, "")
          ?.includes(e.target.value?.toLowerCase()?.replace(/\s/g, ""))
      );
    });
    const ClubsData = Clubs?.filter((row) => {
      return (
        row.ClubName?.toLowerCase()
          ?.replace(/\s/g, "")
          ?.includes(e.target.value?.toLowerCase()) ||
        row.emailClubs
          ?.toLowerCase()
          ?.replace(/\s/g, "")
          ?.includes(e.target.value?.toLowerCase())
      );
    });
    setFilters({ data: newData, Club: ClubsData });
  };

  isLoading &&
    toast.info("waiting...", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  error &&
    toast.error(error.message, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  return (
    <div id="content-page" className="content-page">
      <Container>
        <Row className="mb-5">
          <div className="iq-search-bar device-search  position-relative">
            <input
              type="text"
              className="search-input form-control bg-soft-primary  d-none d-lg-block"
              placeholder="Looking for something..."
              onChange={handleFilter}
            />
          </div>
        </Row>
        <Row>
          {Input && (
            <Col sm="12">
              <h1>T-Link Users</h1>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Friend Request</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="request-list list-inline m-0 p-0">
                    {filters?.data?.slice(1, 8).map((user, key) => (
                      <li
                        className="d-flex align-items-center  justify-content-between flex-wrap "
                        key={key}
                      >
                        <Link
                          to={`/friend-profile/${user?._id}`}
                          className="d-flex align-items-center"
                        >
                          <div className="user-img img-fluid flex-shrink-0">
                            <img
                              src={
                                user?.profilePicture
                                  ? `http://localhost:5000/images/${user?.profilePicture}`
                                  : `http://localhost:5000/images/defaultProfile.png`
                              }
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="">
                              {user?.firstname + " " + user?.lastname}
                            </h6>
                            <p className="mb-0">
                              {user?.followers.length} T-Link Followers
                            </p>
                          </div>
                        </Link>
                        <div className="d-flex align-items-center mt-2 mt-md-0">
                          <div className="confirm-click-btn">
                            <Button
                              to="#"
                              className="me-3 btn btn-primary rounded confirm-btn"
                            >
                              Request Friends
                            </Button>
                            <Link
                              to="#"
                              className="me-3 btn btn-primary rounded request-btn"
                              style={{ display: "none" }}
                            >
                              View All
                            </Link>
                          </div>
                          <Link
                            to="#"
                            onClick={questionAlert}
                            className="btn btn-secondary rounded"
                            data-extra-toggle="delete"
                            data-closest-elem=".item"
                          >
                            Delete Request
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
              <h1>T-Link Clubs</h1>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Clubs follows</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="request-list list-inline m-0 p-0">
                    {filters?.Club?.slice(1, 8).map((user, key) => (
                      <li
                        className="d-flex align-items-center  justify-content-between flex-wrap "
                        key={key}
                      >
                        <Link
                          to={`/friend-profile/${user._id}`}
                          className="d-flex align-items-center"
                        >
                          <div className="user-img img-fluid flex-shrink-0">
                            <img
                              src={
                                user?.profilePicture
                                  ? `http://localhost:5000/images/${user.ImageProfile}`
                                  : `http://localhost:5000/images/defaultProfile.png`
                              }
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="">{user?.ClubName}</h6>
                            <p className="mb-0">
                              {user?.followers.length} T-Link Followers
                            </p>
                          </div>
                        </Link>
                        <div className="d-flex align-items-center mt-2 mt-md-0">
                          <div className="confirm-click-btn">
                            <Button
                              to="#"
                              className="me-3 btn btn-primary rounded confirm-btn"
                            >
                              Request Friends
                            </Button>
                            <Link
                              to="#"
                              className="me-3 btn btn-primary rounded request-btn"
                              style={{ display: "none" }}
                            >
                              View All
                            </Link>
                          </div>
                          <Link
                            to="#"
                            onClick={questionAlert}
                            className="btn btn-secondary rounded"
                            data-extra-toggle="delete"
                            data-closest-elem=".item"
                          >
                            Delete Request
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default SearchPage;
