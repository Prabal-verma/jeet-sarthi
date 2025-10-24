import Image from "next/image";

export default function Benefits() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-12">
          {/* Left Side - Girl Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-96 h-96">
              {/* Blue circle background */}
              <div className="absolute inset-0 bg-[#0B63C5] rounded-full"></div>
              {/* Girl image */}
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <Image
                  src="/hero.webp"
                  alt="Student with laptop"
                  fill
                  className="object-cover"
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

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

            {/* CTA Button */}
            <div className="flex justify-start">
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
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-[#E7F1FF] border border-[#38B148]/20 flex items-center justify-center flex-shrink-0">
        <img src={iconSrc} className="w-6 h-6" alt="icon" />
      </div>
      <div>
        <h3 className="text-[#0B0B0B] text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
