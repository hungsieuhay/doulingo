"use client";

import { Globe } from "lucide-react";
import { AnimatedTitle } from "../animated/animated-title";
import type { Variants } from "framer-motion";
import { AnimatedItem, AnimatedList } from "../animated/animated-list";
import { Button } from "../ui/button";
import {
  ClerkLoaded,
  SignInButton,
  SignedOut,
  SignUpButton,
} from "@clerk/nextjs";
import LangSVG from "@/public/images/lang.svg";
import VoiceSVG from "@/public/images/voice.svg";
import BulbSVG from "@/public/images/bulb.svg";
import RewardSVG from "@/public/images/reward.svg";
import { AnimatedHeroDecor } from "../animated/animated-hero-decor";

export const Hero = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  } satisfies Variants;

  const item = {
    visible: { opacity: 1, y: "0%", scale: 1, transition: { duration: 0.45 } },
    hidden: { opacity: 0, y: "100%", scale: 0.85 },
  } satisfies Variants;

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
      <div className="mx-auto my-12 min-h-40 max-w-80">
        <ClerkLoaded>
          <SignedOut>
            <AnimatedList variants={list} className="flex flex-col gap-3">
              <AnimatedItem variants={item}>
                <SignUpButton mode="modal">
                  <Button variant="secondary" size="lg" className="w-full">
                    <span className="truncate">Get started</span>
                  </Button>
                </SignUpButton>
              </AnimatedItem>
              <AnimatedItem variants={item}>
                <SignInButton mode="modal">
                  <Button size="lg" className="w-full text-secondary">
                    <span className="truncate">I already have an account</span>
                  </Button>
                </SignInButton>
              </AnimatedItem>
            </AnimatedList>
          </SignedOut>
        </ClerkLoaded>
      </div>
      <div className="absolute -left-[2%] top-[13%] -z-1 sm:left-[10%]">
        <AnimatedHeroDecor className="origin-bottom-right" delay={0.8}>
          <div className="size-20 -rotate-12 rounded-lg bg-gradient-to-br from-highlight/70  to-transparent p-2 text-background sm:size-24 lg:size-32">
            <LangSVG />
          </div>
        </AnimatedHeroDecor>
      </div>
      <div className="absolute right-[10%] top-[13%] -z-1 max-md:hidden">
        <AnimatedHeroDecor className="origin-bottom-left" move={60} delay={1}>
          <div className="size-24 rotate-12 rounded-lg bg-gradient-to-bl from-highlight/70  to-transparent p-2 text-background lg:size-32">
            <BulbSVG />
          </div>
        </AnimatedHeroDecor>
      </div>
      <div className="absolute bottom-[10%] left-[10%] -z-1 max-md:hidden">
        <AnimatedHeroDecor className="origin-top-right" move={60} delay={1.2}>
          <div className="size-24 -rotate-6 rounded-lg bg-gradient-to-r from-secondary/30  to-transparent p-2 text-background lg:size-32">
            <RewardSVG />
          </div>
        </AnimatedHeroDecor>
      </div>
      <div className="absolute -right-[2%] top-1/3 -z-1 sm:right-[10%] md:top-2/3">
        <AnimatedHeroDecor className="origin-top-left" delay={1.4}>
          <div className="size-20 rotate-12 rounded-lg bg-gradient-to-l from-secondary/30  to-transparent p-2 text-background sm:size-24 lg:size-32">
            <VoiceSVG />
          </div>
        </AnimatedHeroDecor>
      </div>
    </section>
  );
};
