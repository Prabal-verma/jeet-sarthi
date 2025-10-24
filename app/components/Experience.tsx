export default function Experience() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-[#0B6AA6] via-[#1EA36C] to-[#49B265]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-white text-4xl md:text-5xl font-extrabold leading-tight">
          Our Experience = Your Results
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-4 gap-3 md:gap-4">
          <Card
            iconSrc="/file.svg"
            title="100+ Years of combined Mentorship Expertise"
          />
          <Card
            iconSrc="/globe.svg"
            title="Thousands of Aspirants Guided by Rankers"
          />
          <Card
            iconSrc="/window.svg"
            title="One-on-One Daily Support to Keep You Disciplined"
          />
          <Card
            iconSrc="/next.svg"
            title="Tailored Plans That Save Time & Maximize Practice"
          />
        </div>

        {/* CTA pill */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="px-10 py-4 bg-white text-[#2D9F6A] text-lg font-semibold rounded-xl shadow-md hover:bg-white/95"
          >
            Enroll For Mentorship
          </button>
        </div>
      </div>
    </section>
  );
}

type CardProps = { iconSrc: string; title: string };

function Card({ iconSrc, title }: CardProps) {
  return (
    <div className="bg-white rounded-[54px] px-4 py-6 text-center shadow-sm w-full max-w-[260px] mx-auto border border-green-200">
      <div className="mx-auto mb-6 w-18 h-24 rounded-full bg-[#E7F1FF] border border-white/30 flex items-center justify-center">
        <img src={iconSrc} className="w-12 h-12" alt="icon" />
      </div>
      <p className="text-[#0B0B0B] text-xl font-semibold leading-snug">
        {title}
      </p>
    </div>
  );
}


