"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { navItems, socialItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/hero/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 24) {
        setIsNavVisible(true);
      } else if (delta > 4) {
        setIsNavVisible(false);
      } else if (delta < -4) {
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        className="sticky top-0 z-40 w-full"
        animate={{ y: isOpen || isNavVisible ? 0 : -120 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className="flex items-center justify-between bg-[var(--background)] px-4 py-3 sm:px-8 sm:py-4 lg:px-16">
          <Logo />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group inline-flex h-12 w-12 items-center justify-center text-[var(--bg)] transition-opacity hover:cursor-pointer"
            aria-expanded={isOpen}
            aria-controls="site-menu"
            aria-label="Open navigation menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[3px] w-10 bg-current transition-transform" />
              <span className="block h-[3px] w-8 bg-current" />
              <span className="block h-[3px] w-9 bg-current transition-transform" />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              key="overlay"
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-40 border-0 bg-[rgba(12,18,12,0.46)] backdrop-blur-[4px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              key="menu"
              id="site-menu"
              className="fixed inset-y-0 right-0 z-50 flex h-dvh w-full max-w-[48rem] flex-col justify-between px-7 py-7 text-white sm:px-12 sm:py-10 lg:px-14 lg:py-8"
              style={{ backgroundColor: "var(--primary)" }}
              initial={{ x: "108%", opacity: 0.98 }}
              animate={{ x: 0 }}
              exit={{ x: "108%", opacity: 0.98 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="flex-1">
                <div className="flex items-center justify-start">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex size-10 items-center justify-center text-white transition-opacity hover:opacity-70 sm:size-14"
                    aria-label="Close navigation menu"
                  >
                    <X size={30} strokeWidth={1.5} className="sm:h-12 sm:w-12" />
                  </button>
                </div>

                <nav
                  className="mt-16 sm:mt-20 lg:mt-[4.7rem]"
                  aria-label="Main navigation"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.14 + index * 0.06, duration: 0.48, ease: [0.22, 1, 0.36, 1] as const }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block text-[clamp(3.75rem,8vw,4.15rem)] font-medium leading-[1.02] tracking-[-0.08em] text-white transition-transform duration-300 ease-out hover:translate-x-4 sm:text-[clamp(3.8rem,5.8vw,4.55rem)]",
                          pathname === item.href && "translate-x-0",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="grid grid-cols-2 gap-x-10 gap-y-4 pt-7 text-[0.95rem] leading-[1.2] tracking-[-0.03em] text-white/92 sm:grid-cols-3 sm:gap-x-10 sm:text-[1.08rem] lg:pt-8">
                <div className="flex flex-col gap-4">
                  <Link href="/privacy" onClick={() => setIsOpen(false)}>
                    Privacy Policy
                  </Link>
                  {socialItems.slice(0, 2).map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="/terms" onClick={() => setIsOpen(false)}>
                    Terms of Service
                  </Link>
                  {socialItems.slice(2).map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
