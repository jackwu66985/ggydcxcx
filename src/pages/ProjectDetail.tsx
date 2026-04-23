import { Layout } from '../components/Layout';
import { VolumeX, Maximize2 } from 'lucide-react';

export default function ProjectDetail() {
  return (
    <Layout title="垂直阅读舱" showBack>
      <div className="max-w-2xl mx-auto px-5 py-6 space-y-12">
        {/* Hero Section */}
        <section className="space-y-4">
          <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container shadow-ambient">
            <img 
              alt="Vertical Reading Pod Hero" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uiXhvDrhd7sWtDW6jv_s1W-S6AkAT7P1yBRCAkX_e3Fg2jotYbT5C7Rj0NmzPRcFIV1GgF5BerasGT1DTSO1sTaftg33PVFKkyhMnIDqYUe_d1urWaagBVF62B2F9W-Fc0Op9WmbQ1hbjQookLgT04D32-Bf-WugTtwquSISGEIggiZmQ2Kuo7cnP5k9_UJMdo6D6grEjniDY7PhRBk2A16JWU57Xt_A6gKhkOR0nnxm8Ld-vkkgR5NUwgpZoD13o28nMTFa8qQKw" 
            />
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">毕业设计</span>
              <span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">2026</span>
            </div>
            <h2 className="text-2xl font-bold text-on-surface">垂直阅读舱</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              本设计报告以公共图书馆的阅读空间为研究对象，提出垂直阅读舱的方案，以八角形单舱为基础单元，共享的垂直服务核心为结构与服务框架。方案强调阅读、短时停留与轻度放松之间的顺畅切换。
            </p>
          </div>
        </section>

        {/* Research Insights */}
        <section className="space-y-4">
          <div className="border-b border-tertiary-fixed pb-2">
            <h3 className="text-[10px] font-bold text-primary tracking-widest uppercase">01 / 研究洞察</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest border border-tertiary-fixed rounded-lg p-5 shadow-ambient space-y-2">
              <VolumeX className="text-primary" size={24} />
              <h4 className="text-base font-bold text-on-surface">声学隔离</h4>
              <p className="text-xs text-on-surface-variant">78%的受访学生表示环境噪音是开放式图书馆中影响专注的主要干扰因素。</p>
            </div>
            <div className="bg-surface-container-lowest border border-tertiary-fixed rounded-lg p-5 shadow-ambient space-y-2">
              <Maximize2 className="text-primary" size={24} />
              <h4 className="text-base font-bold text-on-surface">空间稀缺</h4>
              <p className="text-xs text-on-surface-variant">城市校园面临着1:40的私人学习座位与在校生比例，需要更高密度的解决方案。</p>
            </div>
          </div>
        </section>

        {/* System Construction */}
        <section className="space-y-4">
          <div className="border-b border-tertiary-fixed pb-2">
            <h3 className="text-[10px] font-bold text-primary tracking-widest uppercase">02 / 系统构造</h3>
          </div>
          <div className="w-full rounded-lg overflow-hidden bg-surface-container shadow-ambient aspect-[16/9]">
            <img 
              alt="Interior Construction" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ujxbh99GBdPwJWDAsV_0ub2CdaZ94waJ0OkC8pj9Hke3FWEUka86q1Oj_caRuqVGGBA6v62WRi0l_pOx3_vrVpWU8fPYoM20_6uOsMW-EwvgUNFEMDTrKH_bz0ZXa-lUB_BV5LxHielGiQD5R5tq9ocluu-Z9e5iV3gQdb4yxo75ymp5JTYK4urGDX0oPniH1kIcdpJ0rxXhyH_-rwuCAnslni_ap7Na6y2IzP6TaZ8gTrOa2mfmeg5Nl4mgPk92CsEmMDYUWcMRw" 
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-on-surface">中央结构核心</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              系统依赖于一个包覆桦木贴面的承重中央钢柱。独立的阅读舱从该核心悬挑而出，允许进行360度的模块化排列，在保持结构完整性的同时最大化垂直空间。
            </p>
          </div>
        </section>

        {/* CMF Strategy */}
        <section className="space-y-4">
          <div className="border-b border-tertiary-fixed pb-2">
            <h3 className="text-[10px] font-bold text-primary tracking-widest uppercase">03 / CMF策略</h3>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            材料调色板将物理工业设计品质转化为平静的环境。它避免了不必要的装饰，强调结构的诚实性。
          </p>
          <div className="flex justify-around gap-4 pt-4">
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-16 h-16 rounded-full bg-[#E5D3B3] shadow-ambient border border-tertiary-fixed"></div>
              <span className="text-[10px] font-bold text-on-surface uppercase text-center leading-tight">桦木胶合板<br/><span className="text-on-surface-variant font-normal">结构</span></span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-16 h-16 rounded-full bg-[#F9F7F2] shadow-ambient border border-tertiary-fixed"></div>
              <span className="text-[10px] font-bold text-on-surface uppercase text-center leading-tight">暖白色<br/><span className="text-on-surface-variant font-normal">金属配件</span></span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-16 h-16 rounded-full bg-[#8C7355] shadow-ambient border border-tertiary-fixed"></div>
              <span className="text-[10px] font-bold text-on-surface uppercase text-center leading-tight">毛毡声学<br/><span className="text-on-surface-variant font-normal">内部衬里</span></span>
            </div>
          </div>
        </section>

        {/* Final Renders */}
        <section className="space-y-4 pb-12">
          <div className="border-b border-tertiary-fixed pb-2">
            <h3 className="text-[10px] font-bold text-primary tracking-widest uppercase">04 / 最终渲染</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full aspect-[16/9] rounded-lg overflow-hidden bg-surface-container shadow-ambient">
              <img 
                alt="Render 1" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uj63pzvDwBqluLzhLJaSFJoJt3hSI9mX9hAyUSko--tB4SEw1u_zDe3eEH5RZd7bovfF-qUwyCM2GX0kciH-wN-JnTQEajlomXCWeeqfHHE-A_vdvTvX3ptr0nAFAihd2NMHghGwlMP5W-I64-T4ZKyBdI18SciNoxGCGkvnyTiD9iPRShHsgAALSPjSzQl8O49uMW1LjwnJUp_NS7_GU0l29IvXgBoK7v0WH_wanLXs8PhZHDyuO0Bqkpfo1Fe-dPEC9IJliPGTg" 
              />
            </div>
            <div className="w-full aspect-[4/5] rounded-lg overflow-hidden bg-surface-container shadow-ambient">
              <img 
                alt="Render 2" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiW6zK4s8RwPChqW3fj60iFe2-FIwXiHVixKDCgJCB1UPvHY-7BpUDsodQijTn_0oRNAmDIP5d2V8u5NWro_3TMV5CmGC2YiX0JJ04hydtAXcZiSn3HfBxvtzaZvIR97FuIKf6H8dpt5qQrp0glFeSeL4pZGPs4P8A116K3SpeDXuCsBZLYgn966f1SRVlazmyOeyCJBg-UZowVR4Jrb0AUG3KCwH69nEH-3P8AWJ26L5lvDDhwIjolG17v99rBblteBuk9ktlVLQ" 
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
