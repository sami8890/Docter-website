"use client";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Navigation links array for better maintainability
const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
] as const;

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Handle mobile menu animations
    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        } else {
            gsap.to(menuRef.current, {
                x: '-100%',
                duration: 0.3,
                ease: 'power2.in'
            });
        }
    }, [isMobileMenuOpen]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200  backdrop:blur-xl">
            <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-blue-600 transition-colors hover:text-blue-700">
                    HealthCarePro
                </Link>

                {/* Primary Links for Desktop */}
                <div className="hidden md:flex items-center space-x-6 text-gray-700">
                    {navigationLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`transition-colors hover:text-blue-500 ${pathname === href ? 'text-blue-600 font-medium' : ''
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="hidden md:block relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className={`px-4 py-2 border rounded-lg transition-all duration-200 
                            ${isSearchFocused
                                ? 'border-blue-400 ring-2 ring-blue-100'
                                : 'border-gray-300'
                            }
                            focus:outline-none`}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                </div>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        href="/book"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-700"
                    >
                        Book Appointment
                    </Link>
                    <Link
                        href="/login"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-green-700"
                    >
                        Login / Signup
                    </Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`md:hidden fixed inset-y-0 left-0 w-4/5 bg-white shadow-lg transform 
                    -translate-x-full transition-transform duration-300 ease-in-out z-50
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    <div className="p-6 space-y-6">
                        <div className="space-y-4">
                            {navigationLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`block text-lg transition-colors hover:text-blue-500 ${pathname === href ? 'text-blue-600 font-medium' : 'text-gray-700'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Search */}
                        <div className="pt-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        {/* Mobile Action Buttons */}
                        <div className="space-y-3 pt-4">
                            <Link
                                href="/book"
                                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book Appointment
                            </Link>
                            <Link
                                href="/login"
                                className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-green-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login / Signup
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;