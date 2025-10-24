export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-16">
          How <span className="text-[#38B148]">JEET SARTHI</span> Mentorship Works?
        </h2>

        {/* Three Main Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
        <div className="relative mb-12">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl h-1 bg-[#38B148] relative">
              {/* Timeline dots */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#38B148] rounded-full"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#38B148] rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#38B148] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Additional Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Icon Set - Journey/Path */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Winding path */}
              <svg width="200" height="80" viewBox="0 0 200 80" className="absolute">
                <path
                  d="M20 40 Q50 20 80 40 Q110 60 140 40 Q170 20 180 40"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  fill="none"
                />
                {/* Dots along path */}
                <circle cx="50" cy="30" r="3" fill="#38B148" />
                <circle cx="80" cy="40" r="3" fill="#38B148" />
                <circle cx="110" cy="50" r="3" fill="#38B148" />
                {/* Start marker */}
                <circle cx="20" cy="40" r="4" fill="#8B5CF6" />
                {/* End marker */}
                <circle cx="180" cy="40" r="4" fill="#000" />
                {/* Stars */}
                <polygon points="60,15 65,25 75,25 67,32 70,42 60,35 50,42 53,32 45,25 55,25" fill="#FCD34D" />
                <polygon points="130,25 135,35 145,35 137,42 140,52 130,45 120,52 123,42 115,35 125,35" fill="#FCD34D" />
              </svg>
            </div>
          </div>

          {/* Right Icon Set - Progress/Growth */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Speedometer */}
              <svg width="120" height="120" viewBox="0 0 120 120" className="relative">
                {/* Gauge background */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                />
                {/* Colored arc */}
                <path
                  d="M 20 60 A 40 40 0 1 1 100 60"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Needle */}
                <line
                  x1="60"
                  y1="60"
                  x2="85"
                  y2="35"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Center dot */}
                <circle cx="60" cy="60" r="4" fill="#000" />
                {/* Arrows below */}
                <polygon points="40,90 45,85 50,90 45,95" fill="#EF4444" />
                <polygon points="55,90 60,85 65,90 60,95" fill="#F97316" />
                <polygon points="70,90 75,85 80,90 75,95" fill="#3B82F6" />
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="50%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
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
      <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-[#E7F1FF] border border-[#38B148]/20 flex items-center justify-center">
        <img src={iconSrc} className="w-10 h-10" alt="icon" />
      </div>
      <h3 className="text-[#38B148] text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  );
}
