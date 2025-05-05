"use client"

import { CheckCheck, ChevronUp } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="bg-[#111827] w-full py-8">
            <div className="flex flex-col items-center justify-center max-w-6xl w-full mx-auto p-6 text-white">
                <div className="flex justify-between w-full mb-10">
                    <div className='space-y-2'>
                        <Image src="/logo.png" alt="logo" className='w-10' width={100} height={100} />
                        <p className='max-w-[18rem] text-sm opacity-70'>From Inquiry to Calendar Booking in Seconds with AI Automation Voice and SMS for seamless real-time calendar integration.</p>
                    </div>
                    <div 
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-primary cursor-pointer hover:bg-primary/90 transition-colors"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                    >
                        <ChevronUp />
                    </div>
                </div>
                <div className="flex flex-wrap gap-10 w-full">
                    <div className='flex-1'>
                        <div className="mb-4">Navigation</div>

                        <div className="space-y-1">
                            <div className="text-sm opacity-70 whitespace-nowrap">Services</div>
                            <div className="text-sm opacity-70 whitespace-nowrap">Features</div>
                            <div className="text-sm opacity-70 whitespace-nowrap">Contact Us</div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="mb-4">Legal</div>

                        <div className="space-y-1">
                            <div className="text-sm opacity-70 whitespace-nowrap">Terms and Condition</div>
                            <div className="text-sm opacity-70 whitespace-nowrap">Privacy Policy</div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="mb-4">Social</div>

                        <div className="flex flex-col gap-1">
                            <a href="https://www.facebook.com/dentalfloai" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 whitespace-nowrap">Facebook</a>
                            <a href="https://www.instagram.com/dentalfloai/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 whitespace-nowrap">Instagram</a>
                            <a href="https://www.linkedin.com/company/dentalflo-ai/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 whitespace-nowrap">linkedin</a>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="mb-4">Compliances</div>

                        <div className="space-y-1">
                            <div className="flex items-center gap-1">
                                <CheckCheck size={18} className='text-green-400' />
                                <div className="text-sm opacity-70 whitespace-nowrap">HIPAA</div>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCheck size={18} className='text-green-400' />
                                <div className="text-sm opacity-70 whitespace-nowrap">SOC2</div>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCheck size={18} className='text-green-400' />
                                <div className="text-sm opacity-70 whitespace-nowrap">PCI Compliant</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full mt-10">
                    <div className="text-sm">© {new Date().getFullYear()} - Dentalflo</div>
                    <div className="text-xs opacity-70">ALL RIGHTS RESERVED</div>
                </div>
            </div>
        </div>
    )
}

export default Footer