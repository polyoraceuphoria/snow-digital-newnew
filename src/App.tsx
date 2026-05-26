import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Check, Sparkles } from "./components/Icons";
import { PricingCard } from "./components/PricingCard";
import { SectionDivider } from "./components/SectionDivider";
import { ServiceCard } from "./components/ServiceCard";
import { assetUrl, routeUrl } from "./data/assets";
import { pdfPricing, services } from "./data/services";
import type React from "react";

const requestEmail = "hello@workwithsnow.com";

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
        <p className="section-label">Your friendly digital studio</p>
        <h1>Digital work, beautifully delivered.</h1>
        <p className="hero-lede">
          Product descriptions, social content, data organization, and simple launch copy for small
          businesses that need polished work without the fuss.
        </p>
        <div className="hero-actions">
          <a className="button primary" href={routeUrl("/intake")}>
            Start a project
          </a>
          <a className="button secondary" href={routeUrl("/services")}>
            View services
          </a>
        </div>
        <p className="microcopy">Fast, friendly, and clearly scoped.</p>
      </div>
      <div className="hero-art" aria-label="Snow Digital winter illustration">
        <img className="cloud-float" src={assetUrl("assets/site/cloud-mascot.webp")} alt="" />
        <div className="file-card card-one">
          <span>product notes</span>
          <strong>→ polished listing</strong>
        </div>
        <div className="file-card card-two">
          <span>caption ideas</span>
          <strong>Ready to post</strong>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <PageShell>
      <Hero />
      <section className="section">
        <div className="section-heading">
          <p className="section-label">What We Do</p>
          <h2>The Magic Workshop</h2>
          <p>Simple services. Clear delivery. No jargon.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} featured={index === 0} />
          ))}
        </div>
      </section>
      <SectionDivider />
      <ProcessSection />
      <StudioNote />
      <IntakeCTA />
    </PageShell>
  );
}

