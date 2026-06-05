import { Blend, Book, BookOpen, LayoutDashboard, Rocket, Settings } from "lucide-react";

export const navSections = [
  {
    title: "Home",
    items: [
      {
        label: "My Dashboard",
        icon: LayoutDashboard,
        active: true,
      },
      {
        label: "Playbooks",
        icon: Book,
        disabled: true,
        badge: Rocket,
      },
      {
        label: "Integrations",
        icon: Blend,
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
