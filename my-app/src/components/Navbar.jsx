"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MenuIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-black/80">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <img src="/ab.png" alt="Logo" className="h-8 w-auto" />
              <span className="text-lg font-extrabold tracking-tight">
                CONSUL
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative text-[15px] font-semibold pb-1 transition-colors ${
                      isActive
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  >
                    {link.label}

                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-900 dark:bg-white" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex h-10 items-center justify-center rounded-2xl bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900"
              >
                Book Call
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white dark:bg-black shadow-lg animate-slideDown">
            <div className="px-6 py-6 space-y-6">

              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative block text-lg font-semibold pb-1 transition-colors ${
                      isActive
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 hover:text-gray-900 dark:text-gray-300"
                    }`}
                  >
                    {link.label}

                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-10 bg-gray-900 dark:bg-white" />
                    )}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center rounded-md bg-gray-900 py-3 text-white font-medium dark:bg-white dark:text-black"
              >
                Get Started
              </Link>

            </div>
          </div>
        )}
      </header>

      {/* Smooth Dropdown Animation */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>
    </>
  );
}