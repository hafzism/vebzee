"use client";

import React, { useState } from "react";
import Image from "next/image";

// ─── Team Data ───────────────────────────────────────────────────────────────
const team = [
  { name: "Markus Chen", role: "CEO & Co-founder", img: "/images/markus.jpg" },
  { name: "Sarah Rodriguez", role: "Head of Development", img: "/images/sarah.jpg" },
  { name: "David Park", role: "Creative Director", img: "/images/david.jpg" },
  { name: "Emily Thompson", role: "Head of PM", img: "/images/emily.jpg" },
  { name: "Michael O'Brien", role: "Technical Lead", img: "/images/michael.jpg" },
  { name: "Lisa Wong", role: "UX Research Lead", img: "/images/lisa.jpg" },
  { name: "Jean Grey", role: "Web Designer", img: "/images/jean.jpg" },
  { name: "Oscar Mendez", role: "Developer", img: "/images/oscar.jpg" },
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
    desc: "We don't believe in one-size-fits-all approaches. Every solution we create is carefully crafted to address your specific challenges and opportunities.",
  },
  {
    num: "03",
    title: "Continuous innovation",
    desc: "Technology never stands still, and neither do we. We're constantly learning, adapting, and finding better ways to serve our clients.",
  },
];

const values = [
  {
    title: "A culture of innovation",
    desc: "At OPUS, we foster a culture of continuous learning and innovation. Our team members are encouraged to experiment, share ideas, and push the boundaries of what's possible in digital solutions.",
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

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <span className="text-[15px] font-bold tracking-widest text-black">OPUS</span>
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-[5px] cursor-pointer"
        aria-label="Menu"
      >
        <span className="block w-5 h-[1.5px] bg-black" />
        <span className="block w-5 h-[1.5px] bg-black" />
        <span className="block w-3 h-[1.5px] bg-black" />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-6 px-8 flex flex-col gap-4">
          {["Home", "Projects", "Blog", "About Us", "Contact"].map((item) => (
            <a key={item} href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-32 pb-16 px-8 md:px-16 max-w-[960px] mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black leading-[1.05] mb-12">
        Building digital<br />excellence since 2019
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left image */}
        <div className="w-full aspect-[4/3] bg-gray-200 rounded overflow-hidden relative">
          <Image
            src="/images/team-collab.jpg"
            alt="Team collaboration"
            fill
            className="object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Fallback gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Team Image</span>
          </div>
        </div>

        {/* Right: text + image */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
            At OPUS, we're more than just a digital agency – we're a team of creative problem-solvers who believe in the power of thoughtful digital solutions to transform businesses.
          </p>
          <div className="w-full aspect-[3/4] bg-gray-200 rounded overflow-hidden relative">
            <Image
              src="/images/founder-portrait.jpg"
              alt="Founder portrait"
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Portrait</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Story Section ────────────────────────────────────────────────────────────
function Story() {
  return (
    <section className="py-16 px-8 md:px-16 max-w-[960px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            From humble beginnings to a trusted digital partner
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            What started as a small team of three developers working from a tiny office has grown into a dynamic digital agency trusted by businesses across multiple industries. Through dedication to quality, transparent communication, and a deep understanding of our clients' needs, we've built lasting partnerships and delivered solutions that make a difference.
          </p>
        </div>

        {/* Quote */}
        <div className="flex flex-col justify-end">
          <div className="mt-auto">
            <span className="text-5xl font-serif text-black leading-none select-none">"</span>
            <blockquote className="text-2xl md:text-3xl font-bold text-black leading-tight mt-2 mb-6">
              When we founded OPUS, we had a simple vision – to help businesses succeed in the digital world by combining technical excellence with genuine care for our clients' success. That vision still drives everything we do today.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative flex-shrink-0">
                <Image src="/images/markus.jpg" alt="Markus Chen" fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-black">Markus Chen</p>
                <p className="text-xs text-gray-500">CEO & Co-founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Approach Section ─────────────────────────────────────────────────────────
function Approach() {
  return (
    <section className="py-16 px-8 md:px-16 max-w-[960px] mx-auto">
      <p className="text-xs text-gray-400 tracking-widest mb-12">/OUR APPROACH/</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {approaches.map((a) => (
          <div key={a.num}>
            <p className="text-2xl font-bold text-black mb-3">{a.num}</p>
            <h3 className="text-lg font-bold text-black mb-3">{a.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Team Section ─────────────────────────────────────────────────────────────
function Team() {
  return (
    <section className="py-16 px-8 md:px-16 max-w-[960px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col gap-2">
            <div className="aspect-[3/4] bg-gray-200 rounded overflow-hidden relative">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover grayscale-0 hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-black">{member.name}</p>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Join Section ─────────────────────────────────────────────────────────────
function Join() {
  return (
    <section className="py-20 px-8 md:px-16 max-w-[960px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
          <div className="w-8 h-[2px] bg-blue-500 rounded" />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Help us shape the future of digital
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            We're always looking for talented individuals who share our passion for digital excellence and client success.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
          >
            Let's talk ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Life at Opus ─────────────────────────────────────────────────────────────
function LifeAtOpus() {
  return (
    <section className="py-16 px-8 md:px-16 max-w-[960px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 mb-10">
        <p className="text-xs text-gray-400 tracking-widest">/LIFE AT OPUS/</p>
        <div>
          <h2 className="text-4xl font-bold text-black mb-4">Beyond the office</h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
            We believe that great work comes from happy, well-rounded people. That's why we make sure there's always time for fun, learning, and team bonding beyond our project work.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="aspect-video bg-gray-200 rounded overflow-hidden relative">
          <Image src="/images/hiking.jpg" alt="Hiking" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
            <span className="text-white text-sm">Outdoor Activities</span>
          </div>
        </div>
        <div className="aspect-video bg-gray-200 rounded overflow-hidden relative">
          <Image src="/images/sports.jpg" alt="Sports" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
            <span className="text-white text-sm">Team Sports</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed max-w-md">
        Every quarter, we step away from our screens for team activities that range from cooking classes to rock climbing. Our hiking club meets monthly for local trail adventures, and our book club discussions often spiral into fascinating debates about technology, design, and the future of digital.
      </p>
    </section>
  );
}

// ─── Values Section ───────────────────────────────────────────────────────────
function Values() {
  return (
    <section className="py-16 px-8 md:px-16 max-w-[960px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
        <p className="text-xs text-gray-400 tracking-widest">/OUR VALUES/</p>
        <div className="flex flex-col gap-10">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="text-2xl font-bold text-black mb-3">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-lg">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mission Banner ───────────────────────────────────────────────────────────
function Mission() {
  return (
    <section className="py-20 px-8 md:px-16 max-w-[960px] mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
        As we grow, our mission stays the same: helping businesses succeed through thoughtful digital solutions that create meaningful connections with their audiences.
      </h2>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="mx-4 md:mx-8 rounded-2xl overflow-hidden bg-gray-900 relative py-24 px-8 text-center mb-0">
      {/* background texture hint */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-90" />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Let's build something<br />great together
        </h2>
        <p className="text-sm text-gray-400 mb-8">
          Get in touch to explore how we can help your<br />business reach its full potential.
        </p>
        <a
          href="#"
          className="inline-block border border-white text-white text-sm px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-8 md:px-16 py-12 border-t border-gray-100">
      <div className="max-w-[960px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <p className="text-xl font-bold tracking-widest text-black mb-4">OPUS</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              We help businesses succeed in the digital space by creating thoughtful solutions that combine smart design, reliable technology, and a deep understanding of what your users really need.
            </p>
            <div className="flex gap-5 mt-6">
              {["Facebook", "Instagram", "Dribble", "Behance"].map((s) => (
                <a key={s} href="#" className="text-xs text-gray-500 hover:text-black transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start md:items-end">
            <p className="text-xs text-gray-400 mb-2">You can also email us at:</p>
            <a href="mailto:contact@opushq.com" className="text-xl font-bold text-black hover:opacity-70 transition-opacity">
              contact@opushq.com
            </a>
            <div className="flex gap-6 mt-4">
              {["Home", "Projects", "Blog", "About Us", "Contact"].map((item) => (
                <a key={item} href="#" className="text-xs text-gray-500 hover:text-black transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-400">©2025 Opus, All Rights Reserved</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

