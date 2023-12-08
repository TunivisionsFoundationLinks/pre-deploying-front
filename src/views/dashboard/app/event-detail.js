import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../../components/profile-header";

//image

import { useMutation, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  GetActivity,
  Participant,
  UnParticipant,
} from "../../../api/ActivityRequest";
import { getOneClub } from "../../../api/ClubsRequest";
import header from "../../../assets/images/page-img/profile-bg7.jpg";
import CardAboutEventDetails from "../../../components/EventsComponents/CardAboutEventDetails";
import CardCoordination from "../../../components/EventsComponents/CardCoordination";

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
              ? `http://localhost:5000/images/defaultCover.jpg`
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
                      src={`http://localhost:5000/images/defaultProfile.png`}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h4>{activity?.activityName} </h4>
                    <h5 className="mb-0">
                      <i className="ri-lock-fill pe-2"></i>
                      created by {clubProfile?.data?.otherDetails?.ClubName}
                    </h5>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <CardCoordination
                Coordination={activity?.CoordinationEvent}
                activity={activity}
                club={clubProfile?.data?.otherDetails}
              />
            </Col>
            <Col lg="8">
              <CardAboutEventDetails
                Description={activity?.Description}
                location={activity?.Location}
                Themes={activity?.Themes}
                EventType={activity?.EventType}
                EventDate={activity?.DateEvent}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EventDetail;
