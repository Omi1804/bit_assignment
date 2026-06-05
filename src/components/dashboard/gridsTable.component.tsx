"use client";

import { useMemo, useState } from "react";
import { rows } from "@/constants/dashboard";
import { ArrowUp, Building2, ChevronDown, Ellipsis, List, Search, Star, Users } from "lucide-react";
import { RowIcon } from "./rowIcon.component";
import Avatar from "../ui/Avatar";
import { cn } from "@/utils/cn";

type GridRow = {
  name: string;
  editor: string;
  avatarVarient: number;
  icon?: typeof Building2;
  iconLabel?: string;
  iconTone: string;
  starred?: boolean;
  expanded?: boolean;
  highlighted?: boolean;
  connectors?: string[];
};

export default function GridsTable({ createdGridCount = 0 }: { createdGridCount?: number }) {
  const [activeTab, setActiveTab] = useState<"grids" | "starred">("grids");
  const [query, setQuery] = useState("");
  const [isCompact, setIsCompact] = useState(false);
  const [openActionRow, setOpenActionRow] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState(
    () => new Set(rows.filter((row) => row.expanded).map((row) => row.name)),
  );
  const [starredRows, setStarredRows] = useState(
    () => new Set(rows.filter((row) => row.starred).map((row) => row.name)),
  );

  const allRows = useMemo<GridRow[]>(
    () => [
      ...Array.from({ length: createdGridCount }).map((_, index) => ({
        name: `Untitled grid ${createdGridCount - index}`,
        editor: "You",
        avatarVarient: 1,
        icon: Building2,
        iconTone: "green",
        starred: false,
        highlighted: true,
      })),
      ...(rows as GridRow[]),
    ],
    [createdGridCount],
  );

  const visibleRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allRows.filter((row) => {
      const isStarred = starredRows.has(row.name);
      const matchesTab = activeTab === "grids" || isStarred;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        row.name.toLowerCase().includes(normalizedQuery) ||
        row.editor.toLowerCase().includes(normalizedQuery);

      return matchesTab && matchesQuery;
    });
  }, [activeTab, allRows, query, starredRows]);

  function toggleStar(rowName: string) {
    setStarredRows((currentRows) => {
      const nextRows = new Set(currentRows);

      if (nextRows.has(rowName)) {
        nextRows.delete(rowName);
      } else {
        nextRows.add(rowName);
      }

      return nextRows;
    });
  }

  function toggleExpanded(rowName: string) {
    setExpandedRows((currentRows) => {
      const nextRows = new Set(currentRows);

      if (nextRows.has(rowName)) {
        nextRows.delete(rowName);
      } else {
        nextRows.add(rowName);
      }

      return nextRows;
    });
  }

  return (
    <section className="mt-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
        <div className="flex w-full items-end md:w-auto">
          <button
            type="button"
            onClick={() => setActiveTab("grids")}
            className={cn(
              "h-10 flex-1 px-5 border-b text-sm font-medium text-nowrap",
              activeTab === "grids"
                ? "border-[#2563eb] text-[#2563eb]"
                : "border-neutral-300 text-[#6b7280]",
            )}
          >
            My Grids
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("starred")}
            className={cn(
              "h-10 flex-1 border-b px-6 text-sm font-medium",
              activeTab === "starred"
                ? "border-[#2563eb] text-[#2563eb]"
                : "border-neutral-300 text-[#6b7280]",
            )}
          >
            Starred
          </button>
        </div>

        <div className="flex w-full items-center gap-3 md:w-auto md:gap-4">
          <label className="flex h-9 min-w-0 flex-1 items-center gap-4 rounded-[10px] bg-gray-100 px-4 text-[#6b7280] md:w-[350px] md:flex-none">
            <Search width={16} height={16} strokeWidth={2.2} />
            <span className="sr-only">Search grids and workbooks</span>
            <input
              aria-label="Search grids and workbooks"
              placeholder="Search grids and workbooks..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-[#8b93a1]"
            />
          </label>
          <button
            type="button"
            onClick={() => setIsCompact((compact) => !compact)}
            aria-label="View table options"
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-[#374151]",
              isCompact ? "bg-blue-100 text-blue-700" : "bg-[#f3f4f6]",
            )}
          >
            <List className="h-3.5 w-3.5" strokeWidth={2.4} />
          </button>
        </div>
      </div>

      <div className="mt-7 overflow-x-auto">
        <table className="min-w-[860px] w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-neutral-200 tracking-wide text-xs font-medium text-[#1f2937]">
              <th className="w-[58%] px-5 pb-3 font-medium">
                <span className="ml-12 inline-flex items-center gap-3">
                  Name
                  <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
              </th>
              <th className="w-[18%] px-4 pb-3 font-medium">Edited by</th>
              <th className="w-[14%] px-4 pb-3 font-medium">Last edited</th>
              <th className="w-[10%] px-4 pb-3 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-[#2f3642]">
            {visibleRows.map((row) => {
              const Icon = row.icon;
              const isStarred = starredRows.has(row.name);
              const isExpanded = expandedRows.has(row.name);

              return (
                <tr
                  key={row.name}
                  className={[
                    "border-b border-gray-100",
                    isCompact ? "h-10" : "h-12",
                    row.highlighted ? "bg-[#F9FAFB]" : "bg-white",
                  ].join(" ")}
                >
                  <td className="px-5">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleExpanded(row.name)}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${row.name}`}
                        className="flex h-5 w-5 items-center justify-center text-[#374151]"
                      >
                        {row.connectors ? (
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              !isExpanded && "-rotate-90",
                            )}
                            strokeWidth={2.4}
                          />
                        ) : null}
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleStar(row.name)}
                        aria-label={`${isStarred ? "Unstar" : "Star"} ${row.name}`}
                      >
                        <Star
                          size={16}
                          className={cn(
                            "shrink-0",
                            isStarred ? "fill-[#f59e0b] text-[#f59e0b]" : "text-[#a0a8b5]",
                          )}
                          strokeWidth={2}
                        />
                      </button>
                      <div className="flex w-[80px] shrink-0 items-center">
                        {row.connectors ? (
                          <div className="flex items-center -space-x-1">
                            <RowIcon icon={Users} tone="purple" />
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#edf0f3] bg-white text-xs font-bold text-[#f15c45] shadow-[0_2px_8px_rgba(15,23,42,0.08)]">
                              ✕
                            </span>
                            <RowIcon icon={Building2} tone="green" />
                          </div>
                        ) : (
                          <RowIcon icon={Icon} iconLabel={row.iconLabel} tone={row.iconTone} />
                        )}
                      </div>
                      <span className="min-w-0 truncate text-xs">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-4">
                    <div className="flex items-center gap-3">
                      <Avatar varient={row.avatarVarient} className="!w-[21px] !h-[21px]" />
                      <span className="font-medium text-xs">{row.editor}</span>
                    </div>
                  </td>
                  <td className="px-4 text-xs font-medium">06 Aug, 2025</td>
                  <td className="relative px-4 text-center text-xs">
                    <button
                      type="button"
                      aria-label={`Actions for ${row.name}`}
                      onClick={() =>
                        setOpenActionRow((currentRow) =>
                          currentRow === row.name ? null : row.name,
                        )
                      }
                      className="p-1 text-[#111827]"
                    >
                      <Ellipsis className="h-5 w-5" strokeWidth={2} />
                    </button>
                    {openActionRow === row.name ? (
                      <div className="absolute right-8 top-8 z-20 w-32 rounded-lg border border-neutral-200 bg-white p-1 text-left shadow-lg">
                        {["Open", "Rename", "Duplicate"].map((action) => (
                          <button
                            key={action}
                            type="button"
                            onClick={() => setOpenActionRow(null)}
                            className="block w-full rounded-md px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </td>
                </tr>
              );
            })}
            {visibleRows.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-sm text-gray-500">
                  No grids match your current view.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}
