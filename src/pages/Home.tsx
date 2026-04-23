import { Layout } from '../components/Layout';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <Layout>
      <motion.div 
        className="px-5 max-w-2xl mx-auto space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Section */}
        <motion.section variants={itemVariants} className="flex flex-col items-center text-center space-y-4 mt-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-tertiary-fixed shadow-ambient cursor-pointer"
          >
            <img 
              alt="设计师头像" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uih2rr95xsVcDyyopt1qEndb_TXjwKyJGepUBi6bGkOka_CEzBv5d5rLmoKqY1YoZ35wvd33BENs9Cxza_zfP7J_4ENDE3aTxOk_VPMFNRBW_G2c5v9ZAkQfd0bzxZ9IPbXLEO4YupQsWS8gLeMNW2Bgta5NF8Kx8wJZgx7bFet_n1K8yAvs1y-HIliOGP5bma08fpp22_gHPPZA39FiaL2tf7iJMbQQxT_w89T-Lke2xI8QGRzMpVRZIm15L4CrewEDVnnNhWg" 
            />
          </motion.div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-on-surface">王睿熙</h1>
            <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
              2022-2026 咸阳师范学院 本科/产品设计专业
            </p>
          </div>
          <div className="flex space-x-3">
            {['工业设计', '用户体验研究'].map(tag => (
              <motion.span 
                key={tag}
                whileHover={{ y: -2 }}
                className="bg-tertiary-fixed px-3 py-1 rounded-sm text-xs font-medium text-on-tertiary-fixed-variant cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Featured Project Divider */}
        <motion.div variants={itemVariants} className="border-t border-tertiary-fixed pt-4">
          <h2 className="text-xs font-bold text-outline uppercase tracking-widest mb-4">精选作品</h2>
          
          {/* Featured Project Card */}
          <Link to="/project/vertical-reading-pod" className="block group">
            <motion.article 
              whileHover={{ y: -4, shadow: "0 12px 24px rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.99 }}
              className="bg-surface-container-lowest rounded-xl border border-tertiary-fixed shadow-ambient overflow-hidden flex flex-col cursor-pointer transition-shadow"
            >
              <div className="relative h-64 w-full bg-surface-variant overflow-hidden">
                <img 
                  alt="Vertical Reading Pod" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiXhvDrhd7sWtDW6jv_s1W-S6AkAT7P1yBRCAkX_e3Fg2jotYbT5C7Rj0NmzPRcFIV1GgF5BerasGT1DTSO1sTaftg33PVFKkyhMnIDqYUe_d1urWaagBVF62B2F9W-Fc0Op9WmbQ1hbjQookLgT04D32-Bf-WugTtwquSISGEIggiZmQ2Kuo7cnP5k9_UJMdo6D6grEjniDY7PhRBk2A16JWU57Xt_A6gKhkOR0nnxm8Ld-vkkgR5NUwgpZoD13o28nMTFa8qQKw" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 bg-white flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-on-surface">垂直阅读舱</h3>
                  <p className="text-sm text-on-surface-variant">毕业设计, 2026</p>
                </div>
                <ArrowUpRight className="text-outline group-hover:text-primary transition-colors" size={20} />
              </div>
            </motion.article>
          </Link>
        </motion.div>

        {/* Process Snippet List */}
        <motion.section variants={itemVariants} className="space-y-4 pb-10">
          <h2 className="text-xs font-bold text-outline uppercase tracking-widest border-b border-tertiary-fixed pb-1">近期探索</h2>
          
          {[
            {
              title: "材质研究",
              desc: "胡桃木与铝",
              img: "https://lh3.googleusercontent.com/aida/ADBb0ujjsMoxgL8d48hkf06dAtGC95bMGC5mbVFLTlrHoBtG78YI8v9RFtrjAJryZzhhqasnRetBtKW_R2vSrFmUnnH7UJWkbkYj-DPmMFr7JTwI4_eO5zOi68-rnP23VGU1XJBAmtF51FTYjU1PUiMiwIl4R7iA4jw2bqk034byXFe7k6yTP4fVyA7qfNZpVGs58IM_dw0UaWUvYlhSP3siL4_ZbcS9lZpnEkBqJzxmurxQ2q0IATX2xIXvmeUaz2CsVlkK3ZeLpeOa"
            },
            {
              title: "数字原型",
              desc: "CAD人机工程学",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyohCoMerIGFo_Yyf-b6KwYdTXfAYuHmJN-_9shCj5QJcInY_P6sraBi-Ok22v4ecDAsR8PlPNoisccfCjKZ0-4wmSQsFd9m1VO58QsG5oHzv4vRpe8NVm80KMKW6mfdWddpdRyexriy-JkvROu3mcG7XJDCXEp651ZjL1rrJO06l8iSU8FcrvVl1JiuTJ3NC7i-JBr66URJeQHdxDVa0GLEeQW6urWb6hugaDTQGWXoQBRJb_saj-4KrQrKhw_QaaclpqU8lY51Q"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 4 }}
              className="flex items-center justify-between py-2 border-b border-tertiary-fixed/50 hover:bg-surface-container-low transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-md bg-surface-variant overflow-hidden">
                  <img 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    src={item.img} 
                  />
                </div>
                <div>
                  <h4 className="font-medium text-on-surface">{item.title}</h4>
                  <p className="text-xs text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-tertiary-fixed-dim group-hover:text-primary transition-colors" />
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
    </Layout>
  );
}
