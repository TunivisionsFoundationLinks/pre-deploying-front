import React from "react";

// react-boostrap
import { Container, Col, Row, Dropdown, ProgressBar } from "react-bootstrap";

// components
import Card from "../../../components/Card";
import CustomToggle from "../../../components/dropdowns";

// Datepicker
import Datepicker from "../../../components/datepicker";

// apex-chart
import Chart from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../../api/UserRequest";
import { getClub } from "../../../api/ClubsRequest";
import { GetAllActivity } from "../../../api/ActivityRequest";
import { getAllPostes } from "../../../api/PostRequest";

const Admin = () => {
  const {
    data: Users,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["User"],
    queryFn: fetchUsers,
  });
  const { data: Clubs } = useQuery({
    queryKey: ["Clubs"],
    queryFn: getClub,
  });
  const { data: Activity } = useQuery({
    queryKey: ["Activitys"],
    queryFn: GetAllActivity,
  });
  const { data: Posts } = useQuery({
    queryKey: ["Posts"],
    queryFn: getAllPostes,
  });
  const sortedUsers = Users?.slice().sort((a, b) => b.points - a.points);
  const sortedClubs = Clubs?.slice().sort((a, b) => b.score - a.score);

  // Take the top 3 users
  const topTunimateurs = sortedUsers?.slice(0, 2);
  const topClubs = sortedClubs?.slice(0, 2);
  return (
    <>
      <div id="content-page" className="content-page">
        <Container>
          <Row as="ul" className="list-unstyled mb-0">
            <Col md="6" lg="3" as="li">
              <Card>
                <Card.Body>
                  <div className="points">
                    <span>Users Account</span>
                    <div className="d-flex align-items-center ">
                      <h3 className="text-success">{Users?.length} User</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" lg="3" as="li">
              <Card>
                <Card.Body>
                  <div className="points">
                    <span>Clubs Profiles</span>
                    <div className="d-flex align-items-center">
                      <h3>{Clubs?.length}</h3>
                      <h3 className="text-danger ms-3">Clubs</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" lg="3" as="li">
              <Card>
                <Card.Body>
                  <div className="points">
                    <span>Last Months Posts Liked</span>
                    <div className="d-flex align-items-center">
                      <h3>{Activity?.length}</h3>
                      <h3 className="text-success ms-3">Activitys</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" lg="3" as="li">
              <Card>
                <Card.Body>
                  <div className="points">
                    <span>Total Postes</span>
                    <div className="d-flex align-items-center">
                      <h3>{Posts?.data?.length}</h3>
                      <h3 className="text-success ms-3">Postes</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <Row>
                {topTunimateurs?.map((user) => {
                  return (
                    <Col lg="6" md="6" className="col-6">
                      <Card>
                        <Card.Body>
                          <div className="d-flex align-items-center justify-content-center">
                            <div className=" avatar-55 d-flex align-items-center justify-content-center">
                              <img
                                src={
                                  user.profilePicture
                                    ? `http://localhost:5000/images/${user.profilePicture}`
                                    : `http://localhost:5000/images/defaultProfile.png`
                                }
                                className="img-fluid rounded-circle "
                              />
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <p>{user.firstname + " " + user.lastname}</p>
                            <p className="mb-0">{user.points} Points</p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
                {topClubs?.map((user) => {
                  return (
                    <Col lg="6" md="6" className="col-6">
                      <Card>
                        <Card.Body>
                          <div className="d-flex align-items-center justify-content-center">
                            <div className=" avatar-55 d-flex align-items-center justify-content-center">
                              <img
                                src={
                                  user.profilePicture
                                    ? `http://localhost:5000/images/${user.ImageProfile}`
                                    : `http://localhost:5000/images/defaultProfile.png`
                                }
                                className="img-fluid rounded-circle "
                              />
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <p>{user.ClubName}</p>
                            <p className="mb-0">{user.score} Points</p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Header>
                  <div className="header-title">
                    <h4 className="card-title">Customer Gender</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="flex-wrap d-flex align-items-center justify-content-between">
                    <Col md="4" lg="4" className="d-grid gap-3 w-100">
                      <div className="d-flex align-items-start w-100 justify-content-between">
                        <i className="icon material-symbols-outlined filled text-primary mt-1">
                          fiber_manual_record
                        </i>
                        <div
                          className=" d-flex w-100 justify-content-between align-items-center"
                          // style={{ lineHeight: "1.5" }}
                        >
                          <h4 className="">Tunimateur</h4>
                          <h3 className="mb-0">
                            {
                              Users?.filter((user) => user.gender === "male")
                                .length
                            }
                          </h3>
                        </div>
                      </div>
                      <div className="d-flex align-items-start">
                        <i className="icon material-symbols-outlined filled text-info mt-1">
                          fiber_manual_record
                        </i>
                        <div
                          className="d-flex align-items-start w-100 justify-content-between"
                          style={{ lineHeight: "1.5" }}
                        >
                          <h4 className="mb-3">Tunimatrice</h4>
                          <h3 className="mb-0">
                            {
                              Users?.filter((user) => user.gender === "female")
                                .length
                            }
                          </h3>
                        </div>
                      </div>
                    </Col>
                    {/* <Chart options={adminChart1.options} className="col-md-8 col-lg-8" series={adminChart1.series} height="200" type="radialBar" /> */}
                    {/* <div id="admin-chart-03" className="col-md-8 col-lg-8 admin-chart-03"></div> */}
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <div className="header-title">
                    <h4 className="card-title">Categories</h4>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mt-2 text-dark">
                      <h6>Video hosting</h6>
                      <small>62%</small>
                    </div>
                    <ProgressBar
                      variant="danger"
                      className="mt-2"
                      now={62}
                      style={{ height: "6px" }}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mt-2 text-dark">
                      <h6>Image sharing</h6>
                      <small>46%</small>
                    </div>
                    <ProgressBar
                      variant="info"
                      className="mt-2"
                      now={46}
                      style={{ height: "6px" }}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mt-2 text-dark">
                      <h6>Community blogs</h6>
                      <small>79%</small>
                    </div>
                    <ProgressBar
                      variant="primary"
                      className="mt-2"
                      now={79}
                      style={{ height: "6px" }}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mt-2 text-dark">
                      <h6>Stories</h6>
                      <small>34%</small>
                    </div>
                    <ProgressBar
                      variant="success"
                      className="mt-2"
                      now={34}
                      style={{ height: "6px" }}
                    />
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-between mt-2 text-dark">
                      <h6>Bookmarking</h6>
                      <small>95%</small>
                    </div>
                    <ProgressBar
                      variant="warning"
                      className="mt-2"
                      now={95}
                      style={{ height: "6px" }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Admin;
