import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchUsers } from "../api/UserRequest";
import { useQuery } from "@tanstack/react-query";

const FriendsCard = ({ users }) => {
  const {
    data: usersDetails,
    status: FollowersStatus,
    error: FollowersError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await fetchUsers(),
  });
  return (
    <Card>
      <div className="card-header d-flex justify-content-between">
        <div className="header-title">
          <h4 className="card-title">Friends</h4>
        </div>
      </div>
      <Card.Body>
        <ul className="profile-img-gallary p-0 m-0 list-unstyled">
          {usersDetails
            ?.filter((follow) => follow.friends.includes(users?.followers))
            .map((user) => (
              <li key={user._id}>
                <Link to="#">
                  <img
                    loading="lazy"
                    src={user.profilePicture}
                    alt="gallary"
                    className="img-fluid"
                  />
                </Link>
                <h6 className="mt-2 text-center">
                  {user.firstname + " " + user.lastname}
                </h6>
              </li>
            ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default FriendsCard;
