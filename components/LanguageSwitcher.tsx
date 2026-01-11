"use client";

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLocale = (newLocale: string) => {
    // Remove the current locale from the pathname
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    // Add the new locale to the pathname
    const newPath = `/${newLocale}${currentPath}`;
    router.push(newPath);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
        aria-label="Switch language"
        disabled
      >
        <Languages className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </button>
    );
  }

  return (
    <button
      onClick={() => switchLocale(locale === 'en' ? 'pt' : 'en')}
      className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${locale === 'en' ? 'Portuguese' : 'English'}`}
    >
      <Languages className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase">
        {locale === 'en' ? 'PT' : 'EN'}
      </span>
    </button>
  );
}