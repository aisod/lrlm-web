"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, DollarSign, Zap, Globe } from "lucide-react";

const stats = [
  {
    value: "65%",
    label: "Tokenization Efficiency",
    description: "Reduced token count for African languages",
    icon: Zap,
    color: "blue"
  },
  {
    value: "5x",
    label: "Cost Reduction",
    description: "Lower operational costs vs global models",
    icon: TrendingUp,
    color: "green"
  },
  {
    value: "1B-8B",
    label: "Model Size",
    description: "Optimized for edge deployment",
    icon: Zap,
    color: "blue"
  },
  {
    value: "$16.5B",
    label: "Market Size",
    description: "African AI market by 2030",
    icon: DollarSign,
    color: "yellow"
  },
];

function AnimatedCounter({ value, isInView }: { value: string; isInView: boolean }) {
  // Parse numeric value from string (e.g., "65%" -> 65, "$16.5B" -> 16.5)
  const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
  const [count, setCount] = useState(numericValue); // Initialize with final value
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);
    let duration = 2000; // 2 seconds
    let startTime: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = numericValue * easeOutCubic;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, hasAnimated, numericValue]);

  // Format the display value
  const formatValue = (num: number) => {
    const str = value;
    if (str.includes('%')) return `${Math.round(num)}%`;
    if (str.includes('$') && str.includes('B')) return `$${num.toFixed(1)}B`;
    if (str.includes('B-')) return `${Math.round(num)}B-${Math.round(num * 1.5)}B`;
    return num.toString();
  };

  return <span>{formatValue(count)}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-500 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transforming African AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Quantifiable impact across efficiency, cost, and market potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-enhanced p-8 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className={`text-5xl md:text-6xl font-black mb-3 text-${stat.color}-600 group-hover:animate-gradient-shift`}>
                  <AnimatedCounter value={stat.value} isInView={isInView} />
                </div>

                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {stat.label}
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {stat.description}
                </div>

                <div className={`w-full h-1 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
