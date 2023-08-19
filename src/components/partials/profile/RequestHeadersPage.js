import React from "react";

const RequestHeadersPage = (props) => {
  return (
    <div className="header-for-bg">
      <div className="background-header position-relative">
        <img src={props.img} className="img-fluid w-100" alt="header-bg" />
        <div className="title-on-header">
          <div className="data-block">
            <h2>{props.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHeadersPage;
