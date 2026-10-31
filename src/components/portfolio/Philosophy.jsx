import { PHILOSOPHY } from "@/lib/portfolio-data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Philosophy() {
  return (
    <section id="philosophy" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                index="06"
                label="Philosophy"
                title="How I write, review and improve code."
                description="Not rules I read somewhere — habits built from projects that broke in interesting ways."
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {PHILOSOPHY.map((item, i) => (
                <Reveal key={item.index} delay={i * 80} className="bg-card">
                  <div className="group h-full p-7 transition-colors duration-500 hover:bg-foreground/[0.03] md:p-8">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                      {item.index}
                    </span>
                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    <span className="mt-6 block h-px w-10 bg-border transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}