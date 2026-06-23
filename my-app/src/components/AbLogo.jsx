"use client";

import React from "react";

export default function ABLogo() {
  return (
    <div className="flex items-center justify-center bg-stone-100 py-8">
      {/* 'group' on the parent triggers changes in children on hover */}
      <span className="group text-4xl md:text-4xl font-black tracking-tighter text-slate-900 cursor-pointer">
        {/* 'A' slides slightly up and left */}
        <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:-translate-x-0.5">
          A
        </span>
        {/* 'B' slides slightly down and right */}
        <span className="inline-block text-blue-600 transition-transform duration-300 ease-out group-hover:translate-y-1 group-hover:translate-x-0.5">
          B
        </span>
      </span>
    </div>
  );
}