"use client"

import { Heart } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from "@/components/ui/button"

const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
  },
  zh: {
    home: "首页",
    about: "关于我们",
    contact: "联系我们",
  }
};

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <Heart className="w-8 h-8 text-pink-500 mr-2 group-hover:animate-beat" />
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            {language === 'zh' ? 'AI爱情大师' : 'AI Love Master'}
          </span>
        </Link>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li><Link href="/" className="text-gray-600 hover:text-purple-800 transition-colors">{t.home}</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-purple-800 transition-colors">{t.about}</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-purple-800 transition-colors">{t.contact}</Link></li>
          </ul>
          <Button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            variant="outline"
            className="text-sm"
          >
            {language === 'en' ? '中文' : 'English'}
          </Button>
        </nav>
      </div>
    </header>
  );
}