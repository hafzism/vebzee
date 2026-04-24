"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Website Design",
    detail:
      "Every website we design is crafted to engage and inspire, built on proven principles of what makes users stay, explore, and return.",
  },
  {
    title: "Product Design",
    detail:
      "From user flows to polished interfaces, we shape products that feel intuitive and drive measurable business outcomes.",
  },
  {
    title: "Branding",
    detail:
      "We build bold, cohesive brand systems that make your company instantly recognizable across every touchpoint.",
  },
  {
    title: "Motion Graphics",
    detail:
      "Our motion work adds clarity and personality, helping your message land faster through animated storytelling.",
  },
  {
    title: "Development",
    detail:
      "We turn ideas into fast, reliable digital products with clean code, scalable architecture, and smooth handoff.",
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto">
        <h2 className="max-w-[25ch] text-[clamp(2.2rem,4.85vw,3.5rem)] leading-[0.98] tracking-[-0.06em] text-[var(--bg)]">
          This is how we help ambitious companies succeed.
        </h2>

        <div
          className="mt-14 border-b border-[rgba(10,10,10,0.12)] sm:mt-16"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.article
                key={service.title}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() =>
                  setActiveIndex((current) => (current === index ? null : index))
                }
                layout
                transition={{ duration: 0.4, ease: easeOut }}
                className={`cursor-pointer border-t border-[rgba(10,10,10,0.12)] px-3 py-5 sm:px-6 sm:py-6 lg:px-0 lg:py-8 ${
                  isActive ? "rounded-[14px] bg-[var(--primary)] lg:px-6" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4 sm:gap-6">
                  <div className="grid min-w-0 flex-1 grid-cols-[56px_minmax(0,1fr)] items-center gap-x-4 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-x-6 lg:grid-cols-[110px_minmax(0,1fr)]">
                    <p
                      className={`text-[2.05rem] leading-none tracking-[-0.04em] sm:text-[2.2rem] ${
                        isActive ? "text-white" : "text-[var(--bg)]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3
                      className={`text-[clamp(2rem,5vw,5.1rem)] font-[500] leading-[0.92] tracking-[-0.065em] ${
                        isActive ? "text-white" : "text-[var(--bg)]"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <AnimatePresence initial={false} mode="wait">
                    {isActive ? (
                      <motion.p
                        key={`${service.title}-desktop-detail`}
                        initial={{ opacity: 0, x: 22 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 18 }}
                        transition={{ duration: 0.28, ease: easeOut }}
                        className="hidden max-w-[50ch] text-[1.24rem] leading-[1.3] tracking-[-0.03em] text-white/95 lg:block"
                      >
                        {service.detail}
                      </motion.p>
                    ) : (
                      <motion.span
                        key={`${service.title}-plus`}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="text-[3.1rem] leading-none text-[var(--bg)] sm:text-[3.3rem]"
                        aria-hidden="true"
                      >
                        +
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.p
                      key={`${service.title}-detail`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.32, ease: easeOut }}
                      className="mt-4 max-w-[60ch] text-[1.1rem] leading-[1.34] tracking-[-0.028em] text-white/92 sm:mt-5 sm:text-[1.24rem] lg:hidden"
                    >
                      {service.detail}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
