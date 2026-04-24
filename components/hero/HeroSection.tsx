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
    <section className="pb-16 pt-4 sm:pb-20 sm:pt-6 h-screen lg:pb-[7.25rem]">
      <div className="px-4 sm:px-8 lg:px-16">
        <div className="grid min-h-[50vh] gap-8 pt-14 sm:gap-10 sm:pt-16 lg:grid-cols-[1.5fr_0.5fr] lg:items-end lg:gap-10 lg:pt-[6.4rem]">
          <div className="min-w-0">
            <div className="hidden pb-2 lg:block">
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

            <div className="lg:hidden">
              <motion.h1
                initial={{ opacity: 0, x: -90 }}
                animate={{ opacity: 1, x: 0 }}
                transition={headlineTransition}
                className="max-w-[11.5ch] text-[clamp(3.1rem,13.8vw,4.6rem)] font-[450] leading-[0.92] tracking-[-0.095em] text-[var(--bg)] sm:max-w-[11.8ch] sm:text-[clamp(4.05rem,10.9vw,5.1rem)]"
              >
                <span className="block">We design</span>
                <span className="block">solutions that</span>
                <span className="inline">drive </span>
                <span className="inline-block bg-[var(--primary)] px-2 py-0.5 text-white sm:px-3">
                  {heroContent.lineThree}
                </span>
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-[28rem] pb-2 lg:justify-self-end lg:pb-4"
          >
            <p className="max-w-[28ch] text-[1.14rem] font-medium leading-[1.45] tracking-[-0.045em] text-[color:rgba(10,10,10,0.58)] sm:max-w-[25ch] sm:text-[1.2rem] lg:max-w-none lg:text-[1.48rem]">
              {heroContent.description}
            </p>
            <div className="mt-10 sm:mt-12 lg:mt-14">
              <LinkArrow href={heroContent.ctaHref} label={heroContent.ctaLabel} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
