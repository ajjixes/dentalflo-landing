"use client"

import { BlurFade } from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
// import { FlickeringGrid } from "@/components/magicui/flickering-grid"


const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    return (
        <motion.div
            ref={ref}
            className="relative w-full flex flex-col items-center justify-center mt-40 py-28 overflow-hidden px-4 md:px-6"
            animate={{
                backgroundColor: isInView ? 'var(--primary)' : '#111827'
            }}
            transition={{ duration: 0.5 }}
        >

            {/* <FlickeringGrid
                className="absolute inset-0 z-0"
                squareSize={4}
                gridGap={6}
                color="#111827"
                maxOpacity={0.5}
                flickerChance={0.1}
            /> */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-full max-w-[60rem] h-[30rem] blur-3xl"></div> */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <BlurFade delay={0.1} inView direction="up">
                    <div
                        className="text-3xl md:text-4xl lg:text-5xl max-w-5xl text-center text-white"
                    >
                        Experience the AI Front Desk in Action
                    </div>
                </BlurFade>
                <BlurFade delay={0.2} inView direction="up">
                    <div
                        className="text-sm md:text-base max-w-3xl text-center mt-4"
                    >
                        <b className="text-white">Ready to Transform Clinic?</b> <span className="opacity-70 text-white">Answer calls, book appointments, and automate patient follow-ups—all from one intelligent platform.</span>
                    </div>
                </BlurFade> 
                <BlurFade delay={0.3} inView direction="up">
                    <Button size="lg" className="rounded-full bg-white/20 hover:bg-white/30  mt-6" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button> 
                </BlurFade>

            </div>

        </motion.div>
    )
}

export default Contact