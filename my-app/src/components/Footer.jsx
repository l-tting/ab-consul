"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./Navlinks";

function Footer() {
  const pathname = usePathname();

  const socialIcons = [
    {
      name: "X",
      href: "https://x.com/yourhandle",
      svg: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/yourcompany",
      svg: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-0 mb-4">
              <img
                src="/ab.png"
                alt="AB Consul Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white tracking-wide">
                CONSUL
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Strategic consulting and technology solutions that help businesses
              scale efficiently and sustainably.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`relative inline-block pb-1 transition-colors duration-300 ${isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                        }`}
                    >
                      {link.label}

                      <span
                        className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0"
                          } group-hover:w-full`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>

            <div className="flex gap-4 mb-6">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-all duration-200"
                >
                  {icon.svg}
                </a>
              ))}
            </div>

            <p className="text-sm text-gray-400">
              Email: contact@ab-consul.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AB CONSUL. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;