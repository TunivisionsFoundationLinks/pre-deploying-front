import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Tab,
  Form,
  Button,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//image
import img1 from "../../../assets/images/user/11.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateProfile } from "../../../api/UserRequest";
import { Flip, toast } from "react-toastify";
const UserProfileEdit = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    region: "",
    Birthday: "",
    coverPicture: "",
    profilePicture: "",
    gender: "",
  });
  const states = [
    {
      name: "Ariana",
      id: "1",
    },
    {
      name: "Béja",
      id: "2",
    },
    {
      name: "Ben Arous",
      id: "3",
    },
    {
      name: "Bizerte",
      id: "4",
    },
    {
      name: "Gabès",
      id: "5",
    },
    {
      name: "Gafsa",
      id: "6",
    },
    {
      name: "Jendouba",
      id: "7",
    },
    {
      name: "Kairouan",
      id: "8",
    },
    {
      name: "Kasserine",
      id: "9",
    },
    {
      name: "Kebili",
      id: "10",
    },
    {
      name: "Kef",
      id: "11",
    },
    {
      name: "Mahdia",
      id: "12",
    },
    {
      name: "Manouba",
      id: "13",
    },
    {
      name: "Medenine",
      id: "14",
    },
    {
      name: "Monastir",
      id: "15",
    },
    {
      name: "Nabeul",
      id: "16",
    },
    {
      name: "Sfax",
      id: "17",
    },
    {
      name: "Sidi Bouzid",
      id: "18",
    },
    {
      name: "Siliana",
      id: "19",
    },
    {
      name: "Sousse",
      id: "20",
    },
    {
      name: "Tataouine",
      id: "21",
    },
    {
      name: "Tozeur",
      id: "22",
    },
    {
      name: "Tunis",
      id: "23",
    },
    {
      name: "Zaghouan",
      id: "24",
    },
  ];

  const { userInfo } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const inputfiles = type === "file" ? files[0].name : value;
    setInputs(
      (prev) => (
        { ...prev, [e.target.name]: e.target.value },
        { ...prev, [name]: inputfiles }
      )
    );
  };
  const { data, isError, isLoading } = useMutation({
    queryKey: ["UserUpdated", userInfo.user],
    queryFn: async () => await updateProfile(userInfo.user),
  });
  isLoading &&
    toast.info("loading...", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  isError &&
    toast.error(isError.message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  return (
    <>
      <Container>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col lg="12">
              <Card>
                <Card.Body className="p-0">
                  <div>
                    <Nav
                      as="ul"
                      variant="pills"
                      className="iq-edit-profile row"
                    >
                      <Nav.Item as="li" className="col-md-3 p-0">
                        <Nav.Link eventKey="first" role="button">
                          Personal Information
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="col-md-3 p-0">
                        <Nav.Link eventKey="second" role="button">
                          Change Password
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="col-md-3 p-0">
                        <Nav.Link eventKey="third" role="button">
                          Email and SMS
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="col-md-3 p-0">
                        <Nav.Link eventKey="fourth" role="button">
                          Manage Contact
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12}>
              {/* <div className="iq-edit-list-data"> */}
              <Tab.Content>
                <Tab.Pane eventKey="first" className="fade show">
                  <Card>
                    <Card.Header className="d-flex justify-content-between">
                      <div className="header-title">
                        <h4 className="card-title">Personal Information</h4>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className="form-group align-items-center">
                          <Col md="12">
                            <div className="profile-img-edit">
                              <img
                                className="profile-pic"
                                src={
                                  userInfo.user.profilePicture
                                    ? userInfo.user.profilePicture
                                    : img1
                                }
                                alt="profile-pic"
                              />

                              <div className="p-image">
                                <i className="ri-pencil-line upload-button text-white"></i>
                                <input
                                  className="file-upload"
                                  type="file"
                                  name="profilePicture"
                                />
                              </div>
                            </div>
                          </Col>
                        </Form.Group>
                        <Row className="align-items-center">
                          <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="uname" className="form-label">
                              Profile Image:
                            </Form.Label>
                            <Form.Control
                              type="file"
                              className="form-control"
                              id="uname"
                              name="profilePicture"
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="uname" className="form-label">
                              Cover Image:
                            </Form.Label>
                            <Form.Control
                              type="file"
                              className="form-control"
                              id="uname"
                              name="coverPicture"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Row>
                        <Row className="align-items-center">
                          <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="fname" className="form-label">
                              First Name:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="form-control"
                              name="firstname"
                              id="fname"
                              onChange={handleChange}
                              placeholder="Bni"
                            />
                          </Form.Group>
                          <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="lname" className="form-label">
                              Last Name:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="form-control"
                              name="lastname"
                              id="lname"
                              onChange={handleChange}
                              placeholder="Jhon"
                            />
                          </Form.Group>
                          <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="dob" className="form-label">
                              Date Of Birth:
                            </Form.Label>
                            <Form.Control
                              className="form-control"
                              type="date"
                              id="dob"
                              placeholder="1984-01-24"
                              onChange={handleChange}
                            />
                          </Form.Group>

                          <Form.Group className="form-group col-sm-6">
                            <Form.Label className="form-label">
                              State:
                            </Form.Label>
                            <Form.Select
                              onChange={handleChange}
                              defaultValue="Tunis"
                              className="form-select"
                              aria-label="Default select example 4"
                            >
                              <option>
                                {userInfo.user.state
                                  ? userInfo.user.state
                                  : "choose your state"}
                              </option>
                              {states.map((state) => (
                                <option key={state.id} value={state.name}>
                                  {state.name}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Row>
                        <Button type="submit" className="btn btn-danger me-2">
                          Submit
                        </Button>
                        <Button type="reset" className="btn bg-soft-danger">
                          Cancel
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className="fade show">
                  <Card>
                    <Card.Header className="d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Change Password</h4>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="cpass" className="form-label">
                            Current Password:
                          </Form.Label>
                          <Link to="#" className="float-end">
                            Forgot Password
                          </Link>
                          <Form.Control
                            type="Password"
                            className="form-control"
                            id="cpass"
                            defaultValue=""
                          />
                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="npass" className="form-label">
                            New Password:
                          </Form.Label>
                          <Form.Control
                            type="Password"
                            className="form-control"
                            id="npass"
                            defaultValue=""
                          />
                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="vpass" className="form-label">
                            Verify Password:
                          </Form.Label>
                          <Form.Control
                            type="Password"
                            className="form-control"
                            id="vpass"
                            defaultValue=""
                          />
                        </Form.Group>
                        <Button type="submit" className="btn btn-danger me-2">
                          Submit
                        </Button>
                        <Button type="reset" className="btn bg-soft-danger">
                          Cancel
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="third" className="fade show">
                  <Card>
                    <Card.Header className="card-header d-flex justify-content-between">
                      <div className="header-title">
                        <h4 className="card-title">Email and SMS</h4>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className="form-group row align-items-center">
                          <Form.Label
                            className="col-md-3"
                            htmlFor="emailnotification"
                          >
                            Email Notification:
                          </Form.Label>
                          <Form.Check className="col-md-9 form-check form-switch">
                            <Form.Check.Input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked11"
                              defaultChecked
                            />
                            <Form.Check.Label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked11"
                            >
                              Checked switch checkbox input
                            </Form.Check.Label>
                          </Form.Check>
                        </Form.Group>
                        <Form.Group className="form-group row align-items-center">
                          <Form.Label
                            className="col-md-3"
                            htmlFor="smsnotification"
                          >
                            SMS Notification:
                          </Form.Label>
                          <Form.Check className="col-md-9 form-check form-switch">
                            <Form.Check.Input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked12"
                              defaultChecked
                            />
                            <Form.Check.Label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked12"
                            >
                              Checked switch checkbox input
                            </Form.Check.Label>
                          </Form.Check>
                        </Form.Group>
                        <Form.Group className="form-group row align-items-center">
                          <Form.Label className="col-md-3" htmlFor="npass">
                            When To Email
                          </Form.Label>
                          <Col md="9">
                            <Form.Check className="form-check">
                              <Form.Check.Input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckDefault12"
                              />
                              <Form.Check.Label
                                className="form-check-label"
                                htmlFor="flexCheckDefault12"
                              >
                                You have new notifications.
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="form-check d-block">
                              <Form.Check.Input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="email02"
                              />
                              <Form.Check.Label
                                className="form-check-label"
                                htmlFor="email02"
                              >
                                You're sent a direct message
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="form-check d-block">
                              <Form.Check.Input
                                type="checkbox"
                                className="form-check-input"
                                id="email03"
                                defaultChecked
                              />
                              <Form.Check.Label
                                className="form-check-label"
                                htmlFor="email03"
                              >
                                Someone adds you as a connection
                              </Form.Check.Label>
                            </Form.Check>
                          </Col>
                        </Form.Group>
                        <Form.Group className="form-group row align-items-center">
                          <Form.Label className="col-md-3" htmlFor="npass">
                            When To Escalate Emails
                          </Form.Label>
                          <Col md="9">
                            <Form.Check className="form-check">
                              <Form.Check.Input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="email04"
                              />
                              <Form.Check.Label
                                className="form-check-label"
                                htmlFor="email04"
                              >
                                Upon new order.
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="form-check d-block">
                              <Form.Check.Input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="email05"
                              />
                              <Form.Check.Label
                                className="form-check-label"
                                htmlFor="email05"
                              >
                                New membership approval
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="form-check d-block">
                              <Form.Check.Input
                                type="checkbox"
                                className="form-check-input"
                                id="email06"
                                defaultChecked
                              />
                              <Form.Check.Label
                                className="form-check-label"
                                htmlFor="email06"
                              >
                                Member registration
                              </Form.Check.Label>
                            </Form.Check>
                          </Col>
                        </Form.Group>
                        <Button type="submit" className="btn btn-danger me-2">
                          Submit
                        </Button>
                        <Button type="reset" className="btn bg-soft-danger">
                          Cancel
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth" className="fade show">
                  <Card>
                    <Card.Header className="d-flex justify-content-between">
                      <div className="header-title">
                        <h4 className="card-title">Manage Contact</h4>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="cno" className="form-label">
                            Contact Number:
                          </Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            id="cno"
                            defaultValue="001 2536 123 458"
                          />
                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="email" className="form-label">
                            Email:
                          </Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            id="email"
                            defaultValue="Bnijone@demo.com"
                          />
                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="url" className="form-label">
                            Url:
                          </Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            id="url"
                            defaultValue="https://getbootstrap.com"
                          />
                        </Form.Group>
                        <Button type="submit" className="btn btn-danger me-2">
                          Submit
                        </Button>
                        <Button type="reset" className="btn bg-soft-danger">
                          Cancel
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
              {/* </div> */}
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
};

export default UserProfileEdit;
