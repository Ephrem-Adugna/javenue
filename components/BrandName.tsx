export function BrandName({
  className = "",
  as: Comp = "span",
  inline = false,
}: {
  className?: string;
  as?: "span" | "h1" | "h2" | "p";
  inline?: boolean;
}) {
  return (
    <Comp
      className={`brand-name${inline ? " is-inline" : ""} ${className}`.trim()}
      aria-label="J.A. Venue"
    >
      <span className="brand-script" aria-hidden="true">
        J.A.
      </span>
      <span className="brand-word" aria-hidden="true">
        venue
      </span>
    </Comp>
  );
}

