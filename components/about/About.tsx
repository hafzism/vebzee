import React from 'react';

// Team member data based on documented staff [cite: 21, 23, 24, 26, 27, 28, 31, 32]
const team = [
  { name: "Markus Chen", role: "CEO & Co-founder" },
  { name: "Sarah Rodriguez", role: "Head of Development" },
  { name: "David Park", role: "Creative Director" },
  { name: "Emily Thompson", role: "Head of PM" },
  { name: "Michael O'Brien", role: "Technical Lead" },
  { name: "Lisa Wong", role: "UX Research Lead" },
  { name: "Jean Grey", role: "Web Designer" },
  { name: "Oscar Mendez", role: "Developer" },
];

export function About() {
  return (
    <div className="bg-[#0C120C] text-white font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto">
        <h2 className="text-[14px] font-bold tracking-[0.3em] text-white/50 mb-8 uppercase">
          /OUR STORY/
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-[700px]">
            Building digital excellence since 2019 [cite: 2]
          </h1>
          <div className="max-w-[500px]">
            <p className="text-xl text-white/60 leading-relaxed mb-6">
              From humble beginnings to a trusted digital partner. [cite: 3] What started as a small team of three developers has grown into a dynamic digital agency. [cite: 4]
            </p>
            <p className="text-lg text-white/40">
              Through dedication to quality and a deep understanding of our clients&apos; needs, we deliver solutions that make a difference. [cite: 5]
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <h2 className="text-[14px] font-bold tracking-[0.3em] text-white/50 mb-16 uppercase">
            /OUR APPROACH/ [cite: 8]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 p-10 rounded-[24px] hover:bg-white/5 transition-all">
              <span className="text-sm font-bold opacity-40 mb-6 block">01 [cite: 11]</span>
              <h3 className="text-2xl font-semibold mb-6">Deep understanding [cite: 12]</h3>
              <p className="text-white/60 leading-relaxed">
                We take the time to truly understand your business goals and challenges before proposing any solutions. [cite: 13]
              </p>
            </div>
            <div className="border border-white/10 p-10 rounded-[24px] hover:bg-white/5 transition-all">
              <span className="text-sm font-bold opacity-40 mb-6 block">02 [cite: 15]</span>
              <h3 className="text-2xl font-semibold mb-6">Thoughtful solutions [cite: 16]</h3>
              <p className="text-white/60 leading-relaxed">
                Every solution we create is carefully crafted to address your specific challenges and opportunities. [cite: 17]
              </p>
            </div>
            <div className="border border-white/10 p-10 rounded-[24px] hover:bg-white/5 transition-all">
              <span className="text-sm font-bold opacity-40 mb-6 block">03 [cite: 18]</span>
              <h3 className="text-2xl font-semibold mb-6">Continuous innovation [cite: 19]</h3>
              <p className="text-white/60 leading-relaxed">
                Technology never stands still, and neither do we. We&apos;re constantly learning and adapting. [cite: 20]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-[14px] font-bold tracking-[0.3em] text-white/50 mb-8 uppercase">
              /OUR TEAM/
            </h2>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Meet the problem-solvers [cite: 6]
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          {team.map((member, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[4/5] bg-white/10 rounded-2xl mb-6 overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C120C] to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>
              <h4 className="text-xl font-medium">{member.name}</h4>
              <p className="text-white/40">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 px-6 md:px-16 bg-[#0048F9]/10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-[14px] font-bold tracking-[0.3em] text-[#0048F9] mb-8 uppercase">
              /LIFE AT OPUS/ [cite: 34]
            </h2>
            <h3 className="text-4xl font-semibold mb-8">Beyond the office [cite: 38]</h3>
            <p className="text-xl text-white/70 leading-relaxed">
              We believe that great work comes from happy, well-rounded people. [cite: 39] Every quarter, we step away from our screens for team activities like cooking classes or rock climbing. [cite: 41]
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-white/10 rounded-2xl" />
            <div className="aspect-square bg-white/10 rounded-2xl translate-y-8" />
          </div>
        </div>
      </section>
    </div>
  );
}