"use client"

import { CheckCheck, ChevronUp, } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Footer = () => {
    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleSmoothScroll = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            
            if (link && link.hash && link.hash.startsWith('#')) {
                e.preventDefault();
                
                // Check if we're not on the home page
                if (window.location.pathname !== '/') {
                    // Navigate to home page with the hash
                    router.push(`/${link.hash}`);
                } else {
                    // Already on home page, just scroll
                    const targetElement = document.querySelector(link.hash);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);
        
        return () => {
            document.removeEventListener('click', handleSmoothScroll);
        };
    }, [router]);

    return (
        <div className="relative z-10 bg-[#111827] w-full py-8 overflow-hidden">
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
                        <div className="mb-1">Contact Number</div>
                        <div className="text-sm opacity-70">
                            0489261411
                        </div>

                        <div className="mb-1 mt-6">Gold Coast Office</div>

                        <div className="text-sm opacity-70">
                            Suite 311, 34 Glenferrie Drive,
                            Robina, Gold Coast, Qld 4226
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="mb-4">Navigation</div>

                        <div className="flex flex-col gap-1">
                            <Link href="#features" className="text-sm opacity-70 whitespace-nowrap hover:border-l-3 hover:px-1 border-primary transition-all duration-100 ease-linear">Features</Link>
                            <Link href="#faq" className="text-sm opacity-70 whitespace-nowrap hover:border-l-3 hover:px-1 border-primary transition-all duration-100 ease-linear">FAQ</Link>
                            <Link href="/contact-us" className="text-sm opacity-70 whitespace-nowrap hover:border-l-3 hover:px-1 border-primary transition-all duration-100 ease-linear">Contact Us</Link>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="mb-4">Legal</div>

                        <div className="flex flex-col gap-1">
                            <Link href="/terms-and-condition" className="text-sm opacity-70 whitespace-nowrap hover:border-l-3 hover:px-1 border-primary transition-all duration-100 ease-linear">Terms and Condition</Link>
                            <Link href="/privacy-policy" className="text-sm opacity-70 whitespace-nowrap hover:border-l-3 hover:px-1 border-primary transition-all duration-100 ease-linear">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="mb-4">Social</div>

                        <div className="flex flex-col gap-1">
                            <a href="https://www.facebook.com/dentalfloai" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 whitespace-nowrap hover:border-l-3 hover:px-1 border-primary transition-all duration-100 ease-linear">Facebook</a>
                            <a href="https://www.instagram.com/dentalfloai/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 whitespace-nowrap hover:border-l-3 hover:px-1 border-primary transition-all duration-100 ease-linear">Instagram</a>
                            <a href="https://www.linkedin.com/company/dentalflo-ai/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 whitespace-nowrap hover:border-l-3 hover:px-1 border-primary transition-all duration-100 ease-linear">linkedin</a>
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
                    <div className="text-sm">© {new Date().getFullYear()} - Dentalflo AI</div>
                    <div className="text-xs opacity-70">ALL RIGHTS RESERVED</div>
                </div>
            </div>

            <div className="relative pt-64 opacity-40 text-white ">
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xs opacity-20 text-[20rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-t to-80% from-white to-dark-primary">
                    DENTALFLO
                </div>
            </div>
        </div>
    )
}

export default Footer