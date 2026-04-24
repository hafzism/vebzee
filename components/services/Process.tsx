"use client";

import React, { useState } from 'react';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
});

const steps = [
  {
    id: '01',
    title: 'Strategy & Research',
    description: 'We start by understanding your business, your goals, and your market. This sets the foundation for work that actually performs.',
  },
  {
    id: '02',
    title: 'Design & Prototype',
    description: 'From rough sketches to working prototypes, we design solutions that solve real problems while looking great.',
  },
  {
    id: '03',
    title: 'Build, Test & Optimize',
    description: 'We carefully build your solution, test with real users, and refine based on data and feedback to ensure everything works flawlessly.',
  },
  {
    id: '04',
    title: 'Launch & Support',
    description: 'Deploying the final product and providing ongoing maintenance to ensure long-term growth.',
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <style jsx global>{`
        @keyframes custom-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        .blinking-point {
          animation: custom-pulse 2.2s infinite ease-in-out;
        }
        .framer-bezier {
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>

      <section className={`bg-[#0C120C] text-white py-[96px] px-6 md:px-[64px] ${manrope.className}`}>
        <div className="max-w-[1440px] mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            <p className="text-[18px] font-medium tracking-tighter text-white/80 pt-2">
              /OUR PROCESS/
            </p>
            <h2 className="text-[40px] md:text-[52px] leading-[1.05] font-semibold max-w-[780px] tracking-tight">
              Our mission is to help businesses grow through strategic design, 
              creating work that performs as good as it looks.
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`
                    relative framer-bezier rounded-[24px] p-[36px] flex flex-col cursor-pointer
                    border overflow-hidden group
                    ${isActive 
                      ? "flex-[3] border-white/20 bg-white/[0.04] opacity-100 shadow-2xl" 
                      : "flex-[1] border-white/5 bg-transparent opacity-40 hover:opacity-70"
                    }
                  `}
                  style={{ minWidth: isActive ? '515px' : '180px' }}
                >
                  {/* Step ID */}
                  <span className="text-[14px] font-bold opacity-60 mb-8 block transition-transform duration-500">
                    {step.id}
                  </span>

                  {/* Card Title (42px) */}
                  <h3 className={`
                    text-[32px] md:text-[42px] font-semibold leading-[1.1] tracking-tight mb-auto 
                    transition-all duration-700
                    ${isActive ? "text-white" : "text-white/80 translate-y-2"}
                  `}>
                    {step.title}
                  </h3>

                  {/* Staggered Entrance Content */}
                  <div className={`
                    transition-all duration-700 delay-100 transform
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"}
                  `}>
                    {/* Description (22px) */}
                    <p className="text-[22px] text-white/60 leading-[1.4] max-w-[420px] mb-12 tracking-tight">
                      {step.description}
                    </p>

                    {/* Pulsing Point */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 transition-transform delay-300 duration-700">
                      <div className="w-[12px] h-[12px] bg-[#0048F9] rounded-full blinking-point shadow-[0_0_20px_rgba(0,72,249,0.7)]"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}