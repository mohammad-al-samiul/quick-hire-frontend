import React from "react";
import {
  PencilRuler,
  BarChart3,
  Megaphone,
  Wallet,
  Monitor,
  Code2,
  Briefcase,
  Users2,
  ArrowRight,
} from "lucide-react";

interface CategoryProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  isActive?: boolean;
}

const CategoryCard = ({ title, count, icon, isActive }: CategoryProps) => {
  return (
    <div
      className={`
      group p-8 border transition-all duration-300 cursor-pointer
      ${
        isActive
          ? "bg-[#4B49ED] border-[#4B49ED] text-white shadow-lg scale-[1.02]"
          : "bg-white border-gray-100 hover:border-[#4B49ED] text-gray-900 hover:shadow-md"
      }
    `}
    >
      <div className={`mb-6 ${isActive ? "text-white" : "text-[#4B49ED]"}`}>
        {icon}
      </div>
      <h3
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Clash Display" }}
      >
        {title}
      </h3>
      <div className="flex justify-between items-center">
        <p className={`${isActive ? "text-blue-100" : "text-gray-500"}`}>
          {count} jobs available
        </p>
        <ArrowRight
          size={20}
          className={`
          transition-transform group-hover:translate-x-1
          ${isActive ? "text-white" : "text-gray-400 group-hover:text-[#4B49ED]"}
        `}
        />
      </div>
    </div>
  );
};

export default function JobCategories() {
  const categories = [
    { title: "Design", count: 235, icon: <PencilRuler size={32} /> },
    { title: "Sales", count: 756, icon: <BarChart3 size={32} /> },
    {
      title: "Marketing",
      count: 140,
      icon: <Megaphone size={32} />,
      isActive: true,
    },
    { title: "Finance", count: 325, icon: <Wallet size={32} /> },
    { title: "Technology", count: 436, icon: <Monitor size={32} /> },
    { title: "Engineering", count: 542, icon: <Code2 size={32} /> },
    { title: "Business", count: 211, icon: <Briefcase size={32} /> },
    { title: "Human Resource", count: 346, icon: <Users2 size={32} /> },
  ];

  return (
    // Fixed: Changed px-32 to responsive px-6 lg:px-32
    <section className="px-6 lg:px-32 max-w-[1440px] mx-auto pt-16 pb-20">
      {/* Header Section - Adjusted flex direction for mobile */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <h2
          className="text-3xl md:text-5xl font-extrabold text-[#111827] leading-tight"
          style={{ fontFamily: "Clash Display" }}
        >
          Explore by <span className="text-[#38BDF8]">category</span>
        </h2>

        <a
          href="#"
          className="hidden md:flex items-center gap-2 text-[#4B49ED] font-semibold hover:gap-3 transition-all"
          style={{ fontFamily: "Clash Display" }}
        >
          Show all jobs <ArrowRight size={18} />
        </a>
      </div>

      {/* Responsive Grid - Already good, kept as is */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>

      {/* Mobile-only "Show all" link - Centered and padded */}
      <div className="mt-10 md:hidden">
        <a
          href="#"
          className="flex items-center justify-center gap-2 text-[#4B49ED] font-bold py-4 border-2 border-[#4B49ED] rounded-lg"
          style={{ fontFamily: "Clash Display" }}
        >
          Show all jobs <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
