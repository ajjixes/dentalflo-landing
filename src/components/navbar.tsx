"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
export default function Navbar() {
    const [isFullWidth, setIsFullWidth] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isInLeaderSection, setIsInLeaderSection] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away to check initial size
        handleResize();

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const leaderSection = document.querySelector('.bg-\\[\\#111827\\]');

            if (leaderSection) {
                const rect = leaderSection.getBoundingClientRect();
                setIsInLeaderSection(rect.top <= 100 && rect.bottom >= 100);
            }

            // Scrolling down
            if (currentScrollY > lastScrollY) {
                setIsFullWidth(false);
            }
            // Scrolling up
            else {
                setIsFullWidth(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    const router = useRouter();
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

    const navItems = [
        {
            name: "Features",
            link: "#features",
        },
        {
            name: "Contact Us",
            link: "/contact",
        },
    ]

    return (
        <div className={`fixed z-50 w-full  ${isFullWidth ? 'max-w-6xl top-6' : 'max-w-4xl top-10'} px-4 md:px-6 transition-all duration-300`}>
            <div className="w-full relative">
                <div className={`grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10 w-full ${isInLeaderSection ? 'bg-dark-primary text-white' : 'bg-white/70 dark:bg-muted/70'} backdrop-blur-sm rounded-lg p-4 border ${isInLeaderSection ? 'border-white/10' : ''}`}>
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={30}
                            height={30}
                        />
                        <span className="font-medium">Dentalflo AI</span>
                    </Link>
                    <div className="hidden lg:flex col-span-2 items-center justify-center gap-3">
                        {navItems.map((item) => (
                            <Link
                                href={item.link}
                                key={item.name}
                                className="text-sm font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex items-center justify-end w-full gap-2">
                        <ModeToggle className={`${isInLeaderSection ? 'bg-dark-primary text-white border-dark-border hover:bg-dark-secondary hover:text-white' : ''}`} />
                        <a className="bg-primary h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white hover:bg-primary/90"
                            target="_blank" rel="noopener noreferrer" href="https://cal.com/dentalfloai.com.au">
                            Book a call
                        </a>
                    </div>
                    <div className="lg:hidden flex items-center justify-end">
                        <label className="hamburger">
                            <input
                                type="checkbox"
                                checked={isMobileMenuOpen}
                                onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
                            />
                            <svg viewBox="0 0 32 32">
                                <path className={`line line-top-bottom ${isInLeaderSection ? 'stroke-white' : 'stroke-black dark:stroke-white'}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className={`line ${isInLeaderSection ? 'stroke-white' : 'stroke-black dark:stroke-white'}`} d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>
                </div>
                {/* mobile menu */}
                <div className={`${isMobileMenuOpen ? 'block opacity-100 ' : 'hidden opacity-0'} border mt-2 ${isInLeaderSection ? 'bg-dark-primary text-white border-white/10' : 'bg-white/70 dark:bg-muted/70'} backdrop-blur-sm rounded-lg p-4 transition-all duration-200 ease-in-out overflow-hidden`}>
                    <div className="flex flex-col gap-3">
                        {navItems.map((item) => (
                            <Link
                                href={item.link}
                                key={item.name}
                                className="text-sm font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center justify-end w-full gap-2 mt-3">
                        <ModeToggle className={`${isInLeaderSection ? 'bg-dark-primary text-white border-dark-border hover:bg-dark-secondary hover:text-white' : ''}`} />
                        <a className="flex-1 bg-primary h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white hover:bg-primary/90"
                            target="_blank" rel="noopener noreferrer" href="https://cal.com/dentalfloai.com.au">
                            Book a call
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}



