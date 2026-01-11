"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('nav');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mounted && isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="AISOD Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              AISOD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            <Link
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              role="menuitem"
            >
              {t('features')}
            </Link>
            <Link
              href="#technology"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              role="menuitem"
            >
              {t('technology')}
            </Link>
            <Link
              href="#use-cases"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              role="menuitem"
            >
              {t('useCases')}
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              role="menuitem"
            >
              {t('pricing')}
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              role="menuitem"
            >
              {t('about')}
            </Link>
            <DarkModeToggle />
            <LanguageSwitcher />
            <Link
              href="#demo"
              className="btn-primary text-base px-6 py-2"
            >
              {t('bookDemo')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#features"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('features')}
            </Link>
            <Link
              href="#technology"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('technology')}
            </Link>
            <Link
              href="#use-cases"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('useCases')}
            </Link>
            <Link
              href="#pricing"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('pricing')}
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <div className="flex items-center justify-center space-x-4 py-2">
              <DarkModeToggle />
              <LanguageSwitcher />
            </div>
            <Link
              href="#demo"
              className="block btn-primary text-center text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('bookDemo')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
