import { ChevronsUpDown, ChevronUp } from "lucide-react";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="border-r border-neutral-200 w-56 h-full flex flex-col">
      <div className="h-14 border-b flex items-center pl-6 border-neutral-200">
        <img src="/bitscale.svg" alt="Bitscale" className="w-24 h-auto object-contain relative" />
      </div>

      <div className="flex-col flex flex-1 justify-between">
        <div className="h-12 border-b flex items-center px-6 border-neutral-200 justify-between">
          <p className="">GTM Spaces</p>
          <ChevronsUpDown />
        </div>

        <div className="bg-[#F3F4F6] rounded-sm p-4 m-4">
          <div className="flex items-center justify-between">
            <img
              src="/bitscale.svg"
              alt="Bitscale"
              className="w-16 h-auto object-contain relative"
            />
            <ChevronUp />
          </div>
          <p className="text-sm font-medium mt-1">Get Support at Bitscale</p>
        </div>
      </div>
    </div>
  );
};
