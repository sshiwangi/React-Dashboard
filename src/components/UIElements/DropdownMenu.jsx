import React from "react";
import { Menu, Transition } from "@headlessui/react";

function DropdownMenu() {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <div className="mr-2 h-5 w-5" aria-hidden="true" />
                  ) : (
                    <div className="mr-2 h-5 w-5" aria-hidden="true" />
                  )}
                  Edit
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </>
  );
}

export default DropdownMenu;
