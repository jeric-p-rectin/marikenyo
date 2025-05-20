"use client";
import LeatherShoe from "./leather-shoe";
import Heel from "./heel"
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from 'react';

export default function About() {
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
    const isDesktop2 = useMediaQuery({ query: '(min-width: 1024px)' });
    const [isVisible, setIsVisible] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    const mobileStyle = "flex flex-col bg-primary bg-cover bg-center gap-0 py-28 relative"
    const desktopStyle = `grid grid-cols-2 gap-0 bg-primary bg-cover bg-center gap-0 py-28 ${isDesktop2 ? "h-full" : "h-fit"} relative`

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Set mounted to true after component mounts and handle scroll animation
    useEffect(() => {
        setHasMounted(true);

        const handleScroll = () => {
            const element = document.getElementById('about-section');
            if (element) {
                const position = element.getBoundingClientRect();
                // If the element is in the viewport
                if (position.top < window.innerHeight && position.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <div id="about-section" className={`${isDesktop ? desktopStyle : mobileStyle} mx-4 sm:mx-8 md:mx-12 lg:mx-16`}>
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-tertuary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 bg-quartery/5 rounded-full blur-3xl"></div>

            <div className={`flex flex-col gap-7 px-5 md:px-8 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="font-playfair text-secondary text-3xl sm:text-5xl">
                    ABOUT THE MARIKINA SHOE FESTIVAL
                </h1>
                <p className="font-montserrat text-secondary text-md sm:text-xl leading-relaxed">
                    The Marikina Shoe Festival is a tribute to the city's rich shoemaking heritage, showcasing the artistry and dedication of local craftsmen. As the Shoe Capital of the Philippines, Marikina continues to shape the industry with world-class footwear, blending tradition with innovation.
                </p>
            </div>

            <div className={`${isDesktop ? "border-l-[1px] border-b-[1px] border-tertuary/70" : "border-[1px] border-tertuary/70"} rounded-lg overflow-hidden shadow-lg shadow-tertuary/10 transition-all duration-700 hover:shadow-tertuary/30 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <LeatherShoe />
            </div>

            { isDesktop &&
                <div className={`flex flex-col gap-7 px-5 md:px-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="font-playfair text-secondary text-3xl sm:text-5xl">
                        A LEGACY OF EXCELLENCE
                    </h1>
                    <p className="font-montserrat text-secondary text-md sm:text-xl leading-relaxed">
                        The Marikina Shoe Festival honors the city's rich shoemaking legacy where tradition meets world-class craftsmanship, celebrating the artistry, passion, and resilience of local shoemakers who have shaped Marikina into the Shoe Capital of the Philippines.
                    </p>
                    <button
                        onClick={() => scrollToSection("main-section")}
                        className="bg-gradient-to-r from-tertuary to-quartery hover:from-quartery hover:to-tertuary text-primary font-medium transition-all duration-300 rounded-lg text-xl py-3 px-6 self-end shadow-md shadow-tertuary/20 hover:shadow-lg hover:shadow-tertuary/30 hover:scale-105"
                    >
                        DISCOVER MORE
                    </button>
                </div>
            }

            <div className={`${isDesktop ? "border-l-[1px] border-tertuary/70" : "border-[1px] border-tertuary/70"} rounded-lg overflow-hidden shadow-lg shadow-tertuary/10 transition-all duration-700 delay-200 hover:shadow-tertuary/30 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <Heel />
            </div>

            { !isDesktop &&
                <button
                    onClick={() => scrollToSection("main-section")}
                    className={`bg-gradient-to-r from-tertuary to-quartery hover:from-quartery hover:to-tertuary text-primary font-medium transition-all duration-300 rounded-lg text-xl py-3 px-6 mt-8 self-center shadow-md shadow-tertuary/20 hover:shadow-lg hover:shadow-tertuary/30 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    DISCOVER MORE
                </button>
            }
        </div>
    )
}
