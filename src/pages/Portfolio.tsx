import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const projects = [
  {
    id: 'vertical-reading-pod',
    title: '垂直阅读舱',
    description: '针对图书馆公共空间设计的垂直式独立阅读空间研究。',
    tag: '毕业设计',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiXhvDrhd7sWtDW6jv_s1W-S6AkAT7P1yBRCAkX_e3Fg2jotYbT5C7Rj0NmzPRcFIV1GgF5BerasGT1DTSO1sTaftg33PVFKkyhMnIDqYUe_d1urWaagBVF62B2F9W-Fc0Op9WmbQ1hbjQookLgT04D32-Bf-WugTtwquSISGEIggiZmQ2Kuo7cnP5k9_UJMdo6D6grEjniDY7PhRBk2A16JWU57Xt_A6gKhkOR0nnxm8Ld-vkkgR5NUwgpZoD13o28nMTFa8qQKw',
    featured: true
  },
  {
    id: 'smart-home-center',
    title: '智能家居中心',
    description: '环境计算环境的触觉界面。',
    tag: '工业设计',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhVHW06gM4SWGK6MqNr8tlyjl7GYrbB7UckvYXljV9ZaC-PIzc1vy0Tni1KBzSf8buwLuYJpVGk5fvKE-AK-znQ5FHJIRUkyqHf1EInsoGDiwqPFtOYxHozyaowt3TfNNtVPu_uCA19BKvvOKvZi4yPDBljXorS8HpcRkMaeuRryWYwbvpMGjUsotz5twhYQ1h3rhrABnbgR_yHzeEFajHORb0Is2fpe3temMqkgeLFhMT02B5A0OkWUKsOIgBRLkkOjxksPoa4'
  },
  {
    id: 'sustainable-furniture',
    title: '可持续家具',
    description: '利用零浪费制造原则的平板包装椅。',
    tag: '产品设计',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhmVK_ZP3OFqFKdOFQGYONCftMB10sko01GVV1xmM8nxBtSJ2eWHt5KYG8M_g19gZ9TrJ_lDBoul9h9mdJLSubvjQhZ6eSw3wGy_eZ3ZqnUDOL36wLdvL32yUbWzPZI5eP-LLQ8wFYSMnXP4rMhH_1C3cdFLevvb7Q8DrMc3tdOLRBQVRhViIq4SArhCUg7Ue46KBVJH1Jr-XbNk2XtVxEOw7rx56YII86TuN142T0ZkXiW09x5xIR3DMPws_pUn3ehLlHq5rmDaA'
  },
  {
    id: 'promo-video',
    title: '公共图书馆垂直阅读舱宣传片',
    description: '产品介绍展示视频',
    tag: 'AIGC 影视',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugmCjsRvfv3nqm3PnuREEtLdW5dFUozkiVOV6ESjCJnMOtnCESONIp2akH2NhZIagbNTOj8TRy1FYBMlrSxGolEhCddHfSvM5symWyfjHLUwTttu_ue6f6K3KoqbuXHn4Gj_gVj5DYCqoLHCMuwyI98GA7VajkeIcIi-nLSJXS1Y5GFr5_MYR60vNG_uvIw5OlVosKQYRA9GBscVB6omnYyRWUWggJHw3fHKv9UAoyqTxsFUPhUmyQJR3jT7fgQECnntDaqjJHJnw'
  }
];

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

export default function Portfolio() {
  return (
    <Layout title="作品档案">
      <motion.div 
        className="px-5 max-w-3xl mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-bold text-on-background mb-2">精选作品</h2>
          <p className="text-sm text-on-surface-variant max-w-md">专注于结构完整性和用户体验的工业与数字设计探索档案。</p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className={project.featured ? 'md:col-span-2' : 'col-span-1'}>
              <Link 
                to={project.id === 'promo-video' ? '#' : `/project/${project.id}`}
                className="block group"
              >
                <motion.article 
                  whileHover={{ y: -4, shadow: "0 12px 24px rgba(0,0,0,0.08)" }}
                  whileTap={{ scale: 0.995 }}
                  className="bg-surface-container-lowest rounded shadow-ambient border border-tertiary-fixed overflow-hidden flex flex-col hover:bg-surface-bright transition-all"
                >
                  <div className={`relative ${project.featured ? 'h-64 md:h-80' : 'h-48'} w-full bg-secondary-container overflow-hidden`}>
                    <img 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={project.image} 
                    />
                    <div className="absolute top-4 left-4 bg-tertiary/80 text-on-tertiary text-[10px] font-bold uppercase px-2 py-1 rounded">
                      {project.tag}
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-end">
                    <h3 className="text-lg font-semibold text-on-background mb-1">{project.title}</h3>
                    <p className="text-xs text-on-surface-variant line-clamp-2">{project.description}</p>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
