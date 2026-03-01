import Image from "next/image";
import HeroImage from "@/assets/Pic.png";
import VectorImage from "@/assets/Vector.png";
export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto max-w-1440px px-6 flex items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="p">
          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Discover <br />
            more than <br /> <span className="text-[#26A4FF]">5000+ Jobs</span>
          </h1>
          <Image
            src={VectorImage}
            alt="vector"
            width={300}
            height={300}
            className="object-contain"
          />

          <p
            className="mt-6 text-gray-600 text-lg max-w-lg"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          {/* Search Box */}
          <div className="mt-10 bg-white shadow-xl rounded-2xl p-6 flex flex-col lg:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 outline-none px-4 py-3 text-gray-600 placeholder-gray-400"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            />

            <select
              className="flex-1 outline-none px-4 py-3 text-gray-600 bg-white"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              <option>Florence, Italy</option>
              <option>Dhaka</option>
              <option>Remote</option>
            </select>

            <button
              className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
              style={{ fontFamily: "Clash Display", fontWeight: 600 }}
            >
              Search my job
            </button>
          </div>

          <p
            className="mt-4 text-sm text-gray-500"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">
          <Image
            src={HeroImage}
            alt="Hero"
            width={500}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
