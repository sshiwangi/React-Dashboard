import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { FaLock } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { BsFileLock2 } from "react-icons/bs";
import { RiChatPrivateLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import Tabs from "../Tabs";
import UserProfile from "../UserProfile";

const SecurityItems = [
  {
    key: "password",
    icon: <FaLock />,
    toggle: true,
    label: "Require to change password",
    description: "Require a password change for new accounts",
  },
  {
    key: "re-password",
    icon: <FaBan />,
    toggle: false,
    label: "Re-passwords ban",
    description: "Ban on the use of re-password",
  },
  {
    key: "location",
    icon: <FaLocationDot />,
    toggle: true,
    label: "Allow use location",
    description: "Allow application to use your location",
  },
  {
    key: "public-profile",
    icon: <FaPeopleArrows />,
    toggle: false,
    label: "Allow public profile",
    description: "Allow everyone to see your profile",
  },
  {
    key: "password-length",
    icon: <BsFileLock2 />,
    component: 8,
    label: "Password length",
    description: "Password length not less than...",
  },
  {
    key: "private-messages",
    icon: <RiChatPrivateLine />,
    component: <Tabs />,
    label: "Private messages",
    description: "Who can send you private messages",
  },
  {
    key: "visibility",
    icon: <IoEyeOutline />,
    component: <UserProfile />,
    label: "Visibility",
    description: "See all profile, except",
  },
];
function Security() {
  const [itemStates, setItemStates] = useState(
    SecurityItems.reduce((acc, item) => {
      acc[item.key] = item.toggle;
      return acc;
    }, {})
  );

  const handleToggleChange = (key) => {
    setItemStates((prevItemStates) => ({
      ...prevItemStates,
      [key]: !prevItemStates[key],
    }));
  };

  return (
    <div className="flex flex-wrap sm:gap-2 ">
      {SecurityItems.map((item) => (
        <div className="flex my-2 " key={item.key}>
          <div>{item.icon}</div>
          <div className="mx-3 text-sm flex flex-col gap-2.5">
            <p className="font-semibold">{item.label}</p>
            <p>{item.description}</p>
          </div>
          {item.toggle !== undefined ? (
            <Switch
              checked={itemStates[item.key]}
              onChange={() => handleToggleChange(item.key)}
              className={`${
                itemStates[item.key] ? "bg-togglebtn" : "bg-neutral-400"
              } relative items-center inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
              <span
                aria-hidden="true"
                className={`${
                  itemStates[item.key] ? "translate-x-5" : "translate-x-1"
                } pointer-events-none inline-block h-[10px] w-[10px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          ) : (
            item.component
          )}
        </div>
      ))}
    </div>
  );
}

export default Security;
