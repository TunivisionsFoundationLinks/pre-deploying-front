import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateChapterRoute = ({ children }) => {
  const data = localStorage.getItem("userInfo");

  return data && data?.user?.isBureau === true ? children : <Navigate to="/" />;
};

export default PrivateChapterRoute;
