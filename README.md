# AI Love Master 智能情感顾问 💝

## 在线体验
[AI Love Master](https://ai-love-master3-82tw.vercel.app)

## 项目简介
AI Love Master 是一个基于人工智能的情感咨询平台，为用户提供专业、温暖的恋爱建议和情感指导。通过先进的AI技术，为用户提供个性化的情感建议，帮助用户建立和维护更健康的情感关系。

## 主要功能
- 💬 智能情感咨询：提供专业、个性化的情感建议
- 🌍 中英文双语支持：无缝切换中英文界面
- 🖼️ 图片分析功能：支持上传图片获取更准确的建议
- 💡 个性化建议：根据具体情况提供定制化解决方案
- 🎯 实用可行的解决方案：注重建议的可执行性
- 🌐 全球可访问：部署在Vercel平台，支持全球访问
- 🔒 安全性：使用环境变量保护API密钥

## 技术栈
- **前端框架**: Next.js 13
- **编程语言**: TypeScript
- **样式解决方案**: Tailwind CSS
- **UI组件**: Shadcn/ui
- **HTTP客户端**: Axios
- **表单处理**: React Hook Form
- **类型验证**: Zod
- **AI模型**: OpenAI GPT-4
- **部署平台**: Vercel

## 本地开发
1. 克隆项目
\`\`\`bash
git clone https://github.com/yourusername/ai-love-master.git
cd ai-love-master
\`\`\`

2. 安装依赖
\`\`\`bash
npm install
# 或
yarn install
\`\`\`

3. 配置环境变量
创建 \`.env.local\` 文件并添加以下配置：
\`\`\`bash
NEXT_PUBLIC_OPENAI_API_KEY=你的OpenAI API密钥
NEXT_PUBLIC_OPENAI_API_URL=你的API地址
\`\`\`

4. 启动开发服务器
\`\`\`bash
npm run dev
# 或
yarn dev
\`\`\`

## 项目结构
\`\`\`
ai-love-master/
├── app/                # 应用页面
│   ├── page.tsx       # 主页
│   └── about/         # 关于页面
├── components/         # 组件
│   ├── Header.tsx     # 页头组件
│   ├── Footer.tsx     # 页脚组件
│   ├── LoveMaster.tsx # 主要功能组件
│   └── ui/            # UI组件
├── lib/               # 工具函数
├── public/            # 静态资源
└── styles/            # 样式文件
\`\`\`

## 部署
项目已部署在Vercel平台上，访问地址：[https://ai-love-master3-82tw.vercel.app](https://ai-love-master3-82tw.vercel.app)

### 部署步骤
1. Fork 本项目到你的GitHub
2. 在 Vercel 上导入项目
3. 配置环境变量：
   - \`NEXT_PUBLIC_OPENAI_API_KEY\`
   - \`NEXT_PUBLIC_OPENAI_API_URL\`
4. 部署

## 功能展示
- 多语言支持：支持中英文切换
- 实时响应：快速获取AI建议
- 图片分析：支持图片上下文理解
- 响应式设计：完美适配各种设备

## 贡献指南
欢迎提交 Pull Request 或提出 Issue。在提交代码前，请确保：
- 代码符合项目的编码规范
- 添加必要的测试
- 更新相关文档

## 许可证
[MIT License](LICENSE)

## 联系方式
如有任何问题或建议，欢迎联系：
- 邮箱：ziming237@foxmail.com
- 项目地址：[GitHub Repository](https://github.com/yourusername/ai-love-master)
- 在线演示：[AI Love Master](https://ai-love-master3-82tw.vercel.app)

## 致谢
- 感谢 OpenAI 提供强大的API支持
- 感谢 Vercel 提供优质的部署平台
- 感谢所有为这个项目做出贡献的开发者！

## 更新日志
### v0.1.0 (2024-02-24)
- 🎉 项目初始发布
- ✨ 支持中英文双语
- 🖼️ 添加图片分析功能
- 🚀 部署到Vercel平台