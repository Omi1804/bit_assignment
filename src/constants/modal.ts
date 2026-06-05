import { Building2, Globe2, MapPin, SlidersHorizontal, Users, UserRoundSearch } from "lucide-react";

export const peopleFilters = [
  {
    label: "People Keyword",
    placeholder: "Enter single keyword here...",
    icon: UserRoundSearch,
    expanded: true,
  },
  { label: "Job Title", placeholder: "E.g: Manager, Software Engineer", icon: Building2 },
  { label: "Company Website", placeholder: "Eg: Google.com, LinkedIn.com", icon: Globe2 },
  { label: "Person Location", placeholder: "Eg: London, Great New York City", icon: MapPin },
  { label: "Company Location", placeholder: "E.g: United States, UAE", icon: MapPin },
  { label: "Company Headcount", placeholder: "E.g: 11-50 , 10000+", icon: Users },
  { label: "Management Level", placeholder: "E.g: Owner, Founder", icon: SlidersHorizontal },
  { label: "Management Level", placeholder: "E.g: Owner, Founder", icon: SlidersHorizontal },
  { label: "Management Level", placeholder: "E.g: Owner, Founder", icon: SlidersHorizontal },
];

export const peopleTableColumns = [
  "NAME",
  "TITLE",
  "HEADLINE",
  "LINKEDIN URL",
  "COMPANY",
  "COMPANY URL",
  "COMPANY SIZE",
];
