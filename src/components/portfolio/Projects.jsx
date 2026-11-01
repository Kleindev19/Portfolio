
import { useState } from "react";
import { ArrowUpRight, Code2, Plus } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectButtons({ project }) {
  const open = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("Project link coming soon. This is a placeholder.");
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => open(project.demoUrl)}
        className="group inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Live demo
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>

      <button
        type="button"
        onClick={() => open(project.repoUrl)}
        className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Code2 className="h-3.5 w-3.5" />
        Repository
      </button>
    </div>
  );
}

function ProjectCard({ project, flip, delay }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <Reveal delay={delay} className="border-t border-border py-12 md:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        <div className={cn("lg:col-span-7", flip && "lg:order-2")}>
          <figure className="group relative overflow-hidden border border-border">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className={cn(
                  project.imageAspect ?? "aspect-[3/2]",
                  "w-full object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0",
                  project.imagePosition === "left" && "object-left",
                  project.imagePosition === "top" && "object-top",
                  zoomed ? "scale-[1.04]" : "scale-100"
                )}
              />
            ) : (
              <div className="flex aspect-[3/2] w-full items-center justify-center bg-foreground/[0.03]">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Project Preview
                </span>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            <figcaption className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              {project.index} — {project.tagline}
            </figcaption>

            <button
              type="button"
              onClick={() => setZoomed((value) => !value)}
              aria-pressed={zoomed}
              aria-label={`Enlarge ${project.name} preview`}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-border bg-card/70 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <Plus
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  zoomed && "rotate-45"
                )}
              />
            </button>
          </figure>
        </div>

        <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Project {project.index}
            </p>
            {project.status && (
              <span className="border border-primary/40 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                {project.status}
              </span>
            )}
          </div>

          <h3 className="mt-3 text-balance font-heading text-2xl font-semibold tracking-[-0.02em] md:text-[1.75rem]">
            {project.name}
          </h3>

          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border border-primary/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="mt-6 space-y-2.5">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm text-foreground/80"
              >
                <span
                  className="mt-2 h-px w-3 shrink-0 bg-primary"
                  aria-hidden
                />
                {feature}
              </li>
            ))}
          </ul>

          <ProjectButtons project={project} />
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="border-t border-border py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="03"
          label="Selected Work"
          title="Projects shaped by real needs — from concept to active development."
          description="Some projects are still in development. Details and links will be updated as they progress."
        />

        <div className="mt-10 sm:mt-14">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              flip={i % 2 === 1}
              delay={i * 60}
            />
          ))}
        </div>

        <Reveal className="border-t border-border pt-12">
          <div className="flex flex-col items-start gap-5 border border-dashed border-border p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-primary/30 text-primary">
                <Plus className="h-4 w-4" />
              </span>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Slot 04 — in the workshop
                </p>

                <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.02em]">
                  The next build goes here
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  I'm currently working on another project around inventory tracking.
                  This space is reserved for it.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Suggest a project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
