export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden border-y border-[#52634a] bg-[#eaffc8]"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#b5e477]/30 blur-3xl" />

      {/* Main Footer */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-24">
        {/* Left: Get In Touch */}
        <div className="relative flex flex-col items-center lg:items-start">
          <div className="relative">
            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full border border-[#9dbd7b]/40 sm:-left-12 sm:-top-10 sm:h-36 sm:w-36" />

            <h2 className="relative z-10 font-serif text-6xl font-bold leading-[0.95] tracking-tight text-[#41463b] sm:text-7xl lg:text-[88px]">
              Get In
            </h2>

            <div className="relative z-10 mt-1 flex items-center gap-3 sm:gap-5">
              {/* Eye Illustration */}
              <span
                className="inline-flex h-12 w-18 items-center justify-center sm:h-14 sm:w-21"
                role="img"
                aria-label="Animated eye"
              >
                <svg
                  viewBox="0 0 72 48"
                  fill="none"
                  aria-hidden="true"
                  className="footer-eye-art h-full w-full overflow-visible"
                >
                  <path
                    d="M4 24C12 12 23 5 36 5s24 7 32 19c-8 12-19 19-32 19S12 36 4 24Z"
                    fill="#fffdf2"
                    stroke="#41463b"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <g className="footer-eye-pupil">
                    <circle cx="36" cy="24" r="12" fill="#9bcf6d" />
                    <circle cx="36" cy="24" r="7" fill="#41463b" />
                    <circle cx="32.5" cy="20.5" r="2.5" fill="white" />
                  </g>
                  <path
                    d="M10 19c2.5-2.8 4.8-4.9 7-6.4M55 12.6c2.2 1.5 4.5 3.6 7 6.4"
                    stroke="#41463b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <h2 className="font-serif text-6xl font-bold leading-[0.95] tracking-tight text-[#41463b] sm:text-7xl lg:text-[88px]">
                Touch
              </h2>
            </div>
          </div>

          <p className="mt-6 text-xs tracking-[0.25em] text-[#69815b] lg:ml-2">
            LET&apos;S CREATE SOMETHING GREAT
          </p>
        </div>

        {/* Right: Contact Information */}
        <div className="flex flex-col items-center justify-center gap-9 text-center lg:items-start lg:pl-8 lg:text-left">
          {/* Description */}
          <div>
            <p className="max-w-md font-sans text-lg font-medium leading-relaxed text-[#41463b] sm:text-xl">
              Interested in working together or discussing potential
              opportunities? Let&apos;s connect.
            </p>
          </div>

          {/* Social & Contact */}
          <div className="grid w-full max-w-md grid-cols-2 gap-5 sm:gap-8">
            {/* Social Links */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="mb-4 font-sans text-base font-semibold text-[#41463b] sm:text-lg">
                Social Link
              </h3>

              <div className="flex items-center gap-3 sm:gap-4">
                {/* Github */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-black transition-all duration-300 hover:-translate-y-1 hover:text-[#568e50]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.73 1.82 3.12 1.38.1-.72.39-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.29-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.67.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.12 5.51.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-black transition-all duration-300 hover:-translate-y-1 hover:text-[#568e50]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-7 w-7"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-black transition-all duration-300 hover:-translate-y-1 hover:text-[#568e50]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.46H4.98V9h2.95v9.46ZM6.45 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.01 10.75h-2.95v-4.6c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.78 1.2-1.78 2.44v4.68H9.24V9h2.83v1.29h.04c.39-.74 1.36-1.52 2.8-1.52 3 0 3.55 1.97 3.55 4.53v5.16Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="mb-4 font-sans text-base font-semibold text-[#41463b] sm:text-lg">
                Contact
              </h3>

              <div className="flex items-center gap-4">
                {/* Email */}
                <a
                  href="mailto:your-email@example.com"
                  aria-label="Email"
                  className="text-black transition-all duration-300 hover:-translate-y-1 hover:text-[#568e50]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-7 w-7"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m3 6 9 7 9-7" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/62xxxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-black transition-all duration-300 hover:-translate-y-1 hover:text-[#568e50]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-7 w-7"
                  >
                    <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z" />
                    <path d="M8 8.5c.3-.6.5-.6.9-.6h.5c.2 0 .4.1.5.4l.8 1.9c.1.2 0 .4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.3 1.6 2.2 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.7-.1l1.8.9c.3.1.4.3.4.5 0 .5-.2 1.2-.7 1.6-.5.5-1.2.7-1.9.6-1.1-.1-2.6-.7-4.2-2.1-1.4-1.2-2.3-2.8-2.6-3.9-.3-.9-.1-1.7.4-2.2Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-[#52634a]/40 px-6 py-5 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[#52634a]">
            © 2026 Gibran Putra. All rights reserved.
          </p>

          <p className="text-xs text-[#52634a]">
            Designed & Built with <span className="text-[#568e50]">♥</span> by
            Gibran
          </p>
        </div>
      </div>
    </footer>
  );
}
