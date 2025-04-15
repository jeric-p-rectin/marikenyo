"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Carousel from "./team-and-credits-components/carousel";

export default function TeamAndCredits() {
    const [isClient, setIsClient] = useState(false);
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });

    useEffect(() => {
        setIsClient(true);
    }, []);

    const representativesMobile = [
        {
            name: "Delos Santos, Kc P.",
            picture: "/team-pictures/kc.jpg",
            role: "Lead-Presenter"
        },
        {
            name: "Redublado, Keith Raizen P.",
            picture: "/team-pictures/keith.jpg",
            role: "Co-Presenter"
        },
        {
            name: "Loyola, John Emmanuel V.",
            picture: "/team-pictures/emman.jpg",
            role: "Co-Presenter"
        }
    ];

    const representativesDesktop = [
        {
            name: "Redublado, Keith Raizen P.",
            picture: "/team-pictures/keith.jpg",
            role: "Co-Presenter"
        },
        {
            name: "Delos Santos, Kc P.",
            picture: "/team-pictures/kc.jpg",
            role: "Lead-Presenter"
        },
        {
            name: "Loyola, John Emmanuel V.",
            picture: "/team-pictures/emman.jpg",
            role: "Co-Presenter"
        }
    ];

    const developmentTeam = [
        {
            name: "Salvador, Billy L",
            picture: "/team-pictures/billeh.jpg",
            role: "Developer"
        },
        {
            name: "Ong, Jullian Rob B.",
            picture: "/team-pictures/jullian.jpg",
            role: "Developer"
        },
        {
            name: "Rectin, Jeric P.",
            picture: "/team-pictures/jeric.jpg",
            role: "Developer"
        },
        {
            name: "jullian",
            picture: "/team-pictures/axel.jpg",
            role: "Developer"
        },
    ];

    if (!isClient) return null; // Prevent SSR mismatch

    return (
        <>
            {!isDesktop ? (
                <div id="team-and-credits-section" className="flex flex-col gap-7 py-28">
                    <h1 className="font-playfair text-secondary text-3xl sm:text-5xl text-center">TEAM & CREDITS</h1>
                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center">Project Representatives</h2>
                    <Carousel members={representativesMobile} />
                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center">Development Team</h2>
                    <Carousel members={developmentTeam} />
                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center">Image & Resource Credits</h2>
                    <ul className="font-montserrat text-secondary list-disc">
                        <li>"Leather Shoe" - 3D model by assetfactory – Used under license from Sketchfab</li>
                        <li>"Pointy Stiletto" - 3D model by hiirusama – Used under license from Sketchfab</li>
                    </ul>
                </div>
            ) : (
                <div id="team-and-credits-section" className="flex flex-col gap-7 py-28">
                    <h1 className="font-playfair text-secondary text-3xl sm:text-5xl text-center mb-5">TEAM & CREDITS</h1>
                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center">Project Representatives</h2>
                    <div className="flex flex-row gap-7">
                        {representativesDesktop.map((member, index) => (
                            <div key={index} className="w-full h-[400px] flex flex-col border-[1px] rounded-lg border-tertuary">
                                <div
                                    className="w-full h-full bg-cover bg-center border-t-[1px] rounded-t-lg border-tertuary"
                                    style={{ backgroundImage: `url(${member.picture})` }}
                                ></div>
                                <div className="border-b-[1px] rounded-b-lg border-tertuary bg-tertuary">
                                    <h2 className="font-montserrat text-md text-secondary w-full text-center">{member.role}</h2>
                                    <h1 className="font-montserrat text-lg text-secondary w-full text-center">{member.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center mt-12 mb-6">Development Team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mb-5">
                        {developmentTeam.map((member, index) => (
                            <div key={index} className="h-[400px] w-full flex flex-col border-[1px] rounded-lg border-tertuary">
                                <div
                                    className="w-full h-full bg-cover bg-center border-t-[1px] rounded-t-lg border-tertuary"
                                    style={{ backgroundImage: `url(${member.picture})` }}
                                ></div>
                                <div className="border-b-[1px] rounded-b-lg border-tertuary bg-tertuary">
                                    <h2 className="font-montserrat text-md text-secondary w-full text-center">{member.role}</h2>
                                    <h1 className="font-montserrat text-lg text-secondary w-full text-center">{member.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center">Image & Resource Credits</h2>
                    <ul className="font-montserrat text-secondary list-disc text-center mx-auto text-md sm:text-xl">
                        <li>"Leather Shoe" - 3D model by assetfactory – Used under license from Sketchfab</li>
                        <li>"Pointy Stiletto" - 3D model by hiirusama – Used under license from Sketchfab</li>
                    </ul>
                </div>
            )}
        </>
    );
}
