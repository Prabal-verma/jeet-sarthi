import Image from "next/image";

export default function Benefits() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-12">
          {/* Left Side - Girl Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[500px] h-[500px]">
              {/* Blue circle background */}
              <div className="absolute inset-0 bg-[#0B63C5] rounded-full"></div>
              {/* Girl image - larger and positioned to avoid cropping */}
              <div className="absolute -top-16 -bottom-16 -left-8 -right-8">
                <Image
                  src="/girl.webp"
                  alt="Student with laptop"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="flex-1">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12 text-[#0B63C5]">
              Exclusive <span className="text-[#38B148]">JEET</span> SARTHI Benefits
            </h2>

            {/* Benefits Grid with separator */}
            <div className="space-y-8">
              {/* Top Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Benefit
                  iconSrc="/file.svg"
                  title="Daily Routine Guidance"
                  description="Stay disciplined and consistent."
                />
                <Benefit
                  iconSrc="/window.svg"
                  title="Tips & Tricks from Toppers"
                  description="Learn what actually works in the exam."
                />
              </div>

              {/* Horizontal Separator Line */}
              <div className="w-full h-px bg-gray-300"></div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Benefit
                  iconSrc="/globe.svg"
                  title="Interactive Sessions"
                  description="Insights on exam patterns and preparation hacks."
                />
                <Benefit
                  iconSrc="/next.svg"
                  title="Dedicated One-on-One Mentorship"
                  description="Personalized support at every step."
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-8">
              <button
                type="button"
                className="px-12 py-4 bg-[#0B63C5] text-white text-lg font-semibold rounded-xl shadow-md hover:bg-[#38B148] transition-colors duration-300"
              >
                Enroll For Mentorship
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type BenefitProps = {
  iconSrc: string;
  title: string;
  description: string;
};

function Benefit({ iconSrc, title, description }: BenefitProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E7F1FF] border border-[#38B148]/20 flex items-center justify-center">
        <img src={iconSrc} className="w-8 h-8" alt="icon" />
      </div>
      <h3 className="text-[#0B0B0B] text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
