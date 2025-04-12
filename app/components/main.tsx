"use client";
import ShoeEventCard from "./main-components/shoe-event-card";
import ShoeEventCardContent from "./main-components/shoe-event-card-content";
// import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function Component() {
    // const isDesktop = useMediaQuery({ query: '(min-width: 640px)' }); // Check if the device is desktop
    const [showGiantShoeContent, setShowGiantShoeContent] = useState(false);
    const [showBazaarContent, setShowBazaarContent] = useState(false);
    const [showStilettoRaceContent, setShowstilettoRaceContent] = useState(false);
    const [showCaravanContent, setShowCaravanContent] = useState(false);
    const [showConcertContent, setShowConcertContent] = useState(false);
    const [showFireworksContent, setShowFireworksContent] = useState(false);

    return (
        <div id="main-section" className="flex flex-col gap-14 py-28">
            <h1 className="font-playfair text-secondary text-3xl sm:text-5xl sm:text-center">
                THE HEART OF SHOE MAKING
            </h1>

            <ShoeEventCard
                image="/shoe3.png"
                title="GIANT SHOE OF MARIKINA"
                subtitle="Craft. Pride. Giant"
                showEventCardContent={() => setShowGiantShoeContent(true)} // State changes to true
            />
            { showGiantShoeContent && <ShoeEventCardContent 
                title="GIANT SHOE OF MARIKINA" 
                image="/shoe3.png" 
                paragraph="The Giant Shoe of Marikina, located at Riverbanks Center in Barangka, Marikina City, is a world-famous attraction recognized by the Guinness World Records in 2002 as the largest pair of shoes globally. Measuring approximately 5.5 meters long, 2.25 meters wide, and 1.83 meters high—equivalent to a men’s US size 753—the shoe was crafted by skilled local shoemakers as a tribute to Marikina’s proud heritage as the Shoe Capital of the Philippines. It is displayed inside the Riverbanks Mall, alongside museums and other local attractions." 
                closeEventCardContent={() => setShowGiantShoeContent(false)} // Close the content (set to false)
            /> }

            <ShoeEventCard
                image="/shoe4.png"
                title="BAZAAR"
                subtitle="Shop. Discover. Enjoy."
                reverse={true}
                showEventCardContent={() => setShowBazaarContent(true)} // State changes to true
            />
             { showBazaarContent && <ShoeEventCardContent 
                title="BAZAAR" 
                image="/shoe4.png" 
                paragraph="The Giant Shoe of Marikina, located at Riverbanks Center in Barangka, Marikina City, is a world-famous attraction recognized by the Guinness World Records in 2002 as the largest pair of shoes globally. Measuring approximately 5.5 meters long, 2.25 meters wide, and 1.83 meters high—equivalent to a men’s US size 753—the shoe was crafted by skilled local shoemakers as a tribute to Marikina’s proud heritage as the Shoe Capital of the Philippines. It is displayed inside the Riverbanks Mall, alongside museums and other local attractions." 
                closeEventCardContent={() => setShowBazaarContent(false)} // Close the content (set to false)
            /> }

            <ShoeEventCard
                image="/shoe5.png"
                title="STILLETO RACE"
                subtitle="Run in heels."
                showEventCardContent={() => setShowstilettoRaceContent(true)} // State changes to true
            />
            { showStilettoRaceContent && <ShoeEventCardContent 
                title="STILETTO RACE" 
                image="/shoe5.png" 
                paragraph="The Giant Shoe of Marikina, located at Riverbanks Center in Barangka, Marikina City, is a world-famous attraction recognized by the Guinness World Records in 2002 as the largest pair of shoes globally. Measuring approximately 5.5 meters long, 2.25 meters wide, and 1.83 meters high—equivalent to a men’s US size 753—the shoe was crafted by skilled local shoemakers as a tribute to Marikina’s proud heritage as the Shoe Capital of the Philippines. It is displayed inside the Riverbanks Mall, alongside museums and other local attractions." 
                closeEventCardContent={() => setShowstilettoRaceContent(false)} // Close the content (set to false)
            /> }

            <ShoeEventCard
                image="/shoe6.png"
                title="CARAVAN"
                subtitle="Tradition on tour."
                reverse={true}
                showEventCardContent={() => setShowCaravanContent(true)} // State changes to true
            />
            { showCaravanContent && <ShoeEventCardContent 
                title="CARAVAN" 
                image="/shoe6.png" 
                paragraph="The Giant Shoe of Marikina, located at Riverbanks Center in Barangka, Marikina City, is a world-famous attraction recognized by the Guinness World Records in 2002 as the largest pair of shoes globally. Measuring approximately 5.5 meters long, 2.25 meters wide, and 1.83 meters high—equivalent to a men’s US size 753—the shoe was crafted by skilled local shoemakers as a tribute to Marikina’s proud heritage as the Shoe Capital of the Philippines. It is displayed inside the Riverbanks Mall, alongside museums and other local attractions." 
                closeEventCardContent={() => setShowCaravanContent(false)} // Close the content (set to false)
            /> }

            <ShoeEventCard
                image="/shoe7.png"
                title="CONCERTS AND PERFORMANCE"
                subtitle="Music. Dance. Vibes."
                showEventCardContent={() => setShowConcertContent(true)} // State changes to true
            />
            { showConcertContent && <ShoeEventCardContent 
                title="CONCERTS AND PERFORMANCE" 
                image="/shoe7.png" 
                paragraph="The Giant Shoe of Marikina, located at Riverbanks Center in Barangka, Marikina City, is a world-famous attraction recognized by the Guinness World Records in 2002 as the largest pair of shoes globally. Measuring approximately 5.5 meters long, 2.25 meters wide, and 1.83 meters high—equivalent to a men’s US size 753—the shoe was crafted by skilled local shoemakers as a tribute to Marikina’s proud heritage as the Shoe Capital of the Philippines. It is displayed inside the Riverbanks Mall, alongside museums and other local attractions." 
                closeEventCardContent={() => setShowConcertContent(false)} // Close the content (set to false)
            /> }

            <ShoeEventCard
                image="/shoe8.png"
                title="FIREWORKS DISPLAY"
                subtitle="Light the sky."
                reverse={true}
                showEventCardContent={() => setShowFireworksContent(true)} // State changes to true
            />
            { showFireworksContent && <ShoeEventCardContent 
                title="FIREWORKS DISPLAY" 
                image="/shoe8.png" 
                paragraph="The Giant Shoe of Marikina, located at Riverbanks Center in Barangka, Marikina City, is a world-famous attraction recognized by the Guinness World Records in 2002 as the largest pair of shoes globally. Measuring approximately 5.5 meters long, 2.25 meters wide, and 1.83 meters high—equivalent to a men’s US size 753—the shoe was crafted by skilled local shoemakers as a tribute to Marikina’s proud heritage as the Shoe Capital of the Philippines. It is displayed inside the Riverbanks Mall, alongside museums and other local attractions." 
                closeEventCardContent={() => setShowFireworksContent(false)} // Close the content (set to false)
            /> }
        </div>
    );
}
