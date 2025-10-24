export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16">
      <div className="w-full px-8 md:px-16">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-16 text-[#0B63C5]">
          How <span className="text-[#38B148]">JEET</span> SARTHI Mentorship Works?
        </h2>

        {/* Top Row - Three Main Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Step
            iconSrc="/file.svg"
            title="Onboarding"
            description="Understand your goals & challenges."
          />
          <Step
            iconSrc="/window.svg"
            title="Daily Support"
            description="Junior mentor checks in regularly."
          />
          <Step
            iconSrc="/globe.svg"
            title="Result"
            description="Consistency + confidence = success."
          />
        </div>

        {/* Timeline */}
        <div className="relative mb-8">
          <div className="flex justify-center">
            <div className="w-full h-1 bg-[#38B148] relative">
              {/* Timeline dots - 5 total */}
              <div className="absolute left-[10%] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#38B148] rounded-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B63C5] rounded-full"></div>
              </div>
              <div className="absolute left-[30%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#38B148] rounded-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B63C5] rounded-full"></div>
              </div>
              <div className="absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#38B148] rounded-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B63C5] rounded-full"></div>
              </div>
              <div className="absolute left-[70%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#38B148] rounded-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B63C5] rounded-full"></div>
              </div>
              <div className="absolute left-[90%] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#38B148] rounded-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B63C5] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Two Additional Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Step
            iconSrc="/next.svg"
            title="Personal Roadmap"
            description="Senior mentor sets your plan."
          />
          <Step
            iconSrc="/vercel.svg"
            title="Review & Adjust"
            description="Senior mentor tracks performance weekly."
          />
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="px-12 py-4 bg-[#0B63C5] text-white text-lg font-semibold rounded-xl shadow-md hover:bg-[#38B148] transition-colors duration-300"
          >
            Enroll For Mentorship
          </button>
        </div>
      </div>
    </section>
  );
}

type StepProps = {
  iconSrc: string;
  title: string;
  description: string;
};

function Step({ iconSrc, title, description }: StepProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 w-40 h-40 rounded-full bg-[#E7F1FF] border border-[#38B148]/20 flex items-center justify-center">
        <img src={iconSrc} className="w-28 h-28" alt="icon" />
      </div>
      <h3 className="text-[#38B148] text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  );
}
