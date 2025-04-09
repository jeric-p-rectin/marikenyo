import LeatherShoe from "./leather-shoe";
import Heel from "./heel"
export default function About() {
    return (
        <div className="flex flex-col bg-primary bg-cover bg-center gap-5">
            <h1 className="font-playfair text-secondary text-3xl sm:text-5xl">ABOUT THE MARIKINA SHOE FESTIVAL</h1>
            <p className="font-montserrat text-secondary text-md sm:text-xl">The Marikina Shoe Festival is a tribute to the city’s rich shoemaking heritage, showcasing the artistry and dedication of local craftsmen. As the Shoe Capital of the Philippines, Marikina continues to shape the industry with world-class footwear, blending tradition with innovation.</p>
            <div><LeatherShoe /></div>
            <div><Heel /></div>
        </div>
    )
}