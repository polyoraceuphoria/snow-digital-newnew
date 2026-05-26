import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Check, Sparkles } from "./components/Icons";
import { PricingCard } from "./components/PricingCard";
import { SectionDivider } from "./components/SectionDivider";
import { ServiceCard } from "./components/ServiceCard";
import { pricing, services } from "./data/services";
import type React from "react";

const contactPlaceholder = "Final Cloudflare email coming soon";

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Snowfall />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, index) => (
        <span
          key={index}
          style={
            {
              "--x": `${(index * 37) % 100}%`,
              "--delay": `${(index * 0.73) % 12}s`,
              "--duration": `${14 + (index % 8)}s`,
              "--size": `${5 + (index % 7)}px`
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="section-label">PDF-to-Excel cleanup</p>
        <h1>Send the messy file. Get back a clean spreadsheet.</h1>
        <p className="hero-lede">
          Snow Digital Services turns PDFs, invoices, scans, and messy spreadsheets into clean,
          review-ready files, starting with PDF-to-Excel conversion.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/services/pdf-to-excel">
            Start with PDF-to-Excel
          </a>
          <a className="button secondary" href="/services">
            View services
          </a>
        </div>
        <p className="microcopy">
          Clear scope. Clean file. Unclear values flagged, not guessed.
        </p>
      </div>
      <div className="hero-art" aria-label="Snow Digital winter illustration">
        <img className="cloud-float" src="/assets/site/cloud-mascot.webp" alt="" />
        <div className="file-card card-one">
          <span>messy.pdf</span>
          <strong>→ clean.xlsx</strong>
        </div>
        <div className="file-card card-two">
          <span>XLSX / CSV</span>
          <strong>Ready to review</strong>
        </div>
      </div>
    </section>
  );
}

function ConversionStrip() {
  const items = [
    ["Scope first", "Page count, file type, and output format are confirmed before work starts."],
    ["Clean delivery", "Rows, columns, labels, and obvious formatting issues are handled."],
    ["No guessing", "Unreadable values are called out clearly for review."]
  ];
  return (
    <section className="conversion-strip" aria-label="Service standards">
      {items.map(([title, body]) => (
        <article key={title}>
          <strong>{title}</strong>
          <p>{body}</p>
        </article>
      ))}
    </section>
  );
}

function Home() {
  const pdf = services[0];
  return (
    <PageShell>
      <Hero />
      <ConversionStrip />
      <section className="section">
        <div className="section-heading">
          <p className="section-label">What We Do</p>
          <h2>Clean work, clearly scoped.</h2>
          <p>
            PDF-to-Excel is the main path. The other lanes stay available for the practical cleanup
            work that often comes with it.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} featured={index === 0} />
          ))}
        </div>
      </section>
      <SectionDivider />
      <section className="section feature-section">
        <div className="feature-copy">
          <p className="section-label">Flagship Service</p>
          <h2>A cleaner spreadsheet without the back-and-forth.</h2>
          <p>
            Send a PDF, scan, invoice, table, or messy document. Receive a clean spreadsheet with
            columns labeled, rows organized, and unclear values flagged.
          </p>
          <ul className="check-list">
            {[
              "Tables cleaned into spreadsheet format.",
              "Invoices and lists organized.",
              "Duplicates and obvious formatting issues cleaned.",
              "Unreadable values flagged for review.",
              "Delivery as XLSX, CSV, or Google Sheets-ready format."
            ].map((item) => (
              <li key={item}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <a className="button primary" href={pdf.href}>
            See PDF-to-Excel details
          </a>
        </div>
        <div className="feature-art">
          <img src="/assets/site/fox-character.webp" alt="" loading="lazy" />
          <img src="/assets/site/bunny-character.webp" alt="" loading="lazy" />
        </div>
      </section>
      <SectionDivider cloud />
      <section className="section soft-section">
        <div className="section-heading">
          <p className="section-label">Pricing Preview</p>
          <h2>Transparent starting points.</h2>
          <p>Complex, handwritten, low-resolution, or custom-format jobs may require a custom quote.</p>
        </div>
        <div className="pricing-grid">
          {pricing.map((plan, index) => (
            <PricingCard key={plan.name} {...plan} featured={index === 1} />
          ))}
        </div>
      </section>
      <ProcessSection />
      <IntakeCTA />
    </PageShell>
  );
}

function ProcessSection() {
  const steps = [
    ["01", "Send the file", "Share the document and what you need back."],
    ["02", "Confirm scope", "Page count, format, and deadline are clarified before work starts."],
    ["03", "Clean the data", "Rows, columns, labels, and obvious formatting issues are handled."],
    ["04", "Review and deliver", "The finished file is checked before it is sent back."],
    ["05", "Request revisions", "If something in scope was missed, it gets corrected."]
  ];
  return (
    <section className="section">
      <div className="section-heading">
        <p className="section-label">How It Works</p>
        <h2>Simple, scoped, reviewed.</h2>
      </div>
      <div className="process-grid">
        {steps.map(([number, title, body]) => (
          <article key={number} className="process-card">
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function IntakeCTA() {
  return (
    <section className="final-cta">
      <Sparkles />
      <h2>Send one file. See the difference.</h2>
      <p>
        The site is ready for a Cloudflare Pages preview now. Final email, upload handling, and the
        custom domain can be connected after Michael approves the preview.
      </p>
      <a className="button primary" href="/intake">
        Start a request
      </a>
    </section>
  );
}

function ServicesPage() {
  return (
    <PageShell>
      <SubpageHero
        eyebrow="Services"
        title="Focused cleanup services for files that need structure."
        body="PDF-to-Excel leads the offer. The other lanes support the practical cleanup work that often comes with it."
      />
      <section className="section">
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} featured={index === 0} />
          ))}
        </div>
      </section>
      <IntakeCTA />
    </PageShell>
  );
}

function PdfToExcelPage() {
  return (
    <PageShell>
      <SubpageHero
        eyebrow="Flagship service"
        title="PDF-to-Excel conversion for messy files that need structure."
        body="Upload a PDF, scanned table, invoice, list, or report. Snow Digital Services turns it into a clean spreadsheet that is easier to filter, review, import, or share."
      />
      <section className="section two-column">
        <div className="panel">
          <h2>What is included</h2>
          <ul className="check-list">
            {[
              "Column labels and row structure.",
              "Obvious formatting cleanup.",
              "Invoice, table, list, or report extraction.",
              "Delivery as XLSX, CSV, or Google Sheets-ready format.",
              "Unclear values flagged for review."
            ].map((item) => (
              <li key={item}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h2>Quality standard</h2>
          <p>
            We do not guess unclear values. If a number, name, or field cannot be read with
            confidence, it is flagged for review.
          </p>
          <h3>Best for</h3>
          <p>Founders, operators, sellers, bookkeepers, and busy teams that need usable files fast.</p>
        </div>
      </section>
      <section className="section soft-section">
        <div className="pricing-grid">
          {pricing.map((plan, index) => (
            <PricingCard key={plan.name} {...plan} featured={index === 1} />
          ))}
        </div>
      </section>
      <FAQ />
      <IntakeCTA />
    </PageShell>
  );
}

function InvoiceExtractionPage() {
  return (
    <ServiceDetailPage
      eyebrow="Invoice extraction"
      title="Turn invoice PDFs into clean rows of usable data."
      body="Pull vendor names, invoice numbers, dates, totals, and line items into a spreadsheet that is easier to review and reconcile."
      included={[
        "Invoice-level summary fields.",
        "Line-item rows when source quality allows.",
        "Readable totals, dates, and vendor details.",
        "Flags for unclear or missing values."
      ]}
    />
  );
}

function SpreadsheetCleanupPage() {
  return (
    <ServiceDetailPage
      eyebrow="Spreadsheet cleanup"
      title="Clean up messy spreadsheets so they are easier to use, filter, and share."
      body="Normalize labels, tidy formatting, remove obvious duplicate rows, and make the file easier for humans or tools to read."
      included={[
        "Header and column cleanup.",
        "Basic formatting normalization.",
        "Obvious duplicate or blank-row review.",
        "A clean delivery file ready to share."
      ]}
    />
  );
}

function ServiceDetailPage({
  eyebrow,
  title,
  body,
  included
}: {
  eyebrow: string;
  title: string;
  body: string;
  included: string[];
}) {
  return (
    <PageShell>
      <SubpageHero eyebrow={eyebrow} title={title} body={body} />
      <section className="section two-column">
        <div className="panel">
          <h2>What is included</h2>
          <ul className="check-list">
            {included.map((item) => (
              <li key={item}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h2>What is not included</h2>
          <p>
            No guessing unreadable source data, no public file storage, no payment handling, and no
            sensitive-data intake until Michael approves the final workflow.
          </p>
        </div>
      </section>
      <IntakeCTA />
    </PageShell>
  );
}

function IntakePage() {
  return (
    <PageShell>
      <SubpageHero
        eyebrow="Intake"
        title="Tell us what needs cleaning."
        body="The intake path is ready for launch preview. Final email, upload handling, and Cloudflare routing will be connected after Michael configures the domain and email."
      />
      <section className="section intake-layout">
        <form className="intake-form" action="mailto:" method="post" encType="text/plain">
          {["Name", "Email", "Service needed", "File type", "Approximate page count / row count", "Deadline"].map(
            (label) => (
              <label key={label}>
                <span>{label}</span>
                <input type="text" name={label.toLowerCase().replaceAll(" ", "-")} />
              </label>
            )
          )}
          <label>
            <span>What should the final file look like?</span>
            <textarea name="final-file" rows={4} />
          </label>
          <label>
            <span>Notes</span>
            <textarea name="notes" rows={4} />
          </label>
          <div className="upload-note">
            <strong>Upload instruction</strong>
            <p>
              Do not upload sensitive files here yet. Once the final Cloudflare email is configured,
              email the file and request details through the approved intake address.
            </p>
          </div>
          <button className="button primary" type="button">
            {contactPlaceholder}
          </button>
        </form>
        <aside className="panel">
          <h2>What to include</h2>
          <ul className="check-list">
            <li>
              <Check />
              The source file type and page count.
            </li>
            <li>
              <Check />
              The format you need back: XLSX, CSV, or Google Sheets-ready.
            </li>
            <li>
              <Check />
              Any deadline or import requirements.
            </li>
            <li>
              <Check />
              Any columns that matter most.
            </li>
          </ul>
        </aside>
      </section>
    </PageShell>
  );
}

function PrivacyPage() {
  return (
    <TextPage
      eyebrow="Privacy"
      title="Privacy starter draft"
      paragraphs={[
        "Snow Digital Services collects the information needed to understand and complete a requested service, such as name, contact details, project notes, and submitted files.",
        "Submitted files are used to complete the requested work. Files are not sold.",
        "Customers should not submit highly sensitive personal, medical, financial, or regulated data unless Michael has approved the workflow in advance.",
        "Deletion or correction requests can be handled through the final contact email once Michael configures it in Cloudflare."
      ]}
    />
  );
}

function TermsPage() {
  return (
    <TextPage
      eyebrow="Terms"
      title="Terms starter draft"
      paragraphs={[
        "Each job should have a confirmed scope before work begins, including source files, requested output, turnaround expectations, and revision limits.",
        "Customers retain ownership of the content and files they submit. Snow Digital Services delivers cleaned files based on those submitted materials.",
        "Unclear source data may be flagged rather than guessed. Revisions are limited to items within the agreed scope.",
        "Snow Digital Services does not guarantee business outcomes. Payment and refund terms should be finalized by Michael before public launch."
      ]}
    />
  );
}

function TextPage({
  eyebrow,
  title,
  paragraphs
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <PageShell>
      <SubpageHero eyebrow={eyebrow} title={title} body="These pages are starter launch drafts and should be reviewed before a final public domain is connected." />
      <section className="section text-panel">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </PageShell>
  );
}

function SubpageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="subpage-hero">
      <p className="section-label">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["What files are accepted?", "PDFs, scans, invoices, reports, tables, CSVs, and messy spreadsheets are good starting points."],
    ["Do you guess unclear values?", "No. Unreadable or uncertain values are flagged for review."],
    ["Is there a backend upload system?", "Not in v1. The public site uses an honest static intake path until Michael approves the final Cloudflare workflow."]
  ];
  return (
    <section className="section">
      <div className="section-heading">
        <p className="section-label">FAQ</p>
        <h2>Good to know</h2>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <PageShell>
      <SubpageHero
        eyebrow="404"
        title="This page drifted off into the snow."
        body="Head back home or start with the PDF-to-Excel service."
      />
    </PageShell>
  );
}

const routes: Record<string, React.ReactNode> = {
  "/": <Home />,
  "/services": <ServicesPage />,
  "/services/pdf-to-excel": <PdfToExcelPage />,
  "/services/invoice-extraction": <InvoiceExtractionPage />,
  "/services/spreadsheet-cleanup": <SpreadsheetCleanupPage />,
  "/intake": <IntakePage />,
  "/privacy": <PrivacyPage />,
  "/terms": <TermsPage />
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return routes[path] ?? <NotFound />;
}
