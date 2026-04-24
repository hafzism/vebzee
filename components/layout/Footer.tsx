import Link from "next/link";
import { contactContent, navItems, socialItems } from "@/lib/site-data";

const footerDescription =
  "We help businesses succeed in the digital space by creating thoughtful solutions that combine smart design, reliable technology, and a deep understanding of what your users really need.";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white">
      <section className="relative border-t border-white/10 px-4 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-24 lg:px-16 lg:pb-20 lg:pt-28">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            maskImage:
              "radial-gradient(84% 93% at 50% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "radial-gradient(84% 93% at 50% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <video
            src="https://video.gumlet.io/67a34db7c82041cdc3756469/67a544193dde702a6fe8cd31/download.mp4"
            loop
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover opacity-[0.4]"
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[88rem] flex-col items-center text-center">
          <h2 className="text-[clamp(3.25rem,8vw,6.6rem)] font-[450] leading-[0.9] tracking-[-0.095em] text-white">
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
