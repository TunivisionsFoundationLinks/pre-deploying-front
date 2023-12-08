import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FetchOneUser } from "../../api/UserRequest";
const UserInfo = ({ id, Departement, role }) => {
  const { data: UserInfos } = useQuery({
    queryKey: ["UserInfo", id],
    queryFn: async () => await FetchOneUser(id),
  });
  return (
    <Link to={`/profile/${id}`}>
      <li className="mb-3 d-flex align-items-center">
        <div className="me-2">
          <Image
            src={
              UserInfos?.profilePicture
                ? `https://tlinkbackendserver.onrender.com/images/${UserInfos?.profilePicture}`
                : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
            }
            className="img-fluid avatar-50 rounded-circle me-3"
            alt="user"
            loading="lazy"
          />
        </div>
        <hr />
        <div className="d-grid">
          <h6 className="mb-0">
            {UserInfos?.firstname + " " + UserInfos?.lastname}
          </h6>
          <p className="mb-0">{role + " " + Departement}</p>
        </div>
      </li>
    </Link>
  );
};
const CardsBoard = ({ Coordination }) => {
  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title">Board Team</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <ul className="list-inline p-0 m-0">
            {Coordination?.map((user) => {
              return (
                <UserInfo
                  id={user.membres}
                  Departement={user.Departement}
                  role={user.role}
                />
              );
            })}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsBoard;
