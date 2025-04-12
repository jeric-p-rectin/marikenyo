"use client";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

interface ShoeEventCardProps {
    image: string;
    title: string;
    subtitle: string;
    reverse?: boolean;
    showEventCardContent?: () => void;
};

export default function ShoeEventCard({ image, title, subtitle, reverse, showEventCardContent }: ShoeEventCardProps) {
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return (
        <>
            {!isDesktop && // Is mobile
                <div
                    className="relative group h-52 bg-cover bg-center cursor-pointer border-[1px] rounded-lg border-tertuary overflow-hidden"
                    style={{ backgroundImage: `url(${image})` }}
                    onClick={showEventCardContent}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#211d15] opacity-80 group-hover:opacity-0 transition-opacity duration-500"></div>

                    {/* Text content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                        <h1 className="font-montserrat text-xl font-medium text-secondary text-center">{title}</h1>
                        <h3 className="font-montserrat text-secondary text-center">{subtitle}</h3>
                    </div>
                </div>
            }

            {isDesktop && // Is Desktop
                <div className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} : ""} justify-between`}>
                    {/* Image side */}
                    <div
                    className="relative group h-96 w-1/2 bg-cover bg-center cursor-pointer border-[1px] rounded-lg border-tertuary overflow-hidden"
                    style={{ backgroundImage: `url(${image})` }}
                    onClick={showEventCardContent}
                    >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#211d15] opacity-80 group-hover:opacity-0 transition-opacity duration-500"></div>
                    </div>
                
                    {/* Text content side */}
                    <div className="flex flex-col h-96 w-1/2 relative z-10 items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                    <h1 className="font-montserrat text-3xl font-medium text-secondary text-center">{title}</h1>
                    <h3 className="font-montserrat text-xl text-secondary text-center">{subtitle}</h3>
                    </div>
                </div>
              
            }
        </>
        
    );
}