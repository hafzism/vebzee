"use client";

import { motion } from "framer-motion";

const visionStats = [
  { value: "47+", label: "Projects delivered" },
  { value: "95%", label: "Client retention" },
  { value: "$21M", label: "Client revenue impacted" },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Vision() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="text-[0.95rem] font-medium uppercase tracking-[-0.02em] text-[var(--bg)]"
          >
            /OUR VISION/
          </motion.p>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: easeOut }}
              className="    text-[clamp(2.3rem,5.1vw,5.1rem)] font-[500] leading-[0.98] tracking-[-0.06em] text-[var(--bg)]"
            >
              Whether it&apos;s a website, an app, or a complete brand
              identity -
              we create work that works.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.58, delay: 0.08, ease: easeOut }}
              className="mt-8 max-w-[45ch] text-[1.25rem] leading-[1.34] tracking-[-0.03em] text-[color:rgba(10,10,10,0.62)] sm:mt-10"
            >
              Good design isn&apos;t just about looks. It&apos;s about
              solving real problems and getting results. Here&apos;s ours.
            </motion.p>

            <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6 lg:mt-20">
              {visionStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.16 + index * 0.08,
                    ease: easeOut,
                  }}
                >
                  <p className="text-[clamp(3.4rem,6vw,5.55rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[var(--primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[1.05rem] leading-[1.25] tracking-[-0.03em] text-[color:rgba(10,10,10,0.52)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
