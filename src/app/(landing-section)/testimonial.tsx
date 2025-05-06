
"use client"
import { useRef } from "react"
import HeroVideoDialog from "@/components/magicui/hero-video-dialog"
import { Workflow, AudioWaveform, Webhook, LayoutPanelTop, TextSelect, BotMessageSquare } from "lucide-react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Testimonial = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <div className="py-20">
            <div className="flex flex-col items-center justify-center max-w-6xl w-full mx-auto p-6 text-white">

                <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center">
                    Trusted by Clinics Across Australia
                </div>
                <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, impedit.</div>
                <div className="relative mt-20">
                    <Carousel
                        // plugins={[plugin.current]}
                        // onMouseEnter={plugin.current.stop}
                        // onMouseLeave={plugin.current.reset}
                        // opts={{
                        //     align: "start",
                        //     loop: true,
                        // }}
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-6 border border-[#ffffff1a] bg-dark-primary rounded-lg h-full">
                                    <div className="rounded-lg overflow-hidden w-full aspect-square">
                                        <Image src="/testimonial/smile/profile.jpg" className="h-full w-full object-cover object-top" height={500} width={500} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <div className="text-xs mb-1 bg-primary/10 border rounded-full px-2 py-1 w-fit font-semibold text-primary border-primary/50">Booking Statistics</div>
                                            <div className="text-2xl font-semibold mb-3">30 days  - 96 new patients booked   $537,000 in opportunity</div>
                                            <p className="mb-10 opacity-70">Our AI Jane books new consultations 24/7 directly into our Core Practice Calendar.
                                                We have been using her now for 18 months, she takes so much pressure off our front desk team and fills our calendars on autopilot.
                                            </p>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-semibold mb-3">Key Features Used</div>
                                            <div className="flex flex-wrap gap-2">
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <Workflow className="text-primary" size={16} />
                                                    <div className="text-xs">Custom Workflow Manager</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <AudioWaveform className="text-secondary" size={16} />
                                                    <div className="text-xs">AI Voice Receptionist</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <Webhook className="text-green-400" size={16} />
                                                    <div className="text-xs">AI-powered CRM & Lead Capturing</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <LayoutPanelTop className="text-red-400" size={16} />
                                                    <div className="text-xs">Web-Based Phone System</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <TextSelect className="text-amber-400" size={16} />
                                                    <div className="text-xs">Call Transcription & Summaries</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <BotMessageSquare className="text-violet-400" size={16} />
                                                    <div className="text-xs">AI Booking Chat Widget</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-10">
                                            <div className="text-lg font-semibold">AJ Semaan - Director</div>
                                            <div className="text-sm opacity-70">The Smile Outlet - Gold Coast</div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-6 border border-[#ffffff1a] bg-dark-primary rounded-lg h-full">
                                    <div className="relative rounded-lg overflow-hidden  w-full aspect-square">
                                        <div className="relative">
                                            <HeroVideoDialog
                                                animationStyle="top-in-bottom-out"
                                                videoSrc="https://bvkcvxzvcdvtabszzkgh.supabase.co/storage/v1/object/sign/testimonial/PeninsulaSmiles.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzFhNzcxNGRiLWUxYWQtNDEwNi1hYWJkLWUxZjFlNmQ0NmM3ZCJ9.eyJ1cmwiOiJ0ZXN0aW1vbmlhbC9QZW5pbnN1bGFTbWlsZXMubXA0IiwiaWF0IjoxNzQ2NTQ2OTk2LCJleHAiOjE5MDQyMjY5OTZ9.PRQ7WgXyuyQT7Tudfx0pySk9ic9aiLzuOGZxbfsO4Ig"
                                                thumbnailSrc="/testimonial/peninsula-smile/profile.png"
                                                thumbnailAlt="Hero Video"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between -mt-7 lg:mt-0 h-full md:py-4">
                                        <p className="mb-10 text-lg">
                                            Partnering with Dental Flo has been one of the best decisions we’ve made for our dental practice. Their development of a custom AI dental receptionist has completely transformed how we manage patient interactions.
                                        </p>
                                        <div>
                                            <div className="text-2xl font-semibold mb-3">Key Features Used</div>
                                            <div className="flex flex-wrap gap-2">
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <Workflow className="text-primary" size={16} />
                                                    <div className="text-xs">Custom Workflow Manager</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <AudioWaveform className="text-secondary" size={16} />
                                                    <div className="text-xs">AI Voice Receptionist</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <Webhook className="text-green-400" size={16} />
                                                    <div className="text-xs">AI-powered CRM & Lead Capturing</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <LayoutPanelTop className="text-red-400" size={16} />
                                                    <div className="text-xs">Web-Based Phone System</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <TextSelect className="text-amber-400" size={16} />
                                                    <div className="text-xs">Call Transcription & Summaries</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <BotMessageSquare className="text-violet-400" size={16} />
                                                    <div className="text-xs">AI Booking Chat Widget</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-10">
                                            <div className="text-lg font-semibold">Fady Goher - Principal Dentist & Dental Surgeon</div>
                                            <div className="text-sm opacity-70">Peninsula Smiles - Melbourne</div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-6 border border-[#ffffff1a] bg-dark-primary rounded-lg h-full">
                                    <div className="rounded-lg overflow-hidden bg-red-500 w-full aspect-square">
                                        <Image src="/testimonial/station-square-dental/profile.png" className="h-full w-full object-cover object-top" height={500} width={500} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between h-full md:py-4">
                                        <p className="mb-10 text-lg">
                                            We’ve been incredibly impressed with Dental Flo Ai and their use of AI technology, we’ve seen a clear uptick in patient engagement and enquiries. The team is highly responsive — always available when we need them — and consistently go above and beyond to deliver results.
                                        </p>
                                        <div>
                                            <div className="text-2xl font-semibold mb-3">Key Features Used</div>
                                            <div className="flex flex-wrap gap-2">
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <Workflow className="text-primary" size={16} />
                                                    <div className="text-xs">Custom Workflow Manager</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <AudioWaveform className="text-secondary" size={16} />
                                                    <div className="text-xs">AI Voice Receptionist</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <Webhook className="text-green-400" size={16} />
                                                    <div className="text-xs">AI-powered CRM & Lead Capturing</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <LayoutPanelTop className="text-red-400" size={16} />
                                                    <div className="text-xs">Web-Based Phone System</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <TextSelect className="text-amber-400" size={16} />
                                                    <div className="text-xs">Call Transcription & Summaries</div>
                                                </div>
                                                <div className="flex items-center gap-1 mb-2 px-2 py-1 bg-dark-secondary border border-dark-border rounded-full">
                                                    <BotMessageSquare className="text-violet-400" size={16} />
                                                    <div className="text-xs">AI Booking Chat Widget</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-10">
                                            <div className="text-lg font-semibold">Ronak Patel - Principal Dentist</div>
                                            <div className="text-sm opacity-70">Station Square Dental - Melbourne</div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <div className="absolute right-16 -bottom-16">
                            <div className="relative h-10 ">
                                <CarouselPrevious className=" size-12 right-3" />
                                <CarouselNext className=" size-12  left-3" />
                            </div>
                        </div>
                    </Carousel>
                </div>






            </div>
        </div>
    )
}

export default Testimonial