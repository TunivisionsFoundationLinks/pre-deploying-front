import React from "react";

import { Link } from "react-router-dom";
import Card from "./Card";

// images

import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getOneClub } from "../api/ClubsRequest";
import UserCard from "./userCard";
import ClubCardCollab from "./ClubCardCollab";
import DossierDownloadLink from "./LinkToDownload";
import { RefusedActivity, AccepteActivity } from "../api/ActivityRequest";
import { toast } from "react-toastify";
const EventsCard = ({
  id,
  activityName,
  CoordinationEvent,
  activityCover,
  partners,
  CreatedBy,
  Description,
  EventType,
  accepted,
  Themes,
  DossierSponsing,
  DateEvent,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { data, error, isLoading } = useQuery({
    queryKey: ["CreatedBy", CreatedBy],
    queryFn: async () => await getOneClub(CreatedBy),
  });
  const { mutate: refuseActivity } = useMutation(
    { mutationFn: (id) => RefusedActivity(id) },
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
        handleClose();
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
      },
    }
  );
  const { mutate: accepteActivity } = useMutation(
    { mutationFn: (id) => AccepteActivity(id) },
    {
      onSuccess: () => {
        toast.info("Event is Accepted", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClose();
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
      },
    }
  );
  return (
    <div className="m-2 ">
      <Card className="rounded mb-0 ">
        <div className="event-images">
          <Link to={`/activitys/${id}`}>
            <img
              src={
                activityCover
                  ? "https://tlinkbackendserver.onrender.com/images/" +
                    activityCover
                  : "https://tlinkbackendserver.onrender.com/images/defaultCover.jpg"
              }
              className="img-fluid"
              alt="Responsive"
            />
          </Link>
        </div>
        <div className="card-body">
          <div className="d-flex flex-8">
            <div className="date-of-event flex-1">
              <div className="d-block">
                <span>Date Event </span>
                <span>{DateEvent}</span>

                <p>{Themes}</p>
                <p>{EventType}</p>
                <p>{accepted}</p>
              </div>
            </div>
            <div className="events-detail ms-3 w-100 justify-content-evenly h-50 d-block flex-4 text-wrap">
              <div>
                <h4 className="text-uppercase">
                  <Link to={`/activitys/${id}`}>{activityName} </Link>
                </h4>
                <h6>{data?.otherDetails?.ClubName}</h6>
              </div>
              <div className="d-flex justify-content-evenly ">
                <Button type="button" onClick={handleShow}>
                  Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Modal
        size="xl"
        centered
        className="fade"
        id="post-modal"
        scrollable={true}
        onHide={handleClose}
        show={show}
        style={{ zIndex: "100000" }}
      >
        <Modal.Header className="d-flex justify-content-between ">
          <div>
            <h5 className="modal-title" id="post-modalLabel">
              {activityName}
            </h5>
            <Link
              to={`/Clubs/` + data?.otherDetails?._id}
              className="text-uppercase"
            >
              {data?.otherDetails?.ClubName}
            </Link>
          </div>
          <button type="button" className="btn lh-1" onClick={handleClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </Modal.Header>
        <Modal.Body
          style={{
            maxHeight: "calc(100vh - 210px)",
            overflowY: "auto",
          }}
        >
          <div className="d-flex gap-3">
            <div className="event-images container-fluid">
              <img
                loading="lazy"
                src={
                  activityCover
                    ? "https://tlinkbackendserver.onrender.com/images/" +
                      activityCover
                    : "https://tlinkbackendserver.onrender.com/images/defaultCover.jpg"
                }
                className="img-fluid "
                alt="profile-img"
              />

              <div>
                <h5>
                  this event has been sponsored, you can find the documents of
                  events in the link below
                </h5>
                {DossierSponsing && (
                  <DossierDownloadLink dossierFileName={DossierSponsing} />
                )}
              </div>
              <div className="d-flex gap-2">
                {CoordinationEvent?.map((user, index) => {
                  return <UserCard id={user} key={index} />;
                })}
              </div>
            </div>
            <div className="flex-2 w-100 gap-3">
              <div className="d-grid gap-2">
                <label className="text-primary">Description Event:</label>
                <textarea
                  className="border-0"
                  rows={8}
                  type="text"
                  name="Description"
                  value={Description}
                  readOnly
                  style={{ resize: "none" }}
                />
              </div>
              <div className="d-grid gap-3">
                <div className="d-grid gap-2">
                  <h5 className="text-primary">Coordinating Team :</h5>
                </div>
                <div className="d-grid gap-2">
                  <h5 className="text-primary">Collaborated with :</h5>
                  <div className="d-flex gap-2 my-auto w-auto">
                    {partners.map((partner, i) => {
                      return <ClubCardCollab Club={partner} key={i} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex w-100 gap-2 justify-content-evenly">
            {accepted === "waiting" ? (
              <>
                <Button
                  variant="primary"
                  className="d-block w-50 mt-3"
                  onClick={() => accepteActivity(id)}
                >
                  Accept the Event
                </Button>

                <Button
                  variant="secondary"
                  className="d-block w-50 mt-3"
                  onClick={() => refuseActivity(id)}
                >
                  Refuse the Event
                </Button>
              </>
            ) : (
              <Link to={`/activitys/${id}`}>Visit</Link>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventsCard;
