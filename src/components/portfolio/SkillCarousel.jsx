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
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    let frame = 0;
    let previousTime = 0;
    let loopWidth = track.scrollWidth / 2;
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const getDuration = () => (mobileQuery.matches ? 90 : 46) * 1000;

    const render = () => {
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    };

    const animate = (time) => {
      if (!draggingRef.current) {
        if (previousTime) {
          offsetRef.current =
            (offsetRef.current + (loopWidth / getDuration()) * (time - previousTime)) %
            loopWidth;
          render();
        }
        previousTime = time;
      } else {
        previousTime = 0;
      }
      frame = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      loopWidth = track.scrollWidth / 2;
      offsetRef.current %= loopWidth;
      render();
    });

    resizeObserver.observe(track);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, []);

  const handlePointerDown = (event) => {
    if (!event.isPrimary || event.button > 0) return;
    draggingRef.current = true;
    dragStartRef.current = { x: event.clientX, offset: offsetRef.current };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const loopWidth = track.scrollWidth / 2;
    if (!loopWidth) return;

    const distance = dragStartRef.current.x - event.clientX;
    offsetRef.current = ((dragStartRef.current.offset + distance) % loopWidth + loopWidth) % loopWidth;
    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-background via-background/70 to-transparent md:w-44" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-background via-background/70 to-transparent md:w-44" />

      <div
        ref={viewportRef}
        className="skill-carousel-viewport touch-pan-y select-none overflow-hidden py-6 md:py-12"
        role="region"
        aria-label="Technology stack categories"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div ref={trackRef} className="skill-track flex w-max">
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
  );
}