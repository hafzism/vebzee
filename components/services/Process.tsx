"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
});

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
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.1 } // Triggers as soon as the top of the section appears
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
        
        /* The Framer physics from your inspector: cubic-bezier(.16, 1, .3, 1) */
        .framer-physics {
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      <section 
        ref={sectionRef}
        className={`bg-[#0C120C] text-white py-[120px] px-6 md:px-[64px] overflow-hidden ${manrope.className}`}
      >
        <div className="max-w-[1440px] mx-auto">
          
          {/* Header - Stays hidden until scrolled to */}
          <div className={`transition-all duration-1000 mb-20 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <p className="text-[18px] font-medium tracking-tighter text-white/60">/OUR PROCESS/</p>
              <h2 className="text-[40px] md:text-[52px] leading-[1.1] font-semibold max-w-[800px] tracking-tight">
                Our mission is to help businesses grow through strategic design, creating work that performs as good as it looks.
              </h2>
            </div>
          </div>

          {/* Staggered Card Grid */}
          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(index)}
                  style={{ 
                    // One-by-one animation on scroll
                    transitionDelay: hasEntered && !isActive ? `${index * 150}ms` : '0ms',
                    minWidth: isActive ? '515px' : '180px' 
                  }}
                  className={`
                    relative framer-physics rounded-[24px] p-[36px] flex flex-col cursor-pointer border
                    ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}
                    ${isActive 
                      ? "flex-[3] border-white/20 bg-[#161C16]" 
                      : "flex-[1] border-white/5 bg-transparent opacity-40"
                    }
                  `}
                >
                  <span className="text-[14px] font-bold opacity-40 mb-6">{step.id}</span>
                  
                  <h3 className={`text-[32px] md:text-[40px] font-semibold leading-[1.15] tracking-tight mb-auto transition-all duration-500 ${isActive ? "text-white" : "text-white/70"}`}>
                    {step.title}
                  </h3>

                  {/* Content revealed on hover/active */}
                  <div className={`transition-all duration-700 delay-100 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}>
                    <p className="text-[20px] text-white/50 leading-[1.5] max-w-[380px] mb-10 tracking-tight">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10">
                      <div className="w-[10px] h-[10px] bg-[#0048F9] rounded-full blinking-point shadow-[0_0_15px_rgba(0,72,249,0.5)]"></div>
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