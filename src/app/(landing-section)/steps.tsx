import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import React from 'react'

const Steps = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-40 max-w-7xl w-full mx-auto p-6">

            <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center">
                Up and Running in 3 Easy Steps
            </div>
            <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70">No hardware. No hassle. Just smarter calls from day one.</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-4 w-full">
                <div className="w-full bg-white dark:bg-background border p-4 md:p-6 rounded-xl">
                    {/* <div className="text-6xl font-extrabold bg-gradient-to-b from-foreground/50 to-background to-90% text-transparent bg-clip-text">
                        01
                    </div> */}
                    <AnimatedShinyText className="rounded-full border inline-flex items-center justify-center px-4 py-1 transition ease-out ">
                        <span className="text-xs font-bold">01</span>
                    </AnimatedShinyText>
                    <div className="text-lg lg:text-xl mt-4 mb-2">Book a Demo</div>
                    <p className="text-sm text-muted-foreground">See your workflow in action—live with your use case.</p>
                    <div className=" h-[15rem]">

                    </div>
                </div>

                <div className="w-full bg-white dark:bg-background border p-4 md:p-6 rounded-xl">
                    <AnimatedShinyText className="rounded-full border inline-flex items-center justify-center px-4 py-1 transition ease-out ">
                        <span className="text-xs font-bold">02</span>
                    </AnimatedShinyText>
                    <div className="text-lg lg:text-xl mt-4 mb-2">Connect Your Systems</div>
                    <p className="text-sm text-muted-foreground">We sync with or install your phone system, booking calendar, and CRM tools.</p>
                    <div className=" h-[15rem]">

                    </div>
                </div>

                <div className="w-full bg-white dark:bg-background border p-4 md:p-6 rounded-xl">
                    <AnimatedShinyText className="rounded-full border inline-flex items-center justify-center px-4 py-1 transition ease-out ">
                        <span className="text-xs font-bold">03</span>
                    </AnimatedShinyText>
                    <div className="text-lg lg:text-xl mt-4 mb-2">Go Live</div>
                    <p className="text-sm text-muted-foreground">Start handling calls, bookings, and follow-ups with AI—all within1 Hour.</p>
                    <div className=" h-[15rem]">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Steps