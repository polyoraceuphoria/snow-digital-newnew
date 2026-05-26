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
      "Polish product descriptions so listings read clearly, consistently, and ready for storefront publishing.",
    turnaround: "Great for stores and catalogs",
    href: "/services/product-descriptions",
    accent: "pink"
  },
  {
    slug: "social-caption-packs",
    title: "Social content packs",
    shortTitle: "Social content",
    description:
      "Simple caption sets and campaign prompts for launches, promos, product drops, and weekly posting needs.",
    turnaround: "Clean copy without the blank page",
    href: "/services/social-content",
    accent: "blue"
  },
  {
    slug: "landing-page-copy",
    title: "Landing page copy",
    shortTitle: "Landing copy",
    description:
      "Sharper headlines, section copy, calls to action, and plain-English positioning for focused launch pages.",
    turnaround: "Best for focused offers",
    href: "/services/landing-page-copy",
    accent: "mint"
  },
  {
    slug: "pdf-to-excel",
    title: "Data & document cleanup",
    shortTitle: "Data cleanup",
    description:
      "Turn PDFs, scanned tables, invoices, lists, and reports into clean spreadsheets with organized rows and clear column labels.",
    turnaround: "Practical file cleanup",
    href: "/services/pdf-to-excel",
    accent: "lavender"
  },
  {
    slug: "invoice-extraction",
    title: "Invoice extraction",
    shortTitle: "Invoices",
    description:
      "Pull invoice numbers, vendors, dates, totals, and line items into rows you can review, filter, and share.",
    turnaround: "Great for recurring admin work",
    href: "/services/invoice-extraction",
    accent: "peach"
  },
  {
    slug: "spreadsheet-cleanup",
    title: "Spreadsheet cleanup",
    shortTitle: "Spreadsheets",
    description:
      "Clean labels, remove obvious duplicates, normalize formatting, and make messy sheets easier to work with.",
    turnaround: "Ideal before sharing or importing",
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
