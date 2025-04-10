export default function Home() {
    return (
        <div id="home-section" className="flex flex-col justify-center h-screen">
            <div className="absolute inset-0 bg-[url('/marikenyobg.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-primary/75"></div>
            <div className="flex flex-col relative z-10 text-white text-center gap-5">
                <h2 className="font-montserrat text-secondary text-lg sm:text-xl">Where Every Step Tells a Story.</h2>
                <h1 className="font-playfair text-secondary text-5xl sm:text-7xl">THE SOLE OF MARIKINA</h1>
                <h2 className="font-montserrat text-secondary text-lg sm:text-xl">Experience the tradition, artistry, and passion behind shoe festival.</h2>
                <button className="bg-quartery border-secondary rounded-2xl text-2xl hover:bg-transparent transition-all sm:text-4xl p-2 self-center">EXPLORE THE FESTIVAL</button>
            </div>
        </div>
    )
}