"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/lib/site-data";
import { LinkArrow } from "@/components/ui/LinkArrow";

const headlineTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function HeroSection() {
  return (
    <section className="pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-[7.25rem]">
      <div className="px-4 sm:px-8 lg:px-16">
        <div className="grid min-h-[50vh] gap-10 pt-6 sm:pt-10 lg:grid-cols-[1.5fr_0.5fr] lg:items-end lg:gap-10 lg:pt-[6.4rem]">
          <div className="min-w-0">
            <div className="pb-2">
              <motion.h1
                initial={{ opacity: 0, x: -90 }}
                animate={{ opacity: 1, x: 0 }}
                transition={headlineTransition}
                className="text-[clamp(4.75rem,7.15vw,6.4rem)] font-[450] leading-[0.96] tracking-[-0.075em] text-[var(--bg)]"
              >
                {heroContent.lineOne}
              </motion.h1>
            </div>

            <div className="mt-2 hidden items-center gap-4 lg:flex">
              <motion.div
                initial={{ opacity: 0, x: -110, rotate: -210 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ ...headlineTransition, delay: 0.12 }}
                className="size-[4.5rem] shrink-0 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              />

              <motion.h1
                initial={{ opacity: 0, x: -70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...headlineTransition, delay: 0.2 }}
                className="text-[clamp(4.75rem,7.15vw,6.4rem)] font-[450] leading-[0.96] tracking-[-0.075em] text-[var(--bg)]"
              >
                {heroContent.lineTwo}
              </motion.h1>

              <div className="inline-flex overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ ...headlineTransition, delay: 0.28 }}
                  className="bg-[var(--primary)] px-3 py-1.5 text-[clamp(4.75rem,7.15vw,6.4rem)] font-[450] leading-[0.96] tracking-[-0.075em] text-white"
                >
                  {heroContent.lineThree}
                </motion.div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4 lg:hidden">
              <motion.div
                initial={{ opacity: 0, x: -110, rotate: -210 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ ...headlineTransition, delay: 0.12 }}
                className="size-[4.2rem] rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              />

              <motion.h1
                initial={{ opacity: 0, x: -70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...headlineTransition, delay: 0.2 }}
                className="text-[clamp(4.12rem,10.15vw,5.2rem)] font-[450] leading-[0.96] tracking-[-0.078em] text-[var(--bg)]"
              >
                {heroContent.lineTwo}
              </motion.h1>

              <div className="inline-flex w-fit overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ ...headlineTransition, delay: 0.28 }}
                  className="bg-[var(--primary)] px-4 py-1 text-[clamp(4.12rem,10.15vw,5.2rem)] font-[450] leading-[0.96] tracking-[-0.078em] text-white"
                >
                  {heroContent.lineThree}
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-[28rem] pb-4 lg:justify-self-end lg:pb-4"
          >
            <p className="text-[1.38rem] font-medium leading-[1.5] tracking-[-0.045em] text-[color:rgba(10,10,10,0.58)] sm:text-[1.48rem]">
              {heroContent.description}
            </p>
            <div className="mt-14">
              <LinkArrow href={heroContent.ctaHref} label={heroContent.ctaLabel} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
