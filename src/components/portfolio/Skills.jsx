import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillCarousel from "./SkillCarousel";

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

        <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 sm:mt-14">
          <SkillCarousel />
        </div>

        <Reveal delay={140}>
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Currently learning
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Testing fundamentals and cleaner API design — writing smaller Laravel services,
              documenting endpoints in Postman, and getting comfortable with Docker so local and
              deployed environments behave the same way.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}