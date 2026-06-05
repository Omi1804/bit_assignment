import {
  Building2,
  CheckCircle2,
  Circle,
  Coins,
  FileCheck2,
  Play,
  Plus,
  Users,
} from "lucide-react";

const checklistItems = [
  { label: "Create your data list", done: true },
  { label: "Learn about BitAgent", done: true },
  { label: "Connect an integration", done: true },
  { label: "Customise waterfall providers", done: false },
];

const Page = () => {
  return (
    <div className="flex h-full flex-1 flex-col bg-white">
      <header className="flex h-14 shrink-0 items-center justify-end border-b border-neutral-200 px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-8 items-center gap-3 rounded-[12px] bg-[#edf5ec] px-3 text-[#5d8b6b]">
            <Coins className="h-4 w-4" strokeWidth={2.2} />
            <p className="text-sm font-semibold tracking-normal">450000/5500000</p>
            <span className="rounded-[10px] bg-[#5a8a64] px-3 py-1 text-xs font-semibold text-white">
              Booster Plan
            </span>
          </div>

          <div
            aria-label="Current user"
            className="relative h-8 w-8 overflow-hidden rounded-full bg-[#e7b96f]"
          >
            <div className="absolute inset-x-1 top-1 h-5 rounded-full bg-[#f2d19b]" />
            <div className="absolute bottom-0 left-[9px] h-5 w-[10px] rounded-t-full bg-[#d58c29]" />
            <div className="absolute bottom-0 right-[6px] h-6 w-[11px] rounded-t-full bg-[#f1c05c]" />
          </div>
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-auto px-8 py-8">
        <section className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-[22px] font-semibold leading-tight tracking-normal text-[#1f2937]">
              Welcome back, Tim!
            </h1>
            <p className="mt-3 text-[15px] font-medium leading-none text-[#7b8493]">
              Here&apos;s your daily scoop on Bitscale!
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button className="inline-flex h-10 items-center gap-3 rounded-[8px] border border-[#e0e5eb] bg-white px-4 text-sm font-semibold text-[#374151] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
              <Building2 className="h-5 w-5 text-[#5b8b6a]" strokeWidth={2.2} />
              <span>Find Companies</span>
            </button>
            <button className="inline-flex h-10 items-center gap-3 rounded-[8px] border border-[#e0e5eb] bg-white px-4 text-sm font-semibold text-[#374151] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
              <Users className="h-5 w-5 text-[#7c4aa7]" strokeWidth={2.2} />
              <span>Find People</span>
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-[8px] bg-[#1f2937] px-4 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(16,24,40,0.12)]">
              <Plus className="h-5 w-5" strokeWidth={2.2} />
              <span>New Grid</span>
            </button>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-2 gap-6">
          <article className="rounded-[8px] bg-[#f3f8fb] p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-[15px] font-semibold text-[#4e86b2]">Latest from Bitscale</h2>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-7 rounded-full bg-[#4e86b2]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#9ec0d8]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#9ec0d8]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#9ec0d8]" />
              </div>
            </div>

            <div className="mt-6 flex gap-5">
              <div className="relative h-[92px] w-[170px] shrink-0 overflow-hidden rounded-[10px] bg-[#d4c09a] shadow-[0_8px_18px_rgba(15,23,42,0.14)]">
                <div className="absolute inset-2 rounded-[6px] bg-[#eef1ee]" />
                <div className="absolute left-5 top-5 h-1 w-16 rounded-full bg-[#c5d2cb]" />
                <div className="absolute left-5 top-9 h-1 w-24 rounded-full bg-[#d5ded9]" />
                <div className="absolute left-5 top-13 h-1 w-20 rounded-full bg-[#d5ded9]" />
                <div className="absolute right-4 top-5 h-12 w-12 rounded bg-[#e8ece8]" />
                <div className="absolute bottom-2 right-2 h-7 w-7 rounded-full bg-[#374151]" />
                <button
                  aria-label="Play latest Bitscale video"
                  className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111827] shadow-md"
                >
                  <Play className="ml-0.5 h-4 w-4 fill-current" strokeWidth={0} />
                </button>
              </div>

              <div className="min-w-0 pt-0.5">
                <h3 className="text-[15px] font-semibold leading-tight text-[#1f2937]">
                  How to Integrate 2 Way HubSpot
                </h3>
                <p className="mt-3 max-w-[360px] text-[14px] font-medium leading-5 text-[#7b8493]">
                  Prerequisites for this Integration is that you should have a HubSpot account and
                  Copy the API key. We simple add our API key through the integrations pa...
                </p>
                <p className="mt-1 text-xs font-medium text-[#a8b0bb]">Posted today</p>
              </div>
            </div>
          </article>

          <article className="rounded-[8px] border border-[#e5edf5] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4b5563] text-white">
                <FileCheck2 className="h-6 w-6" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-[16px] font-semibold leading-none text-[#3f3f46]">
                  Complete product demo
                </h2>
                <p className="mt-2 text-sm font-medium leading-none text-[#454545]">
                  92% of users nailed BitScale after this walkthrough
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e6e9ee]">
                <div className="h-full w-3/4 rounded-full bg-[#4f8a68]" />
              </div>
              <span className="text-xs font-semibold text-[#5c936d]">75%</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-14 gap-y-5">
              {checklistItems.map((item) => {
                const Icon = item.done ? CheckCircle2 : Circle;

                return (
                  <div key={item.label} className="flex items-center gap-2">
                    <Icon
                      className={item.done ? "h-4 w-4 text-[#4d86ae]" : "h-4 w-4 text-[#c8ced6]"}
                      fill={item.done ? "currentColor" : "none"}
                      strokeWidth={item.done ? 3 : 2}
                    />
                    <span className="text-sm font-semibold leading-none text-[#4b5563]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Page;
