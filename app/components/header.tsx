"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);  // Track if component is mounted
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' }); // Check if the device is desktop

    // Set mounted to true after component mounts
    useEffect(() => {
        setHasMounted(true);
    }, []);

    function desktopScreen() {
        return (
            <div className='flex flex-row gap-4 items-center'>
                <h2 className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">HOME</h2>
                <h2 className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">ABOUT</h2>
                <h2 className="gap-2  cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">TEAM & CREDITS</h2>
            </div>
        );
    }

    function mobileScreen() {
        return (
            <button onClick={() => setIsOpen(true)} className="font-primary text-3xl">☰</button>
        );
    }

    if (!hasMounted) {
        // Prevent rendering until mounted on the client
        return null;
    }

    return (
        <>
            <div className="flex z-20 flex-row fixed left-0 right-0 justify-between backdrop-blur-sm border-b-[1px] border-tertuary p-5">
                <div className="flex flex-row gap-1">
                    <Image src={`/logo.png`} alt='logo.png' width={35} height={35} />
                    <h1 className="font-montserrat text-secondary text-3xl">A</h1>
                    <h1 className="font-montserrat text-secondary text-3xl">R</h1>
                    <h1 className="font-montserrat text-secondary text-3xl">I</h1>
                    <h1 className="font-montserrat text-secondary text-3xl">K</h1>
                    <h1 className="font-montserrat text-secondary text-3xl">I</h1>
                    <h1 className="font-montserrat text-secondary text-3xl">N</h1>
                    <h1 className="font-montserrat text-secondary text-3xl">A</h1>
                </div>
                {isDesktop ? desktopScreen() : mobileScreen()}
            </div>
            <div
                className={`fixed top-[77px] left-0 right-0 w-full p-4 transition-transform bg-primary ${isOpen ? 'translate-y-0 visible z-20' : '-translate-y-full invisible z-0'}`}
            >
                <h5
                    id="drawer-top-label"
                    className="mb-4 text-xl font-bold font-montserrat text-center text-secondary"
                >
                    Navigation
                </h5>

                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-tertuary text-xl hover:text-quartery rounded-lg w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center"
                >
                    ✕
                </button>
                <div className='flex flex-col text-center gap-5'>
                    <h2 className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">HOME</h2>
                    <h2 className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">ABOUT</h2>
                    <h2 className="gap-2 cursor-pointer hover:text-tertuary transition font-montserrat text-secondary">TEAM & CREDITS</h2>
                </div>
            </div>
        </>
    );
}
