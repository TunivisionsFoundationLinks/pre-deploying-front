import React from "react";
import Index from "../views/dashboard/index";
import SearchPage from "../views/dashboard/app/SearchPage";
import UserProfile from "../views/dashboard/app/user-profile";
import DataTableComponents from "../views/dashboard/table/data-table-components";
import UserPrivacySetting from "../views/dashboard/app/user-privacy-setting";
import UserProfileEdit from "../views/dashboard/app/user-profile-edit";
import ProfileBadges from "../views/dashboard/app/profile-badges";
import ProfileForums from "../views/dashboard/app/profile-forum";
import Notification from "../views/dashboard/app/notification";
import File from "../views/dashboard/app/file";
import FriendRequest from "../views/dashboard/app/friend-request";
import Todo from "../views/dashboard/app/todo";
import UserAccountSetting from "../views/dashboard/app/user-account-setting";
import Chapters from "../views/dashboard/app/ChapterPage";
import Groups from "../views/dashboard/app/groups";
import ClubDetailsPage from "../views/dashboard/app/ClubDetails";
import RequestTable from "../views/dashboard/table/Request-table";
import TunimateurList from "../views/dashboard/table/Tunimateur-table";
import FormEvent from "../views/dashboard/app/FormEvent";
import Carthage from "../views/dashboard/app/CarthagePage";
import ProfileEvents from "../views/dashboard/app/profile-events";
import EventDetail from "../views/dashboard/app/event-detail";
import Pnational from "../views/dashboard/app/ProjectNationalPage";
import ChapterDetailsPage from "../views/dashboard/app/ChapterDetailsPage";
import ClubTableComponents from "../views/dashboard/table/Club-table-Components";
import PrivateAdminRoute from "./PrivateAdminRoute";
import Admin from "../views/dashboard/app/admin";
import ProfileClubEvents from "../views/dashboard/app/activityClub";

export const adminRouter = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/admin",
    element: <Admin />,
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
    path: "/rankings",
    element: <DataTableComponents />,
  },
  {
    path: "/user-privacy-setting",
    element: <UserPrivacySetting />,
  },
  {
    path: "/friend-profile/:id",
    element: <UserProfileEdit />,
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
    path: "/user-account-setting",
    element: <UserAccountSetting />,
  },
  {
    path: "/user-profile-edit",
    element: <UserProfileEdit />,
  },

  {
    path: "/Chapters",
    element: <Chapters />,
  },
  {
    path: "/Chapter/:id/create-event",
    element: <FormEvent />,
  },
  {
    path: "/Clubs",
    element: <Groups />,
  },
  {
    path: "/Clubs/:id/ActivityClub",
    element: <ProfileClubEvents />,
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
    path: "/Clubs/:id/create-event",
    element: <FormEvent />,
  },
  {
    path: "/Carthage",
    element: <Carthage />,
  },
  {
    path: "/activitys",
    element: <ProfileEvents />,
  },
  {
    path: "/activitys/:id",
    element: <EventDetail />,
  },
  {
    path: "/PNational",
    element: <Pnational />,
  },
];

export const AdminRouteProtected = adminRouter.map((route) => {
  return {
    path: route.path,
    element: <PrivateAdminRoute>{route.element}</PrivateAdminRoute>,
  };
});
