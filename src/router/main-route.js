import Index from "../views/dashboard";
import SearchPage from "../views/dashboard/app/SearchPage";
import File from "../views/dashboard/app/file";
import Notification from "../views/dashboard/app/notification";
import ProfileBadges from "../views/dashboard/app/profile-badges";
import ProfileForums from "../views/dashboard/app/profile-forum";
import UserPrivacySetting from "../views/dashboard/app/user-privacy-setting";
import UserProfile from "../views/dashboard/app/user-profile";
import DataTableComponents from "../views/dashboard/table/data-table-components";
import FriendRequest from "../views/dashboard/app/friend-request";
import Todo from "../views/dashboard/app/todo";
import UserAccountSetting from "../views/dashboard/app/user-account-setting";
import UserProfileEdit from "../views/dashboard/app/user-profile-edit";

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
    path: "/rankings",
    element: <DataTableComponents />,
  },
  {
    path: "/user-privacy-setting",
    element: <UserPrivacySetting />,
  },
  {
    path: "/friend-profile/:id",
    element: <UserProfile />,
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
    path: "/user-profile-edit/:id",
    element: <UserProfileEdit />,
  },
];
