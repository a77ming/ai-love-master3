"use client"

import { Heart } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

const translations = {
  en: {
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    rights: "All rights reserved."
  },
  zh: {
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    rights: "版权所有。"
  }
};

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="w-6 h-6 text-pink-300 mr-2 animate-pulse" />
            <span className="text-xl font-bold">{language === 'zh' ? 'AI爱情大师' : 'AI Love Master'}</span>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-pink-300 transition-colors">{t.privacyPolicy}</Link>
            <Link href="#" className="hover:text-pink-300 transition-colors">{t.termsOfService}</Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          © {new Date().getFullYear()} {language === 'zh' ? 'AI爱情大师' : 'AI Love Master'}. {t.rights}
        </div>
      </div>
    </footer>
  );
}