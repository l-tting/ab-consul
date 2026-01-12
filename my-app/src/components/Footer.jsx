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
      href: "#",
      svg: <svg className="size-6 transition-transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
          </svg>
    },
    {
      name: "LinkedIn",
      href: "#",
      svg: <svg className="size-6 transition-transform duration-200 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
          </svg>
    }
    // ... rest of your social icons
  ];

  return (
    <footer className="mt-auto bg-gray-500 py-10 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="mb-6 flex items-center justify-center">
          <MountainIcon className="h-6 w-6 text-gray-900 dark:text-white" />
          <span className="text-gray-900 dark:text-white text-2xl font-extrabold tracking-wide ml-2">
            AB CONSUL
          </span>
        </div>

        <nav className="mb-6 w-full">
          <ul className="flex flex-wrap justify-center gap-x-16 gap-y-4 text-base font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`relative pb-1 transition-all duration-300 ${
                      isActive
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                    {/* The Active/Hover Underline Logic */}
                    <span 
                      className={`absolute left-0 bottom-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 hover:w-full"
                      }`} 
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="my-2 flex flex-wrap justify-center gap-4 text-sm">
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href={icon.href}
            >
              {icon.svg}
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} ab consul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const MountainIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

export default Footer;