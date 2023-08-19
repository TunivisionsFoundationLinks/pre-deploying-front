import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ProfileHeader from "../../../components/profile-header";
import CustomToggle from "../../../components/dropdowns";
import ShareOffcanvas from "../../../components/share-offcanvas";

//image
import img1 from "../../../assets/images/page-img/gi-1.jpg";
import user1 from "../../../assets/images/user/05.jpg";
import user2 from "../../../assets/images/user/06.jpg";
import user3 from "../../../assets/images/user/07.jpg";
import user4 from "../../../assets/images/user/08.jpg";
import user5 from "../../../assets/images/user/09.jpg";
import user6 from "../../../assets/images/user/10.jpg";
import user7 from "../../../assets/images/user/11.jpg";
import user8 from "../../../assets/images/user/12.jpg";
import user9 from "../../../assets/images/user/1.jpg";
import user10 from "../../../assets/images/user/04.jpg";
import user11 from "../../../assets/images/user/02.jpg";
import user12 from "../../../assets/images/user/03.jpg";
import user13 from "../../../assets/images/user/01.jpg";
import user14 from "../../../assets/images/user/01.jpg";
import small1 from "../../../assets/images/small/07.png";
import small2 from "../../../assets/images/small/08.png";
import small3 from "../../../assets/images/small/09.png";
import small4 from "../../../assets/images/small/10.png";
import small5 from "../../../assets/images/small/11.png";

import img2 from "../../../assets/images/page-img/52.jpg";
import img5 from "../../../assets/images/user/1.jpg";
import icon1 from "../../../assets/images/icon/01.png";
import icon2 from "../../../assets/images/icon/02.png";
import icon3 from "../../../assets/images/icon/03.png";
import icon4 from "../../../assets/images/icon/04.png";
import icon5 from "../../../assets/images/icon/05.png";
import icon6 from "../../../assets/images/icon/06.png";
import icon7 from "../../../assets/images/icon/07.png";
import header from "../../../assets/images/page-img/profile-bg7.jpg";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  GetActivity,
  Participant,
  UnParticipant,
} from "../../../api/ActivityRequest";
import { getOneClub } from "../../../api/ClubsRequest";
import CardCoordination from "../../../components/EventsComponents/CardCoordination";
import CardAboutEventDetails from "../../../components/EventsComponents/CardAboutEventDetails";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import PostPage from "../../../components/Post/PostPage";

const EventDetail = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.user);
  const InfosData = {
    id: id,
    userid: userInfo.user._id,
  };
  const {
    data: activity,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["EventDetails", id],
    queryFn: async () => await GetActivity(id),
  });
  const ClubId = activity?.CreatorId;
  const { data: clubProfile } = useQuery({
    queryKey: ["clubInfo", ClubId],
    queryFn: async () => await getOneClub(ClubId),
    refetchInterval: 5000,
  });

  const { mutate: participation } = useMutation(
    { mutationFn: (InfosData) => Participant(InfosData) },
    {
      onSuccess: () => {
        toast.info("Event is Refused", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
      onError: (error) => {
        toast.info(error.message, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        throw error;
      },
    }
  );
  const { mutate: unparticipation } = useMutation(
    { mutationFn: (InfosData) => UnParticipant(InfosData) },
    {
      onSuccess: () => {
        toast.info("Event is Refused", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
      onError: (error) => {
        toast.info(error.message, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        throw error;
      },
    }
  );
  const [exist, setExist] = useState(false);
  const ExistingUser = async () => {
    const value = await activity?.Participant?.filter((user) =>
      user.userid.toString().includes(userInfo.user._id.toString())
    );
    if (value) {
      setExist(true);
    }
  };
  useEffect(() => {
    ExistingUser();
  }, [exist]);
  return (
    <>
      <Row>
        <ProfileHeader
          img={
            activity?.activityCover
              ? `https://tlink-server.onrender.com/images/${activity?.activityCover}`
              : header
          }
          title={activity?.activityName}
        />
      </Row>

      <div id="content-page" className="content-page">
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                <div className="group-info d-flex align-items-center">
                  <div className="me-3">
                    <img
                      className="rounded-circle img-fluid avatar-100"
                      src={
                        clubProfile?.otherDetails?.profileImage
                          ? `https://tlink-server.onrender.com/images/${clubProfile?.otherDetails?.profileImage}`
                          : `https://tlink-server.onrender.com/images/defaultProfile.png`
                      }
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h4>{activity?.activityName} </h4>
                    <h5 className="mb-0">
                      <i className="ri-lock-fill pe-2"></i>
                      created by {clubProfile?.otherDetails?.ClubName}
                    </h5>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 text-white">
                  {exist === false && (
                    <Button
                      variant="primary"
                      onClick={() => participation(InfosData)}
                    >
                      <div className="d-flex text-center justify-content-between gap-2 align-items-center">
                        <i className="ri-star-line h4 text-white"></i>
                        <h6 className="text-white">Participant</h6>
                      </div>
                    </Button>
                  )}
                </div>
              </div>
            </Col>
            <Col lg="4">
              <CardCoordination Coordination={activity?.CoordinationEvent} />
              <CardAboutEventDetails
                Description={activity?.Description}
                location={activity?.Location}
                Themes={activity?.Themes}
                EventType={activity?.EventType}
                EventDate={activity?.DateEvent}
              />
            </Col>
            <Col lg="8">
              <PostPage />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EventDetail;
