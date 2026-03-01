"use client";

import Image from "next/image";
import Logo from "@/assets/Frame 3.png";
import { Facebook, Instagram, Dribbble, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E2230] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src={Logo}
                  alt="QuickHire Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl text-white">QuickHire</span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white mb-6">About</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Companies</li>
              <li>Pricing</li>
              <li>Terms</li>
              <li>Advice</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-6">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Help Docs</li>
              <li>Guide</li>
              <li>Updates</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-6">Get job notifications</h3>
            <p className="text-gray-400 mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-200 text-gray-800 outline-none"
              />
              <button className="px-6 bg-indigo-600 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 mb-6 md:mb-0">
            © {new Date().getFullYear()} @ QuickHire. All rights reserved.
          </p>

          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600 transition">
              <Facebook size={18} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600 transition">
              <Instagram size={18} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600 transition">
              <Dribbble size={18} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600 transition">
              <Linkedin size={18} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600 transition">
              <Twitter size={18} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
