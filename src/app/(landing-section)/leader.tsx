"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import { Blocks, Layers2, Lock } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";


const Content = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                className,
            )
            }
        >
            {children}
        </div >
    );
});
Content.displayName = "Content";

const Leader = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);

    return (
        <div className='flex flex-col items-center justify-center pt-40 max-w-7xl w-full mx-auto p-6'>
            <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center">
                Enterprise-Ready. Backed by Australia’s Dental Leaders.
            </div>
            <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70">
                Built to integrate, scale, and support practices at every stage.
            </div>

            <div
                className="flex flex-col items-center justify-center relative w-full pb-6 mt-16"
                ref={containerRef}
            >
                <div ref={div1Ref}>
                    <MagicCard className="bg-white dark:bg-background z-20 rounded-xl w-fit">
                        <div className="grid grid-cols-3">
                            <div className="w-full p-4 md:p-10 border-r">
                                <Image src="/partner-logo/partner1.png" alt="partner1" width={100} height={100} />
                            </div>
                            <div className="w-full p-4 md:p-10 border-r">
                                <Image src="/partner-logo/partner2.png" alt="partner2" width={100} height={100} />
                            </div>
                            <div className="w-full p-4 md:p-10">
                                <Image src="/partner-logo/partner3.png" alt="partner3" width={100} height={100} />
                            </div>
                        </div>
                    </MagicCard>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-16 gap-16 md:gap-0">
                    <div ref={div2Ref}>
                        <MagicCard className="z-10 p-4 md:p-6 rounded-xl w-full md:max-w-[20rem]">
                            <Blocks />
                            <div className="text-lg mt-6">Built for PMS</div>
                            <p className="text-sm opacity-70">Native integrations—no workarounds</p>
                        </MagicCard>
                    </div>

                    <div className="hidden relative md:flex justify-center items-center z-20 " ref={div3Ref}>
                        <MagicCard className="w-20 aspect-square p-3 rounded-xl">
                            <Image src="/logo.png" alt="logo" width={100} height={100} />
                        </MagicCard>

                        {/* <div className="h-[18px] aspect-square bg-background"></div> */}
                    </div>

                    <div ref={div4Ref}>
                        <MagicCard className="md:ms-auto z-10 p-4 md:p-6 rounded-xl w-full md:max-w-[20rem]">
                            <Lock />

                            <div className="text-lg mt-6">Secure & Compliant</div>
                            <p className="text-sm opacity-70">Data privacy and realiability built-in</p>
                        </MagicCard>

                    </div>
                </div>

                <div className="flex justify-center w-full" ref={div5Ref}>
                    <MagicCard className="bg-background z-20 p-4 md:p-6 rounded-xl w-full md:max-w-[20rem] mt-16">
                        <Layers2 />

                        <div className="text-lg mt-6">Scalable Architecture</div>
                        <p className="text-sm opacity-70">Single or multi-location ready</p>
                    </MagicCard>
                </div>

                {/* <AnimatedBeam
                    duration={4}
                    delay={0}
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div3Ref}
                    startXOffset={10}
                    endXOffset={10}
                    beamAxis="Y"
                    className="hidden md:block"
                />
                <AnimatedBeam
                    duration={4}
                    delay={0}
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div3Ref}
                    startXOffset={-10}
                    endXOffset={-10}
                    beamAxis="Y"
                    className="hidden md:block"
                /> */}
                <AnimatedBeam
                    duration={4}
                    delay={0}
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div5Ref}

                    beamAxis="Y"
                    className="md:z-10"
                />
                <AnimatedBeam
                    duration={4}
                    delay={0}
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={div2Ref}
                    // startXOffset={100}
                    // endXOffset={100}
                    beamAxis="X"
                    reverse={true}
                    className="hidden md:block"
                />
                <AnimatedBeam
                    duration={4}
                    delay={0}
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={div4Ref}
                    // startXOffset={100}
                    // endXOffset={100}
                    beamAxis="X"
                    className="hidden md:block"
                />
            </div>
        </div>
    )
}

export default Leader