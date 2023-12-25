import React, { useState } from "react";
import { SettingsItems } from "../lib/consts/navigation";

function Settings() {
  const [currentItem, setCurrentItem] = useState("security");

  return (
    <div className="px-4">
      <h1 className="text-[32px] font-semibold">Settings</h1>
      <div className="flex gap-6 mt-5 mb-6">
        {SettingsItems.map((item) => (
          <span
            className={`font-medium text-sm ${
              currentItem === item.key ? "text-blue-500" : ""
            }`}
            key={item.key}
            onClick={() => setCurrentItem(item.key)}
          >
            {item.label}
          </span>
        ))}
      </div>
      {SettingsItems.map((item) => (
        <div>{currentItem === item.key && item.component}</div>
      ))}
    </div>
  );
}

export default Settings;
