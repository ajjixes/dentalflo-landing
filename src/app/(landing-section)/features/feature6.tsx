"use client";

// import { AnimatedBeam } from "@/components/magicui/animated-beam";

import React, { useRef } from "react";

import { GridPattern } from "@/components/magicui/grid-pattern";


const Feature6 = () => {

    const flowContainerRef = useRef<HTMLDivElement>(null);
    // const flow1Ref = useRef<HTMLDivElement>(null);
    // const flow2Ref = useRef<HTMLDivElement>(null);
    // const flow3Ref = useRef<HTMLDivElement>(null);
    // const flow4Ref = useRef<HTMLDivElement>(null);
    // const flow5Ref = useRef<HTMLDivElement>(null);
    // const flow6Ref = useRef<HTMLDivElement>(null);  

    
    return (
        <div className="flex items-center flex-col relative w-full h-full" ref={flowContainerRef}>
            <GridPattern
                width={23}
                height={23}
                className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
            />
         

        </div>
    )
}

export default Feature6