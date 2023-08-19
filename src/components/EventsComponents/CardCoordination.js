import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FetchOneUser, fetchUsers } from "../../api/UserRequest";
const UserInfo = ({ id }) => {
  const { data: UserInfos } = useQuery({
    queryKey: ["UserInfo", id],
    queryFn: async () => await FetchOneUser(id),
  });
  return (
    <Link to={`/profile/${id}`}>
      <li className="mb-3 d-flex align-items-center">
        <div className="me-2">
          <i className="ri-arrow-right-fill h4"></i>
        </div>
        <h6 className="mb-0">
          {UserInfos?.firstname + " " + UserInfos?.lastname}
        </h6>
      </li>
    </Link>
  );
};
const CardCoordination = ({ Coordination }) => {
  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title">Event Team</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <ul className="list-inline p-0 m-0">
            {Coordination?.map((user) => {
              return <UserInfo id={user} />;
            })}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCoordination;
