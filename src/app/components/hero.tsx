"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeartPulse, Stethoscope, ShieldCheck, UserCheck, Video, ArrowRight } from "lucide-react";

const HealthHero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

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
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#1e1e1e] overflow-hidden text-white">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              opacity: 0,
            }}
            animate={{
              x: [Math.random() * windowSize.width],
              y: [Math.random() * windowSize.height],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
          />
        ))}
      </div>

      {/* Hero Section Content */}
      <div className="container mx-auto px-6 relative z-10 mt-11">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[130vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mt-16"
            >
              <HeartPulse className="w-4 h-4 mr-2 animate-pulse" />
              Next-Generation Healthcare Platform
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl xl:text-6xl font-extrabold leading-tight"
            >
              Reimagine
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
                Your Health Journey
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl text-gray-400 max-w-xl"
            >
              Breakthrough healthcare technology that combines advanced AI,
              comprehensive diagnostics, and personalized care to transform your
              wellness experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex space-x-4"
            >
              <Link
                href="/book-consultation"
                className="group flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
              >
                Book Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group flex items-center border border-white/20 px-6 py-3 rounded-lg text-white/80 hover:bg-white/10 transition-all"
              >
                Explore Services
                <UserCheck className="ml-2 group-hover:rotate-6 transition-transform" />
              </Link>
            </motion.div>
            <motion.div className="mt-12">
              <div className="flex space-x-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${activeFeature === index
                        ? "bg-white/10 border border-white/20"
                        : "opacity-50 hover:opacity-75"
                      }`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </motion.div>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-white"
                >
                  <h3 className="text-2xl font-bold">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {features[activeFeature].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
          {/* Right Visualization */}
          <div className="relative">
            <Image
              src="/docter.png"
              alt="Advanced Healthcare Technology"
              width={700}
              height={800}
              className="object-cover w-full h-[600px] rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthHero;
