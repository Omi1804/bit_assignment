import Image from "next/image";
import { ChevronRight, ChevronUp, ChevronsUpDown } from "lucide-react";
import { cn } from "@/utils/cn";
import { navSections } from "@/constants/sidebar";

export const Sidebar = () => {
  return (
    <aside className="flex h-full w-56 shrink-0 flex-col border-r border-[#e5e7eb] bg-white">
      <div className="flex h-14 shrink-0 items-center border-b border-[#e5e7eb] px-5">
        <Image
          src="/bitscale.svg"
          alt="Bitscale"
          width={100}
          height={59}
          priority
          className="h-auto w-24"
        />
      </div>

      <div className="flex h-13 shrink-0 items-center justify-between border-b border-[#e5e7eb] px-5">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex -space-x-3">
            <Image
              height={32}
              width={32}
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User Avatar"
              className="h-6 w-6 shrink-0 rounded-full object-cover"
            />
            <Image
              height={32}
              width={32}
              src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User Avatar"
              className="h-6 w-6 shrink-0 rounded-full object-cover"
            />
          </div>
          <p className="truncate text-sm font-medium text-gray-800">GTM Spaces</p>
        </div>
        <ChevronsUpDown className="h-4 w-4 shrink-0 text-gray-500" strokeWidth={2.2} />
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-between px-2 pb-4 pt-5">
        <nav className="space-y-8" aria-label="Sidebar navigation">
          {navSections.map((section) => (
            <section key={section.title} className="space-y-3">
              <p className="px-3 text-xs font-medium leading-none text-gray-500">{section.title}</p>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const BadgeIcon = item.badge;

                  return (
                    <a
                      key={item.label}
                      href="#"
                      aria-disabled={item.disabled}
                      className={[
                        "flex h-9 items-center gap-2 rounded-sm px-3 text-[15px] font-medium transition-colors",
                        item.active
                          ? "bg-[#f0f2f5] text-blue-700"
                          : item.disabled
                            ? "pointer-events-none text-[#9ca3af]"
                            : "text-[#1f2937] hover:bg-[#f7f8fa]",
                      ].join(" ")}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0",
                          !item.disabled
                            ? item.active
                              ? "text-blue-500"
                              : "text-gray-500"
                            : "text-gray-400",
                        )}
                        strokeWidth={item.active ? 2.2 : 2}
                      />
                      <span className="min-w-0 flex-1 truncate text-sm">{item.label}</span>
                      {item.active ? (
                        <ChevronRight className="h-4 w-4 shrink-0" strokeWidth={2.6} />
                      ) : null}
                      {BadgeIcon ? (
                        <span className="ml-auto flex h-6 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff3d8] text-[#d18a18]">
                          <BadgeIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
                        </span>
                      ) : null}
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </nav>

        <div className="bg-[#f3f4f6] px-3 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="/bitscale.svg"
              alt="Bitscale"
              width={266}
              height={59}
              className="h-auto w-16"
            />
            <ChevronUp className="h-3.5 w-3.5 text-[#1f2937]" strokeWidth={2.5} />
          </div>
          <p className="mt-2 text-xs font-medium leading-tight text-[#4b5563]">
            Get Support at Bitscale
          </p>
        </div>
      </div>
    </aside>
  );
};
