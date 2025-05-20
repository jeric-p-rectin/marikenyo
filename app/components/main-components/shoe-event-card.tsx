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
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return (
        <>
            {!isDesktop && // Is mobile
                <div
                    className="relative group h-60 bg-cover bg-center cursor-pointer rounded-xl overflow-hidden shadow-lg shadow-tertuary/10 hover:shadow-tertuary/30 transition-all duration-500 transform hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${image})` }}
                    onClick={showEventCardContent}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/40 opacity-90 group-hover:opacity-70 transition-all duration-500"></div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertuary to-quartery transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100"></div>

                    {/* Text content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-500 group-hover:translate-y-[-5px]">
                        <h1 className="font-montserrat text-xl font-medium text-secondary text-left mb-1">{title}</h1>
                        <h3 className="font-montserrat text-tertuary text-left text-sm">{subtitle}</h3>
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="inline-block px-3 py-1 bg-tertuary/20 text-tertuary text-xs rounded-full">
                                Click to learn more
                            </span>
                        </div>
                    </div>
                </div>
            }

            {isDesktop && // Is Desktop
                <div className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} justify-between items-center gap-8 group`}>
                    {/* Image side */}
                    <div
                        className="relative h-96 w-1/2 bg-cover bg-center cursor-pointer rounded-xl overflow-hidden shadow-lg shadow-tertuary/10 hover:shadow-tertuary/30 transition-all duration-500 transform group-hover:scale-[1.01]"
                        style={{ backgroundImage: `url(${image})` }}
                        onClick={showEventCardContent}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/40 opacity-90 group-hover:opacity-70 transition-all duration-500"></div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertuary to-quartery transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100"></div>
                    </div>

                    {/* Text content side */}
                    <div className="flex flex-col h-96 w-1/2 relative z-10 items-center justify-center transition-all duration-500 transform group-hover:translate-x-[-10px]">
                        <div className={`transition-all duration-500 ${reverse ? 'text-right' : 'text-left'} w-full px-6`}>
                            <h1 className="font-montserrat text-3xl font-medium text-secondary mb-3">{title}</h1>
                            <h3 className="font-montserrat text-xl text-tertuary mb-6">{subtitle}</h3>
                            <p className="font-montserrat text-secondary/80 mb-6 max-w-md">
                                Discover the unique traditions and experiences that make the Marikina Shoe Festival a cultural landmark.
                            </p>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="inline-block px-4 py-2 bg-tertuary/20 text-tertuary rounded-lg cursor-pointer hover:bg-tertuary/30 transition-all duration-300">
                                    Click the image to learn more
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}