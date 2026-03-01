import React from "react";
import {
  Mail,
  PenTool,
  Droplet,
  Zap,
  Palette,
  Globe,
  BarChart3,
  Briefcase,
} from "lucide-react";

const FeaturedJobs = () => {
  const jobs = [
    {
      logo: <Mail className="w-6 h-6 text-blue-600" />,
      company: "Revolut",
      title: "Email Marketing",
      location: "Madrid, Spain",
      type: "Full Time",
      description: "Revolut is looking for Email Marketing to help team ma...",
      tags: ["Marketing", "Design"],
      tagColors: ["bg-orange-100 text-orange-700", "bg-blue-100 text-blue-700"],
    },
    {
      logo: <PenTool className="w-6 h-6 text-blue-600" />,
      company: "Dropbox",
      title: "Brand Designer",
      location: "San Francisco, US",
      type: "Full Time",
      description:
        "Dropbox is looking for Brand Designer to help the team t...",
      tags: ["Design", "Business"],
      tagColors: ["bg-blue-100 text-blue-700", "bg-purple-100 text-purple-700"],
    },
    {
      logo: <Mail className="w-6 h-6 text-black" />,
      company: "Pitch",
      title: "Email Marketing",
      location: "Berlin, Germany",
      type: "Full Time",
      description:
        "Pitch is looking for Customer Manager to join marketing t...",
      tags: ["Marketing"],
      tagColors: ["bg-orange-100 text-orange-700"],
    },
    {
      logo: <Droplet className="w-6 h-6 text-green-600" />,
      company: "Blinklist",
      title: "Visual Designer",
      location: "Granada, Spain",
      type: "Full Time",
      description:
        "Blinklist is looking for Visual Designer to help team desi...",
      tags: ["Design"],
      tagColors: ["bg-blue-100 text-blue-700"],
    },
    {
      logo: <Zap className="w-6 h-6 text-blue-500" />,
      company: "ClassPass",
      title: "Product Designer",
      location: "Manchester, UK",
      type: "Full Time",
      description: "ClassPass is looking for Product Designer to help us...",
      tags: ["Marketing", "Design"],
      tagColors: ["bg-orange-100 text-orange-700", "bg-blue-100 text-blue-700"],
    },
    {
      logo: <Palette className="w-6 h-6 text-pink-600" />,
      company: "Canva",
      title: "Lead Designer",
      location: "Ontario, Canada",
      type: "Full Time",
      description: "Canva is looking for Lead Engineer to help develop n...",
      tags: ["Design", "Business"],
      tagColors: ["bg-blue-100 text-blue-700", "bg-purple-100 text-purple-700"],
    },
    {
      logo: <Globe className="w-6 h-6 text-purple-600" />,
      company: "GoDaddy",
      title: "Brand Strategist",
      location: "Marseille, France",
      type: "Full Time",
      description:
        "GoDaddy is looking for Brand Strategist to join the team...",
      tags: ["Marketing"],
      tagColors: ["bg-orange-100 text-orange-700"],
    },
    {
      logo: <BarChart3 className="w-6 h-6" />,
      company: "Twitter",
      title: "Data Analyst",
      location: "San Diego, US",
      type: "Full Time",
      description:
        "Twitter is looking for Data Analyst to help the team des...",
      tags: ["Technology"],
      tagColors: ["bg-indigo-100 text-indigo-700"],
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="">Featured</span>{" "}
            <span className="text-[#26a4ff]">jobs</span>
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 text-lg"
          >
            Show all jobs <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Grid of job cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                {/* Logo + Job Type */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                    {job.logo}
                  </div>

                  <span className="px-4 py-1 border border-[#4B49ED] text-[#4B49ED] font-medium text-sm rounded-none inline-block">
                    {job.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {job.title}
                </h3>

                {/* Company + Location */}
                <p className="text-sm text-gray-600 mb-1">
                  {job.company} - {job.location}
                </p>

                {/* Description snippet */}
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${job.tagColors[tagIdx]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
