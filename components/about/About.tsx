"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../layout/Navbar";
import { motion, useInView } from "framer-motion";

/* ──────────────────────── DATA ──────────────────────── */

const team = [
  { name: "Markus Chen", role: "CEO & Co-founder", img: "/images/markus.png" },
  { name: "Sarah Rodriguez", role: "Head of Development", img: "/images/sarah.png" },
  { name: "David Park", role: "Creative Director", img: "/images/david.png" },
  { name: "Emily Thompson", role: "Head of PM", img: "/images/emily.png" },
  { name: "Michael O'Brien", role: "Technical Lead", img: "/images/michael.png" },
  { name: "Lisa Wong", role: "UX Research Lead", img: "/images/lisa.png" },
  { name: "Jean Grey", role: "Web Designer", img: "/images/jean.png" },
  { name: "Oscar Mendez", role: "Developer", img: "/images/oscar.png" },
];

const approaches = [
  {
    num: "01",
    title: "Deep understanding",
    desc: "We take the time to truly understand your business, goals, and challenges before proposing any solutions. This foundation helps us truly serve your needs.",
  },
  {
    num: "02",
    title: "Thoughtful solutions",
    desc: "We don\u2019t believe in one-size-fits-all approaches. Every solution we create is carefully crafted to address your specific challenges and opportunities.",
  },
  {
    num: "03",
    title: "Continuous innovation",
    desc: "Technology never stands still, and neither do we. We\u2019re constantly learning, adapting, and finding better ways to serve our clients.",
  },
];

const values = [
  {
    title: "A culture of innovation",
    desc: "At Vebzee, we foster a culture of continuous learning and innovation. Our team members are encouraged to experiment, share ideas, and push the boundaries of what\u2019s possible in digital solutions.",
  },
  {
    title: "A dedication to craft",
    desc: "We believe that great work comes from mastery of our craft. Every line of code, every design decision, and every strategic recommendation is backed by deep expertise and attention to detail.",
  },
  {
    title: "A foundation of trust",
    desc: "We cultivate lasting partnerships by being direct, honest, and clear in our communication. Our clients always know where their projects stand and what decisions are being made to drive their success forward.",
  },
];

/* ──────────────────────── ANIMATIONS ──────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function FadeSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────── PAGE ──────────────────────── */

export default function About() {
  return (
    <div className="min-h-screen  bg-white font-[family-name:var(--font-manrope)] text-[#0c120c]">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Approach />
        <TeamSection />
        <Join />
        <LifeAtOpus />
        <Values />
        <Mission />
      </main>
      <AboutFooter />
    </div>
  );
}

/* ══════════════════════ HERO ══════════════════════ */

