"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

const steps = [
  { id: '01', title: 'Strategy & Research', description: 'We start by understanding your business, your goals, and your market. This sets the foundation for work that actually performs.' },
  { id: '02', title: 'Design & Prototype', description: 'From rough sketches to working prototypes, we design solutions that solve real problems while looking great.' },
  { id: '03', title: 'Build, Test & Optimize', description: 'We carefully build your solution, test with real users, and refine based on data and feedback.' },
  { id: '04', title: 'Launch & Support', description: 'Deploying the final product and providing ongoing maintenance to ensure long-term growth.' },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasEntered(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes custom-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .blinking-point { animation: custom-pulse 2s infinite ease-in-out; }
        .framer-physics { transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>

      <section 
        ref={sectionRef}
        className={`bg-[#0C120C] text-white py-16 md:py-[120px] px-6 md:px-[64px] overflow-hidden ${manrope.className}`}
      >
        <div className="max-w-[1440px] mx-auto">
          
          {/* Header */}
          <div className={`transition-all duration-1000 mb-12 md:mb-20 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
              <p className="text-[14px] md:text-[18px] font-medium tracking-tighter text-white/60">/OUR PROCESS/</p>
              <h2 className="text-3xl md:text-[52px] leading-[1.1] font-semibold max-w-[800px] tracking-tight">
                Our mission is to help businesses grow through strategic design.
              </h2>
            </div>
          </div>

          {/* Responsive Card Grid */}
          {/* Use flex-col for mobile (vertical) and lg:flex-row for desktop (horizontal) */}
          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)} // Better for mobile touch
                  onMouseEnter={() => setActiveStep(index)}
                  className={`
                    relative framer-physics rounded-[24px] p-8 md:p-[36px] flex flex-col cursor-pointer border
                    ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                    ${isActive 
                      ? "bg-[#161C16] border-white/20 opacity-100 shadow-2xl" 
                      : "bg-transparent border-white/5 opacity-40 lg:opacity-40"
                    }
                    /* Vertical stack on mobile, horizontal expansion on desktop */
                    w-full lg:w-auto
                    ${isActive ? "lg:flex-[3]" : "lg:flex-[1]"}
                  `}
                  style={{ 
                    transitionDelay: hasEntered && !isActive ? `${index * 100}ms` : '0ms',
                    minWidth: isActive ? 'auto' : 'auto', // Reset min-widths for mobile
                    maxWidth: '100%' 
                  }}
                >
                  <span className="text-[12px] md:text-[14px] font-bold opacity-40 mb-4 md:mb-6">
                    {step.id}
                  </span>
                  
                  <h3 className={`text-2xl md:text-[40px] font-semibold leading-[1.15] tracking-tight transition-all duration-500 mb-6 lg:mb-auto ${isActive ? "text-white" : "text-white/70"}`}>
                    {step.title}
                  </h3>

                  {/* Content always visible on mobile if active, animated on desktop */}
                  <div className={`transition-all duration-700 ${isActive ? "opacity-100 max-h-[500px] mt-4" : "opacity-0 max-h-0 overflow-hidden lg:pointer-events-none"}`}>
                    <p className="text-base md:text-[20px] text-white/50 leading-[1.5] max-w-[380px] mb-8 tracking-tight">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/10">
                      <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-[#0048F9] rounded-full blinking-point shadow-[0_0_15px_rgba(0,72,249,0.5)]"></div>
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