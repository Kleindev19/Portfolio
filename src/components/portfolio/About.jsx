
import { ABOUT_FACTS, DESK_IMAGE, PROFILE } from "@/lib/portfolio-data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              label="About"
              title="A student building like a working developer."
            />

            <Reveal delay={120} className="mt-10">
              <div className="border border-border p-2">
                <img
                  src={DESK_IMAGE}
                  alt="Minimal dark desk setup with a laptop, notebook and lime green cable"
                  className="aspect-[3/2] w-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                The desk where the projects happen
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <Reveal className="space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm {PROFILE.name.split(" ")[0]} — a Bachelor of Science in
                Information Technology student at Colegio de Montalban,
                focused on full-stack web development.
              </p>

              <p>
                My interest started with a simple question: how does a screen
                actually turn into something people can use? That curiosity
                led me to the stack I work in today — Vue.js on the front end,
                Laravel and PHP on the back end, and MySQL holding it all
                together. Most of what I know came from building things end
                to end rather than watching tutorials: designing the tables,
                wiring the API, then fixing whatever broke when real data
                went in.
              </p>

              <p>
                I approach problems by slowing down first. I write down what
                the system needs to do, sketch the data, and only then start
                coding — because most of the bugs I've had to untangle were
                really decisions I skipped earlier. When something fails, I
                read the error, isolate the layer it came from, and fix the
                cause rather than the symptom.
              </p>

              <p>
                I'm not claiming years of industry experience. What I do have
                is a habit of finishing what I start: coursework turned into
                working applications, features tested with real inputs, and
                code I'm willing to read again months later. I'm currently
                looking for an internship or junior role where I can keep
                learning from people who have built more than I have.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-10">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-5 border-t border-border pt-8 sm:grid-cols-2">
                {ABOUT_FACTS.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {fact.label}
                    </dt>

                    <dd className="mt-1.5 text-sm text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {PROFILE.location}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
