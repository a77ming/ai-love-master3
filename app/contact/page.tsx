"use client"

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const translations = {
  en: {
    title: "Contact Us",
    contactInfo: "Contact Information",
    contactEmail: "Email: ziming237@foxmail.com"
  },
  zh: {
    title: "联系我们",
    contactInfo: "联系信息",
    contactEmail: "电子邮箱：ziming237@foxmail.com"
  }
};

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-purple-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold text-purple-800 mb-6">{t.title}</h1>
        <div className="flex justify-center"> 
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">{t.contactInfo}</h2>
            <div className="flex items-center mb-4">
              <Image
                src="https://project-resource.oss-cn-beijing.aliyuncs.com/object/gpt4v/93a0aa6b4b645379fafcb085d09b593c.PNG"
                alt="Contact Avatar"
                width={100}
                height={100}
                className="rounded-full mr-4"
              />
              <p className="text-lg text-gray-700">{t.contactEmail}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}