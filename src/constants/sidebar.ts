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

export const previewPeople = [
  {
    name: "Maya Chen",
    title: "VP Growth",
    headline: "Building outbound systems for B2B teams",
    linkedinUrl: "linkedin.com/in/mayachen",
    company: "Northstar Labs",
    companyUrl: "northstarlabs.io",
    companySize: "51-200",
  },
  {
    name: "Jordan Lee",
    title: "Head of Sales",
    headline: "Revenue leader focused on data enrichment",
    linkedinUrl: "linkedin.com/in/jordanlee",
    company: "SignalStack",
    companyUrl: "signalstack.com",
    companySize: "201-500",
  },
  {
    name: "Priya Shah",
    title: "Founder",
    headline: "Helping teams automate prospect research",
    linkedinUrl: "linkedin.com/in/priyashah",
    company: "Prospectly",
    companyUrl: "prospectly.ai",
    companySize: "11-50",
  },
  {
    name: "Alex Morgan",
    title: "RevOps Manager",
    headline: "Connecting GTM workflows and clean data",
    linkedinUrl: "linkedin.com/in/alexmorgan",
    company: "PipelineWorks",
    companyUrl: "pipelineworks.co",
    companySize: "101-250",
  },
  {
    name: "Sam Taylor",
    title: "Product Lead",
    headline: "Designing AI-assisted sales workflows",
    linkedinUrl: "linkedin.com/in/samtaylor",
    company: "BitAgent",
    companyUrl: "bitagent.dev",
    companySize: "51-200",
  },
];
