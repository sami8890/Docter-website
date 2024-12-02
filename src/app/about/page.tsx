"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  Globe,
  Award,
  UserCheck,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize healthcare through cutting-edge AI and personalized diagnostics.",
      color: "text-emerald-500",
      background: "bg-emerald-500/10",
      details: [
        "Advanced AI-driven health insights",
        "Personalized diagnostic approaches",
        "Innovative patient-centric solutions"
      ]
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Providing advanced healthcare solutions accessible to everyone, everywhere.",
      color: "text-blue-500",
      background: "bg-blue-500/10",
      details: [
        "Worldwide healthcare accessibility",
        "Cutting-edge telemedicine platforms",
        "Multilingual support systems"
      ]
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Continuously pushing the boundaries of medical technology and patient care.",
      color: "text-indigo-500",
      background: "bg-indigo-500/10",
      details: [
        "Breakthrough medical technologies",
        "Continuous research and development",
        "Pioneering healthcare solutions"
      ]
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newParticles = [...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-white/30 rounded-full blur-sm"
        />
      ));
      setParticles(newParticles);
    }
  }, []);

  return (


    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#1e1e1e] overflow-hidden text-white mt-20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 opacity-50">
        {particles}
      </div>

      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/docter.png"
                alt="Our Healthcare Team"
                width={700}
                height={700}
                className=" w-full h-[600px] group-hover:scale-105 transition-transform duration-500"
                priority

                
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Floating Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-8 -right-100 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center space-x-3"
            >
              <Star className="w-8 h-8 text-yellow-400" />
              <div>
                <h5 className="font-bold text-lg">Top Innovators</h5>
                <p className="text-xs text-gray-300">Healthcare Excellence Award 2024</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Detailed About Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
            >
              <UserCheck className="w-4 h-4 mr-2 animate-pulse" />
              Innovative Healthcare Pioneers
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl xl:text-6xl font-extrabold leading-tight"
            >
              Transforming
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
                Healthcare Technology
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl text-gray-400 max-w-xl"
            >
              We are a dedicated team of healthcare professionals, data scientists,
              and technology experts committed to reimagining patient care through
              intelligent, compassionate solutions.
            </motion.p>

            {/* Interactive Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex space-x-2 mb-4">
                {values.map((value, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveValue(index)}
                    className={`
                      p-2 rounded-full transition-all duration-300
                      ${activeValue === index
                        ? `${value.background} ring-2 ring-white/30`
                        : 'hover:bg-white/10 opacity-50'}
                    `}
                  >
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 rounded-xl ${values[activeValue].background} border border-white/10`}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {values[activeValue].title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {values[activeValue].description}
                  </p>
                  <div className="space-y-2">
                    {values[activeValue].details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-emerald-500" />
                        <span className="text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex space-x-4"
            >
              <Link
                href="/under-development"
                className="group flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
              >
                Our Full Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/under-development"
                className="group flex items-center border border-white/20 px-6 py-3 rounded-lg text-white/80 hover:bg-white/10 transition-all"
              >
                Meet the Team
                <UserCheck className="ml-2 group-hover:rotate-6 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;