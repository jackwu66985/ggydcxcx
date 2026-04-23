import { Layout } from '../components/Layout';
import { motion } from 'motion/react';
import { Box, Layers, MousePointer2, Ruler, Leaf, Recycle, Truck, Settings2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function SustainableFurniture() {
  return (
    <Layout title="可持续家具" showBack>
      <motion.div 
        className="max-w-4xl mx-auto px-5 py-8 space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Leaf className="text-primary" size={24} />
              <h1 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight">可持续家具</h1>
            </div>
            <p className="text-xl text-on-surface-variant font-medium">利用零浪费制造原则的平板包装椅</p>
            <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
              {['零浪费制造', '平板包装', '可持续材料', '模块组装'].map(tag => (
                <span key={tag} className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative group rounded-2xl overflow-hidden shadow-level-2 bg-[#F5F5F5] aspect-[16/9] md:aspect-[21/9]">
            <img 
              alt="Sustainable Furniture Board Main" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uhmVK_ZP3OFqFKdOFQGYONCftMB10sko01GVV1xmM8nxBtSJ2eWHt5KYG8M_g19gZ9TrJ_lDBoul9h9mdJLSubvjQhZ6eSw3wGy_eZ3ZqnUDOL36wLdvL32yUbWzPZI5eP-LLQ8wFYSMnXP4rMhH_1C3cdFLevvb7Q8DrMc3tdOLRBQVRhViIq4SArhCUg7Ue46KBVJH1Jr-XbNk2XtVxEOw7rx56YII86TuN142T0ZkXiW09x5xIR3DMPws_pUn3ehLlHq5rmDaA" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.section>

        {/* 01 Design Concept */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-primary tracking-widest uppercase border-b border-tertiary-fixed pb-2 w-fit">01 设计概念</h3>
            <p className="text-lg text-on-surface leading-relaxed font-medium">
              以零浪费制造为核心，采用整板优化切割，最大化材料利用率。
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              产品以平板包装形式运输，节省体积与能耗。使用可持续来源的桦木板材，水性环保涂装。结构采用插接方式，无需五金与胶水，便捷组装，易于拆解与回收再利用。
            </p>
          </div>
          <div className="flex justify-center">
             <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 text-center">
                  <Box className="text-primary" size={32} />
                  <span className="text-xs font-bold">回收利用</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 text-center">
                  <Recycle className="text-primary" size={32} />
                  <span className="text-xs font-bold">零浪费制造</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 text-center">
                  <Truck className="text-primary" size={32} />
                  <span className="text-xs font-bold">平板包装</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 text-center">
                  <Layers className="text-primary" size={32} />
                  <span className="text-xs font-bold">模块组装</span>
                </div>
             </div>
          </div>
        </motion.section>

        {/* 03 & 04 Packaging & Structure */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20 space-y-4">
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase border-b border-primary/20 pb-2">03 平板包装与运输</h3>
            <div className="grid grid-cols-3 gap-4">
               <div className="text-center space-y-2">
                 <div className="h-12 flex items-center justify-center"><Box className="text-on-surface-variant" size={24} /></div>
                 <p className="text-[10px] font-bold">包装体积小</p>
               </div>
               <div className="text-center space-y-2">
                 <div className="h-12 flex items-center justify-center"><Truck className="text-on-surface-variant" size={24} /></div>
                 <p className="text-[10px] font-bold">节省运输成本</p>
               </div>
               <div className="text-center space-y-2">
                 <div className="h-12 flex items-center justify-center"><Leaf className="text-on-surface-variant" size={24} /></div>
                 <p className="text-[10px] font-bold">低碳环保</p>
               </div>
            </div>
            <div className="w-full h-64 bg-surface-bright rounded-lg overflow-hidden border border-outline-variant/20">
              <img 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhmVK_ZP3OFqFKdOFQGYONCftMB10sko01GVV1xmM8nxBtSJ2eWHt5KYG8M_g19gZ9TrJ_lDBoul9h9mdJLSubvjQhZ6eSw3wGy_eZ3ZqnUDOL36wLdvL32yUbWzPZI5eP-LLQ8wFYSMnXP4rMhH_1C3cdFLevvb7Q8DrMc3tdOLRBQVRhViIq4SArhCUg7Ue46KBVJH1Jr-XbNk2XtVxEOw7rx56YII86TuN142T0ZkXiW09x5xIR3DMPws_pUn3ehLlHq5rmDaA" 
                className="w-full h-full object-cover" 
                alt="Flat pack board segment"
              />
            </div>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20 space-y-4">
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase border-b border-primary/20 pb-2">04 结构解析</h3>
            <div className="flex items-center gap-4">
              <ul className="text-[11px] font-medium text-on-surface-variant space-y-2">
                <li>• 靠背板 (Backrest)</li>
                <li>• 座板 (Seat)</li>
                <li>• 侧板 (Side Panel)</li>
                <li>• 后腿板 (Rear Leg)</li>
                <li>• 前腿板 (Front Leg)</li>
                <li>• 插接结构 (Slot Structure)</li>
              </ul>
              <div className="flex-1 h-32 bg-surface-bright rounded-lg flex items-center justify-center border border-outline-variant/20">
                 <Settings2 className="text-outline-variant animate-spin-slow" size={48} />
              </div>
            </div>
          </div>
        </motion.section>

        {/* 05 組裝流程 */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h3 className="text-sm font-bold text-primary tracking-widest uppercase border-b border-tertiary-fixed pb-2 w-fit">05 组装流程</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "平板展开", desc: "取出平板组件" },
              { step: "2", title: "安装侧板", desc: "连接侧板与后腿" },
              { step: "3", title: "安装座板", desc: "插入前腿与座板" },
              { step: "4", title: "安装靠背", desc: "插入靠背板，完成" }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 text-center space-y-2 group hover:bg-white transition-colors duration-300">
                <span className="inline-block w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center mx-auto">{item.step}</span>
                <h4 className="text-xs font-bold text-on-surface">{item.title}</h4>
                <p className="text-[10px] text-on-surface-variant">{item.desc}</p>
                <div className="w-full aspect-square bg-surface-variant rounded-md overflow-hidden border border-outline-variant/5">
                   <div className="w-full h-full flex items-center justify-center text-outline-variant font-bold text-2xl group-hover:scale-110 transition-transform">{item.step}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 07 & 08 dimension & cmf */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase border-b border-primary/20 pb-2">07 尺寸图 (mm)</h3>
            <div className="bg-white p-6 rounded-2xl border border-outline-variant/20 aspect-video flex items-center justify-center relative shadow-inner">
               <div className="w-4/5 h-4/5 border-2 border-dashed border-outline-variant rounded flex items-center justify-center flex-col">
                  <Ruler className="text-outline-variant/30 mb-2" size={48} />
                  <div className="flex gap-8 text-[12px] font-mono text-outline">
                    <span>W: 420</span>
                    <span>D: 450</span>
                    <span>H: 800</span>
                  </div>
               </div>
               <div className="absolute top-0 right-10 bottom-0 w-px bg-primary/20"></div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase border-b border-primary/20 pb-2">08 CMF 材质与工艺</h3>
            <div className="grid grid-cols-2 gap-3">
               {[
                 { title: "桦木多层板", desc: "天然、环保", color: "bg-[#E5D3B3]" },
                 { title: "可持续木材", desc: "FSC认证", color: "bg-[#8C7355]" },
                 { title: "环保涂装", desc: "水性漆", color: "bg-[#F9F7F2]" },
                 { title: "牛皮纸包装", desc: "100%可回收", color: "bg-[#A68F73]" }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/10">
                   <div className={`w-10 h-10 rounded-lg ${item.color} border border-black/5`}></div>
                   <div>
                     <p className="text-[10px] font-bold text-on-surface">{item.title}</p>
                     <p className="text-[9px] text-on-surface-variant">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </motion.section>

        {/* 09 Design Value */}
        <motion.section variants={itemVariants} className="bg-primary-container text-on-primary-container p-8 rounded-3xl space-y-6">
          <div className="text-center">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-1">09 设计价值</h3>
            <p className="text-[10px] opacity-70 uppercase tracking-widest">Sustainability & Efficiency</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Recycle, label: "零浪费制造" },
              { icon: Truck, label: "节省运输成本" },
              { icon: MousePointer2, label: "便捷组装" },
              { icon: Leaf, label: "可持续材料" },
              { icon: Box, label: "回收再利用" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 text-center group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                   <item.icon className="text-on-primary-container group-hover:text-primary transition-colors" size={24} />
                </div>
                <span className="text-[9px] font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>

      <style>{`
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: slow-spin 8s linear infinite;
        }
      `}</style>
    </Layout>
  );
}
