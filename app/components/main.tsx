"use client";
import ShoeEventCard from "./main-components/shoe-event-card";

export default function Component() {
    return (
        <div id="main-section" className="flex flex-col gap-8 py-28">
            <h1 className="font-playfair text-secondary text-3xl sm:text-5xl">
                THE HEART OF SHOE MAKING
            </h1>

            <ShoeEventCard
                image="/shoe3.png"
                title="GIANT SHOE OF MARIKINA"
                subtitle="Craft. Pride. Giant"
            />
            <ShoeEventCard
                image="/shoe4.png"
                title="BAZAAR"
                subtitle="Shop. Discover. Enjoy."
            />
            <ShoeEventCard
                image="/shoe5.png"
                title="STILLETO RACE"
                subtitle="Run in heels."
            />
            <ShoeEventCard
                image="/shoe6.png"
                title="CARAVAN"
                subtitle="Tradition on tour."
            />
            <ShoeEventCard
                image="/shoe7.png"
                title="CONCERTS AND PERFORMANCE"
                subtitle="Music. Dance. Vibes."
            />
            <ShoeEventCard
                image="/shoe8.png"
                title="FIREWORKS DISPLAY"
                subtitle="Light the sky."
            />
        </div>
    );
}
