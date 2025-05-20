"use client";
import { useEffect, useState } from "react";

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="home-section" className="flex flex-col justify-center h-screen relative overflow-hidden">
            {/* Background image with parallax effect */}
            <div
                className="absolute left-0 right-0 top-0 bottom-0 bg-[url('/marikenyobg.jpg')] bg-cover bg-center transform transition-transform duration-10000"
                style={{
                    transform: isLoaded ? 'scale(1.05)' : 'scale(1.15)',
                    transition: 'transform 30s ease-out',
                    margin: 0,
                    padding: 0,
                    width: '100vw',
                    maxWidth: '100vw',
                    position: 'absolute',
                    left: 0
                }}
            ></div>

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/85"></div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-10 w-40 h-40 bg-tertuary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-quartery/5 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="flex flex-col relative z-10 text-white text-center gap-6 px-4 max-w-4xl mx-auto">
                <h2
                    className={`font-montserrat text-secondary text-lg sm:text-xl opacity-0 ${isLoaded ? 'animate-fadeIn' : ''}`}
                    style={{ animationDelay: '0.3s' }}
                >
                    Where Every Step Tells a Story.
                </h2>

                <h1
                    className={`font-playfair text-secondary text-5xl sm:text-7xl opacity-0 ${isLoaded ? 'animate-fadeIn' : ''}`}
                    style={{ animationDelay: '0.6s' }}
                >
                    <span className="relative inline-block shimmer-effect">THE SOLE OF MARIKINA</span>
                </h1>

                <h2
                    className={`font-montserrat text-secondary text-lg sm:text-xl opacity-0 ${isLoaded ? 'animate-fadeIn' : ''}`}
                    style={{ animationDelay: '0.9s' }}
                >
                    Experience the tradition, artistry, and passion behind shoe festival.
                </h2>

                <button
                    onClick={() => scrollToSection("main-section")}
                    className={`bg-gradient-to-r from-tertuary to-quartery hover:from-quartery hover:to-tertuary rounded-2xl text-2xl sm:text-3xl py-3 px-6 self-center mt-4 shadow-lg shadow-tertuary/20 hover:shadow-tertuary/40 transition-all duration-300 transform hover:scale-105 opacity-0 ${isLoaded ? 'animate-fadeIn' : ''}`}
                    style={{ animationDelay: '1.2s' }}
                >
                    EXPLORE THE FESTIVAL
                </button>
            </div>


        </div>
    )
}