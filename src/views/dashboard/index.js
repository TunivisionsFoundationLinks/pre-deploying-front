import React, { useState } from "react";
import { Row, Col, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import CustomToggle from "../../components/dropdowns";

//image
import user01 from "../../assets/images/user/01.jpg";
import user2 from "../../assets/images/user/02.jpg";

import s1 from "../../assets/images/page-img/s1.jpg";
import s2 from "../../assets/images/page-img/s2.jpg";
import s3 from "../../assets/images/page-img/s3.jpg";
import s4 from "../../assets/images/page-img/s4.jpg";
import s5 from "../../assets/images/page-img/s5.jpg";

import img42 from "../../assets/images/page-img/42.png";

import img9 from "../../assets/images/small/img-1.jpg";
import img10 from "../../assets/images/small/img-2.jpg";
import { useSelector } from "react-redux";
import PostForm from "../../components/Posts/PostForm";
import PostDetailsCard from "../../components/Posts/PostDetailsCard";
import { useQuery } from "@tanstack/react-query";
import { getAllPostes } from "../../api/PostRequest";
import { useEffect } from "react";
import { FetchOneUser } from "../../api/UserRequest";
import { getOneClub } from "../../api/ClubsRequest";

const Index = () => {
  const { data } = useQuery({
    queryKey: ["Posts"],
    queryFn: getAllPostes,
  });
  const { userInfo } = useSelector((state) => state.user);
  const userid = userInfo.user._id;

  const reversedData = [...(data?.data || [])].reverse();
  const [Posters, setPosters] = useState(reversedData);
  useEffect(() => {
    setPosters(reversedData);
  }, [reversedData]);
  const { data: userAuth } = useQuery({
    queryKey: ["authUser", userid],
    queryFn: async () => await FetchOneUser(userid),
  });

  return (
    <div id="content-page" className="content-page">
      <Container>
        <Row>
          <Col lg={8} className="m-0 p-0">
            <Col sm={12}>
              <PostForm />
            </Col>
            {Posters &&
              Posters?.filter((post) =>
                userAuth?.following?.includes(post?.createBy)
              ).map((post) => {
                return (
                  <Col sm={12}>
                    <PostDetailsCard
                      createBy={post.createBy}
                      Disc={post.desc}
                      files={post.content}
                    />
                  </Col>
                );
              })}
          </Col>
          <Col lg={4}>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Stories</h4>
                </div>
              </div>
              <Card.Body>
                <ul className="media-story list-inline m-0 p-0">
                  <li className="d-flex mb-3 align-items-center">
                    <i className="ri-add-line"></i>
                    <div className="stories-data ms-3">
                      <h5>Creat Your Story</h5>
                      <p className="mb-0">time to story</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3 align-items-center active">
                    <img
                      src={s2}
                      alt="story-img"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Anna Mull</h5>
                      <p className="mb-0">1 hour ago</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3 align-items-center">
                    <img
                      src={s3}
                      alt="story-img"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Ira Membrit</h5>
                      <p className="mb-0">4 hour ago</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <img
                      src={s1}
                      alt="story-img"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Bob Frapples</h5>
                      <p className="mb-0">9 hour ago</p>
                    </div>
                  </li>
                </ul>
                <Link to="#" className="btn btn-primary d-block mt-3">
                  See All
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Events</h4>
                </div>
                <div className="card-header-toolbar d-flex align-items-center">
                  <Dropdown>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      role="button"
                    >
                      <i className="ri-more-fill h4"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className=" dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Dropdown.Item href="#">
                        <i className="ri-eye-fill me-2"></i>View
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-delete-bin-6-fill me-2"></i>Delete
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-pencil-fill me-2"></i>Edit
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-printer-fill me-2"></i>Print
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-file-download-fill me-2"></i>Download
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <Card.Body>
                <ul className="media-story list-inline m-0 p-0">
                  <li className="d-flex mb-4 align-items-center ">
                    <img
                      src={s4}
                      alt="story1"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Web Workshop</h5>
                      <p className="mb-0">1 hour ago</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <img
                      src={s5}
                      alt="story2"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Fun Events and Festivals</h5>
                      <p className="mb-0">1 hour ago</p>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Upcoming Birthday</h4>
                </div>
              </div>
              <Card.Body>
                <ul className="media-story list-inline m-0 p-0">
                  <li className="d-flex mb-4 align-items-center">
                    <img
                      src={user01}
                      alt="story3"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Anna Sthesia</h5>
                      <p className="mb-0">Today</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <img
                      src={user2}
                      alt="story-img"
                      className="rounded-circle img-fluid"
                    />
                    <div className="stories-data ms-3">
                      <h5>Paul Molive</h5>
                      <p className="mb-0">Tomorrow</p>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Suggested Pages</h4>
                </div>
                <div className="card-header-toolbar d-flex align-items-center">
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                      <i className="ri-more-fill h4"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton01"
                    >
                      <Dropdown.Item href="#">
                        <i className="ri-eye-fill me-2"></i>View
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-delete-bin-6-fill me-2"></i>Delete
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-pencil-fill me-2"></i>Edit
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-printer-fill me-2"></i>Print
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="ri-file-download-fill me-2"></i>Download
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <Card.Body>
                <ul className="suggested-page-story m-0 p-0 list-inline">
                  <li className="mb-3">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={img42}
                        alt="story-img"
                        className="rounded-circle img-fluid avatar-50"
                      />
                      <div className="stories-data ms-3">
                        <h5>Iqonic Studio</h5>
                        <p className="mb-0">Lorem Ipsum</p>
                      </div>
                    </div>
                    <img
                      src={img9}
                      className="img-fluid rounded"
                      alt="Responsive"
                    />
                    <div className="mt-3">
                      <Link to="#" className="btn d-block">
                        <i className="ri-thumb-up-line me-2"></i> Like Page
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={img42}
                        alt="story-img"
                        className="rounded-circle img-fluid avatar-50"
                      />
                      <div className="stories-data ms-3">
                        <h5>Cakes & Bakes </h5>
                        <p className="mb-0">Lorem Ipsum</p>
                      </div>
                    </div>
                    <img
                      src={img10}
                      className="img-fluid rounded"
                      alt="Responsive"
                    />
                    <div className="mt-3">
                      <Link to="#" className="btn d-block">
                        <i className="ri-thumb-up-line me-2"></i> Like Page
                      </Link>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
