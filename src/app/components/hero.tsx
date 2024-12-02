"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { HeartPulse } from "lucide-react";
import {
  Stethoscope,
  ShieldCheck,
  UserCheck,
  Video,
  ArrowRight,
} from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HealthHero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const diagnosticCardRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Stethoscope,
      title: "Personalized Care",
      description: "AI-driven health insights tailored to your unique profile",
      color: "text-emerald-500",
    },
    {
      icon: Video,
      title: "Telehealth",
      description: "Instant virtual consultations with top specialists",
      color: "text-blue-500",
    },
    {
      icon: ShieldCheck,
      title: "Secure Health",
      description: "End-to-end encrypted medical records and consultations",
      color: "text-indigo-500",
    },
  ];

  useEffect(() => {
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero section entrance animations
      const heroTimeline = gsap.timeline({
        defaults: { 
          duration: 1, 
          ease: "power2.out" 
        }
      });

      // Animate background particles
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



      // Type-safe refs
      const badge = badgeRef.current;
      const heading = headingRef.current;
      const description = descriptionRef.current;
      const cta = ctaRef.current;
      const features = featuresRef.current;
      const image = imageRef.current;
      const diagnosticCard = diagnosticCardRef.current;

      // Stagger entrance animations
      if (badge && heading && description && cta && features) {
        heroTimeline
          .fromTo(badge, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
          .fromTo(heading, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.5")
          .fromTo(description, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.5")
          .fromTo(cta, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.5")
          .fromTo(features, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.5");
      }

      // Image and diagnostic card animations
      if (image && diagnosticCard) {
        heroTimeline
          .fromTo(image, 
            { opacity: 0, scale: 0.9 }, 
            { opacity: 1, scale: 1, duration: 0.7 }, 
            "-=0.5"
          )
          .fromTo(diagnosticCard, 
            { opacity: 0, y: 50 }, 
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.7,
              onComplete: () => {
                // Add hover interaction to diagnostic card
                gsap.to(diagnosticCard, {
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  scale: 1.05,
                  duration: 0.3,
                  scrollTrigger: {
                    trigger: diagnosticCard,
                    start: "top center",
                    toggleActions: "play none none reverse"
                  }
                });
              }
            }, 
            "-=0.5"
          );
      }

      // Responsive adjustments
      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 1024px)": function() {
          if (diagnosticCard) {
            gsap.fromTo(diagnosticCard, 
              { x: -50, opacity: 0 }, 
              { 
                x: 0, 
                opacity: 1,
                scrollTrigger: {
                  trigger: heroRef.current,
                  start: "top center",
                  end: "bottom center",
                  scrub: 1
                }
              }
            );
          }
        },
        // Mobile
        "(max-width: 1023px)": function() {
          if (diagnosticCard) {
            gsap.set(diagnosticCard, {
              position: 'relative',
              top: 'auto',
              left: 'auto',
              transform: 'none',
              margin: '1rem 0'
            });
          }
        }
      });
    }, heroRef);

    // Cleanup
    return () => {
      clearInterval(interval);
      ctx.revert(); // Clean up GSAP animations
    };
  }, [features.length]);

  return (
    <div 
      ref={heroRef} 
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

      <div className="container mx-auto px-6 relative z-10 mt-11">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[130vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Animated Badge */}
            <div 
              ref={badgeRef}
              className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mt-16"
            >
              <HeartPulse className="w-4 h-4 mr-2 animate-pulse" />
              Next-Generation Healthcare Platform
            </div>

            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="text-5xl xl:text-6xl font-extrabold leading-tight"
            >
              Reimagine
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
                Your Health Journey
              </span>
            </h1>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="text-xl text-gray-400 max-w-xl"
            >
              Breakthrough healthcare technology that combines advanced AI,
              comprehensive diagnostics, and personalized care to transform your
              wellness experience.
            </p>

            {/* Call to Action Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link
                href="/contact"
                className="group flex items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
              >
                Book Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group flex items-center justify-center border border-white/20 px-6 py-3 rounded-lg text-white/80 hover:bg-white/10 transition-all"
              >
                Explore Services
                <UserCheck className="ml-2 group-hover:rotate-6 transition-transform" />
              </Link>
            </div>

            {/* Interactive Features Showcase */}
            <div 
              ref={featuresRef}
              className="mt-12"
            >
              <div className="flex space-x-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-white/10 border border-white/20"
                        : "opacity-50 hover:opacity-75"
                    }`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                ))}
              </div>
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-bold">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-400 mt-2">
                  {features[activeFeature].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Advanced Visualization */}
          <div className="relative">
            <div 
              ref={imageRef}
              className="rounded-3xl shadow-2xl relative"
            >
              <Image
                src="/docter.png"
                alt="Advanced Healthcare Technology"
                width={700}
                height={800}
                className=" sm:w-[700px] object-cover w-full h-[600px] "
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Floating Diagnostic Cards */}
            <div
              ref={diagnosticCardRef}
              className="lg:absolute -top-10 lg:-left-16 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-2xl shadow-xl max-w-[250px] mt-14 lg:ml-11"
            >
              <HeartPulse className="w-10 h-10 text-red-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">
                Real-Time Diagnostics
              </h4>
              <p className="text-sm text-gray-300">
                Continuous health monitoring with advanced AI algorithms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthHero;