"use client";

import { useState } from "react";
import { Building2, Plus, Users } from "lucide-react";
import DashBoardHeader from "@/components/dashboard/header.component";
import HeroSection from "@/components/dashboard/heroSection.component";
import { PeopleSearchModal } from "@/components/dashboard/findPeopleModal.component";
import GridsTable from "@/components/dashboard/gridsTable.component";

const Page = () => {
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);

  return (
    <div className="flex h-full flex-1 flex-col bg-white">
      <DashBoardHeader />

      <main className="min-h-0 flex-1 overflow-auto px-8 py-6">
        <section className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-[18px] font-semibold leading-tight tracking-normal text-[#1A202C]">
              Welcome back, Tim!
            </h1>
            <p className="mt-2 text-sm leading-none text-[#6B7280]">
              Here&apos;s your daily scoop on Bitscale!
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button className="inline-flex h-9 items-center gap-3 rounded-md border border-neutral-200 bg-white px-4 text-[13px] font-medium text-gray-800 cursor-pointer">
              <Building2 className="h-4 w-4 text-[#5b8b6a]" strokeWidth={2.2} />
              <span>Find Companies</span>
            </button>
            <button
              onClick={() => setIsPeopleModalOpen(true)}
              className="inline-flex h-9 items-center gap-3 rounded-md border border-neutral-200 bg-white px-4 text-[13px] font-medium text-gray-800 transition-colors hover:bg-[#f8fafc] cursor-pointer"
            >
              <Users className="h-4 w-4 text-[#7c4aa7]" strokeWidth={2.2} />
              <span>Find People</span>
            </button>
            <button className="inline-flex h-9 items-center gap-1 rounded-md bg-gray-800 px-4 text-sm font-medium text-white shadow-[0_1px_2px_rgba(16,24,40,0.12)] cursor-pointer">
              <Plus className="h-4.5 w-4.5" strokeWidth={2.2} />
              <span>New Grid</span>
            </button>
          </div>
        </section>

        <HeroSection />
        <GridsTable />
      </main>

      {isPeopleModalOpen ? <PeopleSearchModal onClose={() => setIsPeopleModalOpen(false)} /> : null}
    </div>
  );
};

export default Page;
