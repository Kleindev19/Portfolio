
import { BadgeCheck, ExternalLink, Terminal } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/portfolio-data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  const viewCredential = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("Credential link coming soon. Add your verified credential URL first.");
    }
  };

  return (
    <section id="credentials" className="border-t border-border py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="05"
          label="Certifications"
          title="Credentials that back the fundamentals."
          description="Each entry is verifiable through its issuing organisation."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 80}>
              <article className="group relative h-full overflow-hidden border border-border bg-foreground/[0.03] p-7 transition-colors duration-500 hover:border-primary/40 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center border border-primary/30">
                    <Terminal className="h-5 w-5 text-primary" aria-hidden />
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                    Verified issuer
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-xl font-semibold tracking-[-0.02em]">
                  {cert.name}
                </h3>

                <p className="mt-1.5 text-sm text-muted-foreground">
                  {cert.issuer}
                </p>

                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {cert.issued}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/75"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => viewCredential(cert.credentialUrl)}
                  className="mt-7 inline-flex items-center gap-2 border-b border-primary/40 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary transition-colors hover:border-primary"
                >
                  View credential
                  <ExternalLink className="h-3 w-3" />
                </button>
              </article>
            </Reveal>
          ))}

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-center border border-dashed border-border p-7 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Next in progress
              </p>

              <h3 className="mt-3 font-heading text-lg font-semibold tracking-[-0.01em]">
                Building toward another certification
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I'm preparing for a web development credential next. New certificates will be
                added here as they're completed.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
