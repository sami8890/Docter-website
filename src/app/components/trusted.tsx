"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  HeartPulse,
  FileText,
  ArrowRight,
} from "lucide-react";

const HealthPartnersSection = () => {
  const partners = [
    { name: "Netflix", logo: "/logos/netflix.png" },
    { name: "Johns Hopkins", logo: "/logos/next.png" },
    { name: "Stanford Health", logo: "/logos/panacloud.png" },
    { name: "Cleveland Clinic", logo: "/logos/pnk.png" },
  ];

  const solutions = [
    {
      icon: Stethoscope,
      title: "Expert Consultations",
      description:
        "Personalized care and treatment plans through specialized healthcare professionals.",
      color: "text-emerald-500",
    },
    {
      icon: HeartPulse,
      title: "Health Monitoring",
      description:
        "Advanced tools to track vital signs, medications, and comprehensive health metrics.",
      color: "text-blue-500",
    },
    {
      icon: FileText,
      title: "Digital Health Records",
      description:
        "Secure access to medical history, test results, and prescriptions.",
      color: "text-indigo-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#1e1e1e] overflow-hidden text-white">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
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

      <div className="container mx-auto px-6 relative z-10 py-24">
        {/* Trusted Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Trusted Healthcare Network
          </motion.div>

          <h2 className="text-5xl xl:text-6xl font-extrabold leading-tight mb-4">
            Trusted by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              Leading Institutions
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-xl mx-auto mb-12">
            Partnering with the best to deliver exceptional care and innovative
            healthcare solutions
          </p>

          <div className="flex justify-center items-center space-x-12 sm:flex-1">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comprehensive Healthcare Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Our Comprehensive Solutions
          </motion.div>

          <h2 className="text-5xl xl:text-6xl font-extrabold leading-tight mb-4">
            Healthcare
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
              All in One Place
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-xl mx-auto mb-12">
            Everything you need for your health journey, powered by cutting-edge
            technology
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="bg-white/10 border border-white/20 p-8 rounded-xl hover:bg-white/20 transition-all"
              >
                <solution.icon
                  className={`w-12 h-12 mb-6 mx-auto ${solution.color}`}
                />
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <Link
                  href={`/solutions/${solution.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="group flex items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthPartnersSection;
