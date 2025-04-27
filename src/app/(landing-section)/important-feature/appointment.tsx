"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Content = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex items-center justify-center p-2 border bg-muted ",
                className,
            )}
        >
            {children}
        </div>
    );
});

Content.displayName = "Content";

export function Appointment() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    return (
        <div
            className="relative overflow-hidden"
            ref={containerRef}
        >
            {/* <div className=" inline-flex items-center flex-col gap-10">
                <Content className=" xl:scale-100 rounded-lg flex items-center justify-center" ref={div1Ref}>
                    <div className="flex items-center gap-1">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="-space-y-1">
                            <div className="text-sm font-medium">Olivia Smith</div>
                            <div className="text-xs text-muted-foreground ">
                                Patient
                            </div>
                        </div>
                    </div>
                </Content>
                <div className="relative flex items-center">
                    <Content className=" xl:scale-100 rounded-full w-fit" ref={div2Ref}>
                        <div className="text-xs text-muted-foreground">Conversation ...</div>
                    </Content>

                    <Content className=" xl:scale-100 absolute -right-[14rem] rounded-full" ref={div6Ref}>
                        <div className="text-xs text-muted-foreground">Booked ...</div>
                    </Content>
                </div>
                <div className="relative flex items-center">
                    <Content className=" xl:scale-100 border-0 p-0" ref={div3Ref}>
                        <Image src="/logo.png" alt="logo" width={50} height={50} />
                    </Content>
                    <Content className=" xl:scale-100 absolute -right-[8.5rem] rounded-full " ref={div4Ref}>
                        <div className="text-xs text-muted-foreground ">Booking ...</div>
                    </Content>
                    <Content className=" xl:scale-100 absolute -right-[15rem] border-0 p-0" ref={div5Ref}>
                        <Image src="/logo.png" alt="logo" width={50} height={50} />
                    </Content>
                </div>
            </div> */}

            <div className="grid grid-cols-6 grid-rows-3 gap-y-10">
                <div className="col-span-2 flex justify-center items-center z-10">
                    <Content className="rounded-lg flex items-center justify-center w-fit" ref={div1Ref}>
                        <div className="flex items-center gap-1">
                            <Avatar className="w-6 h-6">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="-space-y-1">
                                <div className="text-sm font-medium line-clamp-1">Olivia Smith</div>
                                <div className="text-[10px] md:text-xs text-muted-foreground ">
                                    Patient
                                </div>
                            </div>
                        </div>
                    </Content>
                </div>
                {/* Placeholder */}
                <div className="col-span-4"></div>

                <div className="col-span-2 flex justify-center h-fit">
                    <Content className="rounded-full w-fit" ref={div2Ref}>
                        <div className="line-clamp-1 break-all text-[10px] md:text-xs text-muted-foreground">Conversation ...</div>
                    </Content>
                </div>
                {/* Placeholder */}
                <div className="col-span-2"></div>

                <div className="col-span-2 flex justify-center h-fit">
                    <Content className="rounded-full w-fit" ref={div6Ref}>
                        <div className="line-clamp-1 break-all text-[10px] md:text-xs text-muted-foreground">Booked ...</div>
                    </Content>
                </div>
                
                <div className="col-span-2 flex justify-center h-fit">
                    <Content className="border-0 p-0" ref={div3Ref}>
                        <Image src="/logo.png" alt="logo" width={50} height={50} />
                    </Content>
                </div>

                <div className="col-span-2 flex justify-center items-center">
                    <Content className="rounded-full w-fit h-fit" ref={div4Ref}>
                        <div className="line-clamp-1 break-all text-[10px] md:text-xs text-muted-foreground ">Booking ...</div>
                    </Content>
                </div>

                <div className="col-span-2 flex justify-center h-fit">
                    <Content className="border-0 p-0" ref={div5Ref}>
                        <Image src="/logo.png" alt="logo" width={50} height={50} />
                    </Content>
                </div>
            </div>

            <AnimatedBeam
                duration={4}
                delay={0}
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
                beamAxis="Y"
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
                beamAxis="X"
            />
            <AnimatedBeam
                duration={4}
                delay={1}
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div5Ref}
                beamAxis="X"
            />
            <AnimatedBeam
                duration={4}
                delay={2}
                reverse={true}
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
                beamAxis="Y"
            />
        </div>
    );
}

