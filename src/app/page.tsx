"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Plus, Users } from "lucide-react";
import DashBoardHeader from "@/components/dashboard/header.component";
import HeroSection from "@/components/dashboard/heroSection.component";
import { PeopleSearchModal } from "@/components/dashboard/findPeopleModal.component";
import GridsTable from "@/components/dashboard/gridsTable.component";

const Page = () => {
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);
  const [searchModalMode, setSearchModalMode] = useState<"people" | "companies">("people");
  const [createdGridCount, setCreatedGridCount] = useState(0);
  const [showGridToast, setShowGridToast] = useState(false);

  useEffect(() => {
    if (!showGridToast) return;

    const timer = window.setTimeout(() => setShowGridToast(false), 1800);
    return () => window.clearTimeout(timer);
  }, [showGridToast]);

  function createGrid() {
    setCreatedGridCount((count) => count + 1);
    setShowGridToast(true);
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white">
      <DashBoardHeader />

      <main className="min-h-0 flex-1 overflow-auto px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <section className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-6">
          <div>
            <h1 className="text-[18px] font-semibold leading-tight tracking-normal text-[#1A202C]">
              Welcome back, Tim!
            </h1>
            <p className="mt-2 text-sm leading-none text-[#6B7280]">
              Here&apos;s your daily scoop on Bitscale!
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 lg:w-auto lg:shrink-0 lg:flex lg:items-center lg:gap-3">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSearchModalMode("companies");
                setIsPeopleModalOpen(true);
              }}
              className="inline-flex h-9 items-center justify-center gap-3 rounded-md border border-neutral-200 bg-white px-4 text-[13px] font-medium text-gray-800 cursor-pointer"
            >
              <Building2 className="h-4 w-4 text-[#5b8b6a]" strokeWidth={2.2} />
              <span>Find Companies</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSearchModalMode("people");
                setIsPeopleModalOpen(true);
              }}
              className="inline-flex h-9 items-center justify-center gap-3 rounded-md border border-neutral-200 bg-white px-4 text-[13px] font-medium text-gray-800 transition-colors hover:bg-[#f8fafc] cursor-pointer"
            >
              <Users className="h-4 w-4 text-[#7c4aa7]" strokeWidth={2.2} />
              <span>Find People</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={createGrid}
              className="inline-flex h-9 items-center justify-center gap-1 rounded-md bg-gray-800 px-4 text-sm font-medium text-white shadow-[0_1px_2px_rgba(16,24,40,0.12)] cursor-pointer"
            >
              <Plus className="h-[18px] w-[18px]" strokeWidth={2.2} />
              <span>New Grid</span>
            </motion.button>
          </div>
        </section>

        <HeroSection />
        <GridsTable createdGridCount={createdGridCount} />
      </main>

      <AnimatePresence>
        {showGridToast ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="fixed bottom-5 right-5 z-40 rounded-lg border border-green-100 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-[0_12px_32px_rgba(15,23,42,0.16)]"
          >
            Draft grid added to My Grids
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isPeopleModalOpen ? (
          <PeopleSearchModal mode={searchModalMode} onClose={() => setIsPeopleModalOpen(false)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Page;
