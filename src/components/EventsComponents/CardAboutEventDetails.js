import React from "react";
import { Card } from "react-bootstrap";

const CardAboutEventDetails = ({
  Description,
  location,
  Themes,
  EventType,
  EventDate,
}) => {
  return (
    <Card>
      <Card.Header className="d-flex justify-content-between">
        <div className="header-title">
          <h4 className="card-title">About the Event</h4>
        </div>
      </Card.Header>
      <Card.Body>
        <ul className="list-inline p-0 m-0">
          <li className="mb-3 w-100">
            <p className="mb-0 text-primary">Event Description</p>
            <textarea
              className="border-0 w-100"
              rows={8}
              type="text"
              name="Description"
              value={Description}
              readOnly
              style={{ resize: "none" }}
            />
          </li>
          <li className="mb-3 d-flex align-items-center">
            <div className="avatar-40 rounded-circle bg-gray text-center me-3">
              <i class="ri-time-line h4"></i>
            </div>
            <h6 className="mb-0">{EventDate}</h6>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <div className="avatar-40 rounded-circle bg-gray text-center me-3">
              <i className="ri-map-pin-line h4"></i>
            </div>
            <h6 className="mb-0">{location}</h6>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <div className="avatar-40 rounded-circle bg-gray text-center me-3">
              <i className="ri-leaf-line h4"></i>
            </div>
            <h6 className="mb-0">{Themes}</h6>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <div className="avatar-40 rounded-circle bg-gray text-center me-3">
              <i className="ri-home-2-line h4"></i>
            </div>
            <h6 className="mb-0">{EventType}</h6>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default CardAboutEventDetails;
