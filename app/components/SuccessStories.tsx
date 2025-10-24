'use client';

import { useEffect, useRef, useState } from 'react';

export default function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

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

  // Detect items per view based on breakpoint (md: 3 cards, otherwise 1)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const updateItemsPerView = () => {
      setItemsPerView(mediaQuery.matches ? 3 : 1);
    };

    updateItemsPerView();
    mediaQuery.addEventListener('change', updateItemsPerView);
    return () => mediaQuery.removeEventListener('change', updateItemsPerView);
  }, []);

  // Track scroll position to update current page index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScroll = () => {
      const width = container.clientWidth;
      if (width === 0) return;
      const pageIndex = Math.round(container.scrollLeft / width);
      setCurrentSlide(pageIndex);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, [itemsPerView]);

  // Allow mouse wheel (vertical scroll) to translate into horizontal scrolling on desktop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onWheel = (event: WheelEvent) => {
      // If the user scrolls vertically, move horizontally instead
      const isVerticalScrollDominant = Math.abs(event.deltaY) > Math.abs(event.deltaX);
      if (isVerticalScrollDominant && container.scrollWidth > container.clientWidth) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel as EventListener);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  const handleDotClick = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const targetLeft = index * container.clientWidth;
    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
    setCurrentSlide(index);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-16">
          <span className="text-[#2170B4]">Success</span> <span className="text-[#66B34B]">Stories</span>
        </h2>

        {/* Scrollable carousel - 3 cards visible on desktop, same card size */}
        <div className="relative">
          <div ref={scrollContainerRef} className="overflow-x-auto no-scrollbar snap-x snap-mandatory">
            <div className="flex gap-0">
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
                    <h3 className="text-[#0B2A59] text-xl font-extrabold">{testimonial.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-6 flex items-center justify-center gap-2" aria-label="carousel pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={
                `h-2 w-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-[#2170B4]' : 'bg-gray-300'
                }`
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
