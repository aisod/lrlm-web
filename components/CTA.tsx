"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const tCommon = useTranslations('common');
  
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 via-primary-700/90 to-primary-800/90 animate-gradient-shift"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/10 rounded-full blur-lg animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-md animate-float animation-delay-4000"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-white bg-opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {tCommon('readyToTransform')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {tCommon('joinLeadingInstitutions')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="#demo"
              className="btn-primary group flex items-center space-x-3 text-lg shadow-2xl hover:shadow-primary-500/25"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#technology"
              className="btn-secondary group flex items-center space-x-3 text-lg backdrop-blur-sm"
            >
              <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Learn More</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
