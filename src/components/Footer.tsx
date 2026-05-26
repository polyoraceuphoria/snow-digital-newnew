import { Mail } from "./Icons";
import { assetUrl, routeUrl } from "../data/assets";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-image" aria-hidden="true">
        <div />
        <img src={assetUrl("assets/site/winter-landscape.webp")} alt="" loading="lazy" />
      </div>
      <div className="footer-inner">
        <div className="footer-top">
          <a className="footer-brand" href={routeUrl("/")}>
            <strong>snow</strong>
            <em>digital</em>
          </a>
          <nav aria-label="Footer navigation">
            <a href={routeUrl("/services")}>Services</a>
            <a href={routeUrl("/services/product-descriptions")}>Product Copy</a>
            <a href={routeUrl("/services/social-content")}>Social Content</a>
            <a href={routeUrl("/services/pdf-to-excel")}>PDF-to-Excel</a>
            <a href={routeUrl("/privacy")}>Privacy</a>
            <a href={routeUrl("/terms")}>Terms</a>
          </nav>
          <a className="footer-mail" href={routeUrl("/intake")}>
            <Mail />
            Intake details
          </a>
        </div>
        <div className="footer-bottom">
          <p>Snow Digital Services</p>
          <p>© 2026 Snow Digital Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
