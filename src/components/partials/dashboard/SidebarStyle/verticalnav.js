import React, { useContext, useState } from "react";

//router
import { Link, useLocation } from "react-router-dom";

//react-bootstrap
import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  AccordionContext,
  Nav,
  OverlayTrigger,
  Tooltip,
  useAccordionButton,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { FetchOneUser } from "../../../../api/UserRequest";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = React.memo(() => {
  const [activeMenu, setActiveMenu] = useState(false);

  //location
  let location = useLocation();

  const { userInfo } = useSelector((state) => state?.user);
  const userid = userInfo?.user?._id;
  const { data, error, isLoading } = useQuery({
    queryKey: ["user-request", userid],
    queryFn: async () => await FetchOneUser(userid),
  });
  return (
    <React.Fragment>
      <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
        {userInfo?.user?.isAdmin && (
          <>
            <li className="nav-item static-item">
              <Link
                className="nav-link static-item disabled"
                to="#"
                tabIndex="-1"
              >
                <span className="default-icon">administration</span>
                <span
                  className="mini-icon"
                  data-bs-toggle="tooltip"
                  title="Social"
                  data-bs-placement="right"
                >
                  -
                </span>
              </Link>
            </li>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/admin" ? "active" : ""
                } nav-link`}
                to="/admin"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Admin & Permission</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">
                    admin_panel_settings
                  </i>
                </OverlayTrigger>
                <span className="item-name">Admin</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/activitys" ? "active" : ""
                } nav-link`}
                to="/activitys"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Admin & Permission</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">
                    admin_panel_settings
                  </i>
                </OverlayTrigger>
                <span className="item-name">ActivtyClub</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/rankings" ? "active" : ""
                } nav-link`}
                to="/rankings"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Admin & Permission</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">
                    admin_panel_settings
                  </i>
                </OverlayTrigger>
                <span className="item-name">Ranks</span>
              </Link>
            </Nav.Item>
            <Accordion.Item as="li" eventKey="mail-menu" bsPrefix="nav-item">
              <CustomToggle
                eventKey="mail-menu"
                onClick={(activeKey) => setActiveMenu(activeKey)}
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Mail</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">mail_outline</i>
                </OverlayTrigger>
                <span className="item-name">Mail</span>
                <i className="right-icon material-symbols-outlined">
                  chevron_right
                </i>
              </CustomToggle>
              <Accordion.Collapse eventKey="mail-menu">
                <ul className="sub-nav">
                  <Nav.Item as="li">
                    <Link
                      className={`${
                        location.pathname === "/email" ? "active" : ""
                      } nav-link`}
                      to="/email"
                    >
                      <i className="icon material-symbols-outlined">
                        mail_outline
                      </i>

                      <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip>Inbox</Tooltip>}
                      >
                        <i className="sidenav-mini-icon"> I </i>
                      </OverlayTrigger>
                      <span className="item-name">Inbox</span>
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      className={`${
                        location.pathname === "/email-compose" ? "active" : ""
                      } nav-link`}
                      to="/email-compose"
                    >
                      <i className="icon material-symbols-outlined">
                        mail_outline
                      </i>
                      <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip>Email Compose</Tooltip>}
                      >
                        <i className="sidenav-mini-icon"> EC </i>
                      </OverlayTrigger>
                      <span className="item-name">Email Compose</span>
                    </Link>
                  </Nav.Item>
                </ul>
              </Accordion.Collapse>
            </Accordion.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/Clubs" ? "active" : ""
                } nav-link `}
                aria-current="page"
                to="/Clubs"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Group</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">groups</i>
                </OverlayTrigger>
                <span className="item-name">Clubs List</span>
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/Carthage" ? "active" : ""
                } nav-link `}
                aria-current="page"
                to="/Carthage"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Group</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">groups</i>
                </OverlayTrigger>
                <span className="item-name">we are Carthage groups</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/Chapters" ? "active" : ""
                } nav-link `}
                aria-current="page"
                to="/Chapters"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Group</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">groups</i>
                </OverlayTrigger>
                <span className="item-name">Chapters national</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/PNational" ? "active" : ""
                } nav-link `}
                aria-current="page"
                to="/PNational"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Group</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">groups</i>
                </OverlayTrigger>
                <span className="item-name">Projects national</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/todo" ? "active" : ""
                } nav-link `}
                aria-current="page"
                to="/todo"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Todo</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">task_alt</i>
                </OverlayTrigger>
                <span className="item-name">Activity</span>
              </Link>
            </Nav.Item>
            <li>
              <hr className="hr-horizontal" />
            </li>
          </>
        )}

        <li className="nav-item static-item">
          <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
            <span className="default-icon">Social</span>
            <span
              className="mini-icon"
              data-bs-toggle="tooltip"
              title="Social"
              data-bs-placement="right"
            >
              -
            </span>
          </Link>
        </li>
        <li
          className={`${location.pathname === "/" ? "active" : ""} nav-item `}
        >
          <Link
            className={`${location.pathname === "/" ? "active" : ""} nav-link `}
            aria-current="page"
            to="/"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Newsfeed</Tooltip>}
            >
              <i className="icon material-symbols-outlined">newspaper</i>
            </OverlayTrigger>
            <span className="item-name">Newsfeed</span>
          </Link>
        </li>
        <Nav.Item as="li">
          <Link
            className={`${
              location.pathname === "/profile/:id" ? "active" : ""
            } nav-link`}
            to={`/profile/${userInfo?.user?._id}`}
          >
            <i className="icon material-symbols-outlined">person</i>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Profile</Tooltip>}
            >
              <i className="sidenav-mini-icon"> P </i>
            </OverlayTrigger>
            <span className="item-name"> Profile </span>
          </Link>
        </Nav.Item>
        {data?.isClub === true ? (
          <>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === `/Clubs/${data?.club}` ? "active" : ""
                } nav-link `}
                aria-current="page"
                to={`/Clubs/${data?.club}`}
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Group</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">groups</i>
                </OverlayTrigger>
                <span className="item-name text-wrap">{data?.clubName}</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/Clubs" ? "active" : ""
                } nav-link `}
                aria-current="page"
                to="/Clubs"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Group</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">groups</i>
                </OverlayTrigger>
                <span className="item-name">Clubs</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === `/Chapter/${data?.Chapter}`
                    ? "active"
                    : ""
                } nav-link `}
                aria-current="page"
                to={`/Chapter/${data?.Chapter}`}
              >
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Group</Tooltip>}
                >
                  <i className="icon material-symbols-outlined">groups</i>
                </OverlayTrigger>
                <span className="item-name">
                  Chapter {`${data?.ChapterName}`}
                </span>
              </Link>
            </Nav.Item>
          </>
        ) : (
          <Nav.Item as="li">
            <Link
              className={`${
                location.pathname === "/Clubs" ? "active" : ""
              } nav-link `}
              aria-current="page"
              to="/Clubs"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Group</Tooltip>}
              >
                <i className="icon material-symbols-outlined">groups</i>
              </OverlayTrigger>
              <span className="item-name">Clubs List</span>
            </Link>
          </Nav.Item>
        )}
        {(data?.isBureau === true) & (data?.isClub === true) ? (
          <Nav.Item as="li">
            <Link
              className={`${
                location.pathname === `/Chapter/${data?.Chapter}`
                  ? "active"
                  : ""
              } nav-link `}
              aria-current="page"
              to={`/Chapter/${data?.Chapter}`}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Group</Tooltip>}
              >
                <i className="icon material-symbols-outlined">groups</i>
              </OverlayTrigger>
              <span className="item-name">
                Chapter {`${data?.ChapterName}`}
              </span>
            </Link>
          </Nav.Item>
        ) : (
          <></>
        )}
        <Nav.Item as="li">
          <Link
            className={`${
              location.pathname === "/notification" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/notification"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Notification</Tooltip>}
            >
              <i className="icon material-symbols-outlined">notifications</i>
            </OverlayTrigger>
            <span className="item-name">Notification</span>
          </Link>
        </Nav.Item>
      </Accordion>
    </React.Fragment>
  );
});

export default VerticalNav;
