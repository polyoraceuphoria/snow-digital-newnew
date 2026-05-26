import type { Service } from "../data/services";
import { ArrowRight } from "./Icons";

type ServiceCardProps = {
  service: Service;
  featured?: boolean;
};

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <a className={`service-card accent-${service.accent} ${featured ? "featured" : ""}`} href={service.href}>
      <span className="service-kicker">{service.turnaround}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="text-link">
        Learn more
        <ArrowRight />
      </span>
    </a>
  );
}
