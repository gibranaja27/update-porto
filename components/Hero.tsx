import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    // section untuk hero awal
    <section
      id="home"
      className="relative mx-auto mt-12 grid min-h-[calc(100vh-76px)]
        w-full max-w-6xl grid-cols-1 items-center
        gap-8 px-6 py-12 sm:mt-0 px-8
        lg:grid-cols-2 lg:gap-10 lg:py-10"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20
          h-64 w-64 rounded-full bg-[#dff5b9]/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0
          h-72 w-72 rounded-full bg-[#b5e477]/20 blur-3xl"
      />

      {/* Left Content */}
      <div
        className="relative z-10 flex flex-col items-center
          text-center lg:items-start lg:text-left"
      >
        <Reveal delay="100ms">
          <h1
            className="animated-gradient-text max-w-xl
              font-serif text-4xl leading-tight
              sm:text-5xl lg:text-[48px]"
          >
            UI/UX Designer &amp;
            <br />
            Front End Developer
          </h1>
        </Reveal>

        <Reveal delay="150ms">
          <p
            className="mt-2 font-serif text-2xl
              font-light italic text-[#568b00]
              sm:text-3xl"
          >
            -Specialist-
          </p>
        </Reveal>

        {/* Introduction */}
        <Reveal delay="200ms">
          <p
            className="mt-5 max-w-md text-sm leading-7
              text-[#42634c] sm:text-base"
          >
            Turning ideas into thoughtful digital experiences through design and
            development.
          </p>
        </Reveal>

        {/* Technology Icons */}
        <div className="mt-7 flex items-center gap-5">
          {/* Figma */}
          <Reveal delay="250ms">
            <div
              className="flex h-10 w-7 flex-col overflow-hidden
                rounded-full transition-transform duration-300
                hover:-translate-y-1 hover:scale-110"
              aria-label="Figma"
              title="Figma"
            >
              <div className="flex h-1/3">
                <span className="w-1/2 bg-[#F24E1E]" />
                <span className="w-1/2 bg-[#FF7262]" />
              </div>
              <div className="flex h-1/3">
                <span className="w-1/2 bg-[#A259FF]" />
                <span className="w-1/2 rounded-r-full bg-[#1ABCFE]" />
              </div>
              <div className="flex h-1/3">
                <span className="w-1/2 rounded-bl-full bg-[#0ACF83]" />
                <span className="w-1/2 bg-white" />
              </div>
            </div>
          </Reveal>

          {/* JavaScript */}
          <Reveal delay="300ms">
            <div
              className="flex h-10 w-10 items-end justify-end
                bg-[#F7DF1E] p-1 transition-transform duration-300
                hover:-translate-y-1 hover:scale-110"
              title="JavaScript"
            >
              <span className="text-xl font-bold text-black">JS</span>
            </div>
          </Reveal>

          {/* PHP */}
          <Reveal delay="350ms">
            <div
              className="flex h-10 w-10 items-center justify-center
                rounded-full bg-[#8993BE]
                transition-transform duration-300
                hover:-translate-y-1 hover:scale-110"
              title="PHP"
            >
              <span className="font-bold italic text-white">php</span>
            </div>
          </Reveal>
        </div>

        {/* Call to Action */}
        <Reveal delay="400ms">
          <Link
            href="#contact"
            className="mt-10 inline-flex min-h-12 min-w-[190px]
              items-center justify-center gap-2
              bg-[#599f80] px-8 py-3 font-serif text-lg
              text-white shadow-[0_3px_4px_rgba(0,0,0,0.2)]
              transition-all duration-300
              hover:-translate-y-1 hover:bg-[#438667]
              hover:shadow-lg focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#006b3c]"
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      </div>

      {/* Right Illustration */}
      <Reveal delay="300ms">
        <div
          className="relative mx-auto flex w-full max-w-[540px]
            min-w-0 items-center justify-center
            lg:max-w-none"
        >
          {/* ANIMATED AURORA CIRCUIT */}
<div className="hero-aurora" aria-hidden="true">
  <svg
    viewBox="0 0 600 500"
    className="hero-aurora-svg"
    fill="none"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="aurora-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b5e477" />
        <stop offset="50%" stopColor="#399764" />
        <stop offset="100%" stopColor="#006b3c" />
      </linearGradient>
    </defs>

    <path
      className="aurora-line aurora-line-one"
      d="M 20 250 C 120 20, 300 30, 390 180 S 520 400, 590 180"
      stroke="url(#aurora-gradient)"
      strokeWidth="2"
    />

    <path
      className="aurora-line aurora-line-two"
      d="M 0 330 C 120 120, 250 100, 350 250 S 500 450, 600 280"
      stroke="#8fcf65"
      strokeWidth="1.5"
    />

    <path
      className="aurora-line aurora-line-three"
      d="M 40 120 C 180 300, 300 400, 420 280 S 520 80, 590 100"
      stroke="#399764"
      strokeWidth="1.5"
    />

    <circle className="aurora-node node-one" cx="390" cy="180" r="5" />
    <circle className="aurora-node node-two" cx="350" cy="250" r="4" />
    <circle className="aurora-node node-three" cx="420" cy="280" r="5" />
  </svg>
</div>
          {/* Soft Green Glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2
              h-[72%] w-[78%] -translate-x-1/2
              -translate-y-1/2 rounded-full
              bg-[#dff5b9]/80 blur-3xl"
          />

          {/* Large Decorative Circle */}
          <div
            aria-hidden="true"
            className="absolute left-[14%] top-[15%]
              h-40 w-40 rounded-full
              bg-[#b5e477]/20 blur-sm"
          />

          {/* Orbit Decoration */}
          <div
            aria-hidden="true"
            className="absolute left-[4%] top-[15%]
              h-[70%] w-[90%] rotate-[-18deg]
              rounded-[50%] border border-[#8fcf65]/40"
          />

          {/* Floating Dots */}
          <span
            aria-hidden="true"
            className="absolute right-[12%] top-[9%] z-20
              h-5 w-5 rounded-full bg-[#8fcf65]
              shadow-[0_0_20px_rgba(143,207,101,0.5)]
              animate-pulse"
          />

          <span
            aria-hidden="true"
            className="absolute bottom-[18%] left-[8%] z-20
              h-3 w-3 rounded-full bg-[#599f80]"
          />

          <span
            aria-hidden="true"
            className="absolute bottom-[28%] right-[4%] z-20
              h-2.5 w-2.5 rounded-full bg-[#b5e477]"
          />

          {/* UI/UX Floating Card */}
          <div
            className="absolute left-0 top-[15%] z-20
              hidden -rotate-3 rounded-2xl
              border border-[#d9edbd] bg-white/90
              px-4 py-3 shadow-[0_10px_30px_rgba(40,90,40,0.12)]
              backdrop-blur-md transition-transform duration-300
              hover:-translate-y-1 hover:rotate-0 sm:block"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center
                  justify-center rounded-xl bg-[#e7f6d7]"
              >
                <span className="text-xl text-[#087443]">✦</span>
              </div>

              <div>
                <p className="text-xs text-[#64815b]">Specialization</p>
                <p className="mt-1 text-sm font-bold text-[#087443]">
                  UI/UX Design
                </p>

                <div className="mt-2 h-1.5 w-24 overflow-hidden rounded-full bg-[#e4efd9]">
                  <div className="h-full w-4/5 rounded-full bg-[#8fcf65]" />
                </div>
              </div>
            </div>
          </div>

          {/* Front End Floating Card */}
          <div
            className="absolute bottom-[13%] right-0 z-20
              hidden rotate-2 rounded-2xl
              border border-[#d9edbd] bg-white/90
              px-4 py-3 shadow-[0_10px_30px_rgba(40,90,40,0.12)]
              backdrop-blur-md transition-transform duration-300
              hover:-translate-y-1 hover:rotate-0 sm:block"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center
                  justify-center rounded-xl bg-[#e7f6d7]
                  font-mono text-sm font-bold text-[#087443]"
              >
                {"</>"}
              </div>

              <div>
                <p className="text-xs text-[#64815b]">Development</p>
                <p className="mt-1 text-sm font-bold text-[#087443]">
                  Front End
                </p>

                <div className="mt-2 flex gap-1">
                  <span className="h-1.5 w-5 rounded-full bg-[#8fcf65]" />
                  <span className="h-1.5 w-5 rounded-full bg-[#b5e477]" />
                  <span className="h-1.5 w-5 rounded-full bg-[#d9edbd]" />
                </div>
              </div>
            </div>
          </div>

          {/* Small UI Preview Card */}
          <div
            aria-hidden="true"
            className="absolute right-[1%] top-[32%] z-0
              hidden w-24 rotate-6 rounded-xl
              border border-white/80 bg-white/60 p-2
              shadow-md sm:block"
          >
            <div className="h-2 w-10 rounded-full bg-[#8fcf65]/80" />
            <div className="mt-2 h-8 rounded-md bg-[#dff5b9]" />
            <div className="mt-2 h-1.5 w-full rounded-full bg-[#b5e477]" />
            <div className="mt-1 h-1.5 w-2/3 rounded-full bg-[#d4e9bd]" />
          </div>

          {/* Main Illustration */}
          <Reveal delay="500ms">
            <div className="relative z-10 mx-auto flex w-full max-w-[540px] min-w-0 items-center justify-center lg:max-w-none">
              <Image
                src="/images/hero-ilustration.png"
                alt="Ilustrasi seseorang bekerja di depan komputer"
                width={700}
                height={600}
                priority
                unoptimized
                className="block h-auto w-full object-contain opacity-100"
                sizes="(max-width: 639px) 90vw, (max-width: 1023px) 85vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
