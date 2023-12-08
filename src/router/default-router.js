import React from "react";
import Index from "../views/dashboard/index";

//app
import File from "../views/dashboard/app/file";
import FriendRequest from "../views/dashboard/app/friend-request";
import Notification from "../views/dashboard/app/notification";
import ProfileBadges from "../views/dashboard/app/profile-badges";
import ProfileForums from "../views/dashboard/app/profile-forum";
import Todo from "../views/dashboard/app/todo";
import UserPrivacySetting from "../views/dashboard/app/user-privacy-setting";
import UserProfile from "../views/dashboard/app/user-profile";
import UserProfileEdit from "../views/dashboard/app/user-profile-edit";

// icon

// Form

// table

// blog pages

// Email

//ui-kit

// extrapages
import ChapterDetailsPage from "../views/dashboard/app/ChapterDetailsPage";
import ClubDetailsPage from "../views/dashboard/app/ClubDetails";
import FormEvent from "../views/dashboard/app/FormEvent";
import SearchPage from "../views/dashboard/app/SearchPage";
import ProfileClubEvents from "../views/dashboard/app/activityClub";
import EventDetail from "../views/dashboard/app/event-detail";
import Groups from "../views/dashboard/app/groups";
import ClubTableComponents from "../views/dashboard/table/Club-table-Components";
import RequestTable from "../views/dashboard/table/Request-table";
import TunimateurList from "../views/dashboard/table/Tunimateur-table";
import DataTableComponents from "../views/dashboard/table/data-table-components";
import PrivateRoute from "./PrivetRoute";

export const DefaultRouter = [
  {
    path: "/home",
    element: <Index />,
  },
  {
    path: "/Search",
    element: <SearchPage />,
  },
  {
    path: "/profile/:id",
    element: <UserProfile />,
  },
  {
    path: "/user-profile-edit/:id",
    element: <UserProfileEdit />,
  },
  {
    path: "/rankings",
    element: <DataTableComponents />,
  },
  {
    path: "/user-privacy-setting",
    element: <UserPrivacySetting />,
  },
  {
    path: "/Clubs",
    element: <Groups />,
  },
  {
    path: "/Clubs/:id",
    element: <ClubDetailsPage />,
  },
  {
    path: "/Clubs/:id/requests-list",
    element: <RequestTable />,
  },
  {
    path: "/Clubs/:id/tunimateurs",
    element: <TunimateurList />,
  },
  {
    path: "/friend-profile/:id",
    element: <UserProfile />,
  },
  {
    path: "/Chapters/:id",
    element: <ChapterDetailsPage />,
  },
  {
    path: "/Chapters/:id/clubList",
    element: <ClubTableComponents />,
  },
  {
    path: "/profile-badges",
    element: <ProfileBadges />,
  },
  {
    path: "/profile-forum",
    element: <ProfileForums />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/file",
    element: <File />,
  },
  {
    path: "/friend-request",
    element: <FriendRequest />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/Chapter/:id",
    element: <ChapterDetailsPage />,
  },
  {
    path: "/Chapters/:id/clubList",
    element: <ClubTableComponents />,
  },
  {
    path: "/Clubs",
    element: <Groups />,
  },
  {
    path: "/Clubs/:id",
    element: <ClubDetailsPage />,
  },
  {
    path: "/Clubs/:id/ActivityClub",
    element: <ProfileClubEvents />,
  },
  {
    path: "/Clubs/:id/requests-list",
    element: <RequestTable />,
  },
  {
    path: "/Clubs/:id/tunimateurs",
    element: <TunimateurList />,
  },
  {
    path: "/Clubs/:id/create-event",
    element: <FormEvent />,
  },

  {
    path: "/activitys/:id",
    element: <EventDetail />,
  },
];
export const DefaultRouteProtected = DefaultRouter.map((route) => {
  return {
    path: route.path,
    element: <PrivateRoute>{route.element}</PrivateRoute>,
  };
});
