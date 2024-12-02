"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  UserPlus,
  LogIn,
  Home,
  Stethoscope,
  Info,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

// Define a more explicit type for navigation links
interface NavLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLink[] = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Stethoscope },
    { href: "/about", label: "About Us", icon: Info },
    { href: "/contact", label: "Contact", icon: MessageCircle },
  ];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Memoize event handlers to prevent unnecessary re-renders
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      isMenuOpen
    ) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  // Attach and clean up event listeners
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleClickOutside, handleEscapeKey]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed w-full top-0 z-50 bg-[#161616]/80 backdrop-blur-md border-b border-white/10 mb-16"
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500"
        >
          HealthCarePro
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <link.icon className="w-5 h-5 mr-2 text-blue-500 group-hover:scale-110 transition-transform" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/sign-up"
            className="group flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 px-4 py-2 rounded-lg text-white text-sm hover:scale-105 transition-transform"
          >
            Book Appointment
          </Link>
          <div className="flex space-x-2">
            <Link
              href="/sign-up"
              className="group flex items-center text-white/80 hover:text-white border border-white/20 px-4 py-2 rounded-lg text-sm transition-all hover:bg-white/10"
            >
              <LogIn className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform" />
              Login
            </Link>
            <Link
              href="/sign-up"
              className="group flex items-center text-white/80 hover:text-white border border-white/20 px-4 py-2 rounded-lg text-sm transition-all hover:bg-white/10"
            >
              <UserPlus className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform" />
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
            
       

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed inset-x-0 h-screen top-0 bg-[#161616] z-40 md:hidden"
            >
              <Link
                href="/"
                className="flex justify-center text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 mt-14"
              >
                HealthCarePro
              </Link>
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="absolute right-0 text-white hover:text-blue-500 transition-colors p-5"
              >
                <X size={40} />
              </button>


              <div className="container mx-auto px-6 pt-20 pb-10">
                <div className="flex flex-col items-center space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-xl text-white/80 hover:text-white flex items-center w-full justify-center"
                    >
                      <link.icon className="w-6 h-6 mr-3 text-blue-500" />
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-8 space-y-4 text-center w-full">
                    <Link
                      href="/under-development"
                      onClick={toggleMenu}
                      className="block bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 rounded-lg text-white w-full"
                    >
                      Book Appointment
                    </Link>
                    <div className="flex justify-center space-x-4 w-full">
                      <Link
                        href="/sign-up"
                        onClick={toggleMenu}
                        className="flex-1 text-white/80 hover:text-white border border-white/20 px-6 py-3 rounded-lg"
                      >
                        Login
                      </Link>
                      <Link
                        href="/sign-up"
                        onClick={toggleMenu}
                        className="flex-1 text-white/80 hover:text-white border border-white/20 px-6 py-3 rounded-lg"
                      >
                        Signup
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;