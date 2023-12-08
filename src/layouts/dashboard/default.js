import React from "react";

//header
import Header from "../../components/partials/dashboard/HeaderStyle/header";

//sidebar

//sidebar
import Sidebar from "../../components/partials/dashboard/SidebarStyle/sidebar";

//default
// import DefaultRouter from '../../router/default-router'

// share-offcanvas
// import ShareOffcanvas from '../../components/share-offcanvas'

//settingoffCanvas
import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <div className="main-content">
        {/* <div id="content-page" className="content-page"> */}
        {/* <DefaultRouter/> */}
        <Outlet />
        {/* </div> */}
      </div>
      {/* <RightSidebar /> */}
    </>
  );
};

export default Default;
