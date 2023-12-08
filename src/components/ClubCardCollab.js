import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Container } from "react-bootstrap";
import { getOneClub } from "../api/ClubsRequest";

const ClubCardCollab = ({ Club }) => {
  const { data: partner } = useQuery({
    queryKey: ["CLubPartners", Club],
    queryFn: async () => await getOneClub(Club),
  });

  return (
    <div className="d-flex gap-2 bg-light p-2 rounded justify-content-between align-middle">
      <Container className="gap-5">
        <div className="container-fluid w-auto h-auto text-center mx-auto ">
          <img
            src={
              partner?.otherDetails?.profileImage
                ? `https://tlinkbackendserver.onrender.com/images/` +
                  partner?.otherDetails?.profileImage
                : `https://tlinkbackendserver.onrender.com/images/defaultProfile.png`
            }
            className="avatar-60 rounded-circle align-middle img-fluid"
          />
        </div>

        <div className="container-fluid w-auto h-auto text-center mx-auto p-2">
          <h6 className="text-center">
            {partner?.data?.otherDetails?.ClubName}
          </h6>
        </div>
      </Container>
    </div>
  );
};

export default ClubCardCollab;
