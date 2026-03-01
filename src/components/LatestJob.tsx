"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BackgroundImage from "@/assets/Pattern.png";
import {
  Briefcase,
  Sparkles,
  PenTool,
  Palette,
  Code2,
  Cpu,
  Users,
  Globe,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    icon: Sparkles,
    iconBg: "bg-emerald-500",
    shape: "rounded-xl",
  },
  {
    id: 2,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    icon: Globe,
    iconBg: "bg-teal-500",
    shape: "rounded-xl",
  },
  {
    id: 3,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    icon: PenTool,
    iconBg: "bg-blue-600",
    shape: "rounded-md",
  },
  {
    id: 4,
    title: "Brand Designer",
    company: "Maze",
    location: "San Francisco, USA",
    icon: Palette,
    iconBg: "bg-blue-600",
    shape: "rounded-full",
  },
  {
    id: 5,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    icon: Code2,
    iconBg: "bg-cyan-500",
    shape: "rounded-md",
  },
  {
    id: 6,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    icon: Cpu,
    iconBg: "bg-sky-500",
    shape: "rounded-full",
  },
  {
    id: 7,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    icon: Users,
    iconBg: "bg-orange-500",
    shape: "rounded-md",
  },
  {
    id: 8,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    icon: Briefcase,
    iconBg: "bg-indigo-600",
    shape: "rounded-md",
  },
];

function JobCard({ job }: { job: (typeof jobs)[0] }) {
  const Icon = job.icon;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 ${job.shape} ${job.iconBg} flex items-center justify-center`}
        >
          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {job.company} • {job.location}
          </p>

          <div className="flex gap-3 mt-4 flex-wrap items-center">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
              Full-Time
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-300">
              Marketing
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-300">
              Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LatestJobsSection() {
  return (
    <section className="relative bg-gray-50 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute right-0 top-0 w-full h-full opacity-20 lg:opacity-40 pointer-events-none z-0">
        <Image
          src={BackgroundImage}
          alt="background lines"
          fill
          className="object-cover object-fill"
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Latest <span className="text-blue-500">jobs open</span>
          </h2>

          <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
            Show all jobs
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
