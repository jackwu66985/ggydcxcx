import { Layout } from '../components/Layout';
import { motion } from 'motion/react';
import { 
  Lightbulb, 
  Thermometer, 
  Wind, 
  Blinds, 
  ShieldCheck, 
  Mic2, 
  Cpu, 
  Activity, 
  Layers, 
  Maximize2, 
  Zap,
  Globe
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function SmartHomeHub() {
  return (
    <Layout title="智能家居中心" showBack>
      <motion.div 
        className="max-w-4xl mx-auto px-5 py-8 space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Banner Hero */}
        <motion.section variants={itemVariants} className="relative group rounded-3xl overflow-hidden shadow-level-3 bg-[#111] aspect-[16/10] md:aspect-[21/9]">
          <img 
            alt="Smart Home Hub Hero" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhVHW06gM4SWGK6MqNr8tlyjl7GYrbB7UckvYXljV9ZaC-PIzc1vy0Tni1KBzSf8buwLuYJpVGk5fvKE-AK-znQ5FHJIRUkyqHf1EInsoGDiwqPFtOYxHozyaowt3TfNNtVPu_uCA19BKvvOKvZi4yPDBljXorS8HpcRkMaeuRryWYwbvpMGjUsotz5twhYQ1h3rhrABnbgR_yHzeEFajHORb0Is2fpe3temMqkgeLFhMT02B5A0OkWUKsOIgBRLkkOjxksPoa4" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-12 flex flex-col justify-end">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">智能家居中心</h1>
            <p className="text-blue-100/70 text-sm md:text-lg tracking-wide uppercase font-medium">环境计算环境的触觉界面</p>
          </div>
        </motion.section>

        {/* 01 Design Philosophy */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase border-b border-tertiary-fixed pb-2 w-fit">01 设计理念</h3>
            <p className="text-lg text-on-surface leading-relaxed font-medium">
              以触觉为核心的智能中枢，融合环境感知与多模态交互。
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              为家庭空间提供自然、直观、高效的智慧体验。通过环形触控界面，将复杂的环境控制抽象为指尖的旋转与点击。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Activity, label: "环境感知" },
              { icon: Mic2, label: "触觉交互" },
              { icon: Cpu, label: "智能中枢" },
              { icon: Globe, label: "场景联动" }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 text-center flex flex-col items-center gap-2">
                <item.icon className="text-primary" size={24} />
                <span className="text-[10px] font-bold uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 02 Core Functions */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h3 className="text-xs font-bold text-primary tracking-widest uppercase border-b border-tertiary-fixed pb-2 w-fit">02 核心功能</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Lightbulb, title: "灯光控制", desc: "分区域调光与色温控制" },
              { icon: Thermometer, title: "温湿度感知", desc: "实时环境参数精准抓取" },
              { icon: Wind, title: "空气质量监测", desc: "PM2.5/VOC/CO2全量覆盖" },
              { icon: Blinds, title: "窗帘联动", desc: "根据光照自动调节开合度" },
              { icon: ShieldCheck, title: "安防联动", desc: "全屋感知网，守护家庭安全" },
              { icon: Mic2, title: "语音/触觉交互", desc: "多模态反馈，随心所欲控制" }
            ].map((func, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <func.icon size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-on-surface mb-1">{func.title}</h4>
                  <p className="text-[10px] text-on-surface-variant leading-tight">{func.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 03 & 05 Structure & Details */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant/10 flex flex-col items-center text-center space-y-6">
            <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest">05 结构解析</h3>
            <div className="relative w-full aspect-square flex items-center justify-center">
              <Layers className="text-primary/20 w-32 h-32 absolute animate-pulse" />
              <div className="relative z-10 space-y-2 text-[10px] font-medium text-on-surface-variant">
                <p>• 钢化玻璃面板 (Touch Panel)</p>
                <p>• 触控交互模组 (Haptic Module)</p>
                <p>• 主控计算模组 (Logic Board)</p>
                <p>• 通信结构件 (Comm Array)</p>
                <p>• 铝合金底座 (Alu Base)</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
             <div className="space-y-4">
                <h3 className="text-xs font-bold text-primary tracking-widest uppercase">03 产品细节</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 aspect-video">
                     <div className="w-full h-full flex items-center justify-center text-[10px] text-outline p-4 text-center">环形氛围灯带<br/>状态指示 · 沉浸体验</div>
                  </div>
                  <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 aspect-video">
                     <div className="w-full h-full flex items-center justify-center text-[10px] text-outline p-4 text-center">阳极氧化铝<br/>精密CNC · 喷砂工艺</div>
                  </div>
                </div>
             </div>
             <div className="space-y-4">
                <h3 className="text-xs font-bold text-primary tracking-widest uppercase border-b border-primary/20 pb-2">07 产品尺寸 (mm)</h3>
                <div className="flex gap-10 items-center">
                   <div className="w-24 h-24 border-2 border-primary/10 rounded flex items-center justify-center relative">
                      <span className="absolute -top-6 left-0 right-0 text-center text-[8px] font-bold">180 mm</span>
                      <span className="absolute -left-10 top-0 bottom-0 flex items-center text-[8px] font-bold">180 mm</span>
                      <BoxSelect className="text-primary/10" size={48} />
                   </div>
                   <div className="w-24 h-8 border-2 border-primary/10 rounded flex items-center justify-center relative">
                      <span className="absolute -left-8 top-0 bottom-0 flex items-center text-[8px] font-bold">28 mm</span>
                      <span className="text-[10px] opacity-40">Side</span>
                   </div>
                </div>
             </div>
          </div>
        </motion.section>

        {/* 04 Scenario */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h3 className="text-sm font-bold text-primary tracking-widest uppercase text-center">04 客厅场景 · 观影模式</h3>
          <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/5 shadow-level-3 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 text-right opacity-40">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Power Consumption</p>
                <div className="flex items-end gap-1 h-8">
                  {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1 }}
                      className="w-1 bg-primary rounded-full" 
                    />
                  ))}
                </div>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "灯光", val: "30%", icon: Lightbulb },
                  { label: "窗帘", val: "全闭", icon: Blinds },
                  { label: "空调", val: "26°C", icon: Thermometer },
                  { label: "空气", val: "优", icon: Wind }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <item.icon className="text-white/60 group-hover:text-primary transition-colors" size={24} />
                    <span className="text-blue-50/50 text-[10px] font-medium">{item.label}</span>
                    <span className="text-white font-bold text-sm tracking-tight">{item.val}</span>
                  </div>
                ))}
             </div>
             <div className="mt-8 pt-8 border-t border-white/10 flex justify-center">
                <div className="flex gap-8 text-[10px] font-medium text-white/40 uppercase tracking-widest">
                  <span>Temp: 26.5°C</span>
                  <span>CO2: 620ppm</span>
                  <span>Noise: 38dB</span>
                </div>
             </div>
          </div>
        </motion.section>

        {/* 08 Value */}
        <motion.section variants={itemVariants} className="bg-primary-container text-on-primary-container p-10 rounded-[3rem] text-center space-y-8">
          <div className="space-y-2">
            <h3 className="text-base font-bold tracking-[0.2em] uppercase">08 设计创新与价值</h3>
            <p className="text-xs opacity-60">Smart Home Hub · Design Innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
             {[
               { title: "触觉交互体验", desc: "以触觉为核心，融合旋钮与反馈，带来直觉的可感知操作。" },
               { title: "环境智能融合", desc: "多维环境数据实时感知分析，统一管理家居设备与场景。" },
               { title: "空间美学协同", desc: "简约外观与高品质工艺融合，成为家居空间的科技美学中心。" },
               { title: "开放互联生态", desc: "支持多协议接入，打造个性化的智慧生活方式。" }
             ].map((v, i) => (
               <div key={i} className="flex gap-4 group">
                 <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white transition-all duration-300">
                   <Zap className="text-on-primary-container group-hover:text-primary" size={16} />
                 </div>
                 <div className="space-y-1">
                   <h4 className="text-sm font-bold">{v.title}</h4>
                   <p className="text-[11px] opacity-80 leading-relaxed font-medium">{v.desc}</p>
                 </div>
               </div>
             ))}
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="pt-4 text-xs font-bold tracking-[0.3em] uppercase opacity-40 cursor-default"
          >
            感知环境 · 触控未来 · 智联生活
          </motion.div>
        </motion.section>
      </motion.div>
    </Layout>
  );
}

function BoxSelect({ className, size }: { className: string, size: number }) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M9 3h1" /><path d="M14 3h1" />
      <path d="M9 21h1" /><path d="M14 21h1" />
      <path d="M3 9v1" /><path d="M3 14v1" />
      <path d="M21 9v1" /><path d="M21 14v1" />
    </svg>
  );
}
