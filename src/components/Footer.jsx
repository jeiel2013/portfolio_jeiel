import React from "react";
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.08] text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#a1a1aa] font-mono">
          &copy; {currentYear} Jeiel Alves
        </p>
        <div className="flex items-center gap-2 text-xs text-[#a1a1aa]">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Coroaci - MG, Brasil
        </div>
      </div>
    </footer>
  );
}

export default Footer;
