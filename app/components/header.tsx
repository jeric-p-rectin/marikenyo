"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close drawer if open (for mobile)
        }
    };

    const desktopScreen = () => (
        <div className='flex flex-row gap-6 items-center'>
            <h2
                onClick={() => scrollToSection('home-section')}
                className="relative cursor-pointer font-montserrat text-secondary group"
            >
                <span className="transition-all duration-300 group-hover:text-tertuary">HOME</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tertuary transition-all duration-300 group-hover:w-full"></span>
            </h2>
            <h2
                onClick={() => scrollToSection('about-section')}
                className="relative cursor-pointer font-montserrat text-secondary group"
            >
                <span className="transition-all duration-300 group-hover:text-tertuary">ABOUT</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tertuary transition-all duration-300 group-hover:w-full"></span>
            </h2>
            <h2
                onClick={() => scrollToSection('team-and-credits-section')}
                className="relative cursor-pointer font-montserrat text-secondary group"
            >
                <span className="transition-all duration-300 group-hover:text-tertuary">TEAM & CREDITS</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tertuary transition-all duration-300 group-hover:w-full"></span>
            </h2>
        </div>
    );

    const mobileScreen = () => (
        <button
            onClick={() => setIsOpen(true)}
            className="hover:text-tertuary transition-all duration-300 text-secondary text-3xl hover:scale-110 hover:rotate-6 focus:outline-none"
            aria-label="Open menu"
        >
            ☰
        </button>
    );

    if (!hasMounted) return null;

    return (
        <>
            <div className="flex flex-row z-20 fixed left-0 right-0 justify-between backdrop-blur-md bg-primary/80 border-b-[1px] border-tertuary/70 p-5 shadow-md shadow-tertuary/10">
                <div className="flex flex-row gap-1 items-center group">
                    <Image
                        src={`/logo.png`}
                        alt='logo.png'
                        width={35}
                        height={35}
                        className="transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                    />
                    {"ARIKINA".split("").map((letter, index) => (
                        <h1
                            key={index}
                            className="font-montserrat text-secondary text-3xl hover:text-tertuary transition-all duration-300"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                transform: `translateY(${Math.sin(index) * 2}px)`
                            }}
                        >
                            {letter}
                        </h1>
                    ))}
                </div>
                {isDesktop ? desktopScreen() : mobileScreen()}
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed top-[77px] p-6 left-0 right-0 w-full transition-all duration-500 ease-in-out backdrop-blur-md bg-primary/90 border-b-[1px] border-tertuary/70 shadow-lg ${isOpen ? 'translate-y-0 visible z-20 opacity-100' : '-translate-y-full invisible z-0 opacity-0'}`}>
                <h5 className="mb-6 text-xl font-bold font-montserrat text-center text-secondary gradient-text">Navigation</h5>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-tertuary text-xl hover:text-quartery hover:rotate-90 transition-all duration-300 rounded-full w-8 h-8 absolute top-3 right-3 flex items-center justify-center border border-tertuary/30 hover:border-tertuary"
                >
                    ✕
                </button>
                <div className='flex flex-col text-center gap-6 py-2'>
                    <h2
                        onClick={() => scrollToSection('home-section')}
                        className="cursor-pointer hover:text-tertuary transition-all duration-300 font-montserrat text-secondary hover:scale-105 hover-glow px-4 py-2 rounded-md"
                    >
                        HOME
                    </h2>
                    <h2
                        onClick={() => scrollToSection('about-section')}
                        className="cursor-pointer hover:text-tertuary transition-all duration-300 font-montserrat text-secondary hover:scale-105 hover-glow px-4 py-2 rounded-md"
                    >
                        ABOUT
                    </h2>
                    <h2
                        onClick={() => scrollToSection('team-and-credits-section')}
                        className="cursor-pointer hover:text-tertuary transition-all duration-300 font-montserrat text-secondary hover:scale-105 hover-glow px-4 py-2 rounded-md"
                    >
                        TEAM & CREDITS
                    </h2>
                </div>
            </div>
        </>
    );
}
