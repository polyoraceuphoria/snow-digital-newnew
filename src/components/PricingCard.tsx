import { Check } from "./Icons";

type PricingCardProps = {
  name: string;
  price: string;
  detail: string;
  items: string[];
  featured?: boolean;
};

export function PricingCard({ name, price, detail, items, featured = false }: PricingCardProps) {
  return (
    <article className={`pricing-card ${featured ? "featured" : ""}`}>
      <p className="pricing-name">{name}</p>
      <div>
        <strong>{price}</strong>
        <span>{detail}</span>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
