"use client";
import { motion } from "framer-motion";
import { Construction, Wrench, Code, ArrowLeft } from "lucide-react";
import Link from "next/link";

const UnderDevelopment = () => {
  return (
    <div className="relative min-h-[120vh] bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#1e1e1e] overflow-hidden text-white">
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
            We&apos;re working hard to bring you an exciting new feature. Stay tuned for updates and improvements!
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

          {/* Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute top-6 left-6"
          >
            <Link href="/" className="block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-full 
                  shadow-lg hover:bg-indigo-700 transition-colors duration-300 
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-8"
              >
                <ArrowLeft className="w-6 h-6" />
                <span className="font-semibold">Back to Home</span>
              </motion.button>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;