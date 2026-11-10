import AmbientVisual from "./AmbientVisual";
import Image from "next/image";
import Reveal from "./Reveal";

const skills = [
  {
    number: "01",
    title: "UI/UX Designer",
    image: "/icon/skill-uiux.png",
    alt: "UI/UX Design",
    description:
      "Merancang tampilan dan pengalaman pengguna yang intuitif, menarik, dan mudah digunakan.",
    tags: ["Wireframe", "UI Design", "Prototyping"],
  },
  {
    number: "02",
    title: "Front End Developer",
    image: "/icon/skill-frontend.png",
    alt: "Front End Development",
    description:
      "Mengubah desain menjadi antarmuka website yang responsif, interaktif, dan nyaman digunakan.",
    tags: ["HTML & CSS", "JavaScript", "Responsive UI"],
  },
  {
    number: "03",
    title: "Back End Developer",
    image: "/icon/skill-backend.png",
    alt: "Back End Development",
    description:
      "Mempelajari pengembangan sisi server untuk mendukung pengolahan data dan fungsi aplikasi.",
    tags: ["PHP", "Database", "Server Logic"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate w-full overflow-hidden bg-[#eaffc8] px-6 py-16 sm:px-8 sm:py-20"
    >
      {/* BACKGROUND GRADIENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
        bg-[radial-gradient(ellipse_at_15%_25%,rgba(164,224,105,0.55),transparent_40%),radial-gradient(ellipse_at_85%_75%,rgba(255,255,255,0.85),transparent_40%),linear-gradient(135deg,#eaffc8_0%,#dcf9ad_50%,#f3ffe6_100%)]"
      />

      {/* AUTOMATIC AMBIENT ANIMATION */}
  <AmbientVisual />
      {/* GLOW DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10
        h-[420px] w-[420px] rounded-full
        bg-[#a5dc6d]/40 blur-[85px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10
        h-[460px] w-[460px] rounded-full
        bg-white/80 blur-[90px]"
      />

      {/* LEFT CIRCLE DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-28 -z-10
        h-[420px] w-[420px] rounded-full
        border border-[#78b84d]/35"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-40 -z-10
        h-[320px] w-[320px] rounded-full
        border border-[#78b84d]/40"
      />

      {/* RIGHT CIRCLE DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-[-100px] -z-10
        h-[480px] w-[480px] rounded-full
        border border-[#78b84d]/40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-[-40px] -z-10
        h-[340px] w-[340px] rounded-full
        border border-[#78b84d]/35"
      />

      {/* DOT PATTERN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
        opacity-[0.22]
        [background-image:radial-gradient(#568e50_1px,transparent_1px)]
        [background-size:24px_24px]"
      />

      {/* FLOATING DOTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-28 -z-10
        h-4 w-4 rounded-full bg-[#78b84d]/60"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[13%] bottom-32 -z-10
        h-5 w-5 rounded-full bg-[#78b84d]/50"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] bottom-24 -z-10
        h-3 w-3 rounded-full bg-[#568e50]/50"
      />

      {/* MAIN CONTENT */}
      <div className="relative mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <Reveal>
          <div className="mb-12 text-center">

            <p
              className="mb-3 inline-flex items-center gap-2
              rounded-full border border-[#b7d6a2]
              bg-white/75 px-4 py-1.5
              text-xs font-medium tracking-wide
              text-[#39845e] shadow-sm sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#68ad68]" />
              What I Do
            </p>

            <h2 className="font-serif text-3xl text-[#102d1e] sm:text-4xl lg:text-5xl">
              My Skills
              <span className="text-[#7dbb45]">.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#52745f] sm:text-base">
              Combining design creativity and technical skills to build
              meaningful digital experiences.
            </p>

            {/* SMALL DECORATIVE LINE */}
            <div className="mx-auto mt-6 flex items-center justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#8fc65b]" />
              <span className="h-1 w-3 rounded-full bg-[#c5e79b]" />
              <span className="h-1 w-8 rounded-full bg-[#8fc65b]" />
            </div>
          </div>
        </Reveal>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, index) => (
            <Reveal key={skill.number} delay={`${index * 120}ms`}>
              <article
                className="group relative h-full overflow-hidden
                rounded-3xl border border-white/90
                bg-white/85 p-6
                shadow-[0_8px_24px_rgba(35,91,53,0.09)]
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#a9d883]
                hover:bg-white
                hover:shadow-[0_18px_35px_rgba(35,91,53,0.16)]
                motion-reduce:transform-none
                motion-reduce:transition-none
                sm:p-7"
              >

                {/* CARD DECORATIVE CIRCLE */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10
                  h-32 w-32 rounded-full bg-[#eaffc8]
                  transition-transform duration-500
                  group-hover:scale-125"
                />

                {/* CARD TOP ROW */}
                <div className="relative flex items-start justify-between">

                  <div
                    className="flex h-[76px] w-[76px] items-center
                    justify-center rounded-2xl
                    bg-[#f1f9e6] ring-1 ring-[#dceec8]
                    transition-transform duration-300
                    group-hover:rotate-3 group-hover:scale-105"
                  >
                    <Image
                      src={skill.image}
                      alt={skill.alt}
                      width={52}
                      height={52}
                      className="h-12 w-12 object-contain"
                      sizes="52px"
                    />
                  </div>

                  <span
                    className="font-serif text-3xl font-bold
                    text-[#c5dfa8]
                    transition-colors duration-300
                    group-hover:text-[#78ad4e]"
                  >
                    {skill.number}
                  </span>
                </div>

                {/* CARD CONTENT */}
                <h3
                  className="relative mt-6 font-serif
                  text-xl font-bold text-[#17633f] sm:text-2xl"
                >
                  {skill.title}
                </h3>

                <p
                  className="relative mt-3 min-h-[84px]
                  text-sm leading-7 text-[#607666]"
                >
                  {skill.description}
                </p>

                {/* SKILL TAGS */}
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#dcebcf]
                      bg-[#f5faee] px-3 py-1.5
                      text-xs font-medium text-[#39815d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BOTTOM ACCENT */}
                <div
                  aria-hidden="true"
                  className="ml-0 mt-7 h-1 w-12 rounded-full
                  bg-[#9ccc65]
                  transition-all duration-300
                  group-hover:w-full"
                />

              </article>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}