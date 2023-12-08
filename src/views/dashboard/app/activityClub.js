import React from "react";
import { Container } from "react-bootstrap";

//profile-header
import ProfileHeader from "../../../components/profile-header";

import img6 from "../../../assets/images/page-img/profile-bg6.jpg";
import EventsCard from "../../../components/EventsCard";
import { useQuery } from "@tanstack/react-query";
import { GetAllActivity } from "../../../api/ActivityRequest";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ProfileClubEvents = () => {
  const { data, error, isloding } = useQuery({
    queryKey: ["All-Activity"],
    queryFn: GetAllActivity,
  });
  const { id } = useParams();

  return (
    <div>
      <ProfileHeader title="Events" img={img6} />
      <div id="content-page" className="content-page">
        <Container>
          <div className="d-grid gap-3 d-grid-template-1fr-19">
            {data &&
              data
                .filter((activity) => activity.CreatorId === id)
                .map((activity, index) => (
                  <EventsCard
                    key={index}
                    id={activity?._id}
                    activityName={activity.activityName}
                    Participant={activity.Participant.length}
                    Description={activity.Description}
                    DateEvent={activity.DateEvent}
                    Themes={activity.Themes}
                    EventType={activity.EventType}
                    activityCover={activity.activityCover}
                    CreatedBy={activity.CreatorId}
                    accepted={activity.accepted}
                    partners={activity.partners}
                    DossierSponsing={activity.DossierSponsing}
                    CoordinationEvent={activity.CoordinationEvent}
                  />
                ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProfileClubEvents;
