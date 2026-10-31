
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

import { PROFILE } from "@/lib/portfolio-data";
import ProfilePortrait from "./ProfilePortrait";
import Reveal from "./Reveal";

const SOCIALS = [
  { href: PROFILE.github, label: "GitHub", Icon: Code2 },
  { href: PROFILE.linkedin, label: "LinkedIn", Icon: BriefcaseBusiness },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-14%] h-[760px] w-[760px] -translate-x-1/2 rounded-full glow-lime" />
        <div className="absolute bottom-0 right-0 h-[560px] w-[560px] translate-x-1/3 translate-y-1/4 rounded-full glow-deep" />
        <div className="grid-lines absolute inset-0 opacity-70" />
      </div>

      <span
        aria-hidden
        className="text-stroke pointer-events-none absolute -top-28 left-1/2 -z-10 -translate-x-1/2 select-none whitespace-nowrap font-heading text-[26vw] font-bold leading-none opacity-50"
      >
        MARVIN
      </span>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 lg:pb-28">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px]">
              <span className="inline-flex items-center gap-2 text-primary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                {PROFILE.availability}
              </span>
              <span className="hidden h-px w-8 bg-border sm:block" />
              <span>{PROFILE.role}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-heading text-[clamp(2.5rem,6.2vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.035em]">
              Building Digital
              <br />
              Experiences
              <br />
              Through <span className="text-primary">Code</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {PROFILE.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary/90"
              >
                View my work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                Let&apos;s connect
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-6 border-t border-border pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Find me
              </span>

              <div className="flex items-center gap-2">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <ProfilePortrait />
        </Reveal>
      </div>
    </section>
  );
}
