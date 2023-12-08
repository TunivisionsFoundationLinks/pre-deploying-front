import React from "react";
import { Navigate } from "react-router-dom";
const PrivateAdminRoute = ({ children }) => {
  const data = localStorage.getItem("userInfo");
  const User = JSON.parse(data)?.user;
  return data && User?.isAdmin === true ? children : <Navigate to="/" />;
};

export default PrivateAdminRoute;
