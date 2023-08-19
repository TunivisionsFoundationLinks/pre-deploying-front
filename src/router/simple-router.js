import React from "react";

// auth
import ConfirmMail from "../views/dashboard/auth/confirm-mail";
import LockScreen from "../views/dashboard/auth/lock-screen";
import Recoverpw from "../views/dashboard/auth/recoverpw";
import SignIn from "../views/dashboard/auth/sign-in";
import SignUp from "../views/dashboard/auth/sign-up";

// errors
import Error404 from "../views/dashboard/errors/error404";
import Error500 from "../views/dashboard/errors/error500";

//extrpages
import Maintenance from "../views/dashboard/extrapages/maintenance";
import ComingSoon from "../views/dashboard/extrapages/comingsoon";

export const SimpleRouter = [
  {
    path: "/confirm-mail",
    element: <ConfirmMail />,
  },
  {
    path: "/reset-password/:id/:ac_token",
    element: <LockScreen />,
  },
  {
    path: "/recoverpw",
    element: <Recoverpw />,
  },
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/Login",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/error404",
    element: <Error404 />,
  },
  {
    path: "/error500",
    element: <Error500 />,
  },
  {
    path: "/pages-maintenance",
    element: <Maintenance />,
  },
  {
    path: "/Coming-soon",
    element: <ComingSoon />,
  },
];
