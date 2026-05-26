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
    slug: "pdf-to-excel",
    title: "PDF-to-Excel",
    shortTitle: "PDF-to-Excel",
    description:
      "Turn PDFs, scanned tables, invoices, lists, and reports into clean spreadsheets with organized rows and clear column labels.",
    turnaround: "Fastest place to start",
    href: "/services/pdf-to-excel",
    accent: "pink"
  },
  {
    slug: "invoice-extraction",
    title: "Invoice extraction",
    shortTitle: "Invoices",
    description:
      "Pull invoice numbers, vendors, dates, totals, and line items into rows you can review, filter, and share.",
    turnaround: "Great for recurring admin work",
    href: "/services/invoice-extraction",
    accent: "blue"
  },
  {
    slug: "spreadsheet-cleanup",
    title: "Spreadsheet cleanup",
    shortTitle: "Spreadsheets",
    description:
      "Clean labels, remove obvious duplicates, normalize formatting, and make messy sheets easier to work with.",
    turnaround: "Ideal before sharing or importing",
    href: "/services/spreadsheet-cleanup",
    accent: "mint"
  },
  {
    slug: "product-description-cleanup",
    title: "Product description cleanup",
    shortTitle: "Product copy",
    description:
      "Polish product descriptions so they read clearly, consistently, and ready for storefront publishing.",
    turnaround: "Helpful for catalog refreshes",
    href: "/services",
    accent: "lavender"
  },
  {
    slug: "social-caption-packs",
    title: "Social caption packs",
    shortTitle: "Captions",
    description:
      "Simple, useful caption sets for launches, promos, product drops, and weekly posting needs.",
    turnaround: "Clean copy without the blank page",
    href: "/services",
    accent: "peach"
  },
  {
    slug: "landing-page-copy",
    title: "Simple landing page copy",
    shortTitle: "Landing copy",
    description:
      "Sharper headlines, sections, CTAs, and plain-English service copy for small launch pages.",
    turnaround: "Best for focused offers",
    href: "/services",
    accent: "blue"
  }
];

export const pricing = [
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
