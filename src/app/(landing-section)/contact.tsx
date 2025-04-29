"use client"

import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
// import { FlickeringGrid } from "@/components/magicui/flickering-grid"


const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    return (
        <motion.div
            ref={ref}
            className="relative w-full flex flex-col items-center justify-center mt-40 py-28 overflow-hidden"
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
                <motion.div
                    className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    Experience the AI Front Desk in Action
                </motion.div>
                <motion.div
                    className="text-sm md:text-base max-w-3xl text-center mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <b className="text-white">Ready to Transform Clinic?</b> <span className="opacity-70 text-white">Answer calls, book appointments, and automate patient follow-ups—all from one intelligent platform.</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button size="lg" className="rounded-full bg-white/20 hover:bg-white/30  mt-6">Contact Us</Button>
                </motion.div>

            </div>

        </motion.div>
    )
}

export default Contact