'use client';
import { useState, useEffect } from 'react';

type objectType = {
  picture: string;
  name?: string;
  role: string;
};

export default function Carousel({ members }: { members: objectType[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (members.length > 1) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, members.length]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 700); // Match the transition duration
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 700); // Match the transition duration
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg shadow-tertuary/20 group">
      {/* Slider container */}
      <div className="relative h-72 md:h-96">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {members.map((member, index) => (
            <div key={index} className="flex-none w-full h-full flex flex-col">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `url(${member.picture})`,
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.2)'
                }}
              />
              <div className="bg-gradient-to-r from-tertuary to-quartery py-3 transition-all duration-300 group-hover:from-quartery group-hover:to-tertuary">
                <h2 className="font-montserrat text-md text-primary w-full text-center font-medium">{member.role}</h2>
                <h1 className="font-montserrat text-lg text-primary w-full text-center font-bold">{member.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      {members.length > 1 && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {members.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2.5 h-2.5 rounded-full ${
                index === activeIndex ? 'bg-tertuary scale-125' : 'bg-tertuary/30'
              } transition-all duration-300 hover:scale-110`}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 700);
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Previous button */}
      {members.length > 1 && (
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group/btn focus:outline-none opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-quartery/70 backdrop-blur-sm group-hover/btn:bg-tertuary transition-all duration-300 group-hover/btn:shadow-lg group-hover/btn:shadow-tertuary/30">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
              fill="none"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
      )}

      {/* Next button */}
      {members.length > 1 && (
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group/btn focus:outline-none opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-quartery/70 backdrop-blur-sm group-hover/btn:bg-tertuary transition-all duration-300 group-hover/btn:shadow-lg group-hover/btn:shadow-tertuary/30">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
              fill="none"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      )}

      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none rounded-lg" style={{
        boxShadow: 'inset 0 1px 2px rgba(238, 205, 92, 0.3), inset 0 -1px 2px rgba(238, 205, 92, 0.3)'
      }}></div>
    </div>
  );
}
