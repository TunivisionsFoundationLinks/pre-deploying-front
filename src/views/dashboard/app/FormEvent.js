import { useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { CreateEvent } from "../../../api/ActivityRequest";
import { getClub, getOneClub } from "../../../api/ClubsRequest";
import { fetchUsers } from "../../../api/UserRequest";
import image1 from "../../../assets/images/page-img/img-success.png";
import MultipleSelect from "../../../components/SelectGroup";
import MultipleUserSelect from "../../../components/SelectUsersGroup";

const FormEvent = () => {
  const { id } = useParams();
  const [show, AccountShow] = useState("A");

  const Clubs = useQuery({
    queryKey: ["Clubs"],
    queryFn: getClub,
  });
  const OneClub = useQuery({
    queryKey: ["OneClub", id],
    queryFn: async () => await getOneClub(id),
  });
  const { data: User } = useQuery({
    queryKey: ["Tunimateur"],
    queryFn: fetchUsers,
  });
  const Themes = [
    { name: "Conference" },
    { name: "Evenement" },
    { name: "Competition" },
    { name: "Training" },
    { name: "Action" },
    { name: "Team-building" },
    { name: "Party" },
  ];
  const tunimateursClub = User?.filter((user) => user.club === id);
  const initialValues = {
    CreatorId: id,
    activityName: "",
    activityCover: null,
    DossierSponsing: null,
    Description: "",
    Location: "",
    DateEvent: "",
    Themes: "",
    EventType: "",
    DossierSponsing: "",
    collabswith: [],
    Chapter: OneClub?.data?.otherDetails?.ChapterId,
    Participant: [],
    CoordinationEvent: [],
    partners: [],
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("activityCover", values.activityCover);
      formData.append("DossierSponsing", values.DossierSponsing);

      const response = await CreateEvent(values);
      AccountShow("Image");
      return response;
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div id="content-page" className="content-page">
        <Container>
          <Col sm="12" lg="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Create Activity</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                  {({
                    isSubmitting,
                    handleSubmit,
                    handleChange,
                    setFieldValue,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <ul id="top-tab-list" className="p-0 row list-inline">
                        <li
                          className={` ${
                            show === "Image" ? "active done" : ""
                          } ${show === "Personal" ? "active done" : ""} ${
                            show === "Account" ? "active done" : ""
                          } ${
                            show === "A" ? "active " : ""
                          } col-lg-3 col-md-6 text-start mb-2 active`}
                          id="account"
                        >
                          <Link to="#">
                            <i className="material-symbols-outlined">
                              lock_open
                            </i>
                            <span>Information</span>
                          </Link>
                        </li>
                        <li
                          id="personal"
                          className={` ${
                            show === "Image" ? "active done" : ""
                          } ${show === "Personal" ? "active done" : ""} ${
                            show === "Account" ? "active done" : ""
                          } col-lg-3 col-md-6 mb-2 text-start`}
                        >
                          <Link to="#">
                            <i className="material-symbols-outlined">person</i>
                            <span>Details</span>
                          </Link>
                        </li>
                        <li
                          id="payment"
                          className={` ${
                            show === "Image" ? "active done" : ""
                          } ${
                            show === "Personal" ? "active done" : ""
                          } col-lg-3 col-md-6 mb-2 text-start`}
                        >
                          <Link to="#">
                            <i className="material-symbols-outlined">
                              photo_camera
                            </i>
                            <span>Cover</span>
                          </Link>
                        </li>
                        <li
                          id="confirm"
                          className={` ${
                            show === "Image" ? "active done" : ""
                          } col-lg-3 col-md-6 mb-2 text-start`}
                        >
                          <Link to="#">
                            <i className="material-symbols-outlined">done</i>
                            <span>Finish</span>
                          </Link>
                        </li>
                      </ul>
                      <fieldset
                        className={`${show === "A" ? "d-block" : "d-none"}`}
                      >
                        <div className="form-card text-start">
                          <Row>
                            <div className="col-7">
                              <h3 className="mb-4">Event Information:</h3>
                            </div>
                            <div className="col-5">
                              <h2 className="steps">Step 1 - 4</h2>
                            </div>
                          </Row>
                          <Row>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Label>Event Name *</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="activityName"
                                  onChange={handleChange}
                                  placeholder="name of your activity"
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Label>Event Date: *</Form.Label>
                                <Form.Control
                                  type="date"
                                  name="DateEvent"
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group className="form-group">
                                <Form.Label>Location: *</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="Location"
                                  onChange={handleChange}
                                  placeholder="Tunivisions Foundation Marsa,Tunis"
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group
                                as={Row}
                                className="form-group d-flex justify-between w-100"
                              >
                                <Form.Label>Status: * </Form.Label>
                                <Form.Group
                                  as={Col}
                                  className="mb-3 d-flex justify-between w-100"
                                  controlId="formGridAddress1"
                                >
                                  <Form.Check
                                    type="radio"
                                    value="Regional"
                                    name="EventType"
                                    onChange={handleChange}
                                    aria-label="Regional"
                                    variant="outline-danger"
                                    className="mx-2"
                                  />
                                  <Form.Label>Regional </Form.Label>
                                </Form.Group>
                                <Form.Group
                                  as={Col}
                                  className="mb-3 d-flex justify-between align-center w-100"
                                  controlId="formGridAddress1"
                                >
                                  <Form.Check
                                    type="radio"
                                    value="Intern"
                                    name="EventType"
                                    variant="outline-danger"
                                    onChange={handleChange}
                                    aria-label="Regional"
                                    className="mx-2"
                                  />
                                  <Form.Label>Intern </Form.Label>
                                </Form.Group>
                                <Form.Group
                                  as={Col}
                                  className="mb-3 d-flex justify-between align-center w-100"
                                  controlId="formGridAddress1"
                                >
                                  <Form.Check
                                    type="radio"
                                    value="Extern"
                                    name="EventType"
                                    onChange={handleChange}
                                    aria-label="Extern"
                                    className="mx-2"
                                    variant="outline-danger"
                                  />
                                  <Form.Label>Extern </Form.Label>
                                </Form.Group>
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                        <Button
                          variant="primary"
                          name="next"
                          className="next action-button float-end"
                          value="Next"
                          onClick={() => AccountShow("Account")}
                        >
                          Next
                        </Button>
                      </fieldset>
                      <fieldset
                        className={`${
                          show === "Account" ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="form-card text-start">
                          <Row>
                            <div className="col-7">
                              <h3 className="mb-4">Program Event:</h3>
                            </div>
                            <div className="col-5">
                              <h2 className="steps">Step 2 - 4</h2>
                            </div>
                          </Row>
                          <Row>
                            <Col className="w-100">
                              <Col md="6" className="w-100">
                                <Form.Group className="form-group">
                                  <Form.Label>Description Event: *</Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    className="form-outline"
                                    type="text"
                                    onChange={handleChange}
                                    name="Description"
                                    placeholder="Details of event and program ..."
                                    rows="8"
                                    style={{ resize: "none" }}
                                  />
                                </Form.Group>
                              </Col>
                            </Col>
                            <Col className="w-100">
                              <Col md="6" className="w-100">
                                <Form.Group className="form-group">
                                  <Form.Label>Type Of event: *</Form.Label>
                                  <Form.Select
                                    name="Themes"
                                    onChange={handleChange}
                                  >
                                    <option>Select Type event Here</option>
                                    {Themes.map((theme, index) => (
                                      <option key={index} value={theme.name}>
                                        {theme.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md="6" className="w-100">
                                <MultipleUserSelect
                                  name="CoordinationEvent"
                                  label="Coordinating by: *"
                                  className="w-100"
                                  onChange={handleChange}
                                  options={tunimateursClub}
                                  required
                                  multiple
                                />
                              </Col>

                              <Col md="6" className="w-100">
                                <Form.Group className="form-group">
                                  <MultipleSelect
                                    name="partners"
                                    label="Collaborated by: *"
                                    className="w-100"
                                    options={Clubs.data}
                                    required
                                    multiple
                                  />
                                </Form.Group>
                              </Col>
                            </Col>
                          </Row>
                        </div>
                        <Button
                          variant="primary"
                          name="next"
                          className="next action-button float-end"
                          value="Next"
                          onClick={() => AccountShow("Personal")}
                        >
                          Next
                        </Button>
                        <Button
                          variant="dark"
                          name="previous"
                          className="previous action-button-previous float-end me-3"
                          value="Previous"
                          onClick={() => AccountShow("A")}
                        >
                          Previous
                        </Button>
                      </fieldset>
                      <fieldset
                        className={`${
                          show === "Personal" ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="form-card text-start">
                          <Row>
                            <div className="col-7">
                              <h3 className="mb-4">Event Cover:</h3>
                            </div>
                            <div className="col-5">
                              <h2 className="steps">Step 3 - 4</h2>
                            </div>
                          </Row>
                          <Form.Group className="form-group">
                            <Form.Label>Event Cover:</Form.Label>
                            <Form.Control
                              type="file"
                              name="activityCover"
                              onChange={(event) =>
                                setFieldValue(
                                  "activityCover",
                                  event.currentTarget.files[0]
                                )
                              }
                            />
                          </Form.Group>
                          <Form.Group className="form-group">
                            <Form.Label>
                              If your Activity sponsored share with us the
                              documents:
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="DossierSponsing"
                              onChange={(event) =>
                                setFieldValue(
                                  "DossierSponsing",
                                  event.currentTarget.files[0]
                                )
                              }
                            />
                          </Form.Group>
                        </div>
                        <Button
                          variant="primary"
                          name="next"
                          className="next action-button float-end"
                          type="submit"
                        >
                          {isSubmitting ? "submitting..." : "Submit"}
                        </Button>
                        <Button
                          variant="dark"
                          name="previous"
                          className="previous action-button-previous float-end me-3"
                          value="Previous"
                          onClick={() => AccountShow("Account")}
                        >
                          Previous
                        </Button>
                      </fieldset>
                      <fieldset
                        className={`${show === "Image" ? "d-block" : "d-none"}`}
                      >
                        <div className="form-card">
                          <Row>
                            <div className="col-7">
                              <h3 className="mb-4 text-left">Finish:</h3>
                            </div>
                            <div className="col-5">
                              <h2 className="steps">Step 4 - 4</h2>
                            </div>
                          </Row>
                          <br />
                          <br />
                          <h2 className="text-success text-center">
                            <strong>SUCCESS !</strong>
                          </h2>
                          <br />
                          <Row className="justify-content-center">
                            <div className="col-3">
                              <Image
                                src={image1}
                                className="img-fluid"
                                alt="fit-image"
                              />
                            </div>
                          </Row>
                          <br />
                          <br />
                          <Row className="justify-content-center">
                            <div className="col-7 text-center">
                              <h5 className="purple-text text-center">
                                You Have Successfully create the event
                              </h5>
                            </div>
                          </Row>
                        </div>
                      </fieldset>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default FormEvent;
