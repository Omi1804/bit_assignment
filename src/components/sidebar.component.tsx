import Image from "next/image";
import {
  BookOpen,
  ChevronRight,
  ChevronUp,
  ChevronsUpDown,
  LayoutGrid,
  Link2,
  Rocket,
  Settings,
} from "lucide-react";

const navSections = [
  {
    title: "Home",
    items: [
      {
        label: "My Dashboard",
        icon: LayoutGrid,
        active: true,
      },
      {
        label: "Playbooks",
        icon: BookOpen,
        disabled: true,
        badge: Rocket,
      },
      {
        label: "Integrations",
        icon: Link2,
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        label: "Documnetation",
        icon: BookOpen,
      },
      {
        label: "Settings",
        icon: Settings,
      },
    ],
  },
];

export const Sidebar = () => {
  return (
    <aside className="flex h-full w-56 shrink-0 flex-col border-r border-[#e5e7eb] bg-white">
      <div className="flex h-14 shrink-0 items-center border-b border-[#e5e7eb] px-5">
        <Image
          src="/bitscale.svg"
          alt="Bitscale"
          width={266}
          height={59}
          priority
          className="h-auto w-[128px]"
        />
      </div>

      <div className="flex h-[52px] shrink-0 items-center justify-between border-b border-[#e5e7eb] px-8">
        <div className="flex min-w-0 items-center gap-4">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#c89b72]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,#f0caa1_0_19%,transparent_20%),radial-gradient(circle_at_66%_33%,#243245_0_15%,transparent_16%),linear-gradient(135deg,#b87845,#e5b27a_45%,#4c5665_46%,#1f2937)]" />
            <div className="absolute bottom-0 left-[9px] h-4 w-[7px] rounded-t-full bg-[#172033]" />
            <div className="absolute bottom-0 right-[8px] h-[18px] w-[9px] rounded-t-full bg-[#111827]" />
          </div>
          <p className="truncate text-[15px] font-semibold tracking-normal text-[#1f2937]">
            GTM Spaces
          </p>
        </div>
        <ChevronsUpDown className="h-5 w-5 shrink-0 text-[#6b7280]" strokeWidth={2.2} />
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-between px-4 pb-4 pt-5">
        <nav className="space-y-8" aria-label="Sidebar navigation">
          {navSections.map((section) => (
            <section key={section.title} className="space-y-3">
              <p className="px-3 text-[13px] font-medium leading-none text-[#6b7280]">
                {section.title}
              </p>
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
                        "flex h-9 items-center gap-3 rounded-[8px] px-3 text-[15px] font-medium transition-colors",
                        item.active
                          ? "bg-[#f0f2f5] text-[#1559e6]"
                          : item.disabled
                            ? "pointer-events-none text-[#9ca3af]"
                            : "text-[#1f2937] hover:bg-[#f7f8fa]",
                      ].join(" ")}
                    >
                      <Icon className="h-5 w-5 shrink-0" strokeWidth={item.active ? 2.2 : 2} />
                      <span className="min-w-0 flex-1 truncate">{item.label}</span>
                      {item.active ? (
                        <ChevronRight className="h-5 w-5 shrink-0" strokeWidth={2.6} />
                      ) : null}
                      {BadgeIcon ? (
                        <span className="ml-auto flex h-6 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff3d8] text-[#d18a18]">
                          <BadgeIcon className="h-4 w-4" strokeWidth={2.2} />
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
              className="h-auto w-[70px]"
            />
            <ChevronUp className="h-5 w-5 text-[#1f2937]" strokeWidth={2.5} />
          </div>
          <p className="mt-1 text-[13px] font-medium leading-tight text-[#4b5563]">
            Get Support at Bitscale
          </p>
        </div>
      </div>
    </aside>
  );
};
