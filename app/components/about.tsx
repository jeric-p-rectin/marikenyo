"use client";
import LeatherShoe from "./leather-shoe";
import Heel from "./heel"
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from 'react';

export default function About() {
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' }); // Check if the device is desktop
    const isDesktop2 = useMediaQuery({ query: '(min-width: 1024px)' }); // Check if the device is desktop
    const mobileStyle = "flex flex-col bg-primary bg-cover bg-center gap-0 py-28"
    const desktopStyle = `grid grid-cols-2 gap-0 bg-primary bg-cover bg-center gap-0 py-28 ${isDesktop2 ? "h-full" : "h-fit"}`
    const [hasMounted, setHasMounted] = useState(false);  // Track if component is mounted

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Set mounted to true after component mounts
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        // Prevent rendering until mounted on the client
        return null;
    }

    return (
        <div id="about-section" className={isDesktop ? desktopStyle : mobileStyle}>
            <div className="flex flex-col gap-7 px-3 mb-8">
                <h1 className="font-playfair text-secondary text-3xl sm:text-5xl">ABOUT THE MARIKINA SHOE FESTIVAL</h1>
                <p className="font-montserrat text-secondary text-md sm:text-xl">The Marikina Shoe Festival is a tribute to the city's rich shoemaking heritage, showcasing the artistry and dedication of local craftsmen. As the Shoe Capital of the Philippines, Marikina continues to shape the industry with world-className footwear, blending tradition with innovation.</p>
            </div>
            <div className={isDesktop ? "border-l-[1px] border-b-[1px] border-tertuary" : "border-[1px] border-tertuary"}>
                <LeatherShoe />
            </div>
            { isDesktop && <div className="flex flex-col gap-7 px-3">
                <h1 className="font-playfair text-secondary text-3xl sm:text-5xl">A LEGECY OF EXCELLENCE</h1>
                <p className="font-montserrat text-secondary text-md sm:text-xl">The Marikina Shoe Festival honors the city's rich shoemaking legacy where tradition meets world-class craftsmanship, celebrating the artistry, passion, and resilience of local shoemakers who have shaped Marikina into the Shoe Capital of the Philippines.</p>
                <button onClick={() => scrollToSection("main-section")} className="bg-quartery text-secondary hover:bg-[#d2cc3c] transition-all gap-11 rounded-2xl text-xl p-2 self-end">DISCOVER MORE</button>
            </div> }
            <div className={isDesktop ? "border-l-[1px] border-tertuary" : "border-[1px] border-tertuary"}><Heel /></div>
            { !isDesktop && <button onClick={() => scrollToSection("main-section")} className="bg-quartery text-secondary hover:bg-[#d2cc3c] transition-all rounded-2xl text-xl mt-8 p-2 self-center">DISCOVER MORE</button> }
        </div>
    )
}
