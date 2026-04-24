"use client";

import { motion } from "framer-motion";
import { contactContent } from "@/lib/site-data";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { FAQ } from "../services/FAQ";

const contactItems = [
  {
    label: "E-mail",
    value: contactContent.email,
    href: `mailto:${contactContent.email}`,
  },
  {
    label: "Phone",
    value: contactContent.phone,
    href: `tel:${contactContent.phone}`,
  },
  {
    label: "Address",
    value: "42 Pixel Place, Suite 404,\nNew York, NY 10012",
    href: "https://maps.google.com/?q=42%20Pixel%20Place,%20Suite%20404,%20New%20York,%20NY%2010012",
  },
] as const;

const trustItems = [
  {
    title: "We've been around",
    description:
      "Over the past decade, we've built dozens of websites and applications that continue driving value for our clients.",
  },
  {
    title: "We listen carefully",
    description:
      "Every project begins by understanding your unique vision, and we ensure your goals remain at the heart of our work.",
  },
  {
    title: "We keep you informed",
    description:
      "You'll never wonder about your project's status, as we provide detailed updates and maintain open dialogue throughout.",
  },
  {
    title: "We drive results",
    description:
      "While we create beautiful designs, our primary focus is delivering solutions that generate real business impact.",
  },
] as const;

const introTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function ContactSection() {
  return (
    <section className="pt-8 sm:pt-10 lg:pt-[7.25rem]">
      <div className="px-4 sm:px-8 lg:px-16">
        <div className="grid gap-14 pt-10 sm:pt-12 lg:grid-cols-[0.94fr_1.7fr] lg:gap-14 lg:pt-10">
          <div className="order-1 space-y-1 lg:order-1 lg:space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={introTransition}
              className="flex items-center gap-3 sm:gap-5 lg:gap-6"
            >
              <h1 className="text-[clamp(3.75rem,16vw,5.4rem)] font-[450] leading-[0.94] tracking-[-0.095em] text-[var(--bg)] lg:text-[clamp(4rem,7vw,6.2rem)]">
                {contactContent.title}
              </h1>
              <div className="size-[2.5rem] shrink-0 rounded-full bg-[var(--primary)] sm:size-[3.2rem] lg:size-[4.55rem]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...introTransition, delay: 0.08 }}
              className="hidden space-y-10 lg:block lg:max-w-[22rem]"
            >
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noreferrer" : undefined}
                  className="block"
                >
                  <p className="text-[1.18rem] font-medium leading-none tracking-[-0.04em] text-[var(--bg)]">
                    {item.label}
                  </p>
                  <p className="mt-3 whitespace-pre-line text-[1.55rem] font-medium leading-[1.4] tracking-[-0.05em] text-[color:rgba(10,10,10,0.52)]">
                    {item.value}
                  </p>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...introTransition, delay: 0.1 }}
            className="order-2 pt-1 lg:order-2 lg:pt-[5.2rem]"
          >
            <h2 className="max-w-[19ch] text-[clamp(1.85rem,8vw,2.9rem)] font-[450] leading-[1.04] tracking-[-0.08em] text-[var(--bg)] sm:max-w-[18ch] lg:max-w-[28ch] lg:text-[clamp(2.2rem,4.8vw,4rem)]">
              {contactContent.intro}
            </h2>

            <form className="mt-12 space-y-9 lg:mt-20 lg:space-y-12">
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                <label className="block border-b border-[rgba(10,10,10,0.35)] pb-3">
                  <span className="sr-only">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name *"
                    className="w-full border-0 bg-transparent p-0 text-[1.15rem] text-[var(--bg)] outline-none placeholder:text-[1.15rem] placeholder:text-[color:rgba(10,10,10,0.5)] sm:text-[1.4rem] sm:placeholder:text-[1.4rem]"
                  />
                </label>

                <label className="block border-b border-[rgba(10,10,10,0.35)] pb-3">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="E-mail *"
                    className="w-full border-0 bg-transparent p-0 text-[1.15rem] text-[var(--bg)] outline-none placeholder:text-[1.15rem] placeholder:text-[color:rgba(10,10,10,0.5)] sm:text-[1.4rem] sm:placeholder:text-[1.4rem]"
                  />
                </label>
              </div>

              <label className="block min-h-[11rem] border-b border-[rgba(10,10,10,0.35)] pb-3 lg:min-h-[15rem]">
                <span className="sr-only">Project Information</span>
                <textarea
                  name="message"
                  required
                  placeholder="Project Information *"
                  className="h-full min-h-[9.5rem] w-full resize-none border-0 bg-transparent p-0 text-[1.15rem] text-[var(--bg)] outline-none placeholder:text-[1.15rem] placeholder:text-[color:rgba(10,10,10,0.5)] sm:text-[1.4rem] sm:placeholder:text-[1.4rem] lg:min-h-[13rem]"
                />
              </label>

              <div className="pt-2 lg:pt-4">
                <LinkArrow
                  href={`mailto:${contactContent.email}`}
                  label="Send message"
                />
              </div>
            </form>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...introTransition, delay: 0.08 }}
              className="mt-14 space-y-10 lg:hidden"
            >
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noreferrer" : undefined}
                  className="block"
                >
                  <p className="text-[1.05rem] font-medium leading-none tracking-[-0.04em] text-[var(--bg)]">
                    {item.label}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-[1.18rem] font-medium leading-[1.45] tracking-[-0.045em] text-[color:rgba(10,10,10,0.56)]">
                    {item.value}
                  </p>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <FAQ />

      <div className="px-4 pb-16 pt-2 sm:px-8 sm:pb-20 sm:pt-4 lg:px-16 lg:pb-24 lg:pt-6">
        <div className="mx-auto max-w-[1860px]">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={introTransition}
            className="text-[clamp(2.5rem,6vw,5.15rem)] font-[500] leading-[0.95] tracking-[-0.065em] text-[var(--bg)]"
          >
            Why you can trust us
          </motion.h2>

          <div className="mt-12 grid gap-9 sm:mt-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:mt-16 lg:grid-cols-4 lg:gap-x-14">
            {trustItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 block h-10 w-[4px] shrink-0 bg-[var(--primary)] sm:h-11" />
                  <h3 className="text-[clamp(1.95rem,2.55vw,3.6rem)] font-[500] leading-[0.97] tracking-[-0.06em] text-[var(--bg)]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-7 max-w-[25ch] text-[clamp(1.08rem,1.24vw,2rem)] leading-[1.34] tracking-[-0.03em] text-[color:rgba(10,10,10,0.62)]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
