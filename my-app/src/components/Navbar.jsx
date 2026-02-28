"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./Navlinks";

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

  // Prevent background scroll when menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-black/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <img src="/ab.png" alt="AB Consul Logo" className="h-8 w-auto" />
            <span className="text-lg font-extrabold tracking-tighter">
              CONSUL
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-[16px] font-semibold pb-1 transition-colors ${
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
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900"
            >
              Get Started
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-50 bg-white dark:bg-black transform transition-transform duration-500 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col justify-center items-center h-[80%] space-y-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-semibold transition-colors ${
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 rounded-full bg-gray-900 px-8 py-3 text-white dark:bg-white dark:text-black"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}