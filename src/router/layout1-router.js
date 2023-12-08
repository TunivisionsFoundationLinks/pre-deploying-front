import React from "react";

//pages
import Groups from "../views/dashboard/app/groups";
import FriendList from "../views/dashboard/app/friend-list";
import ProfileImages from "../views/dashboard/app/profile-images";
import ProfileVideos from "../views/dashboard/app/profile-videos";
import ProfileEvents from "../views/dashboard/app/profile-events";
import EventDetail from "../views/dashboard/app/event-detail";
import Calendar from "../views/dashboard/app/calendar";
import Birthday from "../views/dashboard/app/birthday";
import Weather from "../views/dashboard/app/weather";
import Music from "../views/dashboard/app/music";
import CatergoryGrid from "../views/dashboard/store/store-category-grid";
import CatergoryList from "../views/dashboard/store/store-category-list";
import StoreDetail from "../views/dashboard/store/store-detail";
import StoreCheckout from "../views/dashboard/store/store-checkout";

//market and profile pages
import Market1 from "../views/dashboard/market-place/market1";
import Market2 from "../views/dashboard/market-place/market2";
import Profile1 from "../views/dashboard/profiles/profile1";
import Profile2 from "../views/dashboard/profiles/profile2";
import Profile3 from "../views/dashboard/profiles/profile3";
import Chapters from "../views/dashboard/app/ChapterPage";
import Carthage from "../views/dashboard/app/CarthagePage";
import Pnational from "../views/dashboard/app/ProjectNationalPage";
import ChapterDetailsPage from "../views/dashboard/app/ChapterDetailsPage";
import ClubDetailsPage from "../views/dashboard/app/ClubDetails";
import ClubTableComponents from "../views/dashboard/table/Club-table-Components";
import FormEvent from "../views/dashboard/app/FormEvent";
import TunimateurList from "../views/dashboard/table/Tunimateur-table";
import RequestTable from "../views/dashboard/table/Request-table";

export const Layout1Router = [
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
  {
    path: "/Chapters/:id",
    element: <ChapterDetailsPage />,
  },
  {
    path: "/Chapters/:id/clubList",
    element: <ClubTableComponents />,
  },
  {
    path: "dashboards/app/friend-list",
    element: <FriendList />,
  },
  {
    path: "dashboards/app/profile-images",
    element: <ProfileImages />,
  },
  {
    path: "dashboards/app/profile-videos",
    element: <ProfileVideos />,
  },
  {
    path: "dashboards/app/profile-events",
    element: <ProfileEvents />,
  },
  {
    path: "dashboards/app/event-detail",
    element: <EventDetail />,
  },
  {
    path: "dashboards/app/calendar",
    element: <Calendar />,
  },
  {
    path: "dashboards/app/birthday",
    element: <Birthday />,
  },
  {
    path: "dashboards/app/weather",
    element: <Weather />,
  },
  {
    path: "dashboards/app/music",
    element: <Music />,
  },
  {
    path: "dashboards/store/store-category-grid",
    element: <CatergoryGrid />,
  },
  {
    path: "dashboards/store/store-category-list",
    element: <CatergoryList />,
  },
  {
    path: "dashboards/store/store-detail",
    element: <StoreDetail />,
  },
  {
    path: "dashboards/store/store-checkout",
    element: <StoreCheckout />,
  },
  {
    path: "dashboards/market-place/market1",
    element: <Market1 />,
  },
  {
    path: "dashboards/market-place/market2",
    element: <Market2 />,
  },
  {
    path: "dashboards/profiles/profile1",
    element: <Profile1 />,
  },
  {
    path: "dashboards/profiles/profile2",
    element: <Profile2 />,
  },
  {
    path: "dashboards/profiles/profile3",
    element: <Profile3 />,
  },
];
