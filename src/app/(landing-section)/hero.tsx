"use client"

import type React from "react"

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import { Button } from "@/components/ui/button"
import { Iphone15Pro } from "@/components/magicui/iphone-15-pro"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { SignalHigh, WifiIcon as WifiHigh, BatteryFull, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { BlurFade } from "@/components/magicui/blur-fade";


const Hero = () => {
  const [time, setTime] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Australia/Sydney",
      }
      const timeString = now.toLocaleTimeString("en-AU", options)
      setTime(timeString)
    }

    updateTime() // set immediately
    const interval = setInterval(updateTime, 1000) // update every second
    return () => clearInterval(interval) // cleanup
  }, [])

  // Reset status after 3 seconds
  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  // Format phone number as user types
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digit characters
    const value = e.target.value.replace(/\D/g, "")

    // Limit to 9 digits (Australian mobile numbers without the country code)
    if (value.length <= 9) {
      setPhoneNumber(value)
    }
  }

  // Format the display of the phone number with spaces
  const formatPhoneDisplay = (phone: string) => {
    if (phone.length <= 4) return phone
    if (phone.length <= 7) return `${phone.slice(0, 4)} ${phone.slice(4)}`
    return `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`
  }

  const handleSubmit = async () => {
    if (phoneNumber.length < 9) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formattedPhone = `+61${phoneNumber.replace(/\s/g, "")}`

    try {
      const response = await fetch("https://sandbox.dentalfloai.com/api/centaur-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formattedPhone,
        }),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()
      console.log(data)

      setSubmitStatus("success")

      // Optional: Clear the phone number after successful submission
      // setPhoneNumber("")
    } catch (error) {
      console.error("Error during fetch:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center pt-40 px-6">
      <BlurFade>
        <div className="z-10 flex items-center justify-center mb-4">
          <div className="border rounded-full bg-white dark:bg-muted">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
              <span className="text-sm">✨ AI-Powered Booking</span>
            </AnimatedShinyText>
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={0.1}>
        <div className="relative z-10 text-3xl md:text-4xl lg:text-5xl max-w-5xl font-semibold text-center">
          Meet Your New AI-Powered Receptionist
        </div>
      </BlurFade>
      <BlurFade delay={0.2}>
        <div className="relative z-10 text-sm md:text-lg max-w-3xl text-center mt-4 opacity-70">
          From Inquiry to Calendar Booking in Seconds with AI Automation Voice and SMS for seamless real-time calendar
          integration.
        </div>
      </BlurFade>
      <BlurFade delay={0.3} className="relative z-40 flex gap-3 mt-10">
        <Button variant="outline" size="lg" className="rounded-full" asChild>
          <a href="https://console.dentalfloai.com/login" target="_blank" rel="noopener noreferrer">Get Started</a>
        </Button>
        <Button 
          size="lg" 
          className="rounded-full"
          onClick={() => window.scrollTo({ top: window.innerHeight - 800, behavior: 'smooth' })}
        >
          View Demo
        </Button>
      </BlurFade>
      
      <div className="relative flex justify-center items-start h-[35rem] w-full max-w-[29rem] overflow-y-hidden">
        <div className="absolute z-20 top-[3.2rem] xs:top-[3.6rem] sm:top-[3.9rem] md:top-[4.5rem] flex items-center justify-between w-[calc(100%-3.6rem)] xs:w-[calc(100%-5rem)] md:w-[calc(100%-6rem)] h-[40px]">
          <BlurFade delay={0.5} direction="up">
            <div className="text-xs opacity-70">{time}</div>
          </BlurFade>
          <BlurFade delay={0.5} direction="up">
            <div className="flex items-center gap-1 sm:gap-2 opacity-70">
              <SignalHigh strokeWidth={2.5} className="h-4 w-4 md:h-5 md:w-5" />
              <WifiHigh strokeWidth={2.5} className="h-4 w-4 md:h-5 md:w-5" />
              <BatteryFull className="mt-2 h-4 w-4 md:h-6 md:w-6" />
            </div>
          </BlurFade>
        </div>


        <div className="absolute top-40 z-20 w-[calc(100%-4rem)]">
          <BlurFade delay={0.5} direction="up">
            <div className="flex gap-2 items-center p-4 bg-white dark:bg-accent border rounded-xl">
              <Image src="/logo.png" className="w-10 h-10" alt="Logo" width={100} height={100} />
              <div>
                <div className="text-sm font-semibold">Say Hello to Your AI Receptionist.</div>
                <p className="text-xs opacity-70 max-w-[15rem]">Let your voice assistant book, follow up, and impress!</p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.6} direction="up">
            <div className="p-4 bg-white dark:bg-accent rounded-xl mt-4 space-y-4 border">
              <div className="relative flex items-center">
                <div className="absolute left-3 flex items-center gap-1.5 pointer-events-none">
                  <Image src="/flag/au.png" className="w-6 h-4" alt="Australia" width={20} height={20} />
                  <span className="text-sm font-medium text-muted-foreground">+61</span>
                  <div className="h-5 w-px bg-border mx-0.5"></div>
                </div>
                <Input
                  type="tel"
                  className="pl-[4.5rem] w-full dark:bg-accent h-12 text-sm md:text-base"
                  placeholder="4XX XXX XXX"
                  value={formatPhoneDisplay(phoneNumber)}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="relative">
                <AnimatePresence mode="wait">
                  {submitStatus === "idle" && (
                    <motion.div key="button" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
                      <Button
                        className="w-full h-12 text-xs md:text-sm relative"
                        onClick={handleSubmit}
                        disabled={phoneNumber.length < 9 || isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Try the Demo"
                        )}
                      </Button>
                    </motion.div>
                  )}

                  {submitStatus === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full"
                    >
                      <div className="flex items-center justify-center w-full h-12 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-md border border-emerald-200 dark:border-emerald-900">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        <span className="text-xs md:text-sm font-medium">Demo request sent successfully!</span>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full"
                    >
                      <div className="flex items-center justify-center w-full h-12 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 rounded-md border border-red-200 dark:border-red-900">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        <span className="text-xs md:text-sm font-medium">Failed to send. Please try again.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-center text-muted-foreground"
                  >
                    Check your phone for an SMS shortly
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </BlurFade>

        </div>

        <Iphone15Pro className="mt-10 w-full z-10" />
      </div>
    </div>
  )
}

export default Hero
