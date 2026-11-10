
"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

const certificates = [
  {
    title: "Special Skills",
    image: "/images/certificates/sertif1.jpg",
    description:
      "Honored to be awarded Best Student in the Special Skill UI/UX Bootcamp. Gained practical experience in design thinking, wireframing, and prototyping to build user-centered digital products.",
    issuer: "Special Skill Indonesia",
    year: "2026",
  },
];

export default function Certificate() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Jumlah slide = sertifikat + 1 slide empty state
  const totalSlides = certificates.length + 1;

  const hasCertificate = activeIndex < certificates.length;
  const certificate = hasCertificate
    ? certificates[activeIndex]
    : null;

  function changeCertificate(direction: number) {
    setActiveIndex((current) => {
      return (current + direction + totalSlides) % totalSlides;
    });
  }

  return (
    <section
      id="license"
      className="relative w-full overflow-hidden bg-[#eaffc8] px-5 py-16 sm:px-8 sm:py-20"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <Reveal delay="100ms">
          <header className="mb-10 text-center sm:mb-12">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#b7d6a2] bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-[#39845e] shadow-sm sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#68ad68]" />
              Credentials & Awards
            </p>

            <h2 className="font-serif text-3xl text-[#102d1e] sm:text-4xl lg:text-5xl">
              Certificate & License
              <span className="text-[#7dbb45]">.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#42634c] sm:text-base">
              Official certifications and credentials validating my
              professional skills and expertise.
            </p>
          </header>
        </Reveal>

        {/* Certificate Carousel */}
        <Reveal delay="150ms">
          <div
            key={activeIndex}
            className="mx-auto flex w-full max-w-5xl items-center justify-center gap-3 sm:gap-8 lg:gap-12"
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={() => changeCertificate(-1)}
              aria-label="Sertifikat sebelumnya"
              className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b7d6a2] bg-white/80 text-[#568e50] shadow-md transition-all duration-300 hover:-translate-x-1 hover:bg-[#568e50] hover:text-white sm:h-12 sm:w-12"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Slide Content */}
            <div className="relative min-w-0 flex-1">

              {hasCertificate && certificate ? (
                <>
                  {/* Certificate Image */}
                  <div className="relative mx-auto w-full max-w-2xl">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b7d6a2]/60" />

                    <div className="relative aspect-[1.42/1] w-full overflow-hidden rounded-xl border border-white/80 bg-white p-2 shadow-[0_12px_30px_rgba(50,90,50,0.16)] transition-transform duration-500 hover:-translate-y-1 sm:p-3">
                      <Image
                        src={certificate.image}
                        alt={`Sertifikat ${certificate.title}`}
                        fill
                        priority
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 650px"
                        className="object-contain p-1 sm:p-2"
                      />
                    </div>
                  </div>
                </>
              ) : (
                /* Empty State */
                <div className="relative mx-auto flex min-h-[260px] w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#b7d6a2]/70 bg-white/50 px-5 py-10 text-center shadow-[0_12px_30px_rgba(50,90,50,0.10)] sm:min-h-[390px] sm:rounded-3xl">

                  {/* Decorative Circles */}
                  <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-[#d5f2b8]/70 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-[#c8e9a6]/70 blur-2xl" />

                  {/* Illustration */}
                  <div className="relative mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#d2e9bd] bg-white shadow-[0_8px_20px_rgba(50,90,50,0.12)] sm:h-32 sm:w-32">
                    <svg
                      viewBox="0 0 120 120"
                      fill="none"
                      className="h-16 w-16 sm:h-24 sm:w-24"
                      aria-hidden="true"
                    >
                      {/* Document */}
                      <rect
                        x="30"
                        y="18"
                        width="60"
                        height="78"
                        rx="8"
                        fill="#E8F6D8"
                        stroke="#568E50"
                        strokeWidth="2.5"
                      />

                      <path
                        d="M42 38H78M42 49H72M42 60H67"
                        stroke="#8ABF65"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />

                      {/* Certificate Seal */}
                      <circle
                        cx="76"
                        cy="79"
                        r="15"
                        fill="#568E50"
                      />
                      <path
                        d="M69 91L66 108L76 102L86 108L83 91"
                        fill="#8ABF65"
                      />
                      <path
                        d="M76 70L78.5 76L85 76.5L80 81L81.5 87L76 84L70.5 87L72 81L67 76.5L73.5 76L76 70Z"
                        fill="#Eaffc8"
                      />

                      {/* Decorative Sparkles */}
                      <path
                        d="M18 28L21 34L27 37L21 40L18 46L15 40L9 37L15 34L18 28Z"
                        fill="#8ABF65"
                      />
                      <circle cx="100" cy="27" r="4" fill="#8ABF65" />
                      <circle cx="20" cy="88" r="3" fill="#568E50" />
                    </svg>
                  </div>

                  {/* Empty State Text */}
                  <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#80a96a]">
                    More to come
                  </span>

                  <h3 className="relative mt-3 font-serif text-2xl text-[#17633f] sm:text-3xl">
                    No More Certificates Yet
                  </h3>

                  <p className="relative mt-3 max-w-md text-sm leading-6 text-[#52705a] sm:text-base">
                    Every achievement starts with a first step.
                    More certifications and learning experiences
                    will be added here as my journey continues.
                  </p>

                  <div className="relative mt-6 flex items-center gap-2 rounded-full border border-[#c6dfae] bg-white/70 px-4 py-2 text-xs font-medium text-[#568e50]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#80b95e]" />
                    Stay tuned for future achievements
                  </div>
                </div>
              )}

            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => changeCertificate(1)}
              aria-label="Sertifikat berikutnya"
              className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b7d6a2] bg-white/80 text-[#568e50] shadow-md transition-all duration-300 hover:translate-x-1 hover:bg-[#568e50] hover:text-white sm:h-12 sm:w-12"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </Reveal>

        {/* Mobile Navigation Counter */}
        <div className="mt-5 text-center text-sm font-medium text-[#42634c]">
          <span className="text-[#17633f]">
            {activeIndex + 1}
          </span>
          {" / "}
          {totalSlides}
        </div>

        {/* Carousel Indicators */}
        <div className="mt-5 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={
                index === certificates.length
                  ? "Lihat informasi sertifikat lainnya"
                  : `Lihat sertifikat ${certificates[index].title}`
              }
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-[#568e50]"
                  : "w-2.5 bg-[#b7d6a2] hover:bg-[#83b86a]"
              }`}
            />
          ))}
        </div>

        {/* Certificate Information */}
        {hasCertificate && certificate ? (
          <Reveal delay="200ms">
            <div
              key={`info-${certificate.title}`}
              className="mx-auto mt-8 max-w-3xl text-center sm:mt-10"
            >
              <h3 className="font-serif text-2xl text-[#17633f] sm:text-3xl">
                {certificate.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-[#568e50]">
                {certificate.issuer} · {certificate.year}
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#304d38] sm:text-base">
                {certificate.description}
              </p>

              <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#568e50]" />
            </div>
          </Reveal>
        ) : (
          <div className="mx-auto mt-8 text-center">
            <p className="text-sm text-[#52705a]">
              Keep growing, keep learning, and keep achieving.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
