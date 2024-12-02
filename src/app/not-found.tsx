"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import {
    AlertTriangle,
   
    Home,
    RefreshCw
} from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Health404Page = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP Animations
        const ctx = gsap.context(() => {
            // Background particles animation
            const particleEls = gsap.utils.toArray(".particle") as HTMLElement[];
            particleEls.forEach((particle) => {
                gsap.to(particle, {
                    keyframes: [
                        { opacity: 0, duration: 5 },
                        { opacity: 0.5, duration: 5 },
                        { opacity: 0, duration: 5 }
                    ],
                    x: () => gsap.utils.random(0, window.innerWidth),
                    y: () => gsap.utils.random(0, window.innerHeight),
                    repeat: -1,
                    ease: "linear",
                });
            });

            // Entrance animations
            const timeline = gsap.timeline({
                defaults: {
                    duration: 1,
                    ease: "power2.out"
                }
            });

            const heading = headingRef.current;
            const description = descriptionRef.current;
            const cta = ctaRef.current;

            if (heading && description && cta) {
                timeline
                    .fromTo(heading,
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0 }
                    )
                    .fromTo(description,
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0 },
                        "-=0.5"
                    )
                    .fromTo(cta,
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0 },
                        "-=0.5"
                    );
            }

            // Error icon pulse animation
            gsap.to(".error-icon", {
                scale: 1.1,
                repeat: -1,
                yoyo: true,
                duration: 0.5,
                ease: "power1.inOut"
            });
        }, pageRef);

        // Cleanup
        return () => {
            ctx.revert(); // Clean up GSAP animations
        };
    }, []);

    return (
        <div
            ref={pageRef}
            className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#1e1e1e] overflow-hidden text-white"
        >
            {/* Animated Background Particles */}
            <div className="absolute inset-0 z-0 opacity-30">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-1 h-1 bg-blue-500 rounded-full"
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-screen">
                <div className="text-center max-w-2xl">
                    <div className="flex justify-center mb-8">
                        <AlertTriangle
                            className="error-icon w-24 h-24 text-red-500 animate-pulse"
                        />
                    </div>

                    <h1
                        ref={headingRef}
                        className="text-6xl font-extrabold mb-6 leading-tight"
                    >
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                            404
                        </span>
                        <span className="block text-3xl mt-4">Page Not Found</span>
                    </h1>

                    <p
                        ref={descriptionRef}
                        className="text-xl text-gray-400 mb-10 max-w-xl mx-auto"
                    >
                        Oops! The page you&lsquo;re looking for seems to have taken an unexpected
                        detour in our health network. Let&lsquo;s get you back on track.
                    </p>

                    <div
                        ref={ctaRef}
                        className="flex justify-center space-x-4"
                    >
                        <Link
                            href="/"
                            className="group flex items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                        >
                            <Home className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            Return Home
                        </Link>
                        <button
                            onClick={() => window.location.reload()}
                            className="group flex items-center justify-center border border-white/20 px-6 py-3 rounded-lg text-white/80 hover:bg-white/10 transition-all"
                        >
                            <RefreshCw className="mr-2 group-hover:rotate-180 transition-transform" />
                            Reload Page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Health404Page;