import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Mail, Download, Laptop, Award, GraduationCap, Briefcase, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export default function About() {
  const [showContact, setShowContact] = useState(false);

  return (
    <Layout title="关于设计师" showBack>
      <motion.div 
        className="max-w-4xl mx-auto px-5 py-6 space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Header Block */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 rounded-xl bg-surface-container-lowest shadow-ambient border border-outline-variant/30 overflow-hidden relative aspect-square"
          >
            <img 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ujTRAYfDFfPK5c7h9vaDuHIEsZyjSld8TdDLjZNSvkxn8d9fFdQ7A7_jO5qAfneMupFZPF6O0o0oiOqOICeo2-vK8erSTw9jpxO8n17H5YARaARMwLWqP1itBa_cMbDZngQTeZLfuO6AP_p5Lgjp63UeVq2CM6-Rv7E9dy-PmEJ4R3kTwQ2qP2EumseKpli-ui7Sd70GpOwTCgzhLZJ_lGb0COvRdnraqy2l7SswLlitCdqOpB7LT2f1mCLqyluprqKcyFw3WQrPw" 
            />
          </motion.div>
          <div className="md:col-span-2 rounded-xl bg-surface-container-lowest shadow-ambient border border-outline-variant/30 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-on-surface mb-2">王睿熙 <br/> <span className="text-primary">产品设计专业</span></h2>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              我叫王睿熙，本人有较强的学习能力，对待工作认真踏实，有独立完成项目的经验，抗压能力较强善于发现，并且能从容面对调整解决可能出现的问题。专业知识牢固，执行能力较强。
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowContact(!showContact)}
                className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary transition-colors min-w-[140px] justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showContact ? 'phone' : 'mail'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    {showContact ? <Phone size={18} /> : <Mail size={18} />} 
                    {showContact ? '18091289183' : '联系我'}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
              <Link to="/resume">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-outline text-on-surface-variant px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-surface-container transition-colors h-full"
                >
                  <Download size={18} /> 下载简历
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Experience */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-on-surface flex items-center gap-2 border-b border-tertiary-fixed pb-2">
              <Briefcase size={20} className="text-outline" /> 工作经验
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "AIGC/影视动漫制作",
                  meta: "西安风云视界影视公司 | 2025.12 - 至今",
                  desc: "负责aigc影视编导，资产视频制作，美术风格指导，小组协作调配",
                  active: true
                },
                {
                  title: "设计/策划宣传",
                  meta: "西安群星美术画室 • 2022.06 - 2022.09",
                  desc: "负责画室部分的文案编写与策划设计统筹沟通客户需求，跟进项目完成进度，完成项目需求。"
                },
                {
                  title: "设计/产品物料设计",
                  meta: "朱训德美术馆 • 2024.07 - 2024.12",
                  desc: "负责2024艺路同行曾传兴艺术工作室名家作品邀请展的展览展位以及证书设计，并参与朱训德美术馆logo设计。"
                }
              ].map((exp, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4 }}
                  className={`border-l-2 pl-4 py-1 transition-colors ${exp.active ? 'border-primary-container bg-surface-container-low/50' : 'border-outline-variant'}`}
                >
                  <h4 className="font-semibold text-on-surface">{exp.title}</h4>
                  <p className={`text-[10px] font-bold uppercase tracking-wider mt-1 mb-2 ${exp.active ? 'text-primary' : 'text-outline'}`}>{exp.meta}</p>
                  <p className="text-xs text-on-surface-variant">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-on-surface flex items-center gap-2 border-b border-tertiary-fixed pb-2">
              <GraduationCap size={20} className="text-outline" /> 教育背景
            </h3>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 4 }}
                className="border-l-2 border-outline-variant pl-4 py-1 transition-colors hover:bg-surface-container-low/50"
              >
                <h4 className="font-semibold text-on-surface">本科 / 产品设计专业</h4>
                <p className="text-[10px] font-bold text-outline uppercase tracking-wider mt-1 mb-2">咸阳师范学院 / 咸阳 • 2022 - 2026</p>
                <p className="text-xs text-on-surface-variant">本科主修课程：<br/>工业设计制图、人机工程学、材料模型制作与工艺、产品开发设计</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h3 className="text-xl font-bold text-on-surface border-b border-tertiary-fixed pb-2">技能与荣誉</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Software Skills */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/20 transition-shadow hover:shadow-ambient"
            >
              <div className="flex items-center gap-2 mb-4 text-primary font-bold text-xs uppercase tracking-widest">
                <Laptop size={16} /> 软件技能
              </div>
              <div className="flex flex-wrap gap-2">
                {['Photoshop', 'C4D', 'CDR', 'AI', 'PR', 'AE'].map(skill => (
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    key={skill} 
                    className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold px-2 py-1 rounded cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant mt-4">精通各类 AI 设计及影视视频软件</p>
            </motion.div>

            {/* Awards */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/20 sm:col-span-2 transition-shadow hover:shadow-ambient"
            >
              <div className="flex items-center gap-2 mb-4 text-primary font-bold text-xs uppercase tracking-widest">
                <Award size={16} /> 荣誉奖项
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  '2025 首届华商设计奖全国优秀奖',
                  '宝石花抗疫爱心大使',
                  '高级平面设计师',
                  '2023 获新型外观专利一项',
                  '2023 年互联网+省铜',
                  '2023 秦创原西安国际创业大赛优秀奖',
                  '2023 咸阳师范点赞学生榜样创业之星',
                  '2024 考获高级平面设计师证'
                ].map(award => (
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    key={award} 
                    className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold px-2 py-1 rounded cursor-default"
                  >
                    {award}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </Layout>
  );
}
