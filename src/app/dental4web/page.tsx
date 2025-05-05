import Navbar from "@/components/navbar";


import Footer from "@/components/footer";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Vortex } from "@/components/ui/vortex";
import Feature from "../(landing-section)/feature";
export default function Home() {

    return (
        <div className="w-full flex flex-col items-center overflow-hidden">
            <Navbar />
            <div className="w-full flex flex-col justify-center max-h-[1080px] mx-auto rounded-md min-h-screen overflow-hidden">
                <div className="h-[40rem] w-full">
                    <Vortex
                        backgroundColor="transparent"

                        className="flex items-center flex-col justify-center w-full h-full"
                    >
                        <div className="z-10 flex items-center justify-center mb-4">
                            <div className="border rounded-full bg-white dark:bg-muted/20 backdrop-blur-sm">
                                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out ">
                                    <span className="text-sm">✨ AI-Powered Booking</span>
                                </AnimatedShinyText>
                            </div>
                        </div>
                        {/* <div className="">
                            <Image src="/partner-logo/centaur.png" className="w-full max-w-[15rem]" alt="Centaur Logo" width={100} height={100} />
                        </div> */}
                        <div className="relative flex items-center justify-center gap-2 z-10 text-3xl md:text-4xl lg:text-5xl max-w-6xl font-semibold text-center px-4 md:px-6">
                            Your Dental4 AI Receptionist Has Arrived
                        </div>
                        <div className=" relative z-10 text-sm md:text-lg max-w-4xl text-center mt-4 opacity-70 px-4 md:px-6">
                            Built to integrate seamlessly with Dental4Web and Dental4Windows, Dentalflo delivers instant, AI-powered automation — without disrupting your current workflow.
                        </div>

                        <div className="relative z-10 flex gap-3 mt-10">
                            <a href="https://sandbox.dentalfloai.com/demo-centaur" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary font-semibold text-lg text-white px-8 py-4 hover:bg-primary/70 transition-colors duration-300">View Demo</a>
                        </div>
                    </Vortex>
                </div>
            </div >

            <div className="-mt-40 mb-40">
                <Feature />
            </div>

            <Footer />
        </div >
    );
}
