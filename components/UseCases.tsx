"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Scale, Stethoscope, Sprout, GraduationCap, DollarSign } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Government & Public Sector",
    description: "Secure AI infrastructure for national security, public services, and policy analysis. Complete data sovereignty with Private Vault contracts.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: DollarSign,
    title: "Financial Institutions",
    description: "AI-driven credit scoring, fraud detection, and customer service in native African languages. Bank of Namibia and NAMFISA partnerships.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    description: "Understanding of Namibian customary law, contract analysis, and legal document processing in Oshiwambo and other local languages.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Medical reasoning in African contexts, patient communication in native languages, and diagnostic support for rural healthcare providers.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Crop disease diagnosis reasoning through local climate data, agricultural cycle understanding, and market dynamics analysis.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Educational content in African languages, personalized learning, and offline-capable tutoring for rural schools without internet.",
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="use-cases" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Enterprise Use Cases
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Namqula LRLM powers critical operations across industries, from government to agriculture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:opacity-20 transition-opacity`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