function Hero() {
  return (
    <section className="pt-[160px] pb-[80px] px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
      <FadeSection>
        <motion.h1
          variants={fadeUp}
          className="text-[clamp(42px,6vw,80px)] font-semibold leading-[1.04] tracking-[-0.03em] text-[#0c120c] mb-3"
        >
          Building digital
          <br />
          excellence since 2019
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {/* Left image with blue overlay */}
          <motion.div
            variants={fadeUp}
            className="relative aspect-[632/707] rounded overflow-hidden"
          >
            <Image
              src="/images/team-collab.png"
              alt="Two women laughing at work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-[15px]"
            />
          </motion.div>

          {/* Right: text + portrait */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <p className="text-[20px] leading-[1.7] text-[#0c120c99] mb-10 font-[500] leading-[28px] tracking-[-0.4px]">
              At Vebzee, we&rsquo;re more than just a digital agency &ndash;
              we&rsquo;re a team of creative problem-solvers who believe in the
              power of thoughtful digital solutions to transform businesses.
            </p>
            <div className="relative aspect-[632/707] rounded overflow-hidden">
              <Image
                src="/images/founder-portrait.png"
                alt="A woman smiling sitting in the office"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-[15px]"
              />
            </div>
          </motion.div>
        </div>
      </FadeSection>
    </section>
  );
}

/* ══════════════════════ STORY ══════════════════════ */

function Story() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
      <FadeSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,5vw,60px)] font-semibold leading-[1.1] tracking-[-4px] text-[#0c120c] mb-6"
            >
              From humble beginnings  to a trusted digital  partner
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[20px] font-medium leading-[28px] tracking-[-0.4px] text-[#0c120c99]"
            >
              What started as a small team of three developers working from a
              tiny office has grown into a dynamic digital agency trusted by
              businesses across multiple industries. Through dedication to
              quality, transparent communication, and a deep understanding of
              our clients&rsquo; needs, we&rsquo;ve built lasting partnerships
              and delivered solutions that make a difference.
            </motion.p>
          </div>

          {/* Quote */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-end mt-100"
          >
            <div className="mt-auto flex gap-6 lg:gap-8 items-start">
              <div className="shrink-0 text-[#0055ff] pt-2">
                <svg width="67" height="54" viewBox="0 0 67 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 53.333H0V28C0 12.533 12.533 0 28 0v12.533c-8.533 0-15.467 6.934-15.467 15.467v6H28v19.333zM66.667 53.333H38.667V28c0-15.467 12.533-28 28-28v12.533c-8.533 0-15.467 6.934-15.467 15.467v6h15.467v19.333z" />
                </svg>
              </div>
              <div>
                <blockquote className="text-[clamp(24px,3.2vw,40px)] font-semibold text-[#0c120c] leading-[1.2] tracking-[-1.2px] mb-8">
                  When we founded Vebzee, we had a simple vision &ndash; to help
                  businesses succeed in the digital world by combining technical
                  excellence with genuine care for our clients&rsquo; success. That vision
                  still drives everything we do today.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden relative shrink-0 bg-gray-200">
                    <Image
                      src="/images/markus.png"
                      alt="Markus Chen"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[22px] font-semibold text-[#0c120c]">
                      Markus Chen
                    </p>
                    <p className="text-[22px] text-[#0c120c88] font-medium">
                      CEO &amp; Co-founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </FadeSection>
    </section>
  );
}

/* ══════════════════════ APPROACH ══════════════════════ */

function Approach() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
      <FadeSection>
        <motion.p
          variants={fadeUp}
          className="text-[13px] tracking-[0.18em] text-[#0c120c55] uppercase mb-14 font-medium"
        >
          /OUR APPROACH/
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {approaches.map((a) => (
            <motion.div key={a.num} variants={fadeUp}>
              <span className="block text-[36px] font-semibold text-[#0c120c] mb-4">
                {a.num}
              </span>
              <h3 className="text-[20px] font-semibold text-[#0c120c] mb-3">
                {a.title}
              </h3>
              <p className="text-[16px] font-medium leading-[26px] tracking-[-0.3px] text-[#0c120c99]">
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </FadeSection>
    </section>
  );
}
/* ══════════════════════ TEAM ══════════════════════ */

function TeamSection() {
  return (
    // Adjusted padding to match the spacious feel of the reference
    <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
      <FadeSection>
        {/* Increased gap from 5 to 6 or 8 to match the gutter width in the image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="flex flex-col gap-3 group"
            >
              {/* 1. Changed rounded to rounded-xl (approx 12px-16px) 
                2. Reference has a slightly taller aspect ratio, but 3/4 is usually standard.
              */}
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative bg-gray-100">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>

              {/* Text Alignment and Sizing */}
              <div className="space-y-1">
                <p className="text-[15px] font-semibold leading-tight text-[#0c120c]">
                  {member.name}
                </p>
                <p className="text-[13px] text-[#0c120c88] font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </FadeSection>
    </section>
  );
}

/* ══════════════════════ JOIN ══════════════════════ */

function Join() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
      <FadeSection>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 pt-4"
          >
            <div className="w-10 h-10 rounded-full bg-[#0c120c] flex items-center justify-center shrink-0">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
            <div className="w-10 h-0.5 bg-blue-500 rounded" />
          </motion.div>

          <div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,5vw,50px)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#0c120c] mb-5"
            >
              Help us shape the future of digital
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[20px] font-medium leading-[28px] tracking-[-0.4px] text-[#0c120c99] mb-6"
            >
              We&rsquo;re always looking for talented individuals who share our
              passion for digital excellence and client success.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#0c120c] border-b-[1.5px] border-[#0c120c] pb-0.5 hover:opacity-55 transition-opacity"
              >
                Let&rsquo;s talk &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </FadeSection>
    </section>
  );
}

/* ══════════════════════ LIFE AT VEBZEE ══════════════════════ */

function LifeAtOpus() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
      <FadeSection>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 mb-12">
          <motion.p
            variants={fadeUp}
            className="text-[13px] tracking-[0.18em] text-[#0c120c55] uppercase font-medium"
          >
            /LIFE AT VEBZEE/
          </motion.p>
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,5vw,50px)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#0c120c] mb-5"
            >
              Beyond the office
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[20px] font-medium leading-[28px] tracking-[-0.4px] text-[#0c120c99] max-w-[560px]"
            >
              We believe that great work comes from happy, well-rounded people.
              That&rsquo;s why we make sure there&rsquo;s always time for fun,
              learning, and team bonding beyond our project work.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div
            variants={fadeUp}
            className="aspect-video rounded-xl overflow-hidden relative bg-gray-100 group"
          >
            <Image
              src="/images/hiking.png"
              alt="Team hiking outdoors"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="aspect-video rounded-xl overflow-hidden relative bg-gray-100 group"
          >
            <Image
              src="/images/sports.png"
              alt="Team playing sports"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          className="text-[20px] font-medium leading-[28px] tracking-[-0.4px] text-[#0c120c99] max-w-[560px]"
        >
          Every quarter, we step away from our screens for team activities that
          range from cooking classes to rock climbing. Our hiking club meets
          monthly for local trail adventures, and our book club discussions
          often spiral into fascinating debates about technology, design, and
          the future of digital.
        </motion.p>
      </FadeSection>
    </section>
  );
}

