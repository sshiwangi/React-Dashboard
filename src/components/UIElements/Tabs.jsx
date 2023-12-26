import React, { useState } from "react";

const privateMessageItems = [
  {
    key: "team",
    label: "Team",
  },
  {
    key: "nobody",
    label: "Nobody",
  },
  {
    key: "choose",
    label: "Choose",
  },
];

function Tabs() {
  const [currentItem, setCurrentItem] = useState("team");

  const handleClick = (key) => {
    setCurrentItem(key);
  };

  return (
    <div className="flex gap-2 items-center mr-2 px-4 text-sm">
      {privateMessageItems.map((item) => (
        <span
          className={`${
            currentItem === item.key
              ? "bg-neutral-700 text-white"
              : "border-neutral text-neutral-700"
          } text-[12px] px-3 py-1 border rounded-full cursor-pointer`}
          key={item.key}
          onClick={() => handleClick(item.key)}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}

export default Tabs;
