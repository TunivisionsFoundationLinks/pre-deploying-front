import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

//swiper
import SwiperCore, { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// import 'swiper/components/navigation/navigation.scss';

//img
import { Formik } from "formik";
import { register } from "../../../api/AuthRequest";
import logo from "../../../assets/images/logo.png";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SignUp = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    region: "",
    Birthday: "",
    coverPicture: null,
    profilePicture: null,
    gender: "",
  };
  const [inputs, setInputs] = useState(initialValues);
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
  const [show, AccountShow] = useState("A");
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    const inputfiles = type === "file" ? files[0].name : value;
    setInputs(
      (prev) => (
        { ...prev, [e.target.name]: e.target.value },
        { ...prev, [name]: inputValue },
        { ...prev, [name]: inputfiles }
      )
    );
  };

  const history = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("profilePicture", values.profilePicture);
      formData.append("coverPicture", values.coverPicture);
      const response = await register(values);
      history("/Login");
      return response;
    } catch (error) {
      throw new error();
    } finally {
      setSubmitting(false);
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
            <Col md="6" className="text-center pt-5">
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
            <Col md="6" className="bg-white pt-5 pt-5 pb-lg-0 ">
              <div className="sign-in-from">
                <h2 className="mb-0">Sign Up</h2>
                <Formik initialValues={inputs} onSubmit={handleSubmit}>
                  {({
                    isSubmitting,
                    handleSubmit,
                    handleChange,
                    setFieldValue,
                  }) => (
                    <Form
                      className="mt-1"
                      id="registration"
                      onSubmit={handleSubmit}
                    >
                      <Row>
                        <div className="col-8">
                          <h4 className="mb-2">Account Information:</h4>
                        </div>
                      </Row>
                      <TabContent id="nav-tabContent">
                        <TabPane
                          className={` ${
                            show === "A" ? "d-block" : "d-none"
                          } fade row show`}
                          id="user-detail"
                        >
                          <Row>
                            <Form.Group className="form-group">
                              <Form.Label>Your First Name</Form.Label>
                              <Form.Control
                                type="text"
                                className="mb-0"
                                id="exampleInputFN"
                                placeholder="Your First Name"
                                name="firstname"
                                onChange={handleChange}
                                required="required"
                              />
                            </Form.Group>
                            <Form.Group className="form-group">
                              <Form.Label>Your Last Name</Form.Label>
                              <Form.Control
                                type="text"
                                className="mb-0"
                                id="exampleInputLN"
                                placeholder="Your Last Name"
                                name="lastname"
                                onChange={handleChange}
                                required="required"
                              />
                            </Form.Group>
                            <Form.Group className="form-group">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                type="email"
                                className="mb-0"
                                id="exampleInputEmail2"
                                placeholder="Enter email"
                                name="email"
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                            <Form.Group className="form-group">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type="password"
                                className="mb-0"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                required
                              />{" "}
                            </Form.Group>
                            <Form.Group className="form-group">
                              <Form.Control
                                type="password"
                                className="mb-0"
                                id="exampleInputPassword2"
                                placeholder="Confirm Password"
                                name="ConfirmPassword"
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                            <Form.Group className="form-group">
                              <Form.Select
                                id="validationTooltip04"
                                name="region"
                                onChange={handleChange}
                                required
                              >
                                <option defaultValue>Choose Region</option>
                                {states.map((state) => (
                                  <option value={state.name} key={state.id}>
                                    {state.name}
                                  </option>
                                ))}
                              </Form.Select>
                            </Form.Group>
                            <Button
                              className="btn-danger float-end"
                              data-enchanter="next"
                              onClick={() => AccountShow("Account")}
                            >
                              Next
                            </Button>
                          </Row>
                        </TabPane>
                        <TabPane
                          className={` ${
                            show === "Account" ? "d-block" : "d-none"
                          } row show fade`}
                          id="document-detail"
                        >
                          <Col sm="12">
                            <Col md="12" className="p-0">
                              <h3 className="mb-4">Personal Details:</h3>
                              <Row>
                                <Form.Group className="form-group col-md-6">
                                  <Form.Label>Birthday :*</Form.Label>
                                  <Form.Control
                                    required="required"
                                    name="birthDate"
                                    onChange={handleChange}
                                    type="date"
                                    defaultValue="2000-12-18"
                                  />
                                </Form.Group>
                                <Form.Group className="form-group">
                                  <Form.Label>Gender: *</Form.Label>
                                  <Form.Check
                                    required="required"
                                    className="form-check"
                                    name="gender"
                                    onChange={handleChange}
                                  >
                                    <Form.Check className="form-check form-check-inline">
                                      <Form.Check.Input
                                        type="radio"
                                        name="gender"
                                        onChange={handleChange}
                                        className="form-check-input"
                                        value="male"
                                        id="customRadio1"
                                      />
                                      <Form.Check.Label> Male</Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="form-check form-check-inline">
                                      <Form.Check.Input
                                        type="radio"
                                        name="gender"
                                        onChange={handleChange}
                                        className="form-check-input"
                                        value="female"
                                        id="customRadio2"
                                      />
                                      <Form.Check.Label>
                                        {" "}
                                        Female
                                      </Form.Check.Label>
                                    </Form.Check>
                                  </Form.Check>
                                </Form.Group>
                                <Form.Group className="form-group">
                                  <Form.Label>Upload Profile Photo:</Form.Label>
                                  <Form.Control
                                    onChange={(event) =>
                                      setFieldValue(
                                        "profilePicture",
                                        event.currentTarget.files[0]
                                      )
                                    }
                                    type="file"
                                    required="required"
                                    name="profilePicture"
                                    accept="image/*"
                                  />
                                </Form.Group>
                                <Form.Group className="form-group">
                                  <Form.Label>Upload Cover Photo:</Form.Label>
                                  <Form.Control
                                    onChange={(event) =>
                                      setFieldValue(
                                        "coverPicture",
                                        event.currentTarget.files[0]
                                      )
                                    }
                                    type="file"
                                    name="coverPicture"
                                    required="required"
                                    accept="image/*"
                                  />
                                </Form.Group>
                              </Row>
                              <Button
                                variant="secondary"
                                className="float-start"
                                data-enchanter="previous"
                                onClick={() => AccountShow("A")}
                              >
                                Previous
                              </Button>
                              <Button
                                variant="danger"
                                className="float-end"
                                type="submit"
                              >
                                {isSubmitting ? "isSubmitting ..." : "register"}
                              </Button>
                            </Col>
                          </Col>
                        </TabPane>
                      </TabContent>

                      <div className="sign-info">
                        <span className="dark-color d-inline-block line-height-2">
                          Already Have Account ? <Link to="/">Log In</Link>
                        </span>
                        <ul className="iq-social-media">
                          <li>
                            <a
                              href="https://www.facebook.com/Tunivisionsfoundation"
                              rel="noreferrer"
                              target="_blank"
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
                        </ul>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SignUp;
