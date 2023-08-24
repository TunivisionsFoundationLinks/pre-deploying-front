import React from "react";
import { Dropdown, Nav, Card, Container, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

//image
import user1 from "../../../../assets/images/user/1.jpg";
import user2 from "../../../../assets/images/user/02.jpg";
import user3 from "../../../../assets/images/user/03.jpg";
import user4 from "../../../../assets/images/user/04.jpg";
import user5 from "../../../../assets/images/user/05.jpg";

import logo from "../../../../assets/images/logo-white.png";
//Componets
import CustomToggle from "../../../dropdowns";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../../../slices/userApiSlice";
import { isLogout } from "../../../../store/auth/authSlice";
import { Flip, toast } from "react-toastify";

const Header = () => {
  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };

  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();
  const navigate = useNavigate();
  const handlelogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(isLogout());
      navigate("/login");
    } catch (err) {
      toast.error(err.message, {
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
    }
  };

  return (
    <>
      <div className="iq-top-navbar top-15">
        <Nav
          expand="lg"
          variant="light"
          className="nav navbar navbar-expand-lg navbar-light iq-navbar p-lg-0"
        >
          <Container fluid className="navbar-inner px-3">
            <div className="d-flex align-items-center gap-3  pb-2 pb-lg-0">
              <Link
                to="/"
                className="d-flex align-items-center gap-2 iq-header-logo"
              >
                <img
                  width="30"
                  height="50"
                  viewBox="0 0 24 24"
                  src={logo}
                  alt="logo TLink"
                />

                <h4
                  className="logo-title d-none d-sm-block font-weight-bold"
                  data-setting="app_name"
                >
                  Tunivisions
                </h4>
              </Link>
              <Link
                to="#"
                className="sidebar-toggle"
                data-toggle="sidebar"
                data-active="true"
                onClick={minisidebar}
              >
                <div className="icon material-symbols-outlined iq-burger-menu">
                  menu
                </div>
              </Link>
            </div>

            <ul className="navbar-nav navbar-list">
              <Nav.Item as="li">
                <Link to="/" className="d-flex align-items-center">
                  <i className="material-symbols-outlined">home</i>
                  <span className="mobile-text d-none ms-3">Home</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/search" className="d-flex align-items-center">
                  <i className="material-symbols-outlined">Search</i>
                  <span className="mobile-text d-none ms-3">Search</span>
                </Link>
              </Nav.Item>

              <Dropdown as="li" className="nav-item">
                <Dropdown.Toggle
                  href="/"
                  as={CustomToggle}
                  variant="d-flex align-items-center"
                >
                  <span className="material-symbols-outlined">group</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sub-drop sub-drop-large">
                  <Card className="shadow-none m-0">
                    <Card.Header className="d-flex justify-content-between bg-primary">
                      <div className="header-title">
                        <h5 className="mb-0 text-white">Friend Request</h5>
                      </div>
                      <small className="badge  bg-light text-dark ">4</small>
                    </Card.Header>
                    <Card.Body className="p-0">
                      <div className="iq-friend-request">
                        <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <Image
                              className="avatar-40 rounded"
                              src={user1}
                              alt=""
                              loading="lazy"
                            />
                            <div className="ms-3">
                              <h6 className="mb-0 ">Jaques Amole</h6>
                              <p className="mb-0">40 friends</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="me-3 btn btn-primary rounded"
                            >
                              Confirm
                            </Link>
                            <Link
                              to="#"
                              className="me-3 btn btn-secondary rounded"
                            >
                              Delete Request
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="iq-friend-request">
                        <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <Image
                              className="avatar-40 rounded"
                              src={user2}
                              alt=""
                              loading="lazy"
                            />
                            <div className="ms-3">
                              <h6 className="mb-0 ">Lucy Tania</h6>
                              <p className="mb-0">12 friends</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="me-3 btn btn-primary rounded"
                            >
                              Confirm
                            </Link>
                            <Link
                              to="#"
                              className="me-3 btn btn-secondary rounded"
                            >
                              Delete Request
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="iq-friend-request">
                        <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <Image
                              className="avatar-40 rounded"
                              src={user3}
                              alt=""
                              loading="lazy"
                            />
                            <div className=" ms-3">
                              <h6 className="mb-0 ">Manny Petty</h6>
                              <p className="mb-0">3 friends</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="me-3 btn btn-primary rounded"
                            >
                              Confirm
                            </Link>
                            <Link
                              to="#"
                              className="me-3 btn btn-secondary rounded"
                            >
                              Delete Request
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="iq-friend-request">
                        <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <Image
                              className="avatar-40 rounded"
                              src={user4}
                              alt=""
                              loading="lazy"
                            />
                            <div className="ms-3">
                              <h6 className="mb-0 ">Marsha Mello</h6>
                              <p className="mb-0">15 friends</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="me-3 btn btn-primary rounded"
                            >
                              Confirm
                            </Link>
                            <Link
                              to="#"
                              className="me-3 btn btn-secondary rounded"
                            >
                              Delete Request
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <Link
                          to="/dashboard/app/friend-request"
                          className=" btn text-primary"
                        >
                          View More Request
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as="li" className="nav-item ">
                <Dropdown.Toggle
                  href="#"
                  as={CustomToggle}
                  variant="search-toggle d-flex align-items-center"
                >
                  <i className="material-symbols-outlined">notifications</i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sub-drop">
                  <Card className="shadow-none m-0">
                    <Card.Header className="d-flex justify-content-between bg-primary">
                      <div className="header-title bg-primary">
                        <h5 className="mb-0 text-white ">All Notifications</h5>
                      </div>
                      <small className="badge  bg-light text-dark">4</small>
                    </Card.Header>
                    <Card.Body className="p-0">
                      <Link to="#" className="iq-sub-card">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <Image
                              className="avatar-40 rounded"
                              src={user1}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="ms-3 w-100">
                            <h6 className="mb-0 ">Emma Watson Bni</h6>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-0">95 MB</p>
                              <small className="float-right font-size-12">
                                Just Now
                              </small>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="iq-sub-card">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <Image
                              className="avatar-40 rounded"
                              src={user2}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="ms-3 w-100">
                            <h6 className="mb-0 ">New customer is join</h6>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-0">Cyst Bni</p>
                              <small className="float-right font-size-12">
                                5 days ago
                              </small>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="iq-sub-card">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <Image
                              className="avatar-40 rounded"
                              src={user3}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="ms-3 w-100">
                            <h6 className="mb-0 ">Two customer is left</h6>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-0">Cyst Bni</p>
                              <small className="float-right font-size-12">
                                2 days ago
                              </small>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="iq-sub-card">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <Image
                              className="avatar-40 rounded"
                              src={user4}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="w-100 ms-3">
                            <h6 className="mb-0 ">New Mail from Fenny</h6>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-0">Cyst Bni</p>
                              <small className="float-right font-size-12">
                                3 days ago
                              </small>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="text-center">
                        <Link
                          to="/dashboard/app/notification"
                          className=" btn text-primary"
                        >
                          View All Notifications
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as="li" className="nav-item">
                <Dropdown.Toggle
                  href="#"
                  as={CustomToggle}
                  variant="d-flex align-items-center"
                >
                  <i className="material-symbols-outlined">chat</i>
                  <span className="mobile-text d-none ms-3">Message</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sub-drop">
                  <Card className="shadow-none m-0">
                    <Card.Header className="d-flex justify-content-between bg-primary">
                      <div className="header-title bg-primary">
                        <h5 className="mb-0 text-white">All Message</h5>
                      </div>
                      <small className="badge bg-light text-dark">4</small>
                    </Card.Header>
                    <Card.Body className="p-0 ">
                      <Link to="#" className="iq-sub-card">
                        <div className="d-flex  align-items-center">
                          <div className="">
                            <Image
                              className="avatar-40 rounded"
                              src={user1}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className=" w-100 ms-3">
                            <h6 className="mb-0 ">Bni Emma Watson</h6>
                            <small className="float-left font-size-12">
                              13 Jun
                            </small>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="iq-sub-card">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <Image
                              className="avatar-40 rounded"
                              src={user2}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                            <small className="float-left font-size-12">
                              20 Apr
                            </small>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="iq-sub-card">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <Image
                              className="avatar-40 rounded"
                              src={user3}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-0 ">Why do we use it?</h6>
                            <small className="float-left font-size-12">
                              30 Jun
                            </small>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="iq-sub-card">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <Image
                              className="avatar-40 rounded"
                              src={user4}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-0 ">Variations Passages</h6>
                            <small className="float-left font-size-12">
                              12 Sep
                            </small>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="iq-sub-card">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <Image
                              className="avatar-40 rounded"
                              src={user5}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="ms-3">
                            <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                            <small className="float-left font-size-12">
                              5 Dec
                            </small>
                          </div>
                        </div>
                      </Link>
                      <div className="text-center">
                        <Link to="/chat/index" className=" btn text-primary">
                          View All Messages
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Item as="li" className="d-lg-none">
                <Link to="/notification" className="d-flex align-items-center">
                  <i className="material-symbols-outlined">notifications</i>
                  <span className="mobile-text  ms-3 d-none">
                    Notifications
                  </span>
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item d-none d-lg-none">
                <Link
                  to="#"
                  className="dropdown-toggle d-flex align-items-center"
                  id="mail-drop-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="material-symbols-outlined">mail</i>
                  <span className="mobile-text  ms-3">Message</span>
                </Link>
              </Nav.Item>
              <Dropdown as="li" className="nav-item user-dropdown">
                <Dropdown.Toggle
                  href="#"
                  as={CustomToggle}
                  variant="d-flex align-items-center"
                >
                  <Image
                    src={
                      userInfo.user.profilePicture
                        ? `https://tlinkbackendserver.onrender.com/images/${userInfo.user.profilePicture}`
                        : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
                    }
                    className="img-fluid rounded-circle me-3"
                    alt="user"
                    loading="lazy"
                  />
                  <div className="caption d-none d-lg-block">
                    <h6 className="mb-0 line-height">
                      {userInfo.user.firstname + " " + userInfo.user.lastname}
                    </h6>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sub-drop caption-menu t">
                  <Card className="shadow-none m-0">
                    <Card.Header>
                      <div className="header-title">
                        <h5 className="mb-0 ">
                          Hello{" "}
                          {userInfo.user.firstname +
                            " " +
                            userInfo.user.lastname}
                        </h5>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-0 ">
                      <div className="d-flex align-items-center iq-sub-card border-0">
                        <span className="material-symbols-outlined">
                          line_style
                        </span>
                        <div className="ms-3">
                          <Link
                            to={`/profile/${userInfo.user._id}`}
                            className="mb-0 h6"
                          >
                            My Profile
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center iq-sub-card border-0">
                        <span className="material-symbols-outlined">
                          edit_note
                        </span>
                        <div className="ms-3">
                          <Link to="/user-profile-edit" className="mb-0 h6">
                            Edit Profile
                          </Link>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center iq-sub-card"
                        onClick={handlelogout}
                      >
                        <span className="material-symbols-outlined">login</span>
                        <div className="ms-3">
                          <Nav.Item as="li" type="submet" className="mb-0 h6">
                            Sign out
                          </Nav.Item>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </Container>
        </Nav>
      </div>
    </>
  );
};

export default Header;
