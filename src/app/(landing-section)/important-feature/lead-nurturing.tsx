"use client";

import { cn } from '@/lib/utils';
import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from 'next/image';

const Content = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex items-center justify-center p-2 border-2 bg-white ",
                className,
            )}
        >
            {children}
        </div>
    );
});
Content.displayName = "Content";


const LeadNurturing = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);

    return (
        <div className="relative overflow-hidden"
            ref={containerRef}>
            <div className="grid grid-cols-6 ">
                <div className="col-span-3  flex justify-center items-center z-10">
                    <Content className="flex-col rounded-lg w-full" ref={div1Ref}>
                        <div className="flex items-center w-full justify-between">
                            <div className="text-sm font-medium">Leads</div>
                            <div className="text-[10px] bg-primary text-white rounded-full px-1.5 py-1">10</div>
                        </div>
                        <div className="flex flex-col w-full gap-1 mt-3">
                            <span className=' bg-primary/75 h-3 w-[75%] rounded-full' />
                            <span className=' bg-primary/50 h-3 w-full rounded-full' />
                            <span className=' bg-primary/50 h-3 w-full rounded-full' />
                        </div>
                    </Content>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2 flex justify-center">
                    <Content className="border-0 p-0 bg-transparent" ref={div2Ref}>
                        <Image src="/logo.png" alt="logo" width={50} height={50} />
                    </Content>
                </div>
                <div className="col-span-4 h-fit"></div>
                <div className="col-span-2 flex justify-center items-center h-fit">
                    <Content className="rounded-full w-fit h-fit" ref={div3Ref}>
                        <div className="line-clamp-1 break-all text-[10px] md:text-xs text-muted-foreground ">Auto-reply ...</div>
                    </Content>
                </div>
                <div className="col-span-3 flex justify-center items-center z-10">
                    <Content className="flex-col rounded-lg w-full" ref={div5Ref}>
                        <div className="flex items-center w-full justify-between">
                            <div className="text-sm font-medium">Booked</div>
                            <div className="text-[10px] bg-primary text-white rounded-full px-1.5 py-1">32</div>
                        </div>
                        <div className="flex flex-col w-full gap-1 mt-3">
                            <span className=' bg-primary/75 h-3 w-[75%] rounded-full' />
                            <span className=' bg-primary/50 h-3 w-full rounded-full' />
                            <span className=' bg-primary/50 h-3 w-full rounded-full' />
                        </div>
                    </Content>
                </div>
                <div className="col-span-1 h-fit"></div>
                <div className="col-span-2 flex justify-center items-center ">
                    <Content className="rounded-full w-fit h-fit" ref={div4Ref}>
                        <div className="line-clamp-1 break-all text-[10px] md:text-xs text-muted-foreground ">Conversation ...</div>
                    </Content>
                </div>

            </div>

            <AnimatedBeam
                duration={4}
                delay={0}
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
                beamAxis="X"
            />
            <AnimatedBeam
                duration={4}
                delay={0}
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div3Ref}
                beamAxis="Y"
            />
            <AnimatedBeam
                duration={4}
                delay={1}
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                beamAxis="Y"
            />
            <AnimatedBeam
                duration={4}
                delay={1.5}
                reverse={true}
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div5Ref}
                beamAxis="X"
            />
        </div>
    )
}

export default LeadNurturing