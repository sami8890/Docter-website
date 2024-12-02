"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Construction, Wrench, Code } from "lucide-react";

const UnderDevelopment = () => {
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    // Update window size only on the client side
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Handle resize event
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-[120vh] bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#1e1e1e] overflow-hidden text-white">
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
            className="absolute w-1 h-1 bg-indigo-500 rounded-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium"
          >
            <Construction className="w-4 h-4 mr-2 animate-spin" />
            Work in Progress
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl xl:text-6xl font-extrabold leading-tight"
          >
            Feature
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Under Development
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-xl mx-auto"
          >
            We&apos;re working hard to bring you an exciting new feature. Stay
            tuned for updates and improvements!
          </motion.p>

          {/* Development Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center space-x-6 mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 p-4 rounded-xl border border-white/20"
            >
              <Wrench className="w-10 h-10 text-emerald-500" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 p-4 rounded-xl border border-white/20"
            >
              <Code className="w-10 h-10 text-blue-500" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 p-4 rounded-xl border border-white/20"
            >
              <Construction className="w-10 h-10 text-indigo-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
