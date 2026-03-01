import Image from "next/image";
import Vodafone from "@/assets/vodafone-2017-logo.png";
import Intel from "@/assets/intel-3.png";
import Tesla from "@/assets/tesla-9 1.png";
import Amd from "@/assets/amd-logo-1.png";
import Talkit from "@/assets/talkit 1.png";

export default function Companies() {
  const textStyle = { fontFamily: "Clash Display", fontWeight: 600 };

  return (
    // Responsive padding: px-6 for mobile, px-32 for desktop
    <section className="px-6 lg:px-32 py-10 bg-gray-50">
      <div className="container mx-auto max-w-[1440px]">
        <div className="mb-10 text-center lg:text-left">
          <p className="text-gray-500" style={textStyle}>
            Companies we helped grow
          </p>
        </div>

        {/* Using a grid for mobile (2 columns) and flex for desktop. 
            This ensures logos stay aligned and don't overflow the screen.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap gap-8 md:gap-12 items-center justify-items-center lg:justify-between opacity-60 grayscale hover:grayscale-0 transition-all">
          {/* Vodafone */}
          <div className="relative w-32 md:w-40 h-10">
            <Image
              src={Vodafone}
              alt="Vodafone logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Intel */}
          <div className="relative w-20 md:w-24 h-8">
            <Image
              src={Intel}
              alt="Intel logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Tesla */}
          <div className="relative w-36 md:w-44 h-6">
            <Image
              src={Tesla}
              alt="Tesla logo"
              fill
              className="object-contain"
            />
          </div>

          {/* AMD */}
          <div className="relative w-24 md:w-32 h-7">
            <Image src={Amd} alt="AMD logo" fill className="object-contain" />
          </div>

          {/* Talkit */}
          <div className="relative w-24 md:w-28 h-8">
            <Image
              src={Talkit}
              alt="Talkit logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
