import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FetchOneUser } from "../api/UserRequest";

const UserCard = ({ id }) => {
  const { data: user } = useQuery({
    queryKey: ["CoordinationEvent", id],
    queryFn: async () => await FetchOneUser(id),
  });

  return (
    <div className="d-flex gap-2 bg-light p-2 rounded justify-content-between align-middle">
      <div className="d-block ">
        <img
          src={
            user?.profilePicture
              ? `https://tlinkbackendserver.onrender.com/images/${user?.profilePicture}`
              : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
          }
          className="avatar-30 rounded-circle align-middle img-fluid"
        />
      </div>

      <div className="d-block align-item-center">
        <h5 className="d-inline-block align-bottom text-align-center">
          {user?.firstname + " " + user?.lastname}
        </h5>
      </div>
    </div>
  );
};

export default UserCard;
