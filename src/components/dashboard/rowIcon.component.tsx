import { avatarClasses, iconToneClasses, rows } from "@/constants/dashboard";
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

export function RowIcon({
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
        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-[#edf0f3] text-[12px] font-bold shadow-[0_2px_8px_rgba(15,23,42,0.08)]",
        iconToneClasses[tone],
      ].join(" ")}
    >
      {Icon ? <Icon className="h-3.5 w-3.5" strokeWidth={2.1} /> : iconLabel}
    </span>
  );
}
