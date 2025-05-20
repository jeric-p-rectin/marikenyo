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
        }
    ];

    const representativesDesktop = [
        {
            name: "Delos Santos, Kc P.",
            picture: "/team-pictures/kc.jpg",
            role: "Lead-Presenter"
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
            name: "Axel Dimalanta",
            picture: "/team-pictures/axel.jpg",
            role: "Developer"
        },
    ];

    if (!isClient) return null; // Prevent SSR mismatch

    return (
        <>
            {!isDesktop ? (
                <div id="team-and-credits-section" className="flex flex-col gap-8 py-28 relative mx-4 sm:mx-8 md:mx-12 lg:mx-16">
                    {/* Decorative elements */}
                    <div className="absolute top-20 left-0 w-20 h-20 bg-tertuary/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 right-0 w-32 h-32 bg-quartery/10 rounded-full blur-3xl"></div>

                    <h1 className="font-playfair text-secondary text-3xl sm:text-5xl text-center mb-6 animate-fadeIn">TEAM & CREDITS</h1>

                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center mt-4">
                        Project Representatives
                    </h2>

                    <div className="transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-tertuary/20 rounded-lg">
                        <Carousel members={representativesMobile} />
                    </div>

                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center mt-8">
                        Development Team
                    </h2>

                    <div className="transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-tertuary/20 rounded-lg">
                        <Carousel members={developmentTeam} />
                    </div>

                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center mt-8">
                        Image & Resource Credits
                    </h2>

                    <ul className="font-montserrat text-secondary list-disc px-8 py-6 bg-gradient-to-br from-primary/80 to-primary/60 backdrop-blur-sm rounded-lg border border-tertuary/30 shadow-lg shadow-tertuary/15 max-w-2xl mx-auto w-full transition-all duration-300 hover:shadow-tertuary/25 hover:border-tertuary/40">
                        <li className="mb-3">&quot;Leather Shoe&quot; - 3D model by assetfactory – Used under license from Sketchfab</li>
                        <li className="mb-3">&quot;Pointy Stiletto&quot; - 3D model by hiirusama – Used under license from Sketchfab</li>
                        <li>&quot;Tour de takong&quot; Stiletto race Picture from Marikina PIO Marikina PIO Page - https://www.facebook.com/MarikinaPIO</li>
                    </ul>
                </div>
            ) : (
                <div id="team-and-credits-section" className="flex flex-col gap-8 py-28 relative mx-4 sm:mx-8 md:mx-12 lg:mx-16">
                    {/* Decorative elements */}
                    <div className="absolute top-40 left-10 w-40 h-40 bg-tertuary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-40 right-10 w-60 h-60 bg-quartery/5 rounded-full blur-3xl"></div>

                    <h1 className="font-playfair text-secondary text-3xl sm:text-5xl text-center mb-10 animate-fadeIn">
                        TEAM & CREDITS
                    </h1>

                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center">
                        Project Representatives
                    </h2>

                    <div className="flex justify-center mt-8">
                        <div className="w-full max-w-md h-[400px] flex flex-col rounded-lg shadow-lg shadow-tertuary/20 overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-tertuary/30 group">
                            <div
                                className="w-full h-full bg-cover bg-center rounded-t-lg border-tertuary/50 transition-all duration-500 group-hover:saturate-[1.15] object-contain"
                                style={{
                                    backgroundImage: `url(${representativesDesktop[0].picture})`,
                                    backgroundPosition: 'center 30%',
                                    backgroundSize: 'cover'
                                }}
                            ></div>
                            <div className="rounded-b-lg bg-gradient-to-r from-tertuary to-quartery py-3 transition-all duration-300 group-hover:from-quartery group-hover:to-tertuary">
                                <h2 className="font-montserrat text-md text-primary w-full text-center font-medium">{representativesDesktop[0].role}</h2>
                                <h1 className="font-montserrat text-lg text-primary w-full text-center font-bold">{representativesDesktop[0].name}</h1>
                            </div>
                        </div>
                    </div>

                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center mt-16 mb-8">
                        Development Team
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mb-12">
                        {developmentTeam.map((member, index) => (
                            <div key={index} className="h-[400px] w-full flex flex-col rounded-lg shadow-lg shadow-tertuary/20 overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-tertuary/30 group">
                                <div
                                    className="w-full h-full bg-cover bg-center rounded-t-lg border-tertuary/50 transition-all duration-500 group-hover:saturate-[1.15]"
                                    style={{ backgroundImage: `url(${member.picture})` }}
                                ></div>
                                <div className="rounded-b-lg bg-gradient-to-r from-tertuary to-quartery py-3 transition-all duration-300 group-hover:from-quartery group-hover:to-tertuary">
                                    <h2 className="font-montserrat text-md text-primary w-full text-center font-medium">{member.role}</h2>
                                    <h1 className="font-montserrat text-lg text-primary w-full text-center font-bold">{member.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="font-montserrat text-xl sm:text-3xl font-medium text-secondary text-center mt-8">
                        Image & Resource Credits
                    </h2>

                    <ul className="font-montserrat text-secondary list-disc px-10 py-8 bg-gradient-to-br from-primary/80 to-primary/60 backdrop-blur-sm rounded-lg border border-tertuary/30 shadow-lg shadow-tertuary/15 max-w-2xl mx-auto w-full transition-all duration-300 hover:shadow-tertuary/25 hover:border-tertuary/40">
                        <li className="mb-3">&quot;Leather Shoe&quot; - 3D model by assetfactory – Used under license from Sketchfab</li>
                        <li className="mb-3">&quot;Pointy Stiletto&quot; - 3D model by hiirusama – Used under license from Sketchfab</li>
                        <li className="mb-3">&quot;Tour de takong&quot; Stiletto race Picture from Marikina PIO Marikina PIO Page - https://www.facebook.com/MarikinaPIO</li>
                        <li>Fireworks, Caravan And Concert Photos from Sapatos Festival Official Page - https://www.facebook.com/InsideMarikina</li>
                    </ul>
                </div>
            )}
        </>
    );
}
