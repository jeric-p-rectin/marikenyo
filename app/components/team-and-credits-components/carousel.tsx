'use client';
import { useState } from 'react';

type objectType = {
  picture: string;
  name?: string;
  role: string;
};

export default function Carousel({ members }: { members: objectType[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden border-[1px] rounded-lg border-tertuary">
      {/* Slider container */}
      <div className="relative h-72 md:h-96">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {members.map((member, index) => (
            <div key={index} className="flex-none w-full h-full flex flex-col">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${member.picture})` }}
              />
              <div className="bg-tertuary">
                <h2 className="font-montserrat text-md text-secondary w-full text-center">{member.role}</h2>
                <h1 className="font-montserrat text-lg text-secondary w-full text-center">{member.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-quartery group-hover:bg-tertuary group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
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

      {/* Next button */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-quartery group-hover:bg-tertuary group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
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
    </div>
  );
}
