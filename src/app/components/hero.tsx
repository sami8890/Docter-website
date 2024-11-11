"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Shield, 
  Search,
  Star,
  Users,
  CheckCircle,
} from "lucide-react";
import SubHeroExtension from "./Hero-extension";

const HeroSection = () => {

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced stagger animation
      gsap.fromTo(
        ".animate-item",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );

      // New floating animation for cards
      gsap.to(".floating-card", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2,
      });

      // Pulse animation for the badge
      gsap.to(".pulse-badge", {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-blue-100/50 animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-green-100/30 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-green-400 rounded-full animate-ping" />
      </div>

      <div className="container mx-auto px-4 min-h-[85vh] relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh] py-20">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div className="animate-item pulse-badge inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              <Star className="w-4 h-4 mr-2" />
              #1 Healthcare Platform
            </div>

            {/* Main Heading */}
            <h1 className="animate-item text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Your Health Journey
              <span className="block text-blue-600 relative">
                Starts Here
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                >
                  <path
                    d="M0 3C50 3 50 3 100 3C150 3 150 3 200 3"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="animate-item text-lg md:text-xl text-gray-600 max-w-xl">
              Experience world-class healthcare at your fingertips. Connect with
              top doctors, schedule appointments, and take control of your
              health journey with our award-winning platform.
            </p>

            {/* CTAs */}
            <div className="animate-item flex flex-wrap gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold shadow-lg hover:bg-gray-50 transition-all hover:scale-105 border border-blue-100"
              >
                <Search className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </div>

            {/* Stats/Features */}
            <div className="animate-item grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white transition-all cursor-pointer">
                <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Doctors</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white transition-all cursor-pointer">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white transition-all cursor-pointer">
                <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">50k+</div>
                <div className="text-sm text-gray-600">Patients</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white transition-all cursor-pointer">
                <Star className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-10">
            {/* Image with overlay */}
            <div className="animate-item relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image/image.png"
                alt="Healthcare Professional"
                width={600}
                height={700}
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </div>

            {/* Feature Cards */}
            <div className="absolute -left-12 top-1/4 animate-item floating-card">
              <div className="bg-white p-4 rounded-xl shadow-lg max-w-[200px] transform hover:scale-105 transition-transform">
                <Shield className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Trusted Care</h3>
                <p className="text-sm text-gray-600">
                  Licensed and verified healthcare professionals
                </p>
              </div>
            </div>

            <div className="absolute -right-12 top-2/3 animate-item floating-card">
              <div className="bg-white p-4 rounded-xl shadow-lg max-w-[200px] transform hover:scale-105 transition-transform">
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Quick Access</h3>
                <p className="text-sm text-gray-600">
                  Same-day appointments available
                </p>
              </div>
            </div>

            <div className="absolute -right-8 top-1/4 animate-item floating-card">
              <div className="bg-white p-4 rounded-xl shadow-lg max-w-[200px] transform hover:scale-105 transition-transform">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">
                  Verified Results
                </h3>
                <p className="text-sm text-gray-600">
                  Detailed health assessments for every visit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub Hero */}
    <SubHeroExtension />
    </div>
 
  );
};

export default HeroSection;
