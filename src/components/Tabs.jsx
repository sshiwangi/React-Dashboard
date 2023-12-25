import React from "react";

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
  return (
    <div className="flex gap-2 items-center">
      {privateMessageItems.map((item) => (
        <span
          className="bg-neutral-700 text-[12px] px-3 py-1 text-white border rounded-full"
          key={item.key}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}

export default Tabs;
