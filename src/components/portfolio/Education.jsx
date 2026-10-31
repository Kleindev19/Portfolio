import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/lib/portfolio-data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading index="04" label="Education" title="Where the fundamentals come from." />

        <div className="mt-10 grid gap-10 sm:mt-14 sm:gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7">
            <Reveal className="relative border-l border-border pl-6 md:pl-8">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {EDUCATION.period}
                </p>
                <span className="border border-primary/30 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                  {EDUCATION.status}
                </span>
              </div>

              <h3 className="mt-4 text-balance font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] md:text-3xl">
                {EDUCATION.degree}
              </h3>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-foreground/80">
                <GraduationCap className="h-4 w-4 text-primary" aria-hidden />
                {EDUCATION.school}
              </p>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                {EDUCATION.summary}
              </p>

              <ul className="mt-7 space-y-3">
                {EDUCATION.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-primary/60" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={100} className="border border-border bg-foreground/[0.03] p-6 md:p-8">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Relevant coursework
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {EDUCATION.coursework.map((course) => (
                  <li
                    key={course}
                    className="border border-border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/80"
                  >
                    {course}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  Availability
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Open to internships, part-time junior roles and project collaborations that fit
                  around my class schedule. I don&apos;t have employment history yet — this
                  portfolio is the honest record of what I can build today.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}