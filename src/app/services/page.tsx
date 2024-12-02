"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, Brain, HeartPulse, Microscope, ArrowRight } from "lucide-react";
import Link from "next/link";

const HealthServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>();
  const [windowSize] = useState({ width: 0, height: 0 });


  const services = [
    {
      icon: Stethoscope,
      title: "Precision Diagnostics",
      description: "Advanced AI-powered diagnostic screening with 99.9% accuracy",
      color: "text-emerald-500",
      backgroundGradient: "from-emerald-500/10 to-emerald-600/10",
    },
    {
      icon: Brain,
      title: "Mental Wellness",
      description: "Comprehensive psychological support and personalized mental health strategies",
      color: "text-blue-500",
      backgroundGradient: "from-blue-500/10 to-blue-600/10",
    },
    {
      icon: HeartPulse,
      title: "Cardiac Care",
      description: "Cutting-edge cardiovascular monitoring and preventive healthcare",
      color: "text-red-500",
      backgroundGradient: "from-red-500/10 to-red-600/10",
    },
    {
      icon: Microscope,
      title: "Research & Innovation",
      description: "Pioneering medical research and breakthrough treatment development",
      color: "text-purple-500",
      backgroundGradient: "from-purple-500/10 to-purple-600/10",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#1e1e1e] overflow-hidden text-white py-16 mt-12">
      
      {/* Animated Background Particles */}
      {windowSize.width > 0 && (
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
                x: [
                  Math.random() * windowSize.width,
                  Math.random() * windowSize.width,
                  Math.random() * windowSize.width,
                ],
                y: [
                  Math.random() * windowSize.height,
                  Math.random() * windowSize.height,
                  Math.random() * windowSize.height,
                ],
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
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              Comprehensive Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming healthcare through innovative technology, personalized care, and advanced medical insights.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className={`relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${service.backgroundGradient} transition-all duration-300 ${hoveredService === index ? "scale-105 shadow-2xl border-white/30" : "hover:scale-105"
                }`}
            >
              <service.icon className={`w-12 h-12 mb-4 ${service.color}`} />
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <Link
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center text-white/80 hover:text-white transition-colors"
              >
                Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/under-development"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
          >
            Schedule Comprehensive Consultation
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthServices;
