import { FaRegBell } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { BsCollectionFill } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";

export const Sidebar_Links = [
    {   
        key: 'profile',
        label: 'Profile',
        path: '/profile',
        icon: <FaRegBell />
    },
    {
        key: 'chat',
        label: 'Chat',
        path: '/chat',
        icon: <IoChatbubbleEllipsesSharp />
    },
    {
        key: 'calendar',
        label: 'Calendar',
        path: '/calendar',
        icon: <FaCalendar />

    },
    {
        key: 'offers',
        label: 'Offers',
        path: '/offers',
        icon: <BsCollectionFill />
    },
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <MdAdminPanelSettings />
    }

]