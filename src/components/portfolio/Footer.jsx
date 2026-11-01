
import { ArrowUp, Code2, BriefcaseBusiness } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Let&apos;s build something
            </p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-3 inline-block max-w-full break-all font-heading text-lg font-semibold tracking-[-0.02em] transition-colors hover:text-primary sm:text-2xl md:text-3xl"
            >
              {PROFILE.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Code2 className="h-4 w-4" />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <BriefcaseBusiness className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-10 w-full overflow-hidden sm:mt-12">
          <p
            aria-hidden
            className="select-none whitespace-nowrap font-heading text-[clamp(1.4rem,6.4vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.05em] text-foreground/[0.07]"
          >
            MARVHENNE KLEIN ORTEGA
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
          <p>Designed &amp; built from scratch</p>
        </div>
      </div>
    </footer>
  );
}
