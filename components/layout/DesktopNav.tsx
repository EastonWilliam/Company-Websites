"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { navs } from "@/lib/constants";
import { ROUTES } from "@/lib/constants";
import { poppins } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function DesktopNav() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex w-full items-center justify-between ">
      <Logo />

      <nav className="flex gap-10">
        {navs.map((nav: string, index: number) => (
          <Link
            key={nav}
            href={`/${nav}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`relative text-lg capitalize no-underline hover:no-underline hover:opacity-80 font-bold ${poppins.className}`}
          >
            {nav}
          </Link>
        ))}
      </nav>

      <Link
        href={ROUTES.REGISTER}
        className="
    flex items-center gap-2
    rounded-3xl border border-[#FF7C7C]
    px-4 py-2
    text-sm font-bold
    text-white
    transition-all duration-300
    hover:bg-black hover:text-white
  "
      >
        <span>Get in Touch</span>
        <span className="text-white">»</span>
      </Link>
    </div>
  );
}
