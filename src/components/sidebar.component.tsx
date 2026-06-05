"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronRight, ChevronUp, ChevronsUpDown } from "lucide-react";
import { cn } from "@/utils/cn";
import { navSections } from "@/constants/sidebar";

const workspaces = [
  {
    id: "gtm",
    name: "GTM Spaces",
    email: "team@bitscale.ai",
    initial: "G",
  },
  {
    id: "growth",
    name: "Growth Research",
    email: "growth@bitscale.ai",
    initial: "R",
  },
];

export const Sidebar = () => {
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState(workspaces[0].id);
  const [activeNavItem, setActiveNavItem] = useState("My Dashboard");
  const activeWorkspace = workspaces.find((workspace) => workspace.id === activeWorkspaceId)!;

  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-[#e5e7eb] bg-white md:h-full md:w-56 md:border-b-0 md:border-r">
      <div className="flex h-14 shrink-0 items-center border-b border-[#e5e7eb] px-4 sm:px-5">
        <Image
          src="/bitscale.svg"
          alt="Bitscale"
          width={100}
          height={59}
          priority
          className="h-auto w-24"
        />
      </div>

      <div className="relative flex h-13 shrink-0 items-center justify-between border-b border-[#e5e7eb] px-4 sm:px-5">
        <button
          type="button"
          onClick={() => setIsWorkspaceOpen((isOpen) => !isOpen)}
          className="flex min-w-0 flex-1 items-center justify-between gap-3"
          aria-expanded={isWorkspaceOpen}
          aria-label="Change workspace"
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="flex -space-x-3">
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
            </span>
            <span className="truncate text-sm font-medium text-gray-800">
              {activeWorkspace.name}
            </span>
          </span>
          <ChevronsUpDown className="h-4 w-4 shrink-0 text-gray-500" strokeWidth={2.2} />
        </button>

        {isWorkspaceOpen ? (
          <div className="absolute left-2 right-2 top-[calc(100%+8px)] z-30 rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_10px_28px_rgba(15,23,42,0.14)] md:left-3 md:right-auto md:w-[320px]">
            <p className="px-2 pb-3 text-sm font-medium text-gray-500">Workspaces</p>
            <div className="space-y-1 border-b border-[#e5e7eb]">
              {workspaces.map((workspace) => {
                const isActive = workspace.id === activeWorkspaceId;

                return (
                  <button
                    key={workspace.id}
                    type="button"
                    onClick={() => {
                      setActiveWorkspaceId(workspace.id);
                      setIsWorkspaceOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-gray-50"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-600">
                      {workspace.initial}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-medium text-gray-900">
                        {workspace.name}
                      </span>
                      <span className="block truncate text-xs text-gray-500">
                        {workspace.email}
                      </span>
                    </span>
                    {isActive ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                          Default
                        </span>
                        <Check className="h-4 w-4 text-blue-600" strokeWidth={2.4} />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
            <button className="mt-3 h-9 w-full rounded-lg bg-gray-200 text-sm font-medium text-gray-800 hover:bg-gray-300">
              Join a workspace
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-between px-2 py-2 md:pb-4 md:pt-5">
        <nav
          className="flex gap-2 overflow-x-auto md:block md:space-y-8 md:overflow-visible"
          aria-label="Sidebar navigation"
        >
          {navSections.map((section) => (
            <section
              key={section.title}
              className="flex shrink-0 items-center gap-2 md:block md:space-y-3"
            >
              <p className="hidden px-3 text-xs font-medium leading-none text-gray-500 md:block">
                {section.title}
              </p>
              <div className="flex gap-2 md:block md:space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const BadgeIcon = item.badge;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      aria-disabled={item.disabled}
                      onClick={() => {
                        if (!item.disabled) {
                          setActiveNavItem(item.label);
                        }
                      }}
                      className={[
                        "flex h-9 w-full items-center gap-2 rounded-sm px-3 text-left text-[15px] font-medium transition-colors",
                        activeNavItem === item.label
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
                            ? activeNavItem === item.label
                              ? "text-blue-500"
                              : "text-gray-500"
                            : "text-gray-400",
                        )}
                        strokeWidth={item.active ? 2.2 : 2}
                      />
                      <span className="min-w-0 flex-1 truncate text-sm">{item.label}</span>
                      {activeNavItem === item.label ? (
                        <ChevronRight className="h-4 w-4 shrink-0" strokeWidth={2.6} />
                      ) : null}
                      {BadgeIcon ? (
                        <span className="ml-auto flex h-6 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff3d8] text-[#d18a18]">
                          <BadgeIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </nav>

        <div className="hidden bg-[#f3f4f6] px-3 py-4 md:block">
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
