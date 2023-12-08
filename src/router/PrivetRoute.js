import React from "react";
import { Navigate } from "react-router-dom";
const data = localStorage.getItem("userInfo");
const token = localStorage.getItem("userInfo");
const PrivateRoute = ({ children }) => {
  return data ? children : <Navigate to="/" />;
};

export default PrivateRoute;
