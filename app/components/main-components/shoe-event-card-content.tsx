"use client";
import { useState, useRef, useEffect } from "react";
import anime from "animejs";
import { useMediaQuery } from "react-responsive";

interface ShoeEventCardContentProps {
    image: string;
    title: string;
    paragraph: string;
    closeEventCardContent: () => void;
}

export default function ShoeEventCardContent({image, title, paragraph, closeEventCardContent} : ShoeEventCardContentProps) {
    const [hasMounted, setHasMounted] = useState(false);
    const ShoeEventCardContentRef = useRef<HTMLDivElement>(null);
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });

    const handleClose = () => {
        if (!ShoeEventCardContentRef.current) return;

        // Animate inner elements out
        anime({
          targets: ShoeEventCardContentRef.current.querySelectorAll(".animate-item"),
          opacity: [1, 0],
          translateY: [0, 30],
          easing: "easeInExpo",
          duration: 500,
          delay: anime.stagger(100),
          complete: () => {
            // Then animate the card container down and fade out
            anime({
              targets: ShoeEventCardContentRef.current,
              translateY: [0, "100%"],
              opacity: [1, 0],
              easing: "easeInQuad",
              duration: 600,
              complete: () => {
                closeEventCardContent()
                document.body.style.overflow = 'auto';
              },
            });
          },
        });
      };

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (hasMounted && ShoeEventCardContentRef.current) {
            document.body.style.overflow = 'hidden';
            // Staggered Children Animation
            anime.timeline()
            .add({
                targets: ShoeEventCardContentRef.current,
                translateY: ['100%', '0%'],
                opacity: [0, 1],
                easing: 'easeOutQuad',
                duration: 800,
            })
            .add({
                targets: ShoeEventCardContentRef.current.querySelectorAll('.animate-item'),
                opacity: [0, 1],
                translateY: [30, 0],
                easing: 'easeOutExpo',
                duration: 600,
                delay: anime.stagger(100),
            });
        }
    }, [hasMounted]);

    if (!hasMounted) return null;

    return (
        <div
            ref={ShoeEventCardContentRef}
            className="z-30 fixed left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-[#3B2F19] to-[#1D1912] items-center justify-center overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-40 left-10 w-60 h-60 bg-tertuary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-10 w-80 h-80 bg-quartery/5 rounded-full blur-3xl"></div>

            {!isDesktop && // Is Mobile
                <div className="flex flex-col gap-7 px-6 py-10 items-center justify-center h-full">
                    <div className="flex flex-row items-center justify-between w-full animate-item">
                        <h1 className="font-playfair text-secondary text-3xl">
                            {title}
                        </h1>
                        <button
                            onClick={() => handleClose()}
                            className="text-tertuary text-xl hover:text-quartery hover:rotate-90 transition-all duration-300 rounded-full w-10 h-10 flex items-center justify-center border border-tertuary/30 hover:border-tertuary ml-4"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="rounded-xl border border-tertuary/30 h-60 w-full bg-cover bg-center shadow-lg shadow-tertuary/10 overflow-hidden animate-item"
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <div className="w-full h-full bg-gradient-to-t from-primary/30 to-transparent"></div>
                    </div>

                    <div className="h-[calc(100vh-350px)] overflow-y-auto px-2 animate-item">
                        <p className="font-montserrat text-secondary/90 leading-relaxed">
                            {paragraph}
                        </p>
                    </div>

                    <button
                        onClick={() => handleClose()}
                        className="bg-gradient-to-r from-tertuary to-quartery hover:from-quartery hover:to-tertuary text-primary font-medium transition-all duration-300 rounded-lg text-lg py-2 px-6 mt-4 shadow-md shadow-tertuary/20 hover:shadow-lg hover:shadow-tertuary/30 hover:scale-105 animate-item"
                    >
                        Back to Festival Events
                    </button>
                </div>
            }

            {isDesktop && // Is Desktop
                <div className="flex flex-row gap-10 px-16 py-10 items-center justify-center h-full max-w-7xl mx-auto">
                    <button
                        onClick={() => handleClose()}
                        className="text-tertuary text-2xl hover:text-quartery hover:rotate-90 transition-all duration-300 rounded-full w-12 h-12 absolute top-6 right-6 flex items-center justify-center border border-tertuary/30 hover:border-tertuary animate-item"
                        aria-label="Close"
                    >
                        ✕
                    </button>

                    <div className="rounded-xl border border-tertuary/30 h-[70vh] w-1/2 bg-cover bg-center shadow-xl shadow-tertuary/15 overflow-hidden animate-item"
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <div className="w-full h-full bg-gradient-to-t from-primary/30 to-transparent"></div>
                    </div>

                    <div className="flex flex-col gap-6 w-1/2 h-[70vh] overflow-y-auto pr-4">
                        <h1 className="font-playfair text-secondary text-4xl sm:text-5xl animate-item">
                            {title}
                        </h1>

                        <p className="font-montserrat text-xl text-secondary/90 leading-relaxed animate-item">
                            {paragraph}
                        </p>

                        <div className="mt-6 animate-item">
                            <button
                                onClick={() => handleClose()}
                                className="bg-gradient-to-r from-tertuary to-quartery hover:from-quartery hover:to-tertuary text-primary font-medium transition-all duration-300 rounded-lg text-lg py-3 px-8 shadow-md shadow-tertuary/20 hover:shadow-lg hover:shadow-tertuary/30 hover:scale-105"
                            >
                                Back to Festival Events
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}