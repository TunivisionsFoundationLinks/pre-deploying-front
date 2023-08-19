import React, { useState } from "react";
import { Container } from "react-bootstrap";

import ProfileHeader from "../../../components/profile-header";

import img7 from "../../../assets/images/page-img/profile-bg7.jpg";
import ClubCard from "../../../components/ClubCard";
import { getClub } from "../../../api/ClubsRequest";
import { useQuery } from "@tanstack/react-query";

const Groups = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["Cubs"],
    queryFn: getClub,
  });
  const [filters, setFilters] = useState(data);
  const [Input, setInput] = useState();
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    searchWord ? setInput(searchWord) : setInput("");

    const newData = data?.filter((row) => {
      return (
        row?.ClubName?.toLowerCase().includes(e.target.value.toLowerCase()) +
        row?.emailClubs?.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    searchWord ? setFilters(newData) : setFilters(data);
  };
  return (
    <Container>
      <ProfileHeader img={img7} title="Club List" />
      <div id="content-page" className="content-page ">
        <div className="iq-search-bar device-search position-relative mb-3">
          <input
            type="text"
            className="search-input form-control bg-soft-primary d-none d-lg-block"
            placeholder="Looking for Club ..."
            onChange={handleFilter}
          />
        </div>
        <Container>
          <div className="d-grid gap-3 d-grid-template-1fr-19">
            {filters
              ? filters?.map((Club) => (
                  <ClubCard
                    key={Club._id}
                    id={Club._id}
                    profileImage={Club.profileImage}
                    coverImage={Club.coverImage}
                    ClubName={Club.ClubName}
                    emailClubs={Club.emailClubs}
                    Events={Club.Events.length}
                    score={Club.score}
                    Tunimateurs={Club.Tunimateurs?.length}
                  />
                ))
              : data?.map((Club, index) => (
                  <ClubCard
                    key={index}
                    id={Club?._id}
                    profileImage={Club?.profileImage}
                    coverImage={Club?.coverImage}
                    ClubName={Club?.ClubName}
                    emailClubs={Club?.emailClubs}
                    Events={Club?.Events.length}
                    score={Club?.score}
                    Tunimateurs={
                      Club?.Tunimateurs?.length + Club?.Bureau?.length
                    }
                  />
                ))}
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default Groups;
