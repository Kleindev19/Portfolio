
import profilePortrait from "@/assets/photoo.jpg";
import { PROFILE } from "@/lib/portfolio-data";

export default function ProfilePortrait() {
  return (
    <>
      <div className="group relative border border-border bg-foreground/[0.03] p-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-foreground/[0.03]">
          <img
            src={profilePortrait}
            alt={`Portrait of ${PROFILE.name}`}
            className="h-full w-full object-cover object-center grayscale-[65%] contrast-[1.05] brightness-[1.08]"
            fetchPriority="high"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
          <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
            // developer
          </span>
        </div>
      </div>

      <div className="absolute -bottom-6 left-3 border border-border bg-card/95 px-4 py-3 backdrop-blur lg:-left-8">
        
        <p className="mt-1 text-sm text-foreground">
          Full Stack Developer
        </p>
      </div>

      <div className="absolute -top-4 right-3 border border-primary/30 bg-card/95 px-3 py-2 backdrop-blur lg:-right-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary">
          BSIT · 2027
        </p>
      </div>
    </>
  );
}
