"use client";

import { motion } from "framer-motion";
import { contactContent } from "@/lib/site-data";
import { LinkArrow } from "@/components/ui/LinkArrow";

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

const introTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function ContactSection() {
  return (
    <section className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-[7.25rem]">
      <div className="px-4 sm:px-8 lg:px-16">
        <div className="grid gap-12 pt-6 lg:grid-cols-[0.94fr_1.7fr] lg:gap-14 lg:pt-10">
          <div className="space-y-14 lg:space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={introTransition}
              className="flex items-center gap-5 lg:gap-6"
            >
              <h1 className="text-[clamp(4rem,7vw,6.2rem)] font-[450] leading-[0.94] tracking-[-0.095em] text-[var(--bg)]">
                {contactContent.title}
              </h1>
              <div className="size-[4.55rem] shrink-0 rounded-full bg-[var(--primary)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...introTransition, delay: 0.08 }}
              className="space-y-10 lg:max-w-[22rem]"
            >
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noreferrer" : undefined}
                  className="block"
                >
                  <p className="text-[1.12rem] font-medium leading-none tracking-[-0.04em] text-[var(--bg)] sm:text-[1.18rem]">
                    {item.label}
                  </p>
                  <p className="mt-3 whitespace-pre-line text-[1.35rem] font-medium leading-[1.4] tracking-[-0.05em] text-[color:rgba(10,10,10,0.52)] sm:text-[1.55rem]">
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
            className="pt-2 lg:pt-[5.2rem]"
          >
            <h2 className="max-w-[28ch] text-[clamp(2.2rem,4.8vw,4rem)] font-[450] leading-[0.98] tracking-[-0.075em] text-[var(--bg)]">
              {contactContent.intro}
            </h2>

            <form className="mt-16 space-y-12 lg:mt-20">
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                <label className="block border-b border-[rgba(10,10,10,0.35)] pb-3">
                  <span className="sr-only">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name *"
                    className="w-full border-0 bg-transparent p-0 text-[1.28rem] text-[var(--bg)] outline-none placeholder:text-[1.28rem] placeholder:text-[color:rgba(10,10,10,0.5)] sm:text-[1.4rem] sm:placeholder:text-[1.4rem]"
                  />
                </label>

                <label className="block border-b border-[rgba(10,10,10,0.35)] pb-3">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="E-mail *"
                    className="w-full border-0 bg-transparent p-0 text-[1.28rem] text-[var(--bg)] outline-none placeholder:text-[1.28rem] placeholder:text-[color:rgba(10,10,10,0.5)] sm:text-[1.4rem] sm:placeholder:text-[1.4rem]"
                  />
                </label>
              </div>

              <label className="block min-h-[12.5rem] border-b border-[rgba(10,10,10,0.35)] pb-3 lg:min-h-[15rem]">
                <span className="sr-only">Project Information</span>
                <textarea
                  name="message"
                  required
                  placeholder="Project Information *"
                  className="h-full min-h-[10.5rem] w-full resize-none border-0 bg-transparent p-0 text-[1.28rem] text-[var(--bg)] outline-none placeholder:text-[1.28rem] placeholder:text-[color:rgba(10,10,10,0.5)] sm:text-[1.4rem] sm:placeholder:text-[1.4rem] lg:min-h-[13rem]"
                />
              </label>

              <div className="pt-4">
                <LinkArrow href={`mailto:${contactContent.email}`} label="Send message" />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
