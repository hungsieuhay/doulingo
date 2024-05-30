import { AnimatedTitle } from "@/components/animated/animated-title";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-24">
      <AnimatedTitle>
        <h1 className="w-full flex flex-col items-center justify-center gap-4 text-balance text-center font-display font-bold text-6xl tracking-tighter py-6">
          <span>
            Master Any{" "}
            <span className="rounded-full border border-highlight/25 bg-highlight/50 px-[0.35em] py-[0.125em] text-highlight-depth dark:bg-highlight/85 dark:text-background">
              Language.
            </span>
          </span>
          <span className="flex flex-wrap items-center justify-center">
            Learn{" "}
            <span className="ml-4 h-20 w-[92px] flex items-center justify-center rounded-full bg-secondary/30 dark:text-secondary group">
              <Globe
                className="z-1 h-[1.25em] w-[1.25em] group-hover:animate-spin-slow"
                strokeWidth={2.15}
              />
            </span>
            <span className="mr-[0.25em]">n</span>
            The Go
          </span>
        </h1>
      </AnimatedTitle>
    </section>
  );
}
