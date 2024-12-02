"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, UserCheck, MessageCircle } from "lucide-react";
import Link from "next/link";


const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

    // This effect ensures particles are only set on the client side
    useEffect(() => {
        const particlesArray = Array.from({ length: 50 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
        }));
        setParticles(particlesArray);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#1e1e1e] overflow-hidden text-white">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 z-0 opacity-30">
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            x: [
                                particle.x,
                                Math.random() * window.innerWidth,
                                Math.random() * window.innerWidth,
                            ],
                            y: [
                                particle.y,
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

            <div className="container mx-auto px-6 relative z-10 py-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-4xl xl:text-5xl font-extrabold leading-tight"
                        >
                            Get in{" "}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
                                Touch
                            </span>
                        </motion.h1>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 text-blue-400">
                                <MapPin className="w-6 h-6" />
                                <span>123 Health Tech Boulevard, Innovation City</span>
                            </div>
                            <div className="flex items-center space-x-4 text-emerald-400">
                                <Phone className="w-6 h-6" />
                                <span>+1 (555) HEALTH-TECH</span>
                            </div>
                            <div className="flex items-center space-x-4 text-indigo-400">
                                <Mail className="w-6 h-6" />
                                <span>support@healthtech.ai</span>
                            </div>
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <Link href="#" className="hover:bg-blue-500/20 p-2 rounded-full transition-all">
                                <UserCheck className="w-6 h-6 text-blue-400" />
                            </Link>
                            <Link href="#" className="hover:bg-emerald-500/20 p-2 rounded-full transition-all">
                                <MessageCircle className="w-6 h-6 text-emerald-400" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-2xl space-y-6 mt-10"
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-4 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all"
                            >
                                <Send className="mr-2" /> Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
