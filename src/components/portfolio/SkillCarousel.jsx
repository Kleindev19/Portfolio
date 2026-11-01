import { useEffect, useRef } from "react";
import { Database, LayoutTemplate, Rocket, Server, Wrench } from "lucide-react";
import { SKILL_GROUPS } from "@/lib/portfolio-data";

const ICONS = {
  frontend: LayoutTemplate,
  backend: Server,
  database: Database,
  tools: Wrench,
  deployment: Rocket,
};

function GroupCard({ group }) {
  const Icon = ICONS[group.key];

  return (
    <article className="w-[280px] shrink-0 border border-border bg-card/70 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-primary/50 md:w-[340px]">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-primary" aria-hidden />
        <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground">
          {group.label}
        </h3>
        <span className="ml-auto font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          {String(group.items.length).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{group.note}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-2.5 border border-border bg-foreground/[0.03] px-3 py-2"
          >
            <span className="flex h-6 w-6 items-center justify-center border border-primary/25 font-mono text-[9px] uppercase text-primary">
              {skill.abbr}
            </span>
            <span className="text-sm text-foreground/90">{skill.name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function SkillCarousel() {
  const stageRef = useRef(null);
  const shiftRef = useRef(null);

  // The strip already drifts by itself; scrolling nudges it further to the left.
  useEffect(() => {
    const stage = stageRef.current;
    const shift = shiftRef.current;
    if (!stage || !shift) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = stage.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);
      shift.style.transform = `translate3d(${(clamped - 0.5) * -180}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-background via-background/70 to-transparent md:w-44" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-background via-background/70 to-transparent md:w-44" />

      <div ref={stageRef} className="skill-stage overflow-hidden py-6 md:py-12">
        <div className="relative">
          <div ref={shiftRef} className="will-change-transform">
            <div className="skill-plane">
              <div className="skill-track flex w-max">
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    className="flex gap-5 pr-5"
                    aria-hidden={copy === 1 ? "true" : undefined}
                  >
                    {SKILL_GROUPS.map((group) => (
                      <GroupCard key={`${copy}-${group.key}`} group={group} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}