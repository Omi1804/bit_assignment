import { rows } from "@/constants/dashboard";
import {
  ArrowUp,
  Building2,
  ChevronDown,
  Ellipsis,
  List,
  MoveUp,
  Search,
  Star,
  Users,
} from "lucide-react";
import { RowIcon } from "./rowIcon.component";
import Avatar from "../ui/Avatar";

export default function GridsTable() {
  return (
    <section className="mt-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
        <div className="flex w-full items-end md:w-auto">
          <button className="h-10 flex-1 px-5 border-b border-[#2563eb] text-sm font-medium text-[#2563eb] text-nowrap">
            My Grids
          </button>
          <button className="h-10 border-b border-neutral-300 px-6 flex-1 text-sm font-medium text-[#6b7280]">
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
              className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-[#8b93a1]"
            />
          </label>
          <button
            aria-label="View table options"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f4f6] text-[#374151]"
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
            {rows.map((row) => {
              const Icon = row.icon;

              return (
                <tr
                  key={row.name}
                  className={[
                    "h-12 border-b border-gray-100",
                    row.highlighted ? "bg-[#F9FAFB]" : "bg-white",
                  ].join(" ")}
                >
                  <td className="px-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center text-[#374151]">
                        {row.expanded ? (
                          <ChevronDown className="h-4 w-4" strokeWidth={2.4} />
                        ) : null}
                      </span>
                      <Star
                        size={16}
                        className={[
                          "shrink-0",
                          row.starred ? " text-[#f59e0b]" : "text-[#a0a8b5]",
                        ].join(" ")}
                        strokeWidth={2}
                      />
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
                  <td className="px-4 text-center text-xs">
                    <button aria-label={`Actions for ${row.name}`} className="p-1 text-[#111827]">
                      <Ellipsis className="h-5 w-5" strokeWidth={2} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
