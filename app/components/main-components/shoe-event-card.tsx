interface ShoeEventCardProps {
    image: string;
    title: string;
    subtitle: string;
}

export default function ShoeEventCard({ image, title, subtitle }: ShoeEventCardProps) {
    return (
        <div
            className="relative group h-52 bg-cover bg-center cursor-pointer border-[1px] rounded-lg border-tertuary overflow-hidden"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#211d15] opacity-80 group-hover:opacity-0 transition-opacity duration-500"></div>

            {/* Text content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <h1 className="font-montserrat text-xl font-medium text-secondary">{title}</h1>
                <h3 className="font-montserrat text-secondary">{subtitle}</h3>
            </div>
        </div>
    );
}