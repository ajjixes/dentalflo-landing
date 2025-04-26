import { cn } from "@/lib/utils"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { Iphone15Pro } from "@/components/magicui/iphone-15-pro";


const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-40 p-6  ">
            <div className="z-10 flex items-center justify-center mb-2">
                <div
                    className={cn(
                        "group rounded-full border border-black/5  text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span className="text-sm">✨ AI-Powered Booking</span>
                        {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
                    </AnimatedShinyText>
                </div>
            </div>

            <div className="text-3xl md:text-4xl lg:text-5xl max-w-4xl text-center">
                Never Miss a Call Again. Meet Your 24/7 AI Receptionist.
            </div>
            <div className="text-sm md:text-lg max-w-3xl text-center mt-4 opacity-70">From Inquiry to Calendar Booking in Seconds with AI Automation Voice and SMS for seamless real-time calendar integration.</div>
            <div className="flex gap-3 mt-10">
                <Button variant="outline" size="lg" className="rounded-full">Get Started</Button>
                <Button size="lg" className="rounded-full">View Demo</Button>
            </div>

            <div className="relative flex justify-center max-h-[35rem] overflow-y-hidden w-full ">
                <span className="absolute bottom-0 z-20 bg-linear-to-b from-transparent to-white h-[10rem] w-full"></span>
                <Iphone15Pro className="mt-10 w-full z-10" />
            </div>
            
        </div>
    )
}

export default Hero