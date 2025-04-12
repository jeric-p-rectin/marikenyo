// "use client";
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
          targets: ShoeEventCardContentRef.current.querySelectorAll("h1, p, button"),
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
                targets: ShoeEventCardContentRef.current.querySelectorAll('h1, p, button'),
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
        <div ref={ShoeEventCardContentRef} className="z-30 fixed left-0 right-0 top-0 bottom-0 bg-[linear-gradient(to_bottom,_#3B2F19,_#1D1912)] items-center justify-center">
            {!isDesktop && // Is Mobile
                <div className="flex flex-col gap-7 px-10 bg-[linear-gradient(to_bottom,_#3B2F19,_#1D1912)] items-center justify-center h-full">
                    <div className="justify-center">
                        <h1 className="font-playfair text-secondary text-3xl sm:text-5xl">{title}</h1>
                        <button onClick={() => handleClose()} className="text-tertuary text-xl hover:text-quartery rounded-lg w-8 absolute top-2.5 right-2.5 flex items-center justify-center">
                            ✕
                        </button>
                    </div>
                    <div className="rounded-lg border-[1px] border-tertuary h-52 w-full bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
                    <div className="h-48 overflow-y-auto">
                        <p className="font-montserrat text-secondary">
                            {paragraph}
                        </p>
                    </div>
                </div>
            }

            {isDesktop && // Is Desktop
                <div className="flex flex-row gap-7 px-10 bg-[linear-gradient(to_bottom,_#3B2F19,_#1D1912)] items-center justify-center h-full">
                    <button onClick={() => handleClose()} className="text-tertuary text-4xl hover:text-quartery rounded-lg w-8 absolute top-2.5 right-2.5 flex items-center justify-center">
                        ✕
                    </button>
                    <div className="rounded-lg border-[1px] border-tertuary h-96 w-1/2 bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
                    <div className="flex flex-col gap-6 w-1/2 ">
                        <h1 className="font-playfair text-secondary text-3xl text-center sm:text-5xl">{title}</h1>
                        <p className="font-montserrat text-xl text-secondary">
                            {paragraph}
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}