import {
  Building2,
  ChevronDown,
  Eye,
  Globe2,
  LockKeyhole,
  MapPin,
  Search,
  Save,
  ScrollText,
  SlidersHorizontal,
  Users,
  UserRoundSearch,
  X,
} from "lucide-react";

const peopleFilters = [
  {
    label: "People Keyword",
    placeholder: "Enter single keyword here...",
    icon: UserRoundSearch,
    expanded: true,
  },
  { label: "Job Title", placeholder: "E.g: Manager, Software Engineer", icon: Building2 },
  { label: "Company Website", placeholder: "Eg: Google.com, LinkedIn.com", icon: Globe2 },
  { label: "Person Location", placeholder: "Eg: London, Great New York City", icon: MapPin },
  { label: "Company Location", placeholder: "E.g: United States, UAE", icon: MapPin },
  { label: "Company Headcount", placeholder: "E.g: 11-50 , 10000+", icon: Users },
  { label: "Management Level", placeholder: "E.g: Owner, Founder", icon: SlidersHorizontal },
];

const peopleTableColumns = [
  "NAME",
  "TITLE",
  "HEADLINE",
  "LINKEDIN URL",
  "COMPANY",
  "COMPANY URL",
  "COMPANY SIZE",
];

export function PeopleSearchModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-8 py-10">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="people-search-title"
        className="relative grid h-[84vh] max-h-[900px] w-full max-w-[1250px] grid-cols-[390px_minmax(0,1fr)] overflow-hidden rounded-[10px] bg-white shadow-[0_16px_56px_rgba(15,23,42,0.24)]"
      >
        <button
          type="button"
          aria-label="Close find people modal"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-[#f3f4f6] text-[#111827] transition-colors hover:bg-[#e5e7eb]"
        >
          <X className="h-4 w-4" strokeWidth={2.6} />
        </button>

        <aside className="flex min-h-0 flex-col px-10 pb-8 pt-11">
          <div className="flex items-center justify-between gap-4">
            <h2
              id="people-search-title"
              className="text-[22px] font-bold leading-none tracking-normal text-[#111827]"
            >
              Find People
            </h2>
            <button className="inline-flex h-7 items-center gap-2 rounded-[7px] bg-[#f4f5f7] px-3 text-sm font-semibold text-[#1f2937]">
              <ChevronDown className="h-4 w-4" strokeWidth={2.6} />
              <span>Saved Search</span>
            </button>
          </div>

          <div className="mt-11 min-h-0 flex-1 overflow-hidden">
            <div className="space-y-0">
              {peopleFilters.map((filter) => {
                const Icon = filter.icon;

                return (
                  <div key={filter.label} className="border-b border-[#e5e7eb] py-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-[#111827]" strokeWidth={2.4} />
                        <p className="text-[16px] font-bold leading-none text-[#111827]">
                          {filter.label}
                        </p>
                      </div>
                      {!filter.expanded ? (
                        <ChevronDown className="h-5 w-5 text-[#111827]" strokeWidth={2.6} />
                      ) : null}
                    </div>
                    <div className="mt-5 flex items-center gap-3 text-[#7b8493]">
                      {filter.expanded ? (
                        <Search className="h-5 w-5 shrink-0" strokeWidth={2.2} />
                      ) : null}
                      <p className="text-[15px] font-medium leading-none">{filter.placeholder}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-[15px] font-medium text-[#7b8493]">-</p>
          </div>

          <div className="mt-6 flex items-center gap-5">
            <button className="inline-flex h-10 w-[148px] items-center justify-center gap-3 rounded-[8px] bg-[#e4e8ee] text-sm font-semibold text-[#374151]">
              <Save className="h-5 w-5" strokeWidth={2.2} />
              <span>Save Search</span>
            </button>
            <button className="inline-flex h-10 w-[218px] items-center justify-center gap-3 rounded-[8px] bg-[#1f2937] text-sm font-semibold text-white">
              <Eye className="h-5 w-5 fill-current" strokeWidth={0} />
              <span>Preview Result</span>
            </button>
          </div>
        </aside>

        <section className="min-w-0 px-5 pb-8 pt-20">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-[15px] font-semibold text-[#5b6472]">
              Found 0 companies. Click preview to view results
            </p>
            <div className="flex items-center gap-7">
              <p className="inline-flex items-center gap-2 text-sm font-bold text-[#cf8e2c]">
                <LockKeyhole className="h-4 w-4" strokeWidth={2.4} />
                <span>Unlock 100,000 leads with Enterprise Plan*</span>
              </p>
              <span className="inline-flex h-7 items-center gap-2 rounded-full bg-[#fff1e4] px-4 text-sm font-semibold text-[#d8832c]">
                <Search className="h-4 w-4" strokeWidth={2.4} />
                <span>8000/50000</span>
              </span>
            </div>
          </div>

          <div className="h-[calc(100%-44px)] overflow-hidden rounded-[9px] border border-[#edf0f3] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
            <div className="grid h-14 min-w-[900px] grid-cols-[104px_100px_138px_154px_134px_154px_150px] items-center bg-[#f7f8fa] px-5 text-[13px] font-bold text-[#6b7280]">
              {peopleTableColumns.map((column) => (
                <span key={column} className="truncate">
                  {column}
                </span>
              ))}
            </div>

            <div className="flex h-[calc(100%-56px)] flex-col items-center justify-center px-8 text-center">
              <div className="relative h-[170px] w-[230px]">
                <div className="absolute left-10 top-8 h-28 w-28 rounded-full bg-[#eaf7fd]" />
                <div className="absolute left-20 top-4 h-16 w-28 rounded-full bg-[#eaf7fd]" />
                <div className="absolute bottom-6 right-5 h-16 w-24 rounded-[20px] bg-[#d6effb]" />
                <div className="absolute bottom-8 left-20 h-28 w-24 rounded-[6px] border-[5px] border-[#4f91c8] bg-white shadow-sm">
                  <div className="absolute -top-4 left-5 h-6 w-14 rounded-t-[4px] bg-[#d95a67]">
                    <span className="absolute left-1/2 top-[-9px] h-4 w-4 -translate-x-1/2 rounded-full border-[4px] border-[#d95a67] bg-white" />
                  </div>
                  {[18, 48, 78, 108].map((top, index) => (
                    <div key={top} className="absolute left-3 right-3" style={{ top }}>
                      <span
                        className={[
                          "absolute left-0 top-0 h-4 w-4 rounded-[3px] border-2",
                          index < 2
                            ? "border-[#f0a53a] after:absolute after:left-[3px] after:top-[-5px] after:h-5 after:w-2 after:rotate-45 after:border-b-[4px] after:border-r-[4px] after:border-[#f0a53a] after:content-['']"
                            : "border-[#5aa5cf]",
                        ].join(" ")}
                      />
                      <span className="absolute left-7 top-1 h-3 w-11 rounded bg-[#dce8f2]" />
                      <span className="absolute left-7 top-5 h-2 w-16 rounded bg-[#e5eef6]" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-8 left-9 h-16 w-5 rounded-full bg-[#243b86]" />
                <div className="absolute bottom-7 left-6 h-14 w-7 rounded-t-full bg-[#3556a5]" />
                <div className="absolute bottom-3 left-8 h-5 w-5 rounded-full bg-[#f59e7a]" />
                <ScrollText
                  className="absolute right-8 top-[76px] h-12 w-12 text-[#8ac7ee]"
                  strokeWidth={1.8}
                />
              </div>

              <p className="mt-5 max-w-[470px] text-[15px] font-semibold leading-6 text-[#a0a8b5]">
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
