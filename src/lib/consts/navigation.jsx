import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { BsCollectionFill } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import Basic from "../../components/NavItemComponent/Basic";
import Security from "../../components/NavItemComponent/Security";
import Notification from "../../components/NavItemComponent/Notification";
import Privacy from "../../components/NavItemComponent/Privacy";
import { MdManageAccounts } from "react-icons/md";

export const Sidebar_Links = [
  {
    key: "profile",
    label: "Profile",
    path: "/profile",
    icon: <MdManageAccounts />,
  },
  {
    key: "chat",
    label: "Chat",
    path: "/chat",
    icon: <IoChatbubbleEllipsesSharp />,
  },
  {
    key: "calendar",
    label: "Calendar",
    path: "/calendar",
    icon: <FaCalendar />,
  },
  {
    key: "offers",
    label: "Offers",
    path: "/offers",
    icon: <BsCollectionFill />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <MdAdminPanelSettings />,
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
