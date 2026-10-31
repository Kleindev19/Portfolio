
import { Camera } from "lucide-react";
import { HERO_IMAGE, PROFILE } from "@/lib/portfolio-data";

export default function ProfilePortrait() {
  return (
    <>
      <div className="group relative border border-border bg-foreground/[0.03] p-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-foreground/[0.03]">
          <img
            src={HERO_IMAGE}
            alt={`Portrait of ${PROFILE.name}`}
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
          <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
            // developer
          </span>
          {!HERO_IMAGE && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary">
              <Camera className="h-5 w-5" />
            </span>

            <p className="font-heading text-lg text-foreground">
              Profile photo
            </p>

            <p className="text-xs text-muted-foreground">
              Add your portrait to your portfolio.
            </p>
            </div>
          )}
        </div>
      </div>

      <div className="absolute -bottom-6 left-3 border border-border bg-card/95 px-4 py-3 backdrop-blur lg:-left-8">
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
          Currently building
        </p>
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
