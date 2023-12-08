import React from "react";
import { Navigate } from "react-router-dom";
const PrivateClubRoute = ({ children }) => {
  const data = localStorage.getItem("userInfo");
  const User = JSON.parse(data)?.user;
  console.log("Club route");
  return data && User?.isClub === true ? children : <Navigate to="/" />;
};

export default PrivateClubRoute;
