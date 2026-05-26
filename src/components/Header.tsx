import { ArrowRight } from "./Icons";
import { assetUrl } from "../data/assets";

const links = [
  { href: "/services", label: "Services" },
  { href: "/services/pdf-to-excel", label: "PDF-to-Excel" },
  { href: "/intake", label: "Intake" }
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Snow Digital Services home">
        <img src={assetUrl("assets/site/cloud-mascot.webp")} alt="" />
        <span>
          <strong>snow</strong>
          <em>digital</em>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="/intake">
        Start a request
        <ArrowRight />
      </a>
    </header>
  );
}
