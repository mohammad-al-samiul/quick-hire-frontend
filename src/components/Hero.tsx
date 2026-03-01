import Image from "next/image";
import HeroImage from "@/assets/Pic.png";
import VectorImage from "@/assets/Vector.png";
import BgLines from "@/assets/Pattern.png";

export default function Hero() {
  const fontStyle = { fontFamily: "Clash Display", fontWeight: 600 };

  return (
    <section className="px-6 lg:px-32 relative overflow-hidden bg-[#F8F8FD] py-12 lg:py-0">
      {/* Background Lines - Adjusted opacity for better text readability on mobile */}
      <div className="absolute right-0 top-0 w-full h-full opacity-20 lg:opacity-40 pointer-events-none z-0">
        <Image
          src={BgLines}
          alt="background lines"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="container mx-auto max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[600px]">
        {/* LEFT SIDE CONTENT */}
        <div className="relative z-30 w-full lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            style={fontStyle}
          >
            Discover <br className="hidden lg:block" />
            more than <br /> <span className="text-[#26A4FF]">5000+ Jobs</span>
          </h1>

          {/* Decorative Vector - Centered on mobile */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={VectorImage}
              alt="vector"
              width={250}
              height={50}
              className="object-contain"
            />
          </div>

          <p
            className="mt-6 text-gray-600 max-w-sm mx-auto lg:mx-0"
            style={{ fontFamily: "Clash Display" }}
          >
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          {/* Search Box - Flex-col on mobile, Flex-row on desktop */}
          <div className="mt-10 bg-white shadow-xl p-2 flex flex-col lg:flex-row items-stretch w-full lg:max-w-[800px] z-20 rounded-xl lg:rounded-none">
            {/* Job Input */}
            <div className="flex items-center flex-1 px-4 py-3 border-b lg:border-b-0 lg:border-r border-gray-100">
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full outline-none text-gray-600 placeholder-gray-400 bg-transparent"
                style={{ fontFamily: "Clash Display", fontWeight: 500 }}
              />
            </div>

            {/* Location Select */}
            <div className="flex items-center flex-1 px-4 py-3">
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <select
                className="w-full outline-none text-gray-600 bg-transparent"
                style={{ fontFamily: "Clash Display", fontWeight: 500 }}
              >
                <option>Florence, Italy</option>
                <option>Dhaka</option>
                <option>Remote</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              className="bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-all rounded-lg lg:rounded-none mt-2 lg:mt-0"
              style={fontStyle}
            >
              Search my job
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500" style={fontStyle}>
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        {/* RIGHT SIDE IMAGE - Fixed overlap by moving it into normal flow on mobile */}
        <div className="relative w-full lg:absolute lg:right-0 lg:bottom-0 h-[300px] md:h-[450px] lg:h-full lg:w-1/2 max-w-[500px] lg:max-w-[600px] z-10">
          <Image
            src={HeroImage}
            alt="Hero"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
