"use client";
import Image from "next/image";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative border-t-[1px] border-tertuary bg-gradient-to-b from-[#2C261C] to-[#1D1912] py-10">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-tertuary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-quartery/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex justify-center items-center mb-8">
                    <div className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Marikina Logo"
                            width={40}
                            height={40}
                            className="mr-3 hover:rotate-12 transition-all duration-300"
                        />
                        <h2 className="font-playfair text-2xl text-secondary">Marikina <span className="text-tertuary">Shoe Festival</span></h2>
                    </div>
                </div>

                <div className="border-t border-tertuary/30 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="font-montserrat text-sm sm:text-base text-secondary/80 mb-4 md:mb-0">
                        © 2025 Marikina Shoe Festival. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-tertuary/20 hover:bg-tertuary/40 transition-all duration-300 group"
                        aria-label="Back to top"
                    >
                        <svg
                            className="w-5 h-5 text-tertuary group-hover:text-secondary transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}