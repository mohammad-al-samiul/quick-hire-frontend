"use client"; // Required for useState

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Frame 3.png";
import { Menu, X } from "lucide-react"; // Install lucide-react for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navStyles = { fontFamily: "Clash Display", fontWeight: 600 };

  return (
    <header className="py-4 px-4 md:px-16 lg:px-32">
      <div className="container mx-auto max-w-[1440px] flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2 z-50">
          <div className="relative w-10 h-10 rounded-lg flex items-center justify-center">
            <Image src={Logo} alt="Logo" fill className="object-contain p-1" />
          </div>
          <span className="text-xl font-bold text-gray-900" style={navStyles}>
            QuickHire
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-8 text-gray-600">
          <Link
            href="#"
            className="hover:text-gray-900 transition-colors"
            style={navStyles}
          >
            Find Jobs
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 transition-colors"
            style={navStyles}
          >
            Browse Companies
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          <Link
            href="#"
            className="text-blue-600 font-medium hover:text-blue-700"
            style={navStyles}
          >
            Login
          </Link>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            style={navStyles}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <button
          className="lg:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`
          fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"} 
          lg:hidden
        `}
        >
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            style={navStyles}
            className="text-2xl"
          >
            Find Jobs
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            style={navStyles}
            className="text-2xl"
          >
            Browse Companies
          </Link>
          <div className="flex flex-col items-center gap-4 w-full px-10">
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-blue-600 text-xl"
              style={navStyles}
            >
              Login
            </Link>
            <button
              className="bg-blue-600 text-white w-full py-4 rounded-lg text-xl"
              style={navStyles}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
