export default function WhyChoose() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#0B63C5] leading-tight">
          Why Choose <br/><span className="text-[#38B148]">JEET</span> SARTHI Mentorship?
        </h2>

        {/* Grid: only internal dividers, no outer borders */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 [&>*]:border-black [&>*]:border-t md:[&>*]:border-l [&>*:first-child]:border-t-0 md:[&>*:nth-child(-n+3)]:border-t-0 md:[&>*:nth-child(3n+1)]:border-l-0">
          {/* Row 1 */}
          <Feature
            title="One-on-One Guidance:"
            desc="Personalized strategies by top-ranking mentors."
            iconSrc="/file.svg"
          />
          <Feature
            title="Mock Tests & Feedback"
            desc="Real exam simulation + analysis = higher scores."
            iconSrc="/window.svg"
          />
          <Feature
            title="Constant Doubt Support"
            desc="Get answers instantly from your junior mentor"
            iconSrc="/globe.svg"
          />

          {/* Row 2 */}
          <Feature
            title="Progress Tracking"
            desc="Regular reviews with your senior mentor keep you aligned."
            iconSrc="/vercel.svg"
          />
          <Feature
            title="Time Mastery"
            desc="Practice managing every second in the exam hall."
            iconSrc="/next.svg"
          />
          <Feature
            title="Stress-Free Prep"
            desc="Build confidence and mental resilience for exam day."
            iconSrc="/globe.svg"
          />

          {/* Row 3 */}
          <Feature
            title="Dual Support System"
            desc="Senior mentor sets your roadmap, junior mentor ensures follow-through."
            iconSrc="/logo.svg"
          />
          <Feature
            title="Proven Shortcuts & Techniques"
            desc="Learn to solve smarter, faster, and with accuracy."
            iconSrc="/file.svg"
          />
          <Feature
            title="Notes & Resources"
            desc="Expert-curated, precise, and effective study material."
            iconSrc="/window.svg"
          />
        </div>
        {/* CTA Button below grid */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="px-10 py-4 bg-[#0B63C5] text-white text-lg font-semibold rounded-md shadow-sm hover:bg-[#0859B3] focus:outline-none focus:ring-2 focus:ring-[#0B63C5]/30"
            aria-label="Enroll For Mentorship"
          >
            Enroll For Mentorship
          </button>
        </div>
      </div>
    </section>
  );
}

type FeatureProps = {
  title: string;
  desc: string;
  iconSrc: string;
};

function Feature({ title, desc, iconSrc }: FeatureProps) {
  return (
    <div className="flex items-center justify-between gap-6 p-8">
      <div>
        <h3 className="text-[#0B0B0B] text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
      </div>
      {/* Placeholder icon using public assets; replace with exact icons as needed */}
      <img src={iconSrc} alt="icon" className="w-14 h-14 object-contain" />
    </div>
  );
}


