import { lazy } from "react";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { BsCollectionFill } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import Basic from "../../components/SidebarSubItems/Basic";
import Security from "../../components/SidebarSubItems/Security";
import Notification from "../../components/SidebarSubItems/Notification";
import Privacy from "../../components/SidebarSubItems/Privacy";
import { MdManageAccounts } from "react-icons/md";
import Profile from "../../pages/Profile";
import Chat from "../../pages/Chat";
import Offers from "../../pages/Offers";
import Calendar from "../../pages/Calendar";
import Settings from "../../pages/Settings";
// import { RiHome2Fill } from "react-icons/ri";

export const Sidebar_Links = [
  {
    key: "profile",
    label: "Profile",
    path: "/profile",
    icon: <MdManageAccounts />,
    component: <Profile />,
  },
  {
    key: "chat",
    label: "Chat",
    path: "/chat",
    icon: <IoChatbubbleEllipsesSharp />,
    component: <Chat />,
  },
  {
    key: "calendar",
    label: "Calendar",
    path: "/calendar",
    icon: <FaCalendar />,
    component: <Calendar />,
  },
  {
    key: "offers",
    label: "Offers",
    path: "/offers",
    icon: <BsCollectionFill />,
    component: <Offers />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <MdAdminPanelSettings />,
    component: <Settings />,
  },
];

export const SettingsItems = [
  {
    key: "basic",
    label: "Basic",
    component: <Basic />,
  },
  {
    key: "security",
    label: "Security",
    component: <Security />,
  },
  {
    key: "notification",
    label: "Notification",
    component: <Notification />,
  },
  {
    key: "privacy",
    label: "Privacy",
    component: <Privacy />,
  },
];
