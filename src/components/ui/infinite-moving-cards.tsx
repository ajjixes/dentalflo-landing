"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    className,
}: {
    items: {
        image: string;
        name: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleAnimation = () => {
            addAnimation();
        };
        
        handleAnimation();
        // Empty dependency array ensures this only runs once on mount
    }, []);

    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                // className={cn(
                //     "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                //     start && "animate-scroll",
                //     pauseOnHover && "hover:[animation-play-state:paused]",
                // )}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4",
                    start && "animate-scroll",
                   
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="h-12 flex items-center justify-center"
                        key={idx}
                    >
                        <Image src={item.image} alt={item.name} width={100} height={100} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
