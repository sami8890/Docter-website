"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, ChevronRight } from 'lucide-react';
import { SiGoogle, SiLinkedin, SiFacebook, SiGithub } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import { signIn } from "next-auth/react"; // Import signIn from NextAuth
import { useRouter } from 'next/navigation';

const LoginSignup = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState(''); // For SignUp
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const socialButtons = [
        { icon: SiGoogle, text: "Continue with Google", color: "bg-white text-gray-700 border" },
        { icon: SiLinkedin, text: "Continue with LinkedIn", color: "bg-[#0A66C2] text-white" },
        { icon: SiFacebook, text: "Continue with Facebook", color: "bg-[#1877F2] text-white" },
        { icon: FaTwitter, text: "Continue with Twitter", color: "bg-[#1DA1F2] text-white" },
        { icon: SiGithub, text: "Continue with GitHub", color: "bg-[#333] text-white" }
    ];

    // Handle Social Login
    const handleSocialLogin = (platform: string) => {
        console.log(`Attempting to login with ${platform}`);
    };

    // Handle Email/Password Form Submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            setError("Invalid email or password.");
        } else {
            setError(null);
            router.push("/dashboard"); // Redirect to dashboard after login
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#161616] to-[#1e1e1e] flex items-center justify-center p-4 mt-24" >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-8"
            >
                {/* Toggle between Login and Signup */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/10 rounded-full p-1 flex items-center">
                        <button
                            onClick={() => setIsLoginMode(true)}
                            className={`px-6 py-2 rounded-full flex items-center transition-all ${isLoginMode
                                ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <LogIn className="mr-2" /> Login
                        </button>
                        <button
                            onClick={() => setIsLoginMode(false)}
                            className={`px-6 py-2 rounded-full flex items-center transition-all ${!isLoginMode
                                ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <UserPlus className="mr-2" /> Sign Up
                        </button>
                    </div>
                </div>

                {/* Form Title */}
                <h2 className="text-3xl font-bold text-center mb-6 text-white">
                    {isLoginMode ? 'Welcome Back' : 'Create an Account'}
                </h2>

                {/* Social Login Buttons */}
                <div className="space-y-4">
                    {socialButtons.map((button, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleSocialLogin(button.text)}
                            className={`w-full flex items-center justify-center p-3 rounded-lg 
                                transition-all duration-300 ${button.color} 
                                hover:opacity-90 group`}
                        >
                            <button.icon className="mr-3 w-6 h-6" />
                            {button.text}
                            <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-white/20"></div>
                    <span className="mx-4 text-gray-400">or</span>
                    <div className="flex-grow border-t border-white/20"></div>
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit}>
                    {!isLoginMode && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 mb-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 mb-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    {isLoginMode && (
                        <div className="flex justify-between mb-4 text-sm text-gray-400">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <a href="#" className="hover:text-blue-400">Forgot Password?</a>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        {isLoginMode ? 'Log In' : 'Create Account'}
                    </button>
                </form>

                {/* Switch Mode Text */}
                <div className="text-center mt-6 text-gray-400">
                    {isLoginMode
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <button
                        onClick={() => setIsLoginMode(!isLoginMode)}
                        className="text-blue-400 hover:text-blue-300 ml-1"
                    >
                        {isLoginMode ? 'Sign Up' : 'Log In'}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginSignup;
