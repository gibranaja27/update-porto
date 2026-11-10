"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "About Me", href: "#aboutme" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "License", href: "#license" },
  { label: "Get In Touch", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  // Close menu when clicking outside navbar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className="fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-6xl px-4 sm:px-6"
    >
      <Reveal delay="50ms">
        <nav
          className="relative flex min-h-[76px] items-center
            justify-between rounded-b-[22px]
            border border-[#d4e6b8] bg-[#efffd6]
            px-5 py-3 shadow-[0_3px_4px_rgba(0,0,0,0.15)]
            sm:px-8"
        >
          {/* Avatar */}
          <Reveal delay="500ms">
            <Link href="/" aria-label="Home" className="shrink-0">
              <Image
                src="/icon/boy-icon.png"
                alt="Avatar"
                width={52}
                height={52}
                priority
                className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110"
              />
            </Link>
          </Reveal>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative whitespace-nowrap py-2
                  text-[14px] font-medium text-[#006b3c]
                  transition-colors duration-300
                  hover:text-[#69a32e]
                  focus-visible:text-[#69a32e]
                  focus-visible:outline-none
                  xl:text-[16px]"
              >
                {link.label}

                {/* Animated Underline */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full
                    origin-left scale-x-0 rounded-full
                    bg-[#69a32e]
                    transition-transform duration-300 ease-out
                    group-hover:scale-x-100
                    group-focus-visible:scale-x-100"
                />
              </Link>
            ))}
          </div>

          {/* Social Media Desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="https://github.com/gibranaja27"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Image
                src="/icon/github-icon.png"
                alt="GitHub"
                width={32}
                height={32}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/gibran-raja-aulia-putranami"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Image
                src="/icon/linkedin-icon.png"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-[#006b3c] transition-colors
              duration-300 hover:text-[#69a32e] lg:hidden"
          >
            {isOpen ? "×" : "☰"}
          </button>

          {/* Mobile Navigation */}
          {isOpen && (
            <div
              className="absolute left-0 right-0 top-full mt-2
                flex flex-col gap-1 rounded-2xl border
                border-[#d4e6b8] bg-[#efffd6] p-4
                text-center shadow-lg lg:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3
                    text-[#006b3c]
                    transition-all duration-300
                    hover:bg-[#dff5c2]
                    hover:text-[#69a32e]
                    active:scale-[0.98]"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Social Media */}
              <div
                className="mt-2 flex items-center justify-center gap-5
                  border-t border-[#d4e6b8] pt-4"
              >
                <a
                  href="https://github.com/gibranaja27"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src="/icon/github-icon.png"
                    alt="GitHub"
                    width={28}
                    height={28}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/gibran-raja-aulia-putranami"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src="/icon/linkedin-icon.png"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
            </div>
          )}
        </nav>
      </Reveal>
    </header>
  );
}