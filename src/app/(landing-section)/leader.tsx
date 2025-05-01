"use client";

import React, { useRef } from "react";

import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import { Blocks, Layers2, Lock } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const Leader = () => {
    // const partners = [
    //     {
    //         name: "CorePractice",
    //         image: "/partner-logo/CorePractice.svg",
    //         width: "w-[10rem]",

    //     },
    //     {
    //         name: "Dental4Web",
    //         image: "/partner-logo/Dental4Web.svg",
    //         width: "w-[10rem]",

    //     },
    //     {
    //         name: "Dentally",
    //         image: "/partner-logo/Dentally.svg",
    //         width: "w-[10rem]",

    //     },
    //     {
    //         name: "Praktika",
    //         image: "/partner-logo/Praktika.svg",
    //         width: "w-[10rem]",
    //     },
    // ]


    const containerRef = useRef<HTMLDivElement>(null);
    const corePracticeRef = useRef<HTMLDivElement>(null);
    const partnersRef = useRef<HTMLDivElement>(null);
    const dental4WebRef = useRef<HTMLDivElement>(null);
    const dentallyRef = useRef<HTMLDivElement>(null);
    const praktikaRef = useRef<HTMLDivElement>(null);
    const dentaflowRef = useRef<HTMLDivElement>(null);
    const feature1Ref = useRef<HTMLDivElement>(null);
    const feature2Ref = useRef<HTMLDivElement>(null);
    const feature3Ref = useRef<HTMLDivElement>(null);

    const spacerRef = useRef<HTMLDivElement>(null);



    return (
        <div className="mt-20 bg-[#111827] w-full">
            <div className='flex flex-col items-center justify-center max-w-6xl py-20 w-full mx-auto p-6' >
                <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center text-white">
                    Enterprise-Ready. Backed by Australia’s Dental Leaders.
                </div>
                <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70 text-white">
                    Built to integrate, scale, and support practices at every stage.
                </div>

                <div className="mt-16 relative flex flex-col items-center justify-center min-h-[500px] w-full overflow-hidden rounded-lg border border-white/10 bg-dark-primary p-4 lg:p-10" ref={containerRef}>
                    <MagicCard className="bg-dark-primary z-20 rounded-xl relative">
                        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center" ref={partnersRef}>
                            <div className="border-b md:border-b-0 border-r border-white/10 h-full flex justify-center items-center p-4" ref={corePracticeRef}>
                                <div className="h-10 md:h-[2.2rem] flex items-center justify-center">
                                    <Image src="/partner-logo/CorePractice.svg" alt="Dental4Web" className="h-full w-full" width={100} height={100} />
                                </div>
                            </div>
                            <div className="border-b md:border-b-0 md:border-r border-white/10 h-full flex justify-center items-center p-4" ref={dental4WebRef}>
                                <div className="h-10 md:h-[2.2rem] flex items-center justify-center">
                                    <Image src="/partner-logo/Dental4Web.svg" alt="Dental4Web" className="h-full w-full" width={100} height={100} />
                                </div>
                            </div>
                            <div className="border-r border-white/10 h-full flex justify-center items-center p-4" ref={dentallyRef}>
                                <div className="h-10 md:h-[2.2rem] flex items-center justify-center">
                                    <Image src="/partner-logo/Dentally.svg" alt="Dentally" className="h-full w-full" width={100} height={100} />
                                </div>
                            </div>
                            <div className=" h-full flex justify-center items-center p-4" ref={praktikaRef}>
                                <div className="h-10 md:h-[4rem] flex items-center justify-center">
                                    <Image src="/partner-logo/Praktika.svg" alt="Praktika" className="h-full w-full" width={100} height={100} />
                                </div>
                            </div>
                        </div>
                        {/* Spacer */}
                        {/* <div className="absolute -bottom-5 h-[10px] w-full bg-red-500 grid grid-cols-4">
                            <div className="h-full bg-blue-500"></div>
                            <div className="h-full bg-blue-500"></div>
                            <div className="h-full bg-blue-500"></div>
                            <div className="h-full bg-blue-500"></div>
                        </div> */}
                    </MagicCard>

                    <div className="flex h-[10px] w-[10px] mt-5" ref={spacerRef}></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center  w-full mt-16 gap-16 md:gap-0 text-white">
                        <div className="order-2 md:order-1" ref={feature1Ref}>
                            <MagicCard className="z-10 p-4 md:p-6 rounded-xl w-full md:max-w-[20rem]">
                                <Blocks />
                                <div className="text-lg mt-6">Built for PMS</div>
                                <p className="text-sm opacity-70">Native integrations—no workarounds</p>
                            </MagicCard>
                        </div>

                        <div className="order-1 md:order-2 relative flex justify-center items-center z-20 " ref={dentaflowRef}>
                            <MagicCard className="w-20 aspect-square p-3 rounded-xl">
                                <Image src="/logo.png" alt="logo" width={100} height={100} />
                            </MagicCard>

                            {/* <div className="h-[18px] aspect-square bg-background"></div> */}
                        </div>

                        <div className="order-3" ref={feature2Ref}>
                            <MagicCard className="md:ms-auto z-10 p-4 md:p-6 rounded-xl w-full md:max-w-[20rem]">
                                <Lock />

                                <div className="text-lg mt-6">Secure & Compliant</div>
                                <p className="text-sm opacity-70">Data privacy and realiability built-in</p>
                            </MagicCard>

                        </div>
                    </div>

                    <div className="flex justify-center w-full text-white" ref={feature3Ref}>
                        <MagicCard className=" z-20 p-4 md:p-6 rounded-xl w-full md:max-w-[20rem] mt-16">
                            <Layers2 />

                            <div className="text-lg mt-6">Scalable Architecture</div>
                            <p className="text-sm opacity-70">Single or multi-location ready</p>
                        </MagicCard>
                    </div>
                    <AnimatedBeam
                        duration={4}
                        delay={0}
                        containerRef={containerRef}
                        fromRef={partnersRef}
                        toRef={dentaflowRef}
                        beamAxis="Y"
                        className="md:hidden block"
                    />

                    <AnimatedBeam
                        duration={4}
                        delay={0}
                        containerRef={containerRef}
                        fromRef={corePracticeRef}
                        toRef={spacerRef}
                        beamAxis="X"
                        className="hidden md:block"
                    />

                    <AnimatedBeam
                        duration={4}
                        delay={0}
                        containerRef={containerRef}
                        fromRef={praktikaRef}
                        toRef={spacerRef}
                        reverse={true}
                        beamAxis="X"
                        className="hidden md:block"
                    />
                    <AnimatedBeam
                        duration={4}
                        delay={0}
                        containerRef={containerRef}
                        fromRef={dental4WebRef}
                        toRef={spacerRef}
                        beamAxis="X"
                        className="hidden md:block"
                    />
                    <AnimatedBeam
                        duration={4}
                        delay={0}
                        containerRef={containerRef}
                        fromRef={dentallyRef}
                        toRef={spacerRef}
                        reverse={true}
                        beamAxis="X"
                        className="hidden md:block"
                    />
                    <AnimatedBeam
                        duration={4}
                        delay={0.2}
                        containerRef={containerRef}
                        fromRef={dentaflowRef}
                        toRef={spacerRef}
                        beamAxis="Y"
                        className="hidden md:block"
                    />

                    <AnimatedBeam
                        duration={4}
                        delay={0.2}
                        containerRef={containerRef}
                        fromRef={dentaflowRef}
                        toRef={feature1Ref}
                        beamAxis="X"
                        className="hidden md:block"
                    />
                    <AnimatedBeam
                        duration={4}
                        delay={0.2}
                        containerRef={containerRef}
                        fromRef={dentaflowRef}
                        toRef={feature2Ref}
                        beamAxis="X"
                        reverse={true}
                        className="hidden md:block"
                    />
                    <AnimatedBeam
                        duration={4}
                        delay={0.2}
                        containerRef={containerRef}
                        fromRef={dentaflowRef}
                        toRef={feature3Ref}
                        beamAxis="Y"
                        reverse={true}
                    />

        
                    <FlickeringGrid
                        className="absolute inset-0 mt-1.5 z-0 size-full opacity-50"
                        squareSize={4}
                        gridGap={6}
                        color="#6B7280"

                    />
                </div>
            </div>
        </div>
    )
}

export default Leader