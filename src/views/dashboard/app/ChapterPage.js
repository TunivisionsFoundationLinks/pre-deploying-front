import React from "react";
import { Container } from "react-bootstrap";
import ProfileHeader from "../../../components/profile-header";

// images

import img2 from "../../../assets/images/page-img/profile-bg2.jpg";
import img4 from "../../../assets/images/page-img/profile-bg4.jpg";
import img7 from "../../../assets/images/page-img/profile-bg7.jpg";
import ChapterCard from "../../../components/ChapterCard";
import { useState } from "react";
import { getChapter } from "../../../api/ChapterRequest";
import { useQuery } from "@tanstack/react-query";
import ChapterHeader from "../../../components/partials/profile/HeaderChapter";

const Chapters = () => {
  const [Event, setEvent] = useState([]);
  const { data, error, isLoading } = useQuery({
    queryKey: ["Chapters"],
    queryFn: getChapter,
  });
  return (
    <Container>
      <ProfileHeader img={img7} title="Chapter Page" />
      <div id="content-page" className="content-page">
        <div className="d-grid gap-3 d-grid-template-1fr-19">
          {data?.map((chapter) => (
            <ChapterCard
              key={chapter._id}
              id={chapter._id}
              profileImage={chapter.profileImage}
              coverImage={chapter.coverImage}
              ChapterName={chapter.ChapterName}
              emailChapters={chapter.emailChapters}
              Clubs={chapter.Clubs}
              EventNational={chapter.EventNational}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Chapters;
