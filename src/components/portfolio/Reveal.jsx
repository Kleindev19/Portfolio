import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Fades content up the first time it enters the viewport.
 * Motion is disabled automatically for visitors who prefer reduced motion.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-none",
        shown
          ? "translate-y-0 opacity-100 motion-reduce:translate-y-0"
          : "translate-y-6 opacity-0 motion-reduce:translate-y-0",
        className
      )}
    >
      {children}
    </Tag>
  );
}