/* ══════════════════════ VALUES ══════════════════════ */

function Values() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
      <FadeSection>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10">
          <motion.p
            variants={fadeUp}
            className="text-[13px] tracking-[0.18em] text-[#0c120c55] uppercase font-medium"
          >
            /OUR VALUES/
          </motion.p>
          <div className="flex flex-col gap-12">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <h3 className="text-[28px] font-semibold text-[#0c120c] mb-3 tracking-[-0.02em]">
                  {v.title}
                </h3>
                <p className="text-[20px] font-medium leading-[28px] tracking-[-0.4px] text-[#0c120c99] max-w-[560px]">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeSection>
    </section>
  );
}

/* ══════════════════════ MISSION ══════════════════════ */

function Mission() {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
      <FadeSection>
        <motion.h2
          variants={fadeUp}
          className="text-[clamp(28px,4.5vw,50px)] font-semibold leading-[1.15] tracking-[-0.03em] text-[#0c120c] max-w-[900px]"
        >
          As we grow, our mission stays the same: helping businesses succeed
          through thoughtful digital solutions that create meaningful
          connections with their audiences.
        </motion.h2>
      </FadeSection>
    </section>
  );
}



/* ══════════════════════ FOOTER ══════════════════════ */
import { contactContent, navItems, socialItems } from "@/lib/site-data";
const footerDescription =
  "We help businesses succeed in the digital space by creating thoughtful solutions that combine smart design, reliable technology, and a deep understanding of what your users really need.";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
] as const;
function AboutFooter() {



  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative">
      <section className="relative border-t border-white/10 px-4 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-24 lg:px-16 lg:pb-20 lg:pt-28">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            maskImage: "radial-gradient(84% 93% at 50% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage: "radial-gradient(84% 93% at 50% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)"
          }}
        >
          <video
            src="https://video.gumlet.io/67a34db7c82041cdc3756469/67a544193dde702a6fe8cd31/download.mp4"
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover opacity-[0.4]"
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[88rem] flex-col items-center text-center">
          <h2 className="text-[clamp(3.8rem,8vw,4rem)] font-[450] leading-[1.1] tracking-tight text-white">
            <span className="hidden lg:block">
              Let&apos;s build something
              <br />
              great together
            </span>
            <span className="lg:hidden">
              Let&apos;s build
              <br />
              something
              <br />
              great together
            </span>
          </h2>

          <p className="mt-7 max-w-[22rem] text-[1.08rem] leading-[1.45] tracking-[-0.045em] text-white/68 sm:text-[1.35rem] lg:mt-8 lg:max-w-[36rem] lg:text-[1.45rem]">
            <span className="hidden lg:block">
              Get in touch to explore how we can help your business
              <br />
              reach its full potential.
            </span>
            <span className="hidden sm:block lg:hidden">
              Get in touch to explore how we can help your business reach its full
              potential.
            </span>
            <span className="sm:hidden">
              Get in touch to explore how we can help
              <br />
              your business reach its full potential.
            </span>
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex min-h-[3.8rem] w-full max-w-[16.4rem] items-center justify-center rounded-[1rem] bg-white px-6 text-[1.18rem] font-medium tracking-[-0.05em] text-black transition-transform duration-300 hover:-translate-y-0.5 sm:min-h-[4.45rem] sm:max-w-[20rem] sm:text-[1.35rem] lg:mt-12 lg:min-h-[4.25rem] lg:max-w-[17.9rem]"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <section className="px-4 pb-10 pt-12 sm:px-8 sm:pb-12 lg:px-16 lg:pb-14 lg:pt-[4.5rem]">
        <div className="mx-auto max-w-[120rem]">
          <div className="grid gap-12 lg:grid-cols-[minmax(20rem,33rem)_minmax(26rem,1fr)] lg:items-start lg:gap-x-16 lg:gap-y-12">
            <div className="order-2 lg:order-1">
              <div className="max-w-[33rem]">
                <Link
                  href="/"
                  className="inline-block text-[3.1rem] font-medium leading-none tracking-[-0.095em] text-white sm:text-[4.1rem] lg:text-[4.65rem]"
                  aria-label="Vebzee footer home link"
                >
                  VEBZEE
                </Link>

                <p className="mt-7 max-w-[20rem] text-[1rem] leading-[1.5] tracking-[-0.045em] text-white/66 sm:mt-8 sm:max-w-[22rem] sm:text-[1.12rem] lg:max-w-[31rem] lg:text-[1.32rem]">
                  {footerDescription}
                </p>
              </div>
            </div>

            <div className="order-1 text-center lg:order-2 lg:justify-self-end lg:self-start lg:pt-1 lg:text-left">
              <p className="text-[0.98rem] leading-none tracking-[-0.04em] text-white/58 sm:text-[1.08rem]">
                You can also email us at:
              </p>
              <a
                href={`mailto:${contactContent.email}`}
                className="mt-5 inline-block text-[2.1rem] font-[450] leading-[0.98] tracking-[-0.09em] text-white transition-opacity hover:opacity-70 sm:text-[2.5rem] lg:max-w-[14ch] lg:text-[clamp(2.1rem,5.1vw,3.35rem)]"
              >
                {contactContent.email}
              </a>
            </div>

            <div className="order-3 lg:order-3 lg:col-span-2 lg:grid lg:grid-cols-[minmax(20rem,33rem)_minmax(26rem,1fr)] lg:items-end lg:gap-x-16">
              <div className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-3 text-left sm:gap-x-14 lg:hidden">
                <nav aria-label="Footer navigation mobile" className="flex flex-col gap-3.5">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-[1.04rem] leading-none tracking-[-0.04em] text-white transition-opacity hover:opacity-70"
                    >
                      {item.label === "About" ? "About Us" : item.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex min-w-[7.2rem] flex-col gap-3.5 justify-self-end text-left">
                  {socialItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[1.04rem] leading-none tracking-[-0.04em] text-white transition-opacity hover:opacity-70"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex lg:flex-wrap lg:gap-x-8 lg:gap-y-3 lg:text-left">
                {socialItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[1.18rem] leading-none tracking-[-0.04em] text-white transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <nav
                aria-label="Footer navigation"
                className="hidden lg:mt-0 lg:flex lg:flex-wrap lg:justify-self-end lg:gap-x-10 lg:gap-y-3 lg:text-left"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[1.18rem] leading-none tracking-[-0.04em] text-white transition-opacity hover:opacity-70"
                  >
                    {item.label === "About" ? "About Us" : item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="order-4 flex flex-col gap-4 pt-6 text-white/58 sm:flex-row sm:items-center sm:justify-between lg:col-start-2 lg:justify-self-end lg:gap-8 lg:pt-0">
              <p className="text-[1rem] tracking-[-0.04em]">
                @{currentYear} Vebzee, All Rights Reserved
              </p>
              <div className="flex flex-row gap-6 sm:flex-row sm:gap-6">
                {legalLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[1rem] tracking-[-0.04em] text-white/58 transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
