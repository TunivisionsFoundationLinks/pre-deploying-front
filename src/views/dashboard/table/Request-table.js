import React, { useState } from "react";
import { Container } from "react-bootstrap";
import img7 from "../../../assets/images/page-img/profile-bg7.jpg";

import RequestHeadersPage from "../../../components/partials/profile/RequestHeadersPage";
import RequestCard from "../../../components/RequestCard";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneClub } from "../../../api/ClubsRequest";
import { fetchUsers } from "../../../api/UserRequest";
const RequestTable = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchUsers,
  });
  const Club = useQuery({
    queryKey: ["club-requester", id],
    queryFn: async () => getOneClub(id),
  });

  const request = Club?.data?.data?.otherDetails?.requeste;
  return (
    <Container>
      <RequestHeadersPage img={img7} title="Club Request" />
      <div id="content-page" className="content-page">
        <div id="content-page" className="content-page">
          <div className="d-grid gap-3 d-grid-template-1fr-19">
            {request?.map((user, index) => (
              <RequestCard
                key={index}
                userid={user.userid}
                Departement={user.Departement}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RequestTable;
