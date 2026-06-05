import { avatarClasses, iconToneClasses, rows } from "@/constants/dashboard";
import { ArrowUp, Building2, ChevronDown, Ellipsis, List, Search, Star, Users } from "lucide-react";

function RowIcon({
  icon: Icon,
  iconLabel,
  tone,
}: {
  icon?: typeof Building2;
  iconLabel?: string;
  tone: string;
}) {
  return (
    <span
      className={[
        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#edf0f3] text-[12px] font-bold shadow-[0_2px_8px_rgba(15,23,42,0.08)]",
        iconToneClasses[tone],
      ].join(" ")}
    >
      {Icon ? <Icon className="h-3.5 w-3.5" strokeWidth={2.1} /> : iconLabel}
    </span>
  );
}

function PersonAvatar({ type }: { type: string }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "inline-flex h-6 w-6 shrink-0 overflow-hidden rounded-full border border-white shadow-sm",
        avatarClasses[type],
      ].join(" ")}
    />
  );
}

export default function GridsTable() {
  return (
    <section className="mt-8">
      <div className="flex items-end justify-between gap-6">
        <div className="flex w-[292px] items-end border-b border-[#e5e7eb]">
          <button className="h-10 flex-1 border-b border-[#2563eb] text-sm font-medium text-[#2563eb]">
            My Grids
          </button>
          <button className="h-10 flex-1 text-sm font-medium text-[#6b7280]">Starred</button>
        </div>

        <div className="flex items-center gap-4">
          <label className="flex h-10 w-[350px] items-center gap-4 rounded-[10px] bg-[#f3f4f6] px-4 text-[#6b7280]">
            <Search className="h-[18px] w-[18px]" strokeWidth={2.2} />
            <span className="sr-only">Search grids and workbooks</span>
            <input
              aria-label="Search grids and workbooks"
              placeholder="Search grids and workbooks..."
              className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-[#8b93a1]"
            />
          </label>
          <button
            aria-label="View table options"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f6] text-[#374151]"
          >
            <List className="h-5 w-5" strokeWidth={2.4} />
          </button>
        </div>
      </div>

      <div className="mt-7 overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#e5e7eb] text-sm font-semibold text-[#1f2937]">
              <th className="w-[58%] px-5 pb-3 font-semibold">
                <span className="ml-12 inline-flex items-center gap-3">
                  Name
                  <ArrowUp className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </th>
              <th className="w-[18%] px-4 pb-3 font-semibold">Edited by</th>
              <th className="w-[14%] px-4 pb-3 font-semibold">Last edited</th>
              <th className="w-[10%] px-4 pb-3 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-[#2f3642]">
            {rows.map((row) => {
              const Icon = row.icon;

              return (
                <tr
                  key={row.name}
                  className={[
                    "h-12 border-b border-[#edf0f3]",
                    row.highlighted ? "bg-[#f8fafc]" : "bg-white",
                  ].join(" ")}
                >
                  <td className="px-5">
                    <div className="flex items-center gap-4">
                      <span className="flex h-5 w-5 items-center justify-center text-[#374151]">
                        {row.expanded ? (
                          <ChevronDown className="h-4 w-4" strokeWidth={2.4} />
                        ) : null}
                      </span>
                      <Star
                        className={[
                          "h-[18px] w-[18px] shrink-0",
                          row.starred ? "fill-[#f59e0b] text-[#f59e0b]" : "text-[#a0a8b5]",
                        ].join(" ")}
                        strokeWidth={2}
                      />
                      <div className="flex w-[74px] shrink-0 items-center">
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
                      <span className="min-w-0 truncate text-sm font-medium">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-4">
                    <div className="flex items-center gap-3">
                      <PersonAvatar type={row.avatar} />
                      <span className="font-medium">{row.editor}</span>
                    </div>
                  </td>
                  <td className="px-4 font-medium">06 Aug, 2025</td>
                  <td className="px-4 text-center">
                    <button aria-label={`Actions for ${row.name}`} className="p-1 text-[#111827]">
                      <Ellipsis className="h-5 w-5" strokeWidth={2.8} />
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
