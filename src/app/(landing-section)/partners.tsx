import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
const Partners = () => {
    return (
        <div>
            <div className="text-center text-sm opacity-70">Trusted by Over 1,000+ Clients Worldwide</div>
            <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={partners}
                    direction="right"
                    speed="normal"
                />
            </div>
        </div>
    )
}
const partners = [
    {
        image: "/partner-logo/partner1.png",
        name: "Charles Dickens 1",
    },
    {
        image: "/partner-logo/partner2.png",
        name: "Charles Dickens 2",
    },
    {
        image: "/partner-logo/partner3.png",   
        name: "Charles Dickens 3", 
    },
    {
        image: "/partner-logo/partner4.png",
        name: "Charles Dickens 4",
    },
    {
        image: "/partner-logo/partner5.png",
        name: "Charles Dickens 5",
    },
    {
        image: "/partner-logo/partner1.png",
        name: "Charles Dickens 6",
    },
    {
        image: "/partner-logo/partner2.png",
        name: "Charles Dickens 7",
    },
    {
        image: "/partner-logo/partner3.png",
        name: "Charles Dickens 8",
    },
    {
        image: "/partner-logo/partner4.png",
        name: "Charles Dickens 9",
    },
    {
        image: "/partner-logo/partner5.png",
        name: "Charles Dickens 10",
    },
];
export default Partners