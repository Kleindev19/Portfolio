import { Database, LayoutTemplate, Rocket, Server, Wrench } from "lucide-react";
import { SKILL_GROUPS } from "@/lib/portfolio-data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS = {
  frontend: LayoutTemplate,
  backend: Server,
  database: Database,
  tools: Wrench,
  deployment: Rocket,
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="02"
          label="Technical Stack"
          title="The tools I build with, and what I use them for."
          description="Every category below is something I've used in a real project — not a list of things I've only read about."
        />

        <div className="mt-10 grid gap-x-8 gap-y-8 sm:mt-14 md:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.key];
            return (
              <Reveal
                key={group.key}
                delay={i * 70}
                className={i === 0 ? "md:col-span-2" : undefined}
              >
                <div className="group border-t border-border pt-6 transition-colors duration-500 hover:border-primary/50">
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-primary" aria-hidden />
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground">
                      {group.label}
                    </h3>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{group.note}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center gap-2.5 border border-border bg-foreground/[0.03] px-3 py-2 transition-colors duration-300 hover:border-primary/40"
                      >
                        <span className="flex h-6 w-6 items-center justify-center border border-primary/25 font-mono text-[9px] uppercase text-primary">
                          {skill.abbr}
                        </span>
                        <span className="text-sm text-foreground/90">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={140}>
            <div className="h-full border-t border-border pt-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Currently learning
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Testing fundamentals and cleaner API design — writing smaller Laravel services,
                documenting endpoints in Postman, and getting comfortable with Docker so local and
                deployed environments behave the same way.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}