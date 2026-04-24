"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "What types of projects do you typically work on?",
    answer:
      "We specialize in digital solutions including website development, web applications, e-commerce platforms, and enterprise software integrations. Our expertise spans diverse industries, delivering strategic technological solutions tailored to unique business challenges.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects run between 4 and 12 weeks, depending on complexity, scope, and stakeholder feedback cycles. We define a clear timeline at kickoff with milestones so you always know what is coming next.",
  },
  {
    question: "What's your development process like?",
    answer:
      "Our process starts with discovery and strategy, then moves through design, development, QA, and launch. You stay involved through regular check-ins, demos, and transparent progress updates at every phase.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer post-launch support for monitoring, bug fixes, performance improvements, and feature enhancements so your product keeps improving after going live.",
  },
  {
    question: "Can you work with our existing systems and team?",
    answer:
      "Absolutely. We frequently collaborate with in-house teams and integrate with existing tools, APIs, and workflows. Our goal is to complement your team and reduce friction, not replace what is already working.",
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeIndex = hoveredIndex ?? openIndex;

  return (
    <section className="px-4 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
      <div className="mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.65fr] lg:gap-16">
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="lg:pr-8"
          >
            <h2 className="text-[clamp(2.9rem,4.35vw,4.7rem)] font-[500] leading-[0.94] tracking-[-0.065em] text-[var(--bg)]">
              Common Qs
            </h2>
            <p className="mt-8 max-w-[35ch] text-[clamp(1.18rem,1.25vw,1.2rem)] leading-[1.34] tracking-[-0.03em] text-[color:rgba(10,10,10,0.62)]">
              Get quick answers about working with us and our approach to digital
              solutions. Can&apos;t find what you&apos;re looking for? Reach out
              below!
            </p>
            <Link
              href="/contact"
              className="group mt-12 inline-flex items-center gap-2 border-b border-[var(--bg)] pb-2 text-[clamp(1.65rem,1.9vw,1.2rem)] leading-none tracking-[-0.04em] text-[var(--bg)]"
            >
              Contact us
              <span className="text-[var(--primary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={26} strokeWidth={2.2} />
              </span>
            </Link>
          </motion.aside>

          <div
            className="border-b border-[rgba(10,10,10,0.12)]"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {faqItems.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.article
                  key={item.question}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.44,
                    delay: 0.08 + index * 0.06,
                    ease: easeOut,
                  }}
                  className={
                    index === 0 ? "" : "border-t border-[rgba(10,10,10,0.12)]"
                  }
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((current) => (current === index ? null : index))
                    }
                    className="flex w-full items-start justify-between gap-6 py-8 text-left hover:cursor-pointer sm:items-center sm:py-9"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-[clamp(1.55rem,1.75vw,1rem)] leading-[1.08] tracking-[-0.045em] text-[var(--bg)]">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="mt-1 text-[var(--bg)] sm:mt-0"
                      aria-hidden="true"
                    >
                      <ChevronDown size={34} strokeWidth={1.9} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-answer-${index}`}
                        key={`answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.34, ease: easeOut }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[88%] pb-8 text-[clamp(1.06rem,1.1vw,1.55rem)] leading-[1.35] tracking-[-0.026em] text-[color:rgba(10,10,10,0.62)] sm:pb-9">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
