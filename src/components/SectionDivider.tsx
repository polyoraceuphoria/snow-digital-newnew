import { Sparkles } from "./Icons";
import { assetUrl } from "../data/assets";

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
        <img src={assetUrl("assets/site/cloud-mascot.webp")} alt="" />
      ) : (
        <Sparkles className="divider-icon" />
      )}
      <span />
      <span />
      <span />
    </div>
  );
}