function ProcessSection() {
  const steps = [
    ["01", "Tell us what you need", "Send the project details."],
    ["02", "We work the magic", "Copy, content, or files get cleaned up."],
    ["03", "You get polished results", "Ready to post, publish, upload, or share."]
  ];
  return (
    <section className="section">
      <div className="section-heading">
        <p className="section-label">How It Works</p>
        <h2>Easy as 1, 2, 3.</h2>
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

function StudioNote() {
  return (
    <section className="section feature-section compact-feature">
      <div className="feature-copy">
        <p className="section-label">Who We Are</p>
        <h2>Small, warm, and useful.</h2>
        <p>
          Snow Digital Services brings a little care to everyday digital work: product pages,
          captions, spreadsheets, PDFs, and launch copy.
        </p>
        <a className="button secondary" href={routeUrl("/services")}>
          See services
        </a>
      </div>
      <div className="feature-art">
        <img src={assetUrl("assets/site/fox-character.webp")} alt="" loading="lazy" />
        <img src={assetUrl("assets/site/bunny-character.webp")} alt="" loading="lazy" />
      </div>
    </section>
  );
}

function IntakeCTA() {
  return (
    <section className="final-cta">
      <Sparkles />
      <h2>Ready to get started?</h2>
      <p>Say hello and let’s make something beautiful.</p>
      <a className="button primary" href={routeUrl("/intake")}>
        Start a project
      </a>
    </section>
  );
}

function ServicesPage() {
  return (
    <PageShell>
      <SubpageHero
        eyebrow="Services"
        title="The Magic Workshop"
        body="Simple services, beautifully delivered."
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
          {pdfPricing.map((plan, index) => (
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

function ProductDescriptionsPage() {
  return (
    <ServiceDetailPage
      eyebrow="Product descriptions"
      title="Product copy that makes listings easier to trust and easier to buy."
      body="Send product notes, specs, rough bullets, or an existing catalog. Snow Digital Services turns them into cleaner descriptions that are ready for storefronts, marketplaces, and launch pages."
      included={[
        "Clear product descriptions written from your source details.",
        "Consistent tone and formatting across a small batch.",
        "Benefit-focused copy without fake claims.",
        "Questions flagged when source details are missing."
      ]}
      notIncluded="This service does not include fake reviews, unsupported performance claims, regulated product claims, or marketplace manipulation."
    />
  );
}

function SocialContentPage() {
  return (
    <ServiceDetailPage
      eyebrow="Social content"
      title="Caption packs and simple content ideas for launches, promos, and weekly posts."
      body="Share the offer, audience, product details, and desired tone. Snow Digital Services creates practical, ready-to-edit captions and content prompts for small business social channels."
      included={[
        "Caption sets for launches, promos, reminders, and product drops.",
        "Simple hooks and calls to action.",
        "Tone cleanup for clearer, friendlier posts.",
        "Reusable ideas for a short posting rhythm."
      ]}
      notIncluded="This service does not include fake engagement, follower growth guarantees, platform automation, or paid ad management."
    />
  );
}

function LandingPageCopyPage() {
  return (
    <ServiceDetailPage
      eyebrow="Landing page copy"
      title="Simple landing page copy for focused offers."
      body="Turn rough notes into cleaner page sections: headline, supporting copy, service blocks, FAQs, and calls to action that help buyers understand what to do next."
      included={[
        "Headline and subheadline options.",
        "Offer, benefit, process, and FAQ section copy.",
        "CTA language and simple page flow.",
        "Plain-English edits for clarity and conversion."
      ]}
      notIncluded="This service does not include custom development, paid ad strategy, legal review, or guaranteed conversion results."
    />
  );
}

function ServiceDetailPage({
  eyebrow,
  title,
  body,
  included,
  notIncluded
}: {
  eyebrow: string;
  title: string;
  body: string;
  included: string[];
  notIncluded?: string;
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
            {notIncluded ??
              "This service does not include bookkeeping, legal review, tax advice, or guessing values that cannot be read from the source file."}
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
        title="Tell us what you need made cleaner."
        body="Share the project type, source material, rough size, deadline, and what the finished deliverable should look like."
      />
      <section className="section intake-layout">
        <form className="intake-form" action="mailto:" method="post" encType="text/plain">
          {["Name", "Email", "Service needed", "Source material", "Approximate size", "Deadline"].map(
            (label) => (
              <label key={label}>
                <span>{label}</span>
                <input type="text" name={label.toLowerCase().replaceAll(" ", "-")} />
              </label>
            )
          )}
          <label>
            <span>What should the finished deliverable look like?</span>
            <textarea name="final-deliverable" rows={4} />
          </label>
          <label>
            <span>Notes</span>
            <textarea name="notes" rows={4} />
          </label>
          <div className="upload-note">
            <strong>Upload instruction</strong>
            <p>
              Email the file and request details to {requestEmail}. Avoid sending highly sensitive
              information unless the project scope has been confirmed first.
            </p>
          </div>
          <button className="button primary" type="button">
            Email {requestEmail}
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
              The format you need back: product copy, captions, page copy, XLSX, CSV, or Google Sheets-ready.
            </li>
            <li>
              <Check />
              Any deadline, platform, storefront, or import requirements.
            </li>
            <li>
              <Check />
              Any tone, audience, column, or field details that matter most.
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
        "Customers should avoid submitting highly sensitive personal, medical, financial, or regulated data unless the project scope has been confirmed first.",
        `Deletion or correction requests can be sent to ${requestEmail}.`
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
        "Snow Digital Services does not guarantee business outcomes. Payment, refund, and revision terms should be confirmed before work begins."
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
      <SubpageHero eyebrow={eyebrow} title={title} body="Plain-language launch policies for small digital marketing and cleanup projects." />
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
    ["What projects are accepted?", "Product notes, product catalogs, rough social ideas, landing page drafts, PDFs, scans, invoices, reports, CSVs, and messy spreadsheets are good starting points."],
    ["Do you guess unclear values?", "No. Unreadable or uncertain values are flagged for review."],
    ["How do I send the file?", `Start with the intake page and email the file details to ${requestEmail}.`]
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
        body="Head back home or start with the services page."
      />
    </PageShell>
  );
}

const routes: Record<string, React.ReactNode> = {
  "/": <Home />,
  "/services": <ServicesPage />,
  "/services/product-descriptions": <ProductDescriptionsPage />,
  "/services/social-content": <SocialContentPage />,
  "/services/landing-page-copy": <LandingPageCopyPage />,
  "/services/pdf-to-excel": <PdfToExcelPage />,
  "/services/invoice-extraction": <InvoiceExtractionPage />,
  "/services/spreadsheet-cleanup": <SpreadsheetCleanupPage />,
  "/intake": <IntakePage />,
  "/privacy": <PrivacyPage />,
  "/terms": <TermsPage />
};

export default function App() {
  const basePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname;
  let path = window.location.pathname;
  if (basePath !== "/" && path.startsWith(basePath)) {
    path = `/${path.slice(basePath.length)}`;
  }
  path = path.replace(/\/$/, "") || "/";
  return routes[path] ?? <NotFound />;
}
