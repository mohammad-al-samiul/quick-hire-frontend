import Image from "next/image";
import DashboardBackground from "@/assets/dashboard-background.png";
import DashboardImage from "@/assets/dashboard-screenshot.png";

export default function JobDashboard() {
  const fontStyle = { fontFamily: "Clash Display" };

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden bg-white py-16 lg:py-0">
      {/* Background Shape - Optimized for all screen sizes */}
      <div className="absolute inset-0 z-0 px-4 md:px-12 lg:px-32">
        <div className="relative w-full h-full">
          <Image
            src={DashboardBackground}
            alt="Background Blue Shape"
            fill
            priority
            className="object-fill lg:object-contain object-center"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto max-w-[1440px] px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left space-y-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={fontStyle}
            >
              Start posting <br className="hidden sm:inline" /> jobs today
            </h1>
            <p
              className="text-lg sm:text-xl opacity-90 font-medium"
              style={fontStyle}
            >
              Start posting jobs for only $10.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                className="bg-white text-[#4B49ED] px-8 py-4 text-lg font-bold rounded-sm hover:bg-gray-100 transition-all shadow-xl active:scale-95"
                style={fontStyle}
              >
                Sign Up For Free
              </button>
            </div>
          </div>

          {/* Right Side: Dashboard Screenshot */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] lg:max-w-[680px] shadow-2xl rounded-lg overflow-hidden border border-white/10 transform lg:translate-y-12 translate-y-6">
              <Image
                src={DashboardImage}
                alt="QuickHire Dashboard"
                width={680}
                height={450}
                className="w-full h-auto object-contain block"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
