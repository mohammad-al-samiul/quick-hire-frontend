import Image from "next/image";
import Vodafone from "@/assets/vodafone-2017-logo.png";
import Intel from "@/assets/intel-3.png";
import Tesla from "@/assets/tesla-9 1.png";
import Amd from "@/assets/amd-logo-1.png";
import Talkit from "@/assets/talkit 1.png";
export default function Companies() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-1440px px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Top Companies
          </h2>
          <p
            className="text-gray-600"
            style={{ fontFamily: "Clash Display", fontWeight: 600 }}
          >
            Join the best companies in the world
          </p>
        </div>

        <div className="flex flex-wrap gap-8 items-center justify-between">
          <div className="relative w-38.25 h-10">
            <Image
              src={Vodafone}
              alt="Vodafone logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-20.5 h-8">
            <Image
              src={Intel}
              alt="Intel logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-45.5 h-6">
            <Image
              src={Tesla}
              alt="Tesla logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-29 h-7">
            <Image src={Amd} alt="AMD logo" fill className="object-contain" />
          </div>

          <div className="relative w-27 h-8">
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
