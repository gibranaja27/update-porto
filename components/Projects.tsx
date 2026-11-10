
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "Aplikasi Mobile Relawan Astacala Rescue",
    category: "Mobile Application",
    icon: "📱",
    description:
      "Aplikasi mobile berbasis Flutter untuk mendukung pelaporan dan penyebaran informasi bencana secara real-time. Relawan dapat mengirim data lokasi, skala bencana, korban, dan dokumentasi lapangan, sementara pengguna umum memperoleh informasi bencana terverifikasi melalui peta interaktif.",
    technologies: [
      {
        name: "Flutter",
        color: "bg-[#ffe0b2] text-[#d97706]",
      },
      {
        name: "Laravel",
        color: "bg-[#ffcaca] text-[#c62828]",
      },
      {
        name: "REST API",
        color: "bg-[#f0c8ff] text-[#9333b8]",
      },
    ],
  },
  {
    number: "02",
    title: "Website Admin Pusat Kendali ASTACALA Rescue",
    category: "Web Application",
    icon: "🖥️",
    description:
      "Website pusat kendali berbasis Laravel untuk mengelola, memverifikasi, dan mempublikasikan laporan bencana dari relawan. Sistem ini menjadi pusat pengambilan keputusan dengan data terstruktur, terpusat, dan siap digunakan dalam kondisi darurat.",
    technologies: [
      {
        name: "Laravel",
        color: "bg-[#ffcaca] text-[#c62828]",
      },
      {
        name: "Tailwind CSS",
        color: "bg-[#a9e5c9] text-[#287653]",
      },
      {
        name: "MySQL",
        color: "bg-[#e8c5f5] text-[#8739a8]",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="project"
      className="relative isolate w-full overflow-hidden bg-[#eaffc8] px-5 py-16 sm:px-8 sm:py-20"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      {/* Main Gradient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
        bg-[radial-gradient(ellipse_at_10%_15%,rgba(174,226,119,0.38),transparent_38%),radial-gradient(ellipse_at_90%_75%,rgba(255,255,255,0.75),transparent_40%),linear-gradient(135deg,#eaffc8_0%,#e3f9c4_48%,#f5ffe9_100%)]"
      />

      {/* Dot Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.32]
        [background-image:radial-gradient(#79ae61_1px,transparent_1px)]
        [background-size:24px_24px]"
      />

      {/* Large Left Circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-28 -z-10
        h-[380px] w-[380px] rounded-full border border-[#82bd68]/35
        sm:h-[480px] sm:w-[480px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-44 -z-10
        h-[280px] w-[280px] rounded-full border border-[#82bd68]/30
        sm:h-[380px] sm:w-[380px]"
      />

      {/* Right Circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10
        h-[350px] w-[350px] rounded-full border border-[#82bd68]/40
        sm:h-[460px] sm:w-[460px]"
      />

      {/* Decorative Light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-24 -z-10
        h-4 w-4 rounded-full bg-[#8bc76b]/70 shadow-[0_0_25px_8px_rgba(139,199,107,0.18)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-32 left-[45%] -z-10
        h-3 w-3 rounded-full bg-[#5ca58a]/60"
      />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <Reveal delay="100ms">
          <header className="mb-12 text-left sm:mb-16">

            <p
              className="mb-4 inline-flex items-center gap-2 rounded-full
              border border-[#b7d6a2] bg-white/75 px-4 py-2
              text-xs font-semibold tracking-wide text-[#39845e]
              shadow-[0_3px_12px_rgba(40,100,55,0.08)]
              backdrop-blur-md sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#68ad68] shadow-[0_0_8px_#68ad68]" />
              What I've Created
            </p>

            <h2
              className="max-w-xl font-serif text-3xl leading-tight
              text-[#102d1e] sm:text-4xl lg:text-5xl"
            >
              Other Projects I Have
              <br />
              Worked On
              <span className="text-[#7dbb45]">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#48634f] sm:text-base">
              A collection of side projects, exploration designs, and
              collaborative works.
            </p>

            {/* Decorative Heading Line */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-1 w-12 rounded-full bg-[#76b85e]" />
              <span className="h-1 w-5 rounded-full bg-[#b4d98d]" />
              <span className="h-1 w-2 rounded-full bg-[#d0e9b1]" />
            </div>

          </header>
        </Reveal>

        {/* ================= PROJECT LIST ================= */}

        <div className="space-y-10 sm:space-y-14">

          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <Reveal key={project.number} delay={`${index * 120}ms`}>

                <article
                  className={`group relative grid w-full min-w-0
                  grid-cols-1 items-center gap-5
                  sm:gap-8 lg:gap-12
                  ${
                    reverse
                      ? "sm:grid-cols-[minmax(0,1fr)_180px]"
                      : "sm:grid-cols-[180px_minmax(0,1fr)]"
                  }`}
                >

                  {/* ================= PROJECT ICON ================= */}

                  <div
                    className={`relative flex items-center justify-center
                    ${
                      reverse
                        ? "sm:order-2"
                        : "sm:order-1"
                    }`}
                  >

                    {/* Decorative Orbit */}
                    <div
                      aria-hidden="true"
                      className="absolute h-32 w-32 rounded-full
                      border border-dashed border-[#83b96b]/45
                      transition-transform duration-700
                      group-hover:rotate-45 sm:h-36 sm:w-36"
                    />

                    {/* Icon Circle */}
                    <div
                      className="relative flex h-24 w-24 items-center
                      justify-center rounded-full border border-white/90
                      bg-gradient-to-br from-white via-white to-[#f0f9e4]
                      shadow-[0_8px_24px_rgba(40,90,50,0.12)]
                      transition-all duration-500
                      group-hover:-translate-y-2
                      group-hover:scale-110
                      group-hover:shadow-[0_16px_32px_rgba(40,90,50,0.18)]
                      sm:h-28 sm:w-28"
                    >
                      <span
                        className="text-4xl transition-transform
                        duration-500 group-hover:rotate-6
                        group-hover:scale-110"
                      >
                        {project.icon}
                      </span>

                      {/* Floating Dots */}
                      <span
                        className="absolute -right-1 top-4 h-3.5 w-3.5
                        rounded-full border-2 border-[#eaffc8]
                        bg-[#8fca72]"
                      />

                      <span
                        className="absolute -bottom-1 left-5 h-3 w-3
                        rounded-full border-2 border-[#eaffc8]
                        bg-[#5aa184]"
                      />

                      <span
                        className="absolute left-1 top-2 h-2 w-2
                        rounded-full bg-[#c3df91]"
                      />
                    </div>

                  </div>

                  {/* ================= PROJECT INFORMATION ================= */}

                  <div
                    className={`relative w-full min-w-0 overflow-hidden
                    rounded-[24px] border border-white/90
                    bg-gradient-to-br from-white/90 via-[#fbfff5]/90 to-[#f0f9e5]/90
                    p-5
                    shadow-[0_8px_24px_rgba(40,90,50,0.08)]
                    backdrop-blur-md
                    transition-all duration-500
                    group-hover:-translate-y-2
                    group-hover:border-[#a9d883]
                    group-hover:shadow-[0_18px_38px_rgba(40,90,50,0.14)]
                    sm:p-7
                    ${
                      reverse
                        ? "sm:order-1"
                        : "sm:order-2"
                    }`}
                  >

                    {/* Card Decorative Circle */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-16
                      h-40 w-40 rounded-full bg-[#dff5c4]/55
                      transition-transform duration-700
                      group-hover:scale-125"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 right-0
                      h-1/2 w-1/3 rounded-tl-full
                      bg-gradient-to-tl from-[#e5f5d6]/35 to-transparent"
                    />

                    <div className="relative">

                      {/* Project Number and Category */}
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">

                        <span
                          className="inline-flex items-center gap-2
                          text-[10px] font-bold tracking-[0.2em]
                          text-[#69a875] sm:text-xs"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#69a875]" />
                          PROJECT {project.number}
                        </span>

                        <span
                          className="rounded-full border border-[#d9edc6]
                          bg-[#e8f5d9]/80 px-3 py-1.5
                          text-[10px] font-semibold text-[#39845e]
                          sm:text-xs"
                        >
                          {project.category}
                        </span>

                      </div>

                      {/* Project Title */}
                      <h3
                        className="font-serif text-lg font-semibold
                        leading-snug text-[#17633f]
                        transition-colors duration-300
                        group-hover:text-[#398c5c]
                        sm:text-xl lg:text-2xl"
                      >
                        {project.title}
                      </h3>

                      {/* Technology Tags */}
                      <div className="mt-5 flex flex-wrap gap-2">

                        {project.technologies.map((technology) => (
                          <span
                            key={technology.name}
                            className={`rounded-full border border-white/60
                            px-3.5 py-1.5 text-[10px] font-semibold
                            shadow-sm transition-all duration-300
                            group-hover:-translate-y-1
                            sm:text-xs ${technology.color}`}
                          >
                            {technology.name}
                          </span>
                        ))}

                      </div>

                      {/* Description */}
                      <p
                        className="mt-5 text-xs leading-7
                        text-[#526b59] sm:text-sm sm:leading-7"
                      >
                        {project.description}
                      </p>

                      {/* Bottom Accent */}
                      <div className="mt-5 flex items-center gap-2">

                        <div
                          className="h-1 w-10 rounded-full
                          bg-gradient-to-r from-[#75b85e] to-[#4c9b80]
                          transition-all duration-500
                          group-hover:w-24"
                        />

                        <span
                          className="text-[9px] font-semibold
                          tracking-[0.15em] text-[#8aab83]
                          opacity-0 transition-opacity duration-300
                          group-hover:opacity-100"
                        >
                          PROJECT {project.number}
                        </span>

                      </div>

                    </div>
                  </div>

                </article>

              </Reveal>
            );
          })}

        </div>
      </div>
    </section>
  );
}
