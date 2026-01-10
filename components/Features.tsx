"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Globe, Shield, Cpu, Brain, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "65% More Efficient Tokenization",
    description: "Custom-trained African-centric tokenizer reduces token count by 65%, making Namqula the fastest and most cost-effective model for African language processing.",
  },
  {
    icon: Globe,
    title: "Offline & Edge Deployment",
    description: "Works on $150 smartphones and solar-powered laptops in rural areas without internet connectivity. Perfect for Africa's connectivity challenges.",
  },
  {
    icon: Brain,
    title: "African Cultural Reasoning",
    description: "Fine-tuned on African legal, medical, and financial logic chains. Understands Namibian customary law, agricultural cycles, and local market dynamics.",
  },
  {
    icon: Shield,
    title: "Data Sovereignty",
    description: "Keep sensitive data within African borders. No transmission to US-based cloud servers. Complete privacy for governments and enterprises.",
  },
  {
    icon: Cpu,
    title: "Low Resource Architecture",
    description: "Small Language Models (1B-8B parameters) with 4-bit and 8-bit quantization enable deployment on consumer-grade hardware.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Private Vault contracts for governments, banks, and mining companies. Complete data isolation and compliance with African regulations.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Built for African Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Namqula LRLM addresses the unique challenges of African language processing with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-enhanced p-8 group cursor-pointer"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
