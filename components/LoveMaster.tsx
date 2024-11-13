"use client"

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Upload, Heart, MessageCircle } from 'lucide-react';
import HeroImage from './HeroImage';
import { useLanguage } from '@/lib/LanguageContext';

const translations = {
  en: {
    title: "AI Love Master",
    subtitle: "Your personal AI-powered love advisor 💖",
    formLabel: "Ask your love-related question",
    placeholder: "What's on your heart? 💭",
    uploadButton: "Upload an image (optional)",
    imageUploaded: "Image uploaded successfully",
    submitButton: "Get Love Advice",
    loading: "Getting advice...",
    responseTitle: "AI Love Master's Advice:",
  },
  zh: {
    title: "AI爱情大师",
    subtitle: "你的个人AI驱动的爱情顾问 💖",
    formLabel: "问你的爱情相关问题",
    placeholder: "你的心里在想什么？💭",
    uploadButton: "上传图片（可选）",
    imageUploaded: "图片上传成功",
    submitButton: "获取爱情建议",
    loading: "正在获取建议...",
    responseTitle: "AI爱情大师的建议：",
  }
};

const formSchema = z.object({
  content: z.string().min(1, "Please enter your question or upload an image"),
});

export default function LoveMaster() {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const base64Data = base64String.split(',')[1];
        setImage(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      let messages: any[] = [
        {
          role: 'system',
          content: language === 'zh' 
            ? `你是AI爱情大师，一位专业的情感顾问。请按照以下规则提供建议：

1. 回答格式：
- 开头需简短回应用户的问题
- 使用数字列表形式列出建议要点
- 每个要点包含标题和详细说明，分两行显示
- 段落之间保持空行
- 结尾要有简短总结和开放性邀请

2. 语言要求：
- 使用温和友善的语气
- 避免使用专业术语
- 表达要简洁明了
- 给出具体可执行的建议

3. 内容标准：
- 建议要积极正面
- 避免过于主观或绝对化的表述
- 建议要切实可行
- 如果提供了图片，请分析其内容并将其纳入建议中

请用中文回答，保持专业、温暖且富有同理心的语气。`
            : `You are an AI Love Master, a professional relationship counselor. Please follow these rules:

1. Response Format:
- Begin with a brief acknowledgment
- Present advice in numbered points
- Each point should have a title and detailed explanation on separate lines
- Maintain spacing between paragraphs
- End with a brief summary and open invitation

2. Language Style:
- Use warm and friendly tone
- Avoid technical jargon
- Keep expressions clear and concise
- Provide actionable advice

3. Content Standards:
- Keep suggestions positive
- Avoid absolute statements
- Ensure advice is practical
- If an image is provided, analyze and incorporate it into your advice

Please maintain a professional, warm, and empathetic tone throughout your response.`
        },
        {
          role: 'user',
          content: values.content
        }
      ];

      if (image) {
        messages.push({
          role: 'user',
          content: [
            { type: "text", text: language === 'zh' ? "这是与我的问题相关的截图或图片：" : "Here's a screenshot or image related to my question:" },
            { type: "image_url", image_url: { url: `data:image/jpeg;base64,${image}` } }
          ]
        });
      }

      const result = await axios.post(process.env.NEXT_PUBLIC_OPENAI_API_URL || '', {
        max_tokens: 1200,
        model: 'gpt-4o',
        temperature: 0.8,
        top_p: 1,
        presence_penalty: 1,
        messages: messages
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        }
      });

      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      toast({
        title: language === 'zh' ? "错误" : "Error",
        description: language === 'zh' ? "无法从AI获取响应。请重试。" : "Failed to get a response from the AI. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
      <HeroImage />
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
          {t.title}
        </h2>
        <p className="text-gray-600 text-xl">{t.subtitle}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold text-purple-700">{t.formLabel}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={t.placeholder}
                    {...field} 
                    className="h-32 border-2 border-pink-200 focus:border-pink-500 rounded-xl text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center border-2 border-pink-300 text-pink-500 hover:bg-pink-50 transition-colors rounded-xl py-2"
            >
              <Upload className="w-5 h-5 mr-2" />
              {t.uploadButton}
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            {image && <span className="text-sm text-green-600">{t.imageUploaded}</span>}
          </div>
          <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                {t.loading}
              </>
            ) : (
              <>
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.submitButton}
              </>
            )}
          </Button>
        </form>
      </Form>

      {response && (
        <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
            <Heart className="mr-2 h-6 w-6 text-pink-500" />
            {t.responseTitle}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">{response}</p>
        </div>
      )}
    </div>
  );
}