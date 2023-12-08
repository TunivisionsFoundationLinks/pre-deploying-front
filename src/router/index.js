import React from "react";

//layoutpages
import Default from "../layouts/dashboard/default";

import { ChapterRouteProtected } from "./Chapter-route";
import { AdminRouteProtected } from "./admin-router";
import { DefaultRouteProtected } from "./default-router";

export const IndexRouters = [
  {
    path: "/",
    element: <Default />,
    children: [
      ...DefaultRouteProtected,
      ...AdminRouteProtected,
      ...ChapterRouteProtected,
    ],
  },
];
