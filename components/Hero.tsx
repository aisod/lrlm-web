"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Primary gradient orb */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary-600/10 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"></div>
        {/* Primary gradient orb */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            // Use deterministic positions to avoid hydration mismatch
            const positions = [
              [10, 20], [85, 15], [25, 70], [90, 80], [60, 30],
              [15, 85], [75, 50], [40, 10], [95, 65], [30, 90],
              [55, 25], [80, 40], [5, 60], [70, 85], [35, 45],
              [45, 75], [20, 35], [65, 5], [50, 95], [85, 25]
            ];
            const [left, top] = positions[i] || [50, 50];

            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${(i * 0.5) % 5}s`,
                  animationDuration: `${3 + (i % 4)}s`
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Made for Africa, Starting from Namibia
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-6 text-gradient animate-gradient-shift"
            id="main-heading"
          >
            Namqula LRLM
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-gray-100 tracking-tight"
          >
            African-First AI Language Model
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            The first sovereign Low Resource and Reasoning Language Model optimized for African languages. 
            <span className="font-semibold text-primary-600 dark:text-primary-400"> 65% more efficient</span> tokenization, 
            <span className="font-semibold text-primary-600 dark:text-primary-400"> offline-capable</span>, and built for 
            <span className="font-semibold text-primary-600 dark:text-primary-400"> African cultural reasoning</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              href="#demo"
              className="btn-primary group flex items-center space-x-3 text-lg"
            >
              <span>Book Enterprise Demo</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#technology"
              className="btn-secondary group flex items-center space-x-3 text-lg"
            >
              <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Learn More</span>
            </Link>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card-enhanced p-8 text-center group"
            >
              <div className="text-5xl font-black text-gradient mb-3 group-hover:animate-gradient-shift">65%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">More Efficient Tokenization</div>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4 opacity-60"></div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card-enhanced p-8 text-center group"
            >
              <div className="text-5xl font-black text-gradient mb-3 group-hover:animate-gradient-shift">Offline</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Works Without Internet</div>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4 opacity-60"></div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card-enhanced p-8 text-center group"
            >
              <div className="text-5xl font-black text-gradient mb-3 group-hover:animate-gradient-shift">$150</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Runs on Budget Devices</div>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4 opacity-60"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
