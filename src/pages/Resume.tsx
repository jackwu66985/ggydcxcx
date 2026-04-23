import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Printer, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Resume() {
  const navigate = useNavigate();
  const [tip, setTip] = useState('');

  const handleDownload = () => {
    if (typeof window !== 'undefined' && typeof window.print === 'function') {
      window.print();
      return;
    }

    setTip('当前环境不支持系统打印，请在浏览器中打开后导出 PDF。');
  };

  return (
    <Layout title="个人简历" showBack>
      <div className="max-w-4xl mx-auto px-5 py-8 pb-32">
        {/* Controls - Hidden during print */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} /> 返回
          </button>
          <button 
            onClick={handleDownload}
            className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-container transition-colors shadow-ambient"
          >
            <Printer size={18} /> 打印 / 另存为 PDF
          </button>
        </div>

        {tip && (
          <p className="mb-6 rounded-lg border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-xs text-on-surface-variant print:hidden">
            {tip}
          </p>
        )}

        {/* Paper Sheet */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-16 shadow-level-2 rounded-xl border border-outline-variant/30 print:shadow-none print:p-0 print:border-none"
        >
          {/* Header */}
          <div className="border-b-2 border-primary pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-4xl font-bold text-on-surface mb-2">王睿熙</h1>
              <p className="text-xl text-primary font-medium">产品设计专业</p>
            </div>
            <div className="text-right text-sm text-on-surface-variant space-y-1">
              <p>电话: 18091289183</p>
              <p>邮箱: 1473397820@qq.com</p>
              <p>地址: 陕西 · 咸阳</p>
            </div>
          </div>

          {/* Bio */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-on-surface uppercase tracking-widest border-l-4 border-primary pl-4 mb-4">个人简介</h2>
            <p className="text-on-surface-variant leading-relaxed">
              本人有较强的学习能力，对待工作认真踏实，有独立完成项目的经验，抗压能力较强善于发现，并且能从容面对调整解决可能出现的问题。专业知识牢固，执行能力较强。
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-10">
              {/* Experience */}
              <section>
                <h2 className="text-lg font-bold text-on-surface uppercase tracking-widest border-l-4 border-primary pl-4 mb-6">工作经验</h2>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-on-surface">AIGC/影视动漫制作</h3>
                      <span className="text-xs text-outline">2025.12 - 至今</span>
                    </div>
                    <p className="text-sm text-primary mb-2">西安风云视界影视公司</p>
                    <p className="text-sm text-on-surface-variant">负责aigc影视编导，资产视频制作，美术风格指导，小组协作调配。</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-on-surface">设计/策划宣传</h3>
                      <span className="text-xs text-outline">2022.06 - 2022.09</span>
                    </div>
                    <p className="text-sm text-primary mb-2">西安群星美术画室</p>
                    <p className="text-sm text-on-surface-variant">负责画室部分的文案编写与策划设计统筹沟通客户需求，跟进项目完成进度。</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-on-surface">设计/产品物料设计</h3>
                      <span className="text-xs text-outline">2024.07 - 2024.12</span>
                    </div>
                    <p className="text-sm text-primary mb-2">朱训德美术馆</p>
                    <p className="text-sm text-on-surface-variant">负责曾传兴艺术工作室展览展位以及证书设计，并参与美术馆logo设计。</p>
                  </div>
                </div>
              </section>

              {/* Training/Education */}
              <section>
                <h2 className="text-lg font-bold text-on-surface uppercase tracking-widest border-l-4 border-primary pl-4 mb-6">教育背景</h2>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-on-surface">本科 / 产品设计专业</h3>
                    <span className="text-xs text-outline">2022 - 2026</span>
                  </div>
                  <p className="text-sm text-primary mb-2">咸阳师范学院</p>
                  <p className="text-sm text-on-surface-variant">
                    主修课程：工业设计制图、人机工程学、材料模型制作与工艺、产品开发设计。
                  </p>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {/* Skills */}
              <section>
                <h2 className="text-lg font-bold text-on-surface uppercase tracking-widest border-l-4 border-primary pl-4 mb-6">技能储备</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-outline uppercase mb-2">软件技能</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Photoshop', 'C4D', 'CDR', 'AI', 'PR', 'AE'].map(s => (
                        <span key={s} className="bg-surface-container px-2 py-1 text-[10px] rounded font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-outline uppercase mb-2">专业能力</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      工业设计研究、人机交互分析、三维建模、场景渲染、aigc 协同创作。
                    </p>
                  </div>
                </div>
              </section>

              {/* Awards */}
              <section>
                <h2 className="text-lg font-bold text-on-surface uppercase tracking-widest border-l-4 border-primary pl-4 mb-6">荣誉奖项</h2>
                <ul className="text-xs text-on-surface-variant space-y-3">
                  <li>• 2025 首届华商设计奖全国优秀奖</li>
                  <li>• 2023 获新型外观专利一项</li>
                  <li>• 2023 年互联网+省铜</li>
                  <li>• 高级平面设计师证</li>
                  <li>• 宝石花抗疫爱心大使</li>
                </ul>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media print {
          body {
            background: white !important;
          }
          nav {
            display: none !important;
          }
          header {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </Layout>
  );
}
