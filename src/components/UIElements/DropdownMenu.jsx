import React from "react";
import { Popover } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

function DropdownMenu({ icon, dropDownItems }) {
  return (
    <Popover className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Popover.Button>
            <img src={icon} className="h-[24px]" alt="Dropdown" />
          </Popover.Button>
          <Popover.Panel
            className={`${
              open ? "visible" : "invisible"
            } absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`}
            static
          >
            {dropDownItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`${
                  open ? "opacity-100" : "opacity-0"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer transition-opacity`}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </a>
            ))}
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}

export default DropdownMenu;
