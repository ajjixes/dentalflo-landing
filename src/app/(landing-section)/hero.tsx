"use client"

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { Iphone15Pro } from "@/components/magicui/iphone-15-pro";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { SignalHigh, WifiHigh, BatteryFull } from "lucide-react";

const Hero = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                hour: '2-digit',
                minute: '2-digit',
             
                hour12: true,
                timeZone: 'Australia/Sydney',
            };
            const timeString = now.toLocaleTimeString('en-AU', options);
            setTime(timeString);
        };

        updateTime(); // set immediately
        const interval = setInterval(updateTime, 1000); // update every second
        return () => clearInterval(interval); // cleanup
    }, []);


    return (
        <div className="flex flex-col items-center justify-center pt-40 px-6  ">
            <div className="z-10 flex items-center justify-center mb-4">
                <div className="border rounded-full bg-white dark:bg-muted">
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out ">
                        <span className="text-sm">✨ AI-Powered Booking</span>
                        {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
                    </AnimatedShinyText>
                </div>
            </div>

            <div className="relative z-10 text-3xl md:text-4xl lg:text-5xl max-w-5xl font-semibold text-center">
                Meet Your New AI-Powered Receptionist
                {/* Say Hello to Your AI Receptionist. */}
            </div>
            <div className=" relative z-10 text-sm md:text-lg max-w-3xl text-center mt-4 opacity-70">From Inquiry to Calendar Booking in Seconds with AI Automation Voice and SMS for seamless real-time calendar integration.</div>
            <div className="relative z-10 flex gap-3 mt-10">
                <Button variant="outline" size="lg" className="rounded-full">Get Started</Button>
                <Button size="lg" className="rounded-full">View Demo</Button>
            </div>

            <div className="relative flex justify-center items-start  h-[35rem] w-full max-w-[29rem] overflow-y-hidden ">
                <div className="absolute z-20 top-[3.2rem] xs:top-[3.6rem] sm:top-[3.9rem] md:top-[4.5rem] flex items-center justify-between w-[calc(100%-3.6rem)] xs:w-[calc(100%-5rem)] md:w-[calc(100%-6rem)] h-[40px]  ">
                    <div className="text-xs opacity-70">
                        {time}
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 opacity-70">
                        <SignalHigh strokeWidth={2.5} className="  h-4 w-4 md:h-6 md:w-6" />
                        <WifiHigh strokeWidth={2.5} className="  h-4 w-4 md:h-6 md:w-6" />
                        <BatteryFull className="mt-2  h-4 w-4 md:h-6 md:w-6" />
                    </div>
                </div>
                <div className="absolute top-40 z-20 w-[calc(100%-4rem)] ">
                    <div className="flex gap-2 items-center p-4 bg-white dark:bg-accent border rounded-xl">
                        <Image src="/logo.png" className="w-10 h-10" alt="Logo" width={100} height={100} />
                        <div>
                            <div className="text-sm font-semibold">Say Hello to Your AI Receptionist.</div>
                            <p className="text-xs opacity-70 max-w-[15rem]">Let your voice assistant book, follow up, and impress!</p>
                        </div>

                    </div>
                    <div className="p-4 bg-white dark:bg-accent rounded-xl mt-4 space-y-4 border">
                        <Input type="tel" className="w-full dark:bg-accent h-12 text-center text-xs md:text-sm" placeholder="Enter Phone Number" />
                        <Button className="w-full h-12 text-xs md:text-sm">Try the Demo</Button>
                    </div>
                  
                </div>
                <Iphone15Pro className="mt-10 w-full z-10" />
            </div>

        </div>
    )
}

export default Hero