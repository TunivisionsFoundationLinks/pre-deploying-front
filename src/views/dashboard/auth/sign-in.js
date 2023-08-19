import React from "react";
import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// import 'swiper/components/navigation/navigation.scss';

//img
import logo from "../../../assets/images/logo.png";
import login1 from "../../../assets/images/login/1.jpg";
import login2 from "../../../assets/images/login/2.png";
import login3 from "../../../assets/images/login/3.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/authActions";
//toast
import { Flip, toast } from "react-toastify";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const history = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(login({ inputs, history }));
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
    }
  };

  return (
    <>
      <section className="sign-in-page">
        <div id="container-inside">
          <div id="circle-small"></div>
          <div id="circle-medium"></div>
          <div id="circle-large"></div>
          <div id="circle-xlarge"></div>
          <div id="circle-xxlarge"></div>
        </div>
        <Container className="p-0">
          <Row className="no-gutters">
            <Col md="" className="text-center pt-5">
              <div className="sign-in-detail text-white">
                <Link className="sign-in-logo mb-5" to="#">
                  <Image
                    src={logo}
                    className="img-fluid w-100 h-100"
                    alt="logo"
                  />
                </Link>
              </div>
            </Col>
            <Col md="6" className="bg-white pt-5 pt-5 pb-lg-0 pb-5">
              <div className="sign-in-from">
                <h1 className="mb-0">Sign in</h1>
                <p>Welcome, we are happy to join our community.</p>

                <Form className="mt-4">
                  <Form.Group className="form-group">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      className="mb-0"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Link to="/recoverpw" className="float-end">
                      Forgot password?
                    </Link>
                    <Form.Control
                      type="password"
                      className="mb-0"
                      name="password"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div className="d-inline-block w-100">
                    <Form.Check className="d-inline-block mt-2 pt-1">
                      <Form.Check.Input
                        type="checkbox"
                        className="me-2"
                        id="customCheck11"
                      />
                      <Form.Check.Label>Remember Me</Form.Check.Label>{" "}
                    </Form.Check>
                    <Button
                      variant="primary"
                      type="button"
                      className="float-end"
                      onClick={handleLogin}
                    >
                      Sign in
                    </Button>
                  </div>
                  <div className="sign-info">
                    <span className="dark-color d-inline-block line-height-2">
                      Don't have an account? <Link to="/sign-up">Sign up</Link>
                    </span>
                    <ul className="iq-social-media">
                      <li>
                        <a
                          href="https://www.facebook.com/Tunivisionsfoundation"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <title>facebook</title>
                            <path d="M15 16h-14c-0.553 0-1-0.447-1-1v-14c0-0.553 0.447-1 1-1h14c0.553 0 1 0.447 1 1v14c0 0.553-0.447 1-1 1zM14 2h-12v12h12v-12zM8 6c0-1.103 0.912-2 1.857-2h1.143v2h-1v1h1v2h-1v3h-2v-3h-1v-2h1v-1z"></path>
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.instagram.com/tunivisions_foundation/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            viewBox="0 0 24 28"
                            fill="currentColor"
                          >
                            <title>instagram</title>
                            <path d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM18.156 14c0 3.406-2.75 6.156-6.156 6.156s-6.156-2.75-6.156-6.156 2.75-6.156 6.156-6.156 6.156 2.75 6.156 6.156zM19.844 7.594c0 0.797-0.641 1.437-1.437 1.437s-1.437-0.641-1.437-1.437 0.641-1.437 1.437-1.437 1.437 0.641 1.437 1.437zM12 4.156c-1.75 0-5.5-0.141-7.078 0.484-0.547 0.219-0.953 0.484-1.375 0.906s-0.688 0.828-0.906 1.375c-0.625 1.578-0.484 5.328-0.484 7.078s-0.141 5.5 0.484 7.078c0.219 0.547 0.484 0.953 0.906 1.375s0.828 0.688 1.375 0.906c1.578 0.625 5.328 0.484 7.078 0.484s5.5 0.141 7.078-0.484c0.547-0.219 0.953-0.484 1.375-0.906s0.688-0.828 0.906-1.375c0.625-1.578 0.484-5.328 0.484-7.078s0.141-5.5-0.484-7.078c-0.219-0.547-0.484-0.953-0.906-1.375s-0.828-0.688-1.375-0.906c-1.578-0.625-5.328-0.484-7.078-0.484zM24 14c0 1.656 0.016 3.297-0.078 4.953-0.094 1.922-0.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656 0.094-3.297 0.078-4.953 0.078s-3.297 0.016-4.953-0.078c-1.922-0.094-3.625-0.531-5.031-1.937s-1.844-3.109-1.937-5.031c-0.094-1.656-0.078-3.297-0.078-4.953s-0.016-3.297 0.078-4.953c0.094-1.922 0.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-0.094 3.297-0.078 4.953-0.078s3.297-0.016 4.953 0.078c1.922 0.094 3.625 0.531 5.031 1.937s1.844 3.109 1.937 5.031c0.094 1.656 0.078 3.297 0.078 4.953z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.tiktok.com/@tunivisions_foundation"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-tiktok"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />{" "}
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SignIn;
