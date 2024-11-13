"use client"

import { useLanguage } from '@/lib/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const translations = {
  en: {
    title: "About AI Love Master",
    content: "AI Love Master is an innovative platform that combines the power of artificial intelligence with the complexities of human relationships. Our mission is to provide personalized, insightful advice to help you navigate the often challenging world of love and relationships.",
    features: [
      "Personalized AI-powered advice",
      "Image analysis for context-aware suggestions",
      "Multilingual support",
      "24/7 availability"
    ],
    conclusion: "Whether you're looking for dating tips, relationship advice, or just a friendly ear, AI Love Master is here to help. Our advanced AI technology is designed to understand the nuances of human emotions and provide thoughtful, considerate advice tailored to your unique situation."
  },
  zh: {
    title: "关于AI爱情大师",
    content: "AI爱情大师是一个创新平台，将人工智能的力量与人类关系的复杂性相结合。我们的使命是提供个性化、富有洞察力的建议，帮助你驾驭常常充满挑战的爱情和关系世界。",
    features: [
      "个性化的AI驱动建议",
      "图像分析以提供情境感知的建议",
      "多语言支持",
      "全天候可用"
    ],
    conclusion: "无论你是在寻找约会技巧、关系建议，还是只是需要一个倾听者，AI爱情大师都在这里为你服务。我们先进的AI技术旨在理解人类情感的细微差别，并根据你的独特情况提供周到、体贴的建议。"
  }
};

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-purple-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold text-purple-800 mb-6">{t.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{t.content}</p>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">{language === 'en' ? 'Our Features:' : '我们的特点：'}</h2>
        <ul className="list-disc list-inside mb-6">
          {t.features.map((feature, index) => (
            <li key={index} className="text-lg text-gray-700 mb-2">{feature}</li>
          ))}
        </ul>
        <p className="text-lg text-gray-700">{t.conclusion}</p>
      </main>
      <Footer />
    </div>
  );
}