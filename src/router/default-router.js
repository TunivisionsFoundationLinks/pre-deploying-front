import React from "react";
import Index from "../views/dashboard/index";

//app
import UserProfile from "../views/dashboard/app/user-profile";
import UserPrivacySetting from "../views/dashboard/app/user-privacy-setting";
import FriendProfile from "../views/dashboard/app/friend-profile";
import ProfileBadges from "../views/dashboard/app/profile-badges";
import ProfileForums from "../views/dashboard/app/profile-forum";
import Notification from "../views/dashboard/app/notification";
import File from "../views/dashboard/app/file";
import FriendRequest from "../views/dashboard/app/friend-request";
import Todo from "../views/dashboard/app/todo";
import UserAccountSetting from "../views/dashboard/app/user-account-setting";
import UserProfileEdit from "../views/dashboard/app/user-profile-edit";

// icon
import Remixicon from "../views/dashboard/icons/icon-remixicon";
import Lineawesome from "../views/dashboard/icons/icon-lineawesome";
import Fontawesome from "../views/dashboard/icons/icon-fontawesome-5";
import Material from "../views/dashboard/icons/icon-material";

// Form
import FormElement from "../views/dashboard/from/form-element";
import FormValidation from "../views/dashboard/from/form-validation";
import FormSwitch from "../views/dashboard/from/form-switch";
import FormWizard from "../views/dashboard/from/form-wizard";
import FormWizardValidate from "../views/dashboard/from/form-wizard-validate";
import FormWizardVertical from "../views/dashboard/from/form-wizard-vertical";
import FormCheckbox from "../views/dashboard/from/form-checkbox";
import FormRadio from "../views/dashboard/from/form-radio";

// table
import DataTable from "../views/dashboard/table/data-table";
import TableBasic from "../views/dashboard/table/tables-basic";
import TableEditable from "../views/dashboard/table/table-editable";

// blog pages
import BlogGrid from "../views/dashboard/blog/bloggrid";
import BlogList from "../views/dashboard/blog/bloglist";
import BlogDetail from "../views/dashboard/blog/blogdetail";

// Email
import Email from "../views/dashboard/email/email";
import EmailCompose from "../views/dashboard/email/email-compose";

//ui-kit
import UiAlerts from "../views/dashboard/ui-kit/ui-alerts";
import UiBadges from "../views/dashboard/ui-kit/ui-badges";
import UiBreadcrumbs from "../views/dashboard/ui-kit/ui-breadcrumb";
import UiButtons from "../views/dashboard/ui-kit/ui-buttons";
import UiCards from "../views/dashboard/ui-kit/ui-cards";
import UiCarousels from "../views/dashboard/ui-kit/ui-carousel";
import UiColors from "../views/dashboard/ui-kit/ui-color";
import UiDropdowns from "../views/dashboard/ui-kit/ui-dropdowns";
import UiEmbedVideos from "../views/dashboard/ui-kit/ui-embed-video";
import UiGrids from "../views/dashboard/ui-kit/ui-grid";
import UiImages from "../views/dashboard/ui-kit/ui-images";
import UiListGroups from "../views/dashboard/ui-kit/ui-list-groups";
import UiModals from "../views/dashboard/ui-kit/ui-modal";
import UiNotifications from "../views/dashboard/ui-kit/ui-notifications";
import UiOffcanvas from "../views/dashboard/ui-kit/ui-offcanvas";
import UiPaginations from "../views/dashboard/ui-kit/ui-pagination";
import UiPopovers from "../views/dashboard/ui-kit/ui-popovers";
import UiProgressbars from "../views/dashboard/ui-kit/ui-progressbars";
import UiTabs from "../views/dashboard/ui-kit/ui-tabs";
import UiTooltips from "../views/dashboard/ui-kit/ui-tooltips";
import UiTypographys from "../views/dashboard/ui-kit/ui-typography";

// extrapages
import Pricing from "../views/dashboard/extrapages/pricing";
import Pricing1 from "../views/dashboard/extrapages/pricing1";
import Timeline from "../views/dashboard/extrapages/timeline";
import Invoice from "../views/dashboard/extrapages/invoice";
import Faq from "../views/dashboard/extrapages/faq";
import PrivacyPolicy from "../views/dashboard/extrapages/privacy-policy";
import TermsofService from "../views/dashboard/extrapages/terms-of-service";
import BlankPage from "../views/dashboard/extrapages/blankpage";
import Admin from "../views/dashboard/app/admin";
import DataTableComponents from "../views/dashboard/table/data-table-components";
import SearchPage from "../views/dashboard/app/SearchPage";
import Groups from "../views/dashboard/app/groups";
import ClubDetailsPage from "../views/dashboard/app/ClubDetails";
import RequestTable from "../views/dashboard/table/Request-table";
import TunimateurList from "../views/dashboard/table/Tunimateur-table";
import PrivateRoute from "./PrivetRoute";
import ClubTableComponents from "../views/dashboard/table/Club-table-Components";
import ChapterDetailsPage from "../views/dashboard/app/ChapterDetailsPage";
import EventDetail from "../views/dashboard/app/event-detail";
import FormEvent from "../views/dashboard/app/FormEvent";
import ProfileClubEvents from "../views/dashboard/app/activityClub";

export const DefaultRouter = [
  {
    path: "/",
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
