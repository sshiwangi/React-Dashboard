import React from "react";
import Profile1 from "../assets/images/profile (1).png";
import Profile2 from "../assets/images/profile (2).png";
import { CgClose } from "react-icons/cg";

const usersList = [
  {
    key: "1",
    name: "Emma Bron",
    profileImg: Profile1,
  },
  {
    key: "2",
    name: "David Johnson",
    profileImg: Profile2,
  },
];

function UserProfile() {
  return (
    <div className="flex">
      {usersList.map((item) => (
        <div
          key={item.key}
          className="flex p-2 gap-2 h-[24px] text-sm items-center justify-center bg-white shadow-md rounded-full"
        >
          <img className="h-[18px]" src={item.profileImg} alt="user" />
          {item.name}
          <CgClose />
        </div>
      ))}
    </div>
  );
}

export default UserProfile;
