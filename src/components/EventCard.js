import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const EventCard = ({ imageEvent }) => {
  return (
    <Card className=" rounded  mb-0">
      <div className="event-images">
        <Link to="#">
          <img src={imageEvent} className="img-fluid" alt="Responsive" />
        </Link>
      </div>
      <Card.Body>
        <div className="d-flex">
          <div className="date-of-event">
            <span>Jan</span>
            <h5>01</h5>
          </div>
          <div className="events-detail ms-3">
            <h5>
              <Link to="/dashboards/app/event-detail">
                New Year Celebration
              </Link>
            </h5>
            <p>Lorem Ipsum is simply dummy text</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
