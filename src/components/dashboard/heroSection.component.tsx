import { CheckCircle2, Circle, FileCheck2, FileText, Play } from "lucide-react";
import React from "react";

const checklistItems = [
  { label: "Create your data list", done: true },
  { label: "Learn about BitAgent", done: true },
  { label: "Connect an integration", done: true },
  { label: "Customise waterfall providers", done: false },
];

const HeroSection = () => {
  return (
    <section className="mt-6 grid grid-cols-2 gap-6">
      <div className="rounded-md bg-[#E7F3F880] px-5 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-[#347FA9]">Latest from Bitscale</h2>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-7 rounded-full bg-[#4e86b2]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#9ec0d8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#9ec0d8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#9ec0d8]" />
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <div className="h-[97px] w-[143px] rounded-lg flex justify-center items-center bg-center bg-cover relative bg-[url('https://img.youtube.com/vi/2JroEREiBLw/maxresdefault.jpg')] overflow-hidden">
            <div className="flex-col cursor-default  w-full h-full bg-black/50  flex justify-center items-center">
              <a
                href="https://www.youtube.com/embed/wSruLMPiwHA"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-1.5"
              >
                <Play fill="#000" width={13} height={13} />
              </a>
            </div>
          </div>

          <div className="min-w-0 pt-0.5">
            <h3 className="text-[13px] font-medium leading-tight text-[#1f2937]">
              How to Integrate 2 Way HubSpot
            </h3>
            <p className="mt-1 max-w-[360px] text-[12px] leading-5 text-[#7b8493]">
              Prerequisites for this Integration is that you should have a HubSpot account and Copy
              the API key. We simple add our API key through the integrations pa...
            </p>
            <p className="mt-1 text-[11px] font-medium text-[#a8b0bb]">Posted today</p>
          </div>
        </div>
      </div>

      <div className="rounded-md border border-[#E7F3F8] bg-linear-to-b from-[#E7F3F8] via-[#ffffff] to-[#ffffff] px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4b5563] text-white p-1.5">
            <FileText />
          </div>
          <div>
            <h2 className="text-sm font-medium leading-none text-[#383530]">
              Complete product demo
            </h2>
            <p className="mt-2 text-xs leading-none text-[#454545]">
              92% of users nailed BitScale after this walkthrough
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#e6e9ee]">
            <div className="h-full w-3/4 rounded-full bg-[#4f8a68]" />
          </div>
          <span className="text-xs font-medium text-[#5c936d]">75%</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-x-14 gap-y-4">
          {checklistItems.map((item) => {
            const Icon = item.done ? CheckCircle2 : Circle;

            return (
              <div key={item.label} className="flex items-center gap-2">
                <Icon
                  className={item.done ? "h-4 w-4 text-[#4d86ae]" : "h-4 w-4 text-[#c8ced6]"}
                  strokeWidth={item.done ? 3 : 2}
                />
                <span className="text-xs font-medium leading-none text-[#374151]">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
