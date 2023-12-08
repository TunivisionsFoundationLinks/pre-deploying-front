import PrivateChapterRoute from "./PrivetChapterRoute";
import React from "react";

import Groups from "../views/dashboard/app/groups";
import ClubDetailsPage from "../views/dashboard/app/ClubDetails";
import RequestTable from "../views/dashboard/table/Request-table";
import TunimateurList from "../views/dashboard/table/Tunimateur-table";
import FormEvent from "../views/dashboard/app/FormEvent";
import ProfileEvents from "../views/dashboard/app/profile-events";
import EventDetail from "../views/dashboard/app/event-detail";
import ProfileClubEvents from "../views/dashboard/app/activityClub";

export const ChapterRoute = [
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
    path: "/activitys",
    element: <ProfileEvents />,
  },
  {
    path: "/activitys/:id",
    element: <EventDetail />,
  },
];
export const ChapterRouteProtected = ChapterRoute.map((route) => {
  return {
    path: route.path,
    element: <PrivateChapterRoute>{route.element}</PrivateChapterRoute>,
  };
});
