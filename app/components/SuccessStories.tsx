'use client';

import { useState } from 'react';

export default function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0); // kept for potential future auto-rotate

  const testimonials = [
    {
      text: "JEET SARTHI mentors helped me solve problems faster and manage my time better. I loved how my junior mentor kept me on track with regular tasks, while my senior mentor showed me exam strategies that really worked. Their constant guidance and motivation made me feel confident and stress-free about my preparation.",
      name: "Namrata Jha"
    },
    {
      text: "Before joining JEET SARTHI, I was overwhelmed with too many books and no clear direction. My mentors simplified everything — senior mentor guided me with proven study strategies, and my junior mentor kept me consistent with daily follow-ups. This constant push and personal attention made me more disciplined, confident, and ready for the exam.",
      name: "Mayank Goyal"
    },
    {
      text: "I'm so grateful to my JEET SARTHI mentors. They didn't just guide me academically — they treated my success as their own. My senior mentor gave me the right strategy, while my junior mentor checked on me daily and kept me disciplined. It felt like having a support system that truly cared, and my preparation level has improved tremendously.",
      name: "Ruchir Bansal"
    },
    {
      text: "The one-on-one mentorship at JEET SARTHI helped me balance school with NEET prep. My mentor taught me how to study smarter, attempt tests strategically, and stay consistent. With constant check-ins and motivation, I could see my scores improve. Every aspirant should have this kind of personalized mentorship.",
      name: "Amaiya Singhal"
    },
    {
      text: "JEET SARTHI transformed my approach to JEE preparation. My senior mentor's strategic guidance combined with my junior mentor's daily motivation created the perfect support system. The personalized study plans and regular feedback helped me improve my rank significantly.",
      name: "Arjun Sharma"
    },
    {
      text: "What I loved most about JEET SARTHI was the dual mentorship system. My senior mentor provided expert strategies while my junior mentor ensured I stayed on track daily. This combination of high-level guidance and consistent support made all the difference in my preparation.",
      name: "Priya Patel"
    },
    {
      text: "The mentors at JEET SARTHI didn't just teach me subjects, they taught me how to think like a topper. Their proven techniques and constant encouragement helped me overcome my weaknesses and build confidence. I'm grateful for their personalized approach.",
      name: "Rahul Kumar"
    },
    {
      text: "JEET SARTHI's mentorship program is truly exceptional. My mentors understood my learning style and adapted their teaching methods accordingly. The regular progress tracking and motivational sessions kept me focused throughout my preparation journey.",
      name: "Sneha Gupta"
    }
  ];

  // Scrollable carousel - 3 cards visible on desktop

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-16">
          <span className="text-[#2170B4]">Success</span> <span className="text-[#66B34B]">Stories</span>
        </h2>

        {/* Scrollable carousel - 3 cards visible on desktop, same card size */}
        <div className="relative">
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-0 snap-x snap-mandatory">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-none w-full md:w-1/3 snap-start">
                  <div className="bg-[#F1FAF0] rounded-xl p-8 shadow-md h-[460px] flex flex-col mx-2">
                    {/* Quote Icon centered */}
                    <div className="text-[#2170B4] text-6xl font-bold mb-4 text-center">"</div>
                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm leading-relaxed text-center">
                      {testimonial.text}
                    </p>
                  </div>
                  {/* Name */}
                  <div className="text-center mt-6">
                    <h3 className="text-[#2170B4] text-xl font-bold">{testimonial.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots removed for scrollable carousel */}
      </div>
    </section>
  );
}
