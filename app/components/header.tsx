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
        <div className='flex flex-row gap-4 items-center'>
            <h2 onClick={() => scrollToSection('home-section')} className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">HOME</h2>
            <h2 onClick={() => scrollToSection('about-section')} className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">ABOUT</h2>
            <h2 onClick={() => scrollToSection('team-and-credits-section')} className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">TEAM & CREDITS</h2>
        </div>
    );

    const mobileScreen = () => (
        <button onClick={() => setIsOpen(true)} className="hover:text-tertuary transition text-secondary text-3xl">☰</button>
    );

    if (!hasMounted) return null;

    return (
        <>
            <div className="flex z-20 flex-row fixed left-0 right-0 justify-between backdrop-blur-sm border-b-[1px] border-tertuary p-5">
                <div className="flex flex-row gap-1">
                    <Image src={`/logo.png`} alt='logo.png' width={35} height={35} />
                    {"ARIKINA".split("").map((letter, index) => (
                        <h1 key={index} className="font-montserrat text-secondary text-3xl">{letter}</h1>
                    ))}
                </div>
                {isDesktop ? desktopScreen() : mobileScreen()}
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed top-[77px] p-4 left-0 right-0 w-full transition-transform backdrop-blur-sm  border-b-[1px] border-tertuary ${isOpen ? 'translate-y-0 visible z-20' : '-translate-y-full invisible z-0'}`}>
                <h5 className="mb-4 text-xl font-bold font-montserrat text-center text-secondary">Navigation</h5>
                <button onClick={() => setIsOpen(false)} className="text-tertuary text-xl hover:text-quartery rounded-lg w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center">✕</button>
                <div className='flex flex-col text-center gap-5'>
                    <h2 onClick={() => scrollToSection('home-section')} className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">HOME</h2>
                    <h2 onClick={() => scrollToSection('about-section')} className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">ABOUT</h2>
                    <h2 onClick={() => scrollToSection('team-and-credits-section')} className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">TEAM & CREDITS</h2>
                </div>
            </div>
        </>
    );
}
