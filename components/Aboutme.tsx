import Image from "next/image";
import Reveal from "./Reveal";

const education = [
  {
    period: "2026 - Now",
    title: "Telkom University",
    description: "S1 Information System (Extension)",
  },
  {
    period: "2022 - 2025",
    title: "Telkom University",
    description: "D3 Information System",
  },
];

const experiences = [
  {
    period: "2025",
    title: "PT Gerbang Data Indonesia",
    description: "Internship UI/UX Designer (February - June 2025)",
  },
];

export default function Aboutme() {
  return (
    <section id="aboutme" className="scroll-mt-28 w-full py-0">
      <div className="grid w-full grid-cols-1 overflow-hidden lg:grid-cols-2">
        {/* Profile Photo */}
        <Reveal
          direction="left"
          className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full"
        >
          <Image
            src="/images/gibran-images.png"
            alt="Foto profil Gibran di alam terbuka"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </Reveal>

        {/* About Me Content */}
        <Reveal delay="150ms" className="min-w-0">
          <div className="relative isolate flex h-full flex-col justify-center overflow-hidden bg-[#B5E477] px-5 py-10 sm:px-8 sm:py-12 lg:px-8 xl:px-12">
            {/* BOTANICAL AMBIENT ANIMATION */}
            <div className="about-botanical" aria-hidden="true">
              <svg
                viewBox="0 0 400 600"
                fill="none"
                className="about-botanical-svg"
              >
                {/* Main growing stem */}
                <path
                  className="botanical-stem"
                  d="M380 610 C300 500 350 420 275 340 C210 270 310 190 220 110 C180 75 190 30 160 -10"
                  stroke="#287D49"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Leaves */}
                <path
                  className="botanical-leaf leaf-a"
                  d="M310 440 C240 420 220 360 250 340 C300 350 330 390 310 440Z"
                  fill="#E7FFD0"
                  fillOpacity="0.45"
                  stroke="#287D49"
                  strokeWidth="1.5"
                />

                <path
                  className="botanical-leaf leaf-b"
                  d="M280 350 C330 290 380 310 375 350 C350 390 310 380 280 350Z"
                  fill="#E7FFD0"
                  fillOpacity="0.4"
                  stroke="#287D49"
                  strokeWidth="1.5"
                />

                <path
                  className="botanical-leaf leaf-c"
                  d="M235 250 C165 235 155 180 190 165 C235 180 255 215 235 250Z"
                  fill="#E7FFD0"
                  fillOpacity="0.45"
                  stroke="#287D49"
                  strokeWidth="1.5"
                />

                <path
                  className="botanical-leaf leaf-d"
                  d="M225 155 C270 100 320 120 315 155 C285 195 245 185 225 155Z"
                  fill="#E7FFD0"
                  fillOpacity="0.4"
                  stroke="#287D49"
                  strokeWidth="1.5"
                />

                <path
                  className="botanical-leaf leaf-e"
                  d="M175 75 C125 65 110 25 140 10 C180 20 195 50 175 75Z"
                  fill="#E7FFD0"
                  fillOpacity="0.45"
                  stroke="#287D49"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Floating botanical particles */}
              <span className="about-leaf-particle about-leaf-one" />
              <span className="about-leaf-particle about-leaf-two" />
              <span className="about-leaf-particle about-leaf-three" />
              <span className="about-leaf-particle about-leaf-four" />
            </div>
            {/* Heading */}
            <Reveal delay="50ms" className="relative z-10">
              <div className="mx-auto mb-7 w-full max-w-2xl text-center sm:mb-8">
                <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#356b36] sm:text-sm">
                  GET TO KNOW ME
                </p>

                <h2 className="about-heading animated-gradient-text font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
                  About Me<span className="text-[#176b3b]">.</span>
                </h2>

                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#287d49]" />
              </div>
            </Reveal>

            {/* Description */}
            <Reveal delay="100ms" className="relative z-10">
              <div className="mx-auto w-full max-w-2xl">
                <p className="text-center font-serif text-base leading-7 text-[#304b2b] sm:text-lg sm:leading-8">
                  Hello, I’m Gibran, an Information Systems student at Telkom
                  University. I specialize in UI/UX Design (Figma), Front-End
                  Development (Next.js), and Backend &amp; API Integration. I
                  also have experience building Laravel web platforms and
                  Flutter mobile apps.
                </p>
              </div>
            </Reveal>

            {/* Education & Experience */}
            <div className="relative z-10 mx-auto mt-9 grid w-full max-w-3xl grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:gap-5">
              {/* Education Card */}
              <Reveal delay="200ms">
                <div className="h-full rounded-2xl border border-[#739d4d]/40 bg-[#edffd9]/70 p-5 shadow-[0_5px_15px_rgba(39,76,35,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(39,76,35,0.14)] sm:p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d1efad] text-[#24683b]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
                        <path d="M6 11v5c3.5 3 8.5 3 12 0v-5" />
                        <path d="M22 9v6" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#204b2b] sm:text-2xl">
                        Education
                      </h3>
                      <p className="mt-1 text-xs text-[#56744b]">
                        Academic Journey
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {education.map((item, index) => (
                      <div key={item.period} className="relative pl-5">
                        {/* Timeline */}
                        <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-[#36824a] ring-4 ring-[#d8f2be]" />

                        {index !== education.length - 1 && (
                          <span className="absolute bottom-[-23px] left-[4px] top-4 w-px bg-[#8ab879]/70" />
                        )}

                        <p className="mb-1 inline-flex rounded-full bg-[#d9f1c1] px-2.5 py-1 text-[11px] font-semibold text-[#356b36] sm:text-xs">
                          {item.period}
                        </p>

                        <h4 className="text-sm font-bold leading-6 text-[#263f25] sm:text-base">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-[#4c6242]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Experience Card */}
              <Reveal delay="300ms" className="relative z-10">
                <div className="h-full rounded-2xl border border-[#739d4d]/40 bg-[#edffd9]/70 p-5 shadow-[0_5px_15px_rgba(39,76,35,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(39,76,35,0.14)] sm:p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d1efad] text-[#24683b]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <rect x="3" y="7" width="18" height="13" rx="2" />
                        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <path d="M3 12h18M10 12v2h4v-2" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#204b2b] sm:text-2xl">
                        Experience
                      </h3>
                      <p className="mt-1 text-xs text-[#56744b]">
                        Professional Journey
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {experiences.map((item, index) => (
                      <div key={item.title} className="relative pl-5">
                        {/* Timeline */}
                        <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-[#36824a] ring-4 ring-[#d8f2be]" />

                        {index !== experiences.length - 1 && (
                          <span className="absolute bottom-[-23px] left-[4px] top-4 w-px bg-[#8ab879]/70" />
                        )}

                        <p className="mb-1 inline-flex rounded-full bg-[#d9f1c1] px-2.5 py-1 text-[11px] font-semibold text-[#356b36] sm:text-xs">
                          {item.period}
                        </p>

                        <h4 className="text-sm font-bold leading-6 text-[#263f25] sm:text-base">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-[#4c6242]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bottom Accent */}
            <Reveal delay="350ms" className="relative z-10">
              <div className="mx-auto mt-8 flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-[#456b39] sm:mt-9">
                <span className="h-px w-8 bg-[#7ba45b]" />
                <span>Design · Develop · Create</span>
                <span className="h-px w-8 bg-[#7ba45b]" />
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
