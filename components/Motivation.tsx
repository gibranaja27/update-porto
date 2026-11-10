import Image from "next/image";
import Reveal from "./Reveal";

export default function Motivation() {
  return (
    <section
      className="relative isolate flex min-h-[240px] w-full
        items-center justify-center overflow-hidden
        sm:min-h-[280px] lg:min-h-[320px]"
    >
      {/* Background Image */}
      <Image
        src="/images/motivation-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Green Overlay */}
      <div
        className="absolute inset-0
          bg-gradient-to-r
          from-[#174d26]/45
          via-[#568e50]/30
          to-[#174d26]/45"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
        <Reveal delay="100ms">
          <div className="mx-auto max-w-5xl text-center">
            <h2
              className="font-serif text-2xl font-bold
                leading-snug text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                sm:text-3xl
                lg:text-[44px] lg:leading-[1.3]"
            >
              Let's build something amazing together. Have a project in mind or
              want to collaborate?
            </h2>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
