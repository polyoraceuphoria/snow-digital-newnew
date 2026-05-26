import { Sparkles } from "./Icons";

type SectionDividerProps = {
  cloud?: boolean;
};

export function SectionDivider({ cloud = false }: SectionDividerProps) {
  return (
    <div className="section-divider" aria-hidden="true">
      <span />
      <span />
      <span />
      {cloud ? (
        <img src="/assets/site/cloud-mascot.webp" alt="" />
      ) : (
        <Sparkles className="divider-icon" />
      )}
      <span />
      <span />
      <span />
    </div>
  );
}
