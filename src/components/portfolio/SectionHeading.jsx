import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({ index, label, title, description, className }) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
          {index}
        </span>
        <span className="h-px w-10 bg-primary/50" />
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          {label}
        </span>
      </div>
      <h2 className="mt-6 text-balance font-heading text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}