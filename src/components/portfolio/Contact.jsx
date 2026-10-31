
import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Mail,
  MapPin,
} from "lucide-react";

import { PROFILE } from "@/lib/portfolio-data";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-16 sm:py-20 lg:py-32"
    >
      <div
        aria-hidden
        className="glow-lime pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid min-w-0 gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              index="07"
              label="Contact"
              title="Hiring, collaborating, or just curious? Let's talk."
              description="I'm looking for a team where I can contribute from day one and keep growing. If you're hiring interns or junior developers — or you want to build something together — my inbox is open."
            />

            <Reveal delay={100} className="mt-10 space-y-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group flex min-w-0 items-center justify-between gap-3 border border-border px-3 py-4 transition-colors hover:border-primary/50 sm:px-5"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" aria-hidden />
                  <span className="break-all text-xs text-foreground sm:text-sm">
                    {PROFILE.email}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-3 border border-border px-3 py-4 transition-colors hover:border-primary/50 sm:px-5"
              >
                <span className="flex items-center gap-3">
                  <BriefcaseBusiness
                    className="h-4 w-4 text-primary"
                    aria-hidden
                  />
                  <span className="text-sm text-foreground">
                    LinkedIn profile
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-3 border border-border px-3 py-4 transition-colors hover:border-primary/50 sm:px-5"
              >
                <span className="flex items-center gap-3">
                  <Code2 className="h-4 w-4 text-primary" aria-hidden />
                  <span className="text-sm text-foreground">
                    GitHub repositories
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            </Reveal>

            <Reveal delay={160} className="mt-8">
              <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
                {PROFILE.location}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
