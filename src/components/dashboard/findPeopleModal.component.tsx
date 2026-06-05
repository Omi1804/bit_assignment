import { peopleFilters, peopleTableColumns } from "@/constants/modal";
import { cn } from "@/utils/cn";
import { ChevronDown, LockKeyhole, Search, ScrollText, X, FileSearchCorner } from "lucide-react";
import Image from "next/image";

export function PeopleSearchModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-8 py-10">
      <section className="relative grid h-[84vh] max-h-[900px] w-full max-w-[1250px] grid-cols-[360px_minmax(0,1fr)] overflow-hidden rounded-[10px] bg-white shadow-[0_16px_56px_rgba(15,23,42,0.24)]">
        <button
          type="button"
          aria-label="Close find people modal"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-[#f3f4f6] text-[#111827] transition-colors hover:bg-[#e5e7eb]"
        >
          <X className="h-4 w-4" strokeWidth={2.6} />
        </button>

        <aside className="flex min-h-0 flex-col pl-8 pr-2 pb-7 pt-7">
          <div className="flex items-center justify-between gap-4">
            <h2
              id="people-search-title"
              className="text-[18px] font-extrabold leading-none tracking-normal text-[#111827]"
            >
              Find People
            </h2>
            <button className="inline-flex h-6 items-center gap-2 rounded-[7px] bg-[#f4f5f7] px-3 text-xs font-medium text-gray-900">
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.6} />
              <span>Saved Search</span>
            </button>
          </div>

          <div className="mt-6 min-h-0 flex-1 overflow-x-hidden overflow-y-scroll max-h-[65vh]">
            {peopleFilters.map((filter, index) => {
              const Icon = filter.icon;

              return (
                <div key={filter.label + index} className="border-b border-[#e5e7eb] py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[#111827]" strokeWidth={2.4} />
                      <p className="text-sm font-semibold leading-none text-[#111827]">
                        {filter.label}
                      </p>
                    </div>
                    {!filter.expanded ? (
                      <ChevronDown className="h-5 w-5 text-[#111827]" strokeWidth={2.6} />
                    ) : null}
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-3 text-gray-500",
                      filter.expanded ? "mt-4" : "mt-3",
                    )}
                  >
                    {filter.expanded ? (
                      <Search className="h-4 w-4 shrink-0" strokeWidth={2.2} />
                    ) : null}
                    <p className="text-sm font-normal leading-none">{filter.placeholder}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button className="inline-flex h-8.5 w-[40%] items-center justify-center gap-3 rounded-md bg-[#e4e8ee] text-xs font-medium text-gray-800">
              <FileSearchCorner className="h-4 w-4" />
              <span>Save Search</span>
            </button>
            <button className="inline-flex h-8.5 w-[60%] items-center justify-center gap-3 rounded-md bg-[#1f2937] text-sm font-medium text-white">
              <Image src="/eye.svg" alt="Eye" className="h-5 w-5" width={20} height={20} />
              <span>Preview Result</span>
            </button>
          </div>
        </aside>

        <section className="min-w-0 px-5 pb-8 pt-9">
          <div className="w-full mb-2 flex items-center justify-end">
            <span className="inline-flex h-6 tracking-wide items-center gap-2 rounded-full bg-[#FBECDD] px-3 text-xs font-medium text-[#D9730E]">
              <Search className="h-3 w-3" strokeWidth={2.4} />
              <span>8000/50000</span>
            </span>
          </div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-xs font-medium text-gray-600 tracking-wide">
              Found 0 companies. Click preview to view results
            </p>
            <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#CB912E]">
              <LockKeyhole className="h-3.5 w-3.5" strokeWidth={2.4} />
              <span>Unlock 100,000 leads with Enterprise Plan*</span>
            </p>
          </div>

          <div className="h-[85%] overflow-hidden rounded-[9px] border border-[#edf0f3] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
            <div className="grid h-14 min-w-[900px] grid-cols-[90px_90px_138px_154px_134px_154px_150px] items-center bg-gray-50 px-5 text-[12px] font-semibold text-gray-500">
              {peopleTableColumns.map((column) => (
                <span key={column} className="truncate">
                  {column}
                </span>
              ))}
            </div>

            <div className="flex h-[calc(100%-56px)] flex-col items-center justify-center px-8 text-center">
              <Image src="/tasks.jpeg" alt="Tasks" width={350} height={170} />

              <p className="mt-5 max-w-[470px] text-xs font-medium leading-[1.5] text-gray-400">
                Start your Company search , preview, and import companies for enrichment by applying
                any filter in the left panel.
                <br />
                OR
                <br />
                Import companies from saved Search.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
