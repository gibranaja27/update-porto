"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

const experience = {
  company: "PT Gerbang Data Indonesia",
  role: "UI/UX Designer (Internship)",
  description:
    "Menjabat sebagai UI/UX Designer (Internship), dengan tanggung jawab merancang antarmuka aplikasi dan website menggunakan Figma, mulai dari wireframe, UI design, hingga prototype. Berkolaborasi dengan tim developer untuk memastikan desain dapat diimplementasikan dengan baik dan sesuai kebutuhan pengguna.",

  projects: [
    {
      title: "Project 1",
      preview: "/images/experience/project-1.png",
      phone: "/images/experience/project-1-phone.png",
      alt: "Gambar presentasi proyek pertama",
    },
    {
      title: "Project 2",
      preview: "/images/experience/project-2.png",
      phone: "/images/experience/project-2-phone.png",
      alt: "Gambar presentasi proyek kedua",
    },
  ],
};

export default function WorkExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = experience.projects[activeIndex];

  function changeProject(direction: number) {
    setActiveIndex((current) => {
      return (
        (current + direction + experience.projects.length) %
        experience.projects.length
      );
    });
  }

  return (
    <section
      id="experience"
      className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#eaffc8] via-[#f3ffdf] to-[#eaffc8] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      {/* ================= PREMIUM EDITORIAL BACKGROUND ================= */}

      <div className="experience-editorial" aria-hidden="true">
        {/* Soft ambient lighting */}
        <div className="editorial-glow editorial-glow-one" />
        <div className="editorial-glow editorial-glow-two" />

        {/* Fine texture */}
        <div className="editorial-dots" />

        {/* Oversized typography */}
        <div className="editorial-watermark">EXPERIENCE</div>

        {/* Decorative frame */}
        <div className="editorial-frame editorial-frame-one" />
        <div className="editorial-frame editorial-frame-two" />

        {/* Geometric accents */}
        <div className="editorial-orbit editorial-orbit-one" />
        <div className="editorial-orbit editorial-orbit-two" />

        {/* Small editorial information */}
        <div className="editorial-meta editorial-meta-left">
          CREATIVE PORTFOLIO
          <span>—</span>
        </div>

        <div className="editorial-meta editorial-meta-right">
          SELECTED WORKS
        </div>

        {/* Corner accent */}
        <div className="editorial-corner" />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <Reveal delay="100ms">
          <header className="mb-10 text-center sm:mb-14">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#b7d6a2] bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-[#39845e] shadow-sm backdrop-blur-sm sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#68ad68]" />
              Professional Journey
            </p>

            <h2 className="font-serif text-3xl text-[#102d1e] sm:text-4xl lg:text-5xl">
              Work Experience
              <span className="text-[#7dbb45]">.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#52745f] sm:text-base">
              A showcase of my professional experience and design contributions
              as a UI/UX Designer.
            </p>

            {/* Small Decorative Line */}
            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#8fc65b]" />
              <span className="h-1 w-3 rounded-full bg-[#c4e69e]" />
              <span className="h-1 w-8 rounded-full bg-[#8fc65b]" />
            </div>
          </header>
        </Reveal>

        {/* ================= PROJECT CAROUSEL ================= */}

        <Reveal delay="150ms">
          <div className="mx-auto flex w-full max-w-5xl items-center gap-2 sm:gap-4 lg:gap-6">
            {/* Previous Button - Desktop */}
            <button
              type="button"
              onClick={() => changeProject(-1)}
              aria-label="Proyek sebelumnya"
              className="group hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b7d6a2] bg-white/80 text-[#087443] shadow-[0_5px_15px_rgba(35,91,53,0.10)] backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:border-[#087443] hover:bg-[#087443] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#599f80] focus:ring-offset-2 lg:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-0.5"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Project Presentation Area */}
            <div
              key={project.title}
              className="min-w-0 flex-1 overflow-hidden rounded-[24px] border border-white/80 bg-white/35 p-3 shadow-[0_12px_35px_rgba(35,91,53,0.07)] backdrop-blur-sm transition-all duration-500 sm:rounded-[30px] sm:p-5 lg:p-7"
            >
              {/* Project Header */}
              <div className="mb-4 flex items-center justify-between px-1 sm:mb-6 sm:px-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#72b65c]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#568e50] sm:text-xs">
                    Project Showcase
                  </span>
                </div>

                <span className="font-serif text-sm font-bold tracking-wider text-[#78ad4e] sm:text-base">
                  {String(activeIndex + 1).padStart(2, "0")}
                  <span className="mx-1 text-[#b7d6a2]">/</span>
                  {String(experience.projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* Phone + Landscape Image */}
              <div className="grid min-w-0 grid-cols-[0.55fr_1.45fr] items-center gap-3 sm:grid-cols-[0.65fr_1.35fr] sm:gap-6 lg:gap-8">
                {/* Phone Frame */}
                <div className="flex min-w-0 items-center justify-center">
                  <div className="w-full max-w-[100px] shrink-0 rounded-[17px] border-[5px] border-[#35464c] bg-[#35464c] p-1 shadow-[0_12px_25px_rgba(0,0,0,0.20)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_30px_rgba(0,0,0,0.22)] sm:max-w-[125px] sm:rounded-[22px] sm:border-[6px] sm:p-1.5 lg:max-w-[150px]">
                    {/* Phone Screen */}
                    <div className="relative aspect-[9/17] overflow-hidden rounded-[10px] bg-white">
                      <Image
                        src={project.phone}
                        alt={`Screenshot aplikasi ${project.title} pada layar HP`}
                        fill
                        sizes="(max-width: 639px) 80px, (max-width: 1023px) 110px, 135px"
                        className="object-contain object-center"
                      />
                    </div>

                    {/* Home Indicator */}
                    <div className="mx-auto mt-1.5 h-1 w-5 rounded-full bg-[#839da5] sm:mt-2 sm:h-1.5 sm:w-7" />
                  </div>
                </div>

                {/* Landscape Preview */}
                <div className="relative min-w-0">
                  {/* Background Glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 rounded-2xl bg-[#a9dc7c]/30 blur-xl"
                  />

                  {/* Image Frame */}
                  <div className="relative aspect-[1.5/1] w-full overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_10px_25px_rgba(35,91,53,0.13)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(35,91,53,0.18)] sm:rounded-2xl">
                    <Image
                      src={project.preview}
                      alt={project.alt}
                      fill
                      priority={activeIndex === 0}
                      sizes="(max-width: 639px) 65vw, (max-width: 1023px) 65vw, 700px"
                      className="object-contain object-center transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>

              {/* Project Footer */}
              <div className="mt-4 flex items-center justify-between border-t border-[#b7d6a2]/40 px-1 pt-3 sm:mt-5 sm:px-2 sm:pt-4">
                <p className="text-[10px] font-medium tracking-wide text-[#739477] sm:text-xs">
                  UI/UX DESIGN PROJECT
                </p>

                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8fc65b]" />
                  <span className="text-[10px] font-medium text-[#568e50] sm:text-xs">
                    {project.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Next Button - Desktop */}
            <button
              type="button"
              onClick={() => changeProject(1)}
              aria-label="Proyek berikutnya"
              className="group hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b7d6a2] bg-white/80 text-[#087443] shadow-[0_5px_15px_rgba(35,91,53,0.10)] backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:border-[#087443] hover:bg-[#087443] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#599f80] focus:ring-offset-2 lg:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </Reveal>

        {/* ================= CAROUSEL NAVIGATION ================= */}

        <div className="mt-6 flex items-center justify-center gap-5">
          {/* Previous - Mobile */}
          <button
            type="button"
            onClick={() => changeProject(-1)}
            aria-label="Proyek sebelumnya"
            className="text-xl text-[#568e50] transition-transform hover:scale-125 lg:hidden"
          >
            ←
          </button>

          {/* Indicators */}
          {experience.projects.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Lihat ${item.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-[#599f80]"
                  : "w-2.5 bg-[#b7d6a2] hover:bg-[#83b86a]"
              }`}
            />
          ))}

          {/* Next - Mobile */}
          <button
            type="button"
            onClick={() => changeProject(1)}
            aria-label="Proyek berikutnya"
            className="text-xl text-[#568e50] transition-transform hover:scale-125 lg:hidden"
          >
            →
          </button>
        </div>

        {/* ================= COMPANY INFORMATION ================= */}

        <Reveal delay="200ms">
          <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
            {/* Company Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#b7d6a2]/70 bg-white/50 px-4 py-1.5 text-xs font-medium text-[#568e50] backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M16 14v.01M16 17v.01" />
              </svg>
              Professional Experience
            </div>

            <h3 className="font-serif text-2xl font-semibold text-[#087443] sm:text-3xl lg:text-4xl">
              {experience.company}
            </h3>

            {/* Role */}
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#dff3c5]/80 px-4 py-2 text-xs font-medium text-[#42634c] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#72b65c]" />
              {experience.role}
            </p>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#405b48] sm:text-base sm:leading-8">
              {experience.description}
            </p>

            {/* Bottom Accent */}
            <div className="mx-auto mt-6 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#8fc65b]" />
              <span className="h-1 w-3 rounded-full bg-[#c4e69e]" />
              <span className="h-1 w-10 rounded-full bg-[#8fc65b]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
