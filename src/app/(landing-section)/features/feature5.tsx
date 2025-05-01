"use client";

import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Globe, ListPlus } from "lucide-react"
import React, { useRef } from "react";
import Image from "next/image";


const Feature5 = () => {

    const leadCaptureContainerRef = useRef<HTMLDivElement>(null);

    const FacebookRef = useRef<HTMLDivElement>(null);
    const GoogleRef = useRef<HTMLDivElement>(null);
    const WebsiteRef = useRef<HTMLDivElement>(null);

    const spacerRef1 = useRef<HTMLDivElement>(null);

    const leadCaptureRef = useRef<HTMLDivElement>(null);
    return (
        <div className="flex items-center flex-col relative" ref={leadCaptureContainerRef}>
            <div className="flex w-full justify-between">
                <div className="z-10 h-16 aspect-square bg-muted border rounded-lg p-4" ref={FacebookRef}>
                    <Image src="/social/facebook.svg" className="w-full" alt="Facebook" width={24} height={24} />
                </div>
                <div className="z-10 h-16 aspect-square bg-muted border rounded-lg p-4" ref={GoogleRef}>
                    <Image src="/social/google.svg" className="w-full" alt="Google" width={24} height={24} />
                </div>
                <div className="z-10 h-16 aspect-square bg-muted border rounded-lg p-4" ref={WebsiteRef}>
                    <Globe size={32} className="text-secondary" />
                </div>
            </div>

            <div className="flex w-full justify-center mb-10">
                <div className="h-16 aspect-square" ref={spacerRef1}></div>

            </div>

            <div className="z-10 w-full max-w-[17rem] border bg-white dark:bg-muted rounded-lg p-4 " ref={leadCaptureRef}>
                <div className="flex">
                    <ListPlus className="text-secondary" />
                    <div className="text-lg font-semibold">
                        Leads
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <span className="w-[50%] h-5 bg-gradient-to-r from-muted to-accent rounded-full"></span>
                    <span className="w-[75%] h-5 bg-accent rounded-full"></span>
                    <span className="w-[100%] h-5 bg-gradient-to-l from-muted to-accent rounded-full"></span>
                </div>
            </div>

            <AnimatedBeam
                duration={4}
                delay={0}
                containerRef={leadCaptureContainerRef}
                fromRef={FacebookRef}
                toRef={spacerRef1}
                beamAxis="X"
                pathColor={{
                    light: "#ececec",
                    dark: "#537BEA"
                }}
            />
            <AnimatedBeam
                duration={4}
                delay={0}
                containerRef={leadCaptureContainerRef}
                fromRef={GoogleRef}
                toRef={spacerRef1}
                beamAxis="Y"
                pathColor={{
                    light: "#ececec",
                    dark: "#537BEA"
                }}
            />
            <AnimatedBeam
                duration={4}
                delay={0}
                containerRef={leadCaptureContainerRef}
                fromRef={WebsiteRef}
                toRef={spacerRef1}
                beamAxis="X"
                reverse={true}
                pathColor={{
                    light: "#ececec",
                    dark: "#537BEA"
                }}
            />
            <AnimatedBeam
                duration={4}
                delay={0.2}
                containerRef={leadCaptureContainerRef}
                fromRef={spacerRef1}
                toRef={leadCaptureRef}
                beamAxis="Y"
                pathColor={{
                    light: "#ececec",
                    dark: "#537BEA"
                }}
            />
         
        </div>
    )
}

export default Feature5