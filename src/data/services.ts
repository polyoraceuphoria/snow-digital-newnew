export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  turnaround: string;
  href: string;
  accent: "pink" | "blue" | "mint" | "lavender" | "peach";
};

export const services: Service[] = [
  {
    slug: "product-description-cleanup",
    title: "Product description cleanup",
    shortTitle: "Product copy",
    description:
      "Clear, engaging descriptions for your online store.",
    turnaround: "Product Descriptions",
    href: "/services/product-descriptions",
    accent: "pink"
  },
  {
    slug: "social-caption-packs",
    title: "Social content packs",
    shortTitle: "Social content",
    description:
      "Ready-to-post captions and content ideas.",
    turnaround: "Social Content",
    href: "/services/social-content",
    accent: "blue"
  },
  {
    slug: "landing-page-copy",
    title: "Landing page copy",
    shortTitle: "Landing copy",
    description:
      "Headlines and page copy for focused offers.",
    turnaround: "Landing Page Copy",
    href: "/services/landing-page-copy",
    accent: "mint"
  },
  {
    slug: "pdf-to-excel",
    title: "Data & documents",
    shortTitle: "Data cleanup",
    description:
      "Messy spreadsheets and PDFs transformed into clean files.",
    turnaround: "Data & Documents",
    href: "/services/pdf-to-excel",
    accent: "lavender"
  },
  {
    slug: "invoice-extraction",
    title: "Invoice extraction",
    shortTitle: "Invoices",
    description:
      "Invoice details organized into useful rows.",
    turnaround: "Invoice Extraction",
    href: "/services/invoice-extraction",
    accent: "peach"
  },
  {
    slug: "spreadsheet-cleanup",
    title: "Spreadsheet cleanup",
    shortTitle: "Spreadsheets",
    description:
      "Cleaner sheets that are easier to use and share.",
    turnaround: "Spreadsheet Cleanup",
    href: "/services/spreadsheet-cleanup",
    accent: "blue"
  }
];

export const pricing = [
  {
    name: "Starter",
    price: "$49+",
    detail: "One focused digital task",
    items: ["Product copy, captions, or small cleanup", "Clear scope before work starts", "Polished delivery"]
  },
  {
    name: "Launch",
    price: "$149+",
    detail: "A small campaign or page",
    items: ["Landing page copy or content pack", "Light structure and revisions", "Ready-to-use deliverables"]
  },
  {
    name: "Ongoing",
    price: "Custom",
    detail: "Recurring support",
    items: ["Catalog, content, or admin cleanup", "Prioritized batches", "Simple weekly rhythm"]
  }
];

export const pdfPricing = [
  {
    name: "Basic",
    price: "$19",
    detail: "Up to 5 pages",
    items: ["One PDF or document", "Clean columns and rows", "XLSX or CSV delivery"]
  },
  {
    name: "Standard",
    price: "$59",
    detail: "Up to 20 pages",
    items: ["Larger PDF cleanup", "Formatting pass", "Unclear values flagged"]
  },
  {
    name: "Premium",
    price: "$149",
    detail: "Up to 50 pages or multiple PDFs",
    items: ["Multiple files", "Light consolidation", "Review-ready delivery"]
  }
];
