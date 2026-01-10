"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Network, Layers } from "lucide-react";

const technologies = [
  {
    icon: Code,
    title: "Custom BPE Tokenizer",
    description: "Native tokenizer trained on Oshiwambo, Khoekhoegowab, Otjiherero, and other Namibian languages. Reduces token count by 60% compared to global models.",
  },
  {
    icon: Database,
    title: "Small Language Models",
    description: "1B to 8B parameter models optimized for edge deployment. Enables offline capability on budget devices without sacrificing performance.",
  },
  {
    icon: Network,
    title: "Quantized Edge Deployment",
    description: "4-bit and 8-bit quantization (GGUF/EXL2) allows businesses to host private AI infrastructure on consumer-grade hardware.",
  },
  {
    icon: Layers,
    title: "Contextual Reasoning Engine",
    description: "Chain-of-Thought (CoT) prompting and Retrieval-Augmented Generation (RAG) focused on African legal, agricultural, and social contexts.",
  },
];

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" ref={ref} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Innovation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The LRLM framework represents a paradigm shift from brute-force parameter scaling to efficient, contextually-aware AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Competitive Advantage
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-700 dark:text-gray-300 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-gray-700 dark:text-gray-300 font-semibold">Global Models</th>
                  <th className="text-center py-4 px-4 text-blue-600 dark:text-blue-400 font-semibold">AISOD Namqula</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-4 px-4 text-gray-900 dark:text-white font-medium">Cultural Framework</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-400">Western-Centric</td>
                  <td className="py-4 px-4 text-center text-blue-600 dark:text-blue-400 font-semibold">African-First (Ubuntu)</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-4 px-4 text-gray-900 dark:text-white font-medium">Operational Cost</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-400">High (Inefficient)</td>
                  <td className="py-4 px-4 text-center text-blue-600 dark:text-blue-400 font-semibold">Ultra-Low (Native)</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-4 px-4 text-gray-900 dark:text-white font-medium">Connectivity</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-400">High-Speed Internet Required</td>
                  <td className="py-4 px-4 text-center text-blue-600 dark:text-blue-400 font-semibold">Offline / Edge Compatible</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-900 dark:text-white font-medium">Reasoning Capability</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-400">General Purpose</td>
                  <td className="py-4 px-4 text-center text-blue-600 dark:text-blue-400 font-semibold">Context-Specific (African)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
