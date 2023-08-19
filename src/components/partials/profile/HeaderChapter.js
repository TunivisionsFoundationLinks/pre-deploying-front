import React from "react";
import { Container } from "react-bootstrap";

const ChapterHeader = (props) => {
  return (
    <Container>
      <div className="header-for-bg">
        <Container>
          <div className="background-header position-relative">
            <img
              src={"http://localhost:5000/images/" + props.img}
              className="img-fluid bg-cover"
              style={{ width: "100%", height: "300px" }}
              alt="header-bg"
            />
            <div className="title-on-header">
              <div className="data-block">
                <h2>{props.title}</h2>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Container>
  );
};
export default ChapterHeader;
