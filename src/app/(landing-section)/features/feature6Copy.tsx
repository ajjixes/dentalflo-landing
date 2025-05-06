"use client";

import { AnimatedBeam } from "@/components/magicui/animated-beam";

import React, { useRef } from "react";

import { DotPattern } from "@/components/magicui/dot-pattern";
import { CirclePlay, Contact, CalendarRange, LaptopMinimalCheck, BellDot, BotMessageSquare, Plus, PhoneCall } from "lucide-react";


const Feature6 = () => {

    const flowContainerRef = useRef<HTMLDivElement>(null);
    const flow1Ref = useRef<HTMLDivElement>(null);
    const flow2Ref = useRef<HTMLDivElement>(null);
    const flow3Ref = useRef<HTMLDivElement>(null);
    const flow4Ref = useRef<HTMLDivElement>(null);
    const flow5Ref = useRef<HTMLDivElement>(null);
    const flow6Ref = useRef<HTMLDivElement>(null);


    return (
        <div className="flex items-center flex-col relative w-full h-full pb-5" ref={flowContainerRef}>
            <DotPattern className="opacity-70 z-0 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
            <div className="absolute top-0 w-full h-[3rem] bg-gradient-to-b from-white dark:from-dark-primary to-transparent"></div>
            <div className="absolute bottom-0 w-full h-[3rem] bg-gradient-to-t from-white dark:from-dark-primary to-transparent"></div>


            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-y-16 w-full p-4 md:p-6">
                <div className=" flex justify-center">
                    <div className="flex flex-col items-center">
                        <div className="bg-[#E5FBF0] dark:bg-[#112C31] p-2 rounded-lg flex -mb-2 md:mb-0 md:gap-2 scale-60 md:scale-70 border border-green-400">
                            <CirclePlay className="min-w-5 h-5 text-green-400" />
                            <div className="text-sm md:text-base whitespace-nowrap">Start with</div>
                        </div>
                        <div className="relative flex gap-2 bg-muted z-10 rounded-lg p-2 w-fit h-fit border scale-70 md:scale-100" ref={flow1Ref}>
                            <Contact className="min-w-5 h-5 text-secondary" />
                            <div className="text-sm md:text-base">Lead Comes In</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <div className="relative flex gap-2 bg-muted z-10 rounded-lg p-2 w-fit h-fit border scale-70 md:scale-100" ref={flow4Ref}>
                        <BotMessageSquare className="min-w-5 h-5 text-primary" />
                        <div className="text-sm md:text-base">Send Follow-up SMS</div>
                    </div>
                </div>
                <div className="md:block hidden"></div>
                <div className="flex justify-center">
                    <div className="relative flex gap-2 bg-muted z-10 rounded-lg p-2 w-fit h-fit border scale-70 md:scale-100">
                        <PhoneCall className="min-w-5 h-5 text-green-400" />
                        <div className="text-sm md:text-base">Handle Call</div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="bg-primary relative z-10 rounded-full p-1 scale-70 md:scale-100 h-fit w-fit">
                        <Plus className="w-5 h-5 text-white" />
                    </div>
                </div>
                <div className="lg:block hidden"></div>
                <div className="flex items-center justify-center" >
                    <div className="relative flex gap-2 bg-muted z-10 rounded-lg p-2 w-fit h-fit border scale-70 md:scale-100" ref={flow2Ref}>
                        <CalendarRange className="min-w-5 h-5 text-red-400" />
                        <div className="text-sm md:text-base">Wait 1 Day</div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative flex gap-2 bg-muted z-10 rounded-lg p-2 w-fit h-fit border scale-70 md:scale-100" ref={flow3Ref}>
                        <LaptopMinimalCheck className="min-w-5 h-5 text-amber-400" />
                        <div className="text-sm md:text-base">Has the lead booked?</div>
                    </div>
                </div>
                <div className="block lg:hidden"></div>
                <div className="flex justify-center mt-6 md:mt-10 lg:mt-0">
                    <div className="relative flex gap-2 bg-muted z-10 rounded-lg p-2 w-fit h-fit border scale-70 md:scale-100" ref={flow5Ref}>
                        <BellDot className="min-w-5 h-5 text-[#645EE2]" />
                        <div className="text-sm md:text-base">Send Appointment Reminder</div>
                    </div>
                </div>
            </div>
            <AnimatedBeam
                duration={4}
                delay={0}
                containerRef={flowContainerRef}
                fromRef={flow1Ref}
                toRef={flow2Ref}
                beamAxis="Y"
                pathColor={{
                    light: "#ececec",
                    dark: "#537BEA"
                }}
            />

            <AnimatedBeam
                duration={4}
                delay={0.7}
                containerRef={flowContainerRef}
                fromRef={flow2Ref}
                toRef={flow3Ref}
                beamAxis="X"
                pathColor={{
                    light: "#ececec",
                    dark: "#537BEA"
                }}
            />
            <AnimatedBeam
                duration={4}
                delay={1}
                containerRef={flowContainerRef}
                fromRef={flow3Ref}
                toRef={flow4Ref}
                beamAxis="Y"
                reverse={true}
                pathColor={{
                    light: "#ececec",
                    dark: "#537BEA"
                }}
            />
            <AnimatedBeam
                duration={4}
                delay={1}
                containerRef={flowContainerRef}
                fromRef={flow3Ref}
                toRef={flow5Ref}
                beamAxis="X"
                pathColor={{
                    light: "#ececec",
                    dark: "#537BEA"
                }}
                className="lg:block hidden"
            />
            <AnimatedBeam
                duration={4}
                delay={1}
                containerRef={flowContainerRef}
                fromRef={flow3Ref}
                toRef={flow5Ref}
                beamAxis="Y"
                pathColor={{
                    light: "#ececec",
                    dark: "#537BEA"
                }}
                className="block lg:hidden"
            />
        </div>
    )
}

export default Feature6