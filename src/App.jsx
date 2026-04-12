import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Sun, Moon, Globe } from 'lucide-react';

const App = () => {
  const [lang, setLang] = useState('zh');
  const [isDark, setIsDark] = useState(false);

  // --- 国际化文案包 ---
  const t = {
    zh: {
      nav: { about: "优势", intern: "实习", practice: "实践", project: "案例" },
      hero: { 
        name: "Alen Liu (廖坚鑫)", 
        role: "海外业务与数字营销实践者", 
        intro: "工商管理背景，专注于数字营销与海外业务。擅长利用 AI 工具实现数字化提效，在 TikTok Shop 运营与海外 KOL 营销领域拥有实战经验。具备优秀的高压多线程推进能力，曾高效统筹 11+ 个并发商业项目并实现高质量交付。",
        cta: "联系我 📧" 
      },
      about: {
        title: "个人能力与核心优势",
        items: [
          { title: "文案策划与商业汇报", desc: "具备扎实的文案功底，能独立撰写长篇 BP 与营销策划案；<strong>精通 PPT 排版与结构化文档撰写</strong>，能够根据 B 端或 C 端用户的不同需求，快速产出清晰直观的传播文案与汇报物料。" },
          { title: "AI 工具与数字化提效", desc: "对 SaaS 生态和企业数字化提效有极高热情。熟练使用 AI 效率工具，能针对不同业务场景灵活<strong>搭建专属 AI Agent 工作流</strong>，大幅提升效率；具备 AI Coding 实操经验，独立部署个人网站。" },
          { title: "数据分析与业务洞察", desc: "具备敏锐的数据嗅觉与结构化拆解能力。能熟练使用 Excel 搭建利润测算模型，并对业务转化漏斗(进房率、点击率、转化率)进行<strong>周期性追踪与拆解</strong>；擅长从数据中发现问题，并输出切实可行的商业优化建议。" },
          { title: "项目统筹与跨部门协同", desc: "具备优秀的高压多线程推进与交付能力(最高并发管理 <strong>11+</strong> 项目)。擅长将复杂的客户需求拆解为清晰的执行步骤并制定<strong>标准化 SOP</strong>；能高效串联内外团队，严控进度与质量，确保目标按时交付。" }
        ],
        tags: ["TikTok Shop", "KOL Marketing", "AI Agent Workflow", "Data Analysis", "AI Coding"]
      },
      internship: {
        title: "实习经历",
        list: [
          {
            company: "优矩互动 (北京) 科技有限公司",
            role: "TikTok Shop 店铺运营实习生",
            time: "2025.12 - 2026.02",
            points: [
              "<strong>市场开拓与内容感知：</strong>负责英、日、意三国市场与竞品调研，主导新市场选品测试与 SKU 组合优化；利用 AI 工具辅助生成契合本地文化的主图与短视频素材，显著提高店铺内容的吸引力与本土化程度。",
              "<strong>利润测算与定价策略：</strong>独立统筹三国店铺日常运营(月均 GMV 约 <strong>6 万美元</strong>)。针对不同国家运费、平台费率和税率，独立使用 Excel 搭建利润测算表，制定动态定价体系，确保各市场利润率稳定在 <strong>23%-41%</strong> 之间。",
              "<strong>数据复盘与转化优化：</strong>定期追踪日常活动数据，深度拆解转化漏斗。根据数据反馈和内容趋势，优化商品展示和直播间引导流程，推动直播间进房率提升 <strong>3%</strong>、商品转化率提升 2.37%。"
            ]
          },
          {
            company: "广州花和木传媒有限公司",
            role: "客户执行 AE 实习生 & 海外 KOL 运营",
            time: "2025.05 - 2025.12",
            points: [
              "<strong>KA对接与策略制定：</strong>深度参与华为、Realme、Ulike、Dreame、深蓝、米可世界等头部 KA 客户的营销项目；期间独立操盘“Sacelady”品牌出海项目并推进落地，为其量身定制完整的 KOL 营销策略与视频创意方向。",
              "<strong>流程搭建与跨部门协同：</strong>作为项目对接中枢，高频沟通媒介 BD、内容、商务等内部团队及外部 13 家机构。将整体需求拆解为具体执行任务，并建立<strong>标准化 SOP</strong>，大幅提升跨部门协作的流转效率。",
              "<strong>达人统筹与项目执行：</strong>并行管理 <strong>11+</strong> 个商业化项目，单项目峰值统筹 <strong>30+</strong> 位海外 KOL，项目总金额超 <strong>20 万美元</strong>。严控质量，实现成片通过率 100%、准时交付率 98%。",
              "<strong>风险控制与项目复盘：</strong>制定严格的 Timeline 和风险预案，合理管理客户预期。面对突发问题迅速响应；项目完成后独立撰写深度复盘报告并提出后续优化建议。"
            ]
          }
        ]
      },
      practice: {
        title: "项目实践经历",
        list: [
          {
            project: "“好又康”地道食材甄选",
            role: "项目负责人 / 统筹管理",
            time: "2024.06 - 2025.06",
            points: [
              "<strong>市场调研与商业企划：</strong>针对行业内 31 家中腰部企业发起调研与数据分析，完成产品精准商业定位；<strong>独立撰写 2 万余字 BP</strong> 并输出高规格商业路演 PPT，将复杂的业务模式转化为直观的视觉方案。",
              "<strong>商务拓展与资源整合：</strong>依托商业企划案与外部企业进行高频 B2B 洽谈，成功与深圳稻海科技等 <strong>50 余家</strong>产业链上下游公司签订战略合作协议。"
            ]
          }
        ]
      },
      project: {
        title: "项目案例",
        name: "Sacelady 品牌出海营销简案",
        desc: "深度参与并独立操盘的美妆品牌海外推广方案。结合对 TikTok 生态的深刻理解，为其量身定制了完整的 KOL 营销策略与视频创意方向,推动Secalady的海外业务增长。"
      },
      contact: { title: "Get in touch.", sub: "期待与您探讨关于数字营销与数字化提效的无限可能。" }
    },
    en: {
      nav: { about: "Strengths", intern: "Internships", practice: "Practice", project: "Case" },
      hero: { 
        name: "Alen Liu (Jianxin Liao)", 
        role: "Overseas Business & Digital Marketing Specialist", 
        intro: "Business Administration background, focusing on overseas business and digital marketing. Adept at leveraging AI tools for digital efficiency, with practical experience in TikTok Shop operations and overseas KOL marketing. Excellent high-pressure, multi-threaded execution capability, successfully managing 11+ concurrent commercial projects with high-quality delivery.",
        cta: "Contact Me 📧" 
      },
      about: {
        title: "Core Competencies",
        items: [
          { title: "Copywriting & Business Reporting", desc: "Expert in drafting long-form BP and marketing proposals. <strong>Proficient in PPT and structured documents</strong>, creating intuitive communication materials for both B2B and B2C needs." },
          { title: "AI Tools & Digital Efficiency", desc: "Passionate about SaaS ecosystems. Skilled in building <strong>AI Agent workflows</strong> for various business scenarios to boost efficiency. Experienced in AI Coding and independent website deployment." },
          { title: "Data Analysis & Business Insight", desc: "Strong analytical skills. Proficient in Excel for profit models and tracking conversion funnels (CTR, CVR). Adept at <strong>discovering issues through data</strong> and providing actionable optimization advice." },
          { title: "Project Coordination", desc: "Excellent capability in high-pressure, multi-threaded project management (up to <strong>11+ concurrent projects</strong>). Skilled in breaking down complex needs into <strong>standardized SOPs</strong> to ensure timely delivery." }
        ],
        tags: ["TikTok Shop", "KOL Marketing", "AI Agent Workflow", "Data Analysis", "AI Coding"]
      },
      internship: {
        title: "Internships",
        list: [
          {
            company: "UJU (Beijing) Tech",
            role: "TikTok Shop Operations Intern",
            time: "2025.12 - 2026.02",
            points: [
              "<strong>Market Expansion:</strong> Conducted market research for UK, JP, IT markets; led SKU optimization. Used AI to generate localized content, significantly increasing cultural relevance.",
              "<strong>Pricing Strategy:</strong> Managed daily operations across 3 countries (Avg GMV <strong>~$60,000</strong>). Built Excel profit models considering varying logistics and taxes, stabilizing margins at 23%-41%.",
              "<strong>Data & Optimization:</strong> Tracked funnel metrics regularly. Optimized display and live-stream logic, boosting room entry rate by 3% and CVR by 2.37%."
            ]
          },
          {
            company: "Guangzhou Huahemu Media",
            role: "Account Executive & Overseas KOL Intern",
            time: "2025.05 - 2025.12",
            points: [
              "<strong>KA Strategy:</strong> Deeply involved in campaigns for KA clients like Huawei and Realme. Independently led the 'Sacelady' global project, creating comprehensive KOL strategies.",
              "<strong>Process & Coordination:</strong> Acted as the central hub communicating with BD, Content, and 13 external agencies. Established standardized SOPs to vastly improve workflow efficiency.",
              "<strong>Execution:</strong> Managed 11+ concurrent projects, coordinating up to 30+ KOLs per project with budgets exceeding $200,000. Achieved 100% content approval and 98% on-time delivery.",
              "<strong>Risk Control:</strong> Managed strict timelines and client expectations. Handled emergencies swiftly and authored in-depth post-project review reports."
            ]
          }
        ]
      },
      practice: {
        title: "Project Practice",
        list: [
          {
            project: "Haoyoukang Project",
            role: "Project Lead / Management",
            time: "2024.06 - 2025.06",
            points: [
              "<strong>Market Research:</strong> Surveyed 31 mid-tier companies to pinpoint product positioning. Authored a 20,000+ word BP and high-spec roadshow PPT to visualize complex models.",
              "<strong>Business Development:</strong> Engaged in high-frequency B2B negotiations, securing strategic partnerships with 50+ companies in the supply chain."
            ]
          }
        ]
      },
      project: {
        title: "Featured Case",
        name: "Sacelady Global Marketing Brief",
        desc: "A comprehensive marketing strategy tailored for the beauty brand Sacelady. Built upon a deep understanding of the TikTok ecosystem, it details a complete KOL strategy and creative direction, demonstrating solid integrated marketing and localized execution capabilities."
      },
      contact: { title: "Get in touch.", sub: "Let's explore the infinite possibilities of digital marketing and AI empowerment together." }
    }
  };

  const content = t[lang];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-neutral-200 dark:selection:bg-neutral-800 ${isDark ? 'bg-[#000000] text-[#f5f5f7]' : 'bg-[#ffffff] text-[#1d1d1f]'} font-sans antialiased`}>
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 border-b ${isDark ? 'bg-black/70 border-white/10' : 'bg-white/80 border-black/5'} backdrop-blur-xl saturate-150`}>
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold tracking-tight text-[15px]">Alen · Resume</span>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-7 text-[13px] font-medium opacity-70">
              <a href="#about" className="hover:opacity-100 transition-opacity">{content.nav.about}</a>
              <a href="#internship" className="hover:opacity-100 transition-opacity">{content.nav.intern}</a>
              <a href="#practice" className="hover:opacity-100 transition-opacity">{content.nav.practice}</a>
              <a href="#projects" className="hover:opacity-100 transition-opacity">{content.nav.project}</a>
            </div>
            
            <div className="flex items-center gap-2 border-l pl-5 border-gray-300 dark:border-white/20">
              <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all text-xs font-bold">
                <Globe size={15} />
              </button>
              <button onClick={() => setIsDark(!isDark)} className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all">
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        
        {/* --- Hero Section --- */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col-reverse md:flex-row items-start justify-between gap-8 mb-12">
          
          <div className="flex-1">
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-tight mb-3 text-[#111111] dark:text-white leading-tight">
              {content.hero.name}
            </h1>
            <p className={`text-[15px] md:text-[17px] font-medium mb-6 tracking-tight ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {content.hero.role}
            </p>
            <p className={`text-[14px] md:text-[15px] leading-relaxed mb-8 max-w-xl ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              {content.hero.intro}
            </p>
            <a href="mailto:alenliew0@gmail.com" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all text-[13px] shadow-sm ${isDark ? 'bg-[#f5f5f7] text-black hover:bg-white hover:scale-105' : 'bg-[#1d1d1f] text-white hover:bg-[#424245] hover:scale-105'}`}>
              {content.hero.cta}
            </a>
          </div>

          <div className="shrink-0 md:mt-2">
            <img 
              src="/8fa5b1f7a5356b645863ae41008f2f3e.jpg" 
              alt="Alen Liu Avatar" 
              className="w-24 md:w-28 rounded-2xl shadow-sm border border-black/5 dark:border-white/10"
            />
          </div>

        </section>

        <hr className="border-none h-[1px] bg-black/[0.06] dark:bg-white/10 my-10 w-full" />

        {/* --- About Me --- */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-[24px] font-bold mb-8 tracking-tight">
            {content.about.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
            {content.about.items.map((item, i) => (
              <div key={i} className="pt-2">
                <h3 className="text-[16px] font-semibold mb-2">{item.title}</h3>
                <p 
                  className={`text-[14px] leading-relaxed [&>strong]:font-semibold ${isDark ? 'text-neutral-400 [&>strong]:text-neutral-100' : 'text-neutral-600 [&>strong]:text-black'}`}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex flex-wrap gap-2.5">
            {content.about.tags.map(tag => (
              <span 
                key={tag} 
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 cursor-default ${isDark ? 'bg-[#222222] text-neutral-300 hover:bg-[#333333] hover:text-white' : 'bg-[#f0f0f0] text-neutral-600 hover:bg-[#e4e4e4] hover:text-black'}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-none h-[1px] bg-black/[0.06] dark:bg-white/10 my-10 w-full" />

        {/* --- Internship Experience --- */}
        <section id="internship" className="scroll-mt-20">
          <h2 className="text-[24px] font-bold mb-8 tracking-tight">
            {content.internship.title}
          </h2>
          <div className="space-y-6">
            {content.internship.list.map((exp, i) => (
              <div key={i} className={`p-8 md:p-10 rounded-[24px] border transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] ${isDark ? 'border-white/10 bg-[#151515] hover:border-white/20' : 'border-black/[0.04] bg-white hover:border-black/10'}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-2">
                  <h3 className="text-[18px] font-bold tracking-tight">{exp.company}</h3>
                  <span className="text-[12px] font-mono opacity-50">{exp.time}</span>
                </div>
                <p className={`font-medium mb-5 text-[14px] ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>{exp.role}</p>
                <ul className="space-y-3">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${isDark ? 'bg-neutral-500' : 'bg-neutral-400'}`} />
                      <p 
                        className={`text-[14px] leading-relaxed [&>strong]:font-semibold ${isDark ? 'text-neutral-400 [&>strong]:text-neutral-100' : 'text-neutral-600 [&>strong]:text-black'}`}
                        dangerouslySetInnerHTML={{ __html: point }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-none h-[1px] bg-black/[0.06] dark:bg-white/10 my-10 w-full" />

        {/* --- Project Practice Experience --- */}
        <section id="practice" className="scroll-mt-20">
          <h2 className="text-[24px] font-bold mb-8 tracking-tight">
            {content.practice.title}
          </h2>
          <div className="space-y-6">
            {content.practice.list.map((exp, i) => (
              <div key={i} className={`p-8 md:p-10 rounded-[24px] border transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] ${isDark ? 'border-white/10 bg-[#151515] hover:border-white/20' : 'border-black/[0.04] bg-white hover:border-black/10'}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-2">
                  <h3 className="text-[18px] font-bold tracking-tight">{exp.project}</h3>
                  <span className="text-[12px] font-mono opacity-50">{exp.time}</span>
                </div>
                <p className={`font-medium mb-5 text-[14px] ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>{exp.role}</p>
                <ul className="space-y-3">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${isDark ? 'bg-neutral-500' : 'bg-neutral-400'}`} />
                      <p 
                        className={`text-[14px] leading-relaxed [&>strong]:font-semibold ${isDark ? 'text-neutral-400 [&>strong]:text-neutral-100' : 'text-neutral-600 [&>strong]:text-black'}`}
                        dangerouslySetInnerHTML={{ __html: point }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-none h-[1px] bg-black/[0.06] dark:bg-white/10 my-10 w-full" />

        {/* --- Featured Case Section --- */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-[24px] font-bold mb-8 tracking-tight">
            {content.project.title}
          </h2>
          <div className={`group relative rounded-[24px] overflow-hidden border transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] ${isDark ? 'border-white/10 bg-[#151515] hover:border-white/20' : 'border-black/[0.04] bg-white hover:border-black/10'}`}>
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-10">
                <h3 className="text-[20px] font-bold mb-3 tracking-tight">{content.project.name}</h3>
                <p className={`text-[14px] leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {content.project.desc}
                </p>
              </div>
              <div className="h-full min-h-[240px] overflow-hidden bg-gray-50 dark:bg-black/20 flex items-center justify-center">
                <img 
                  src="/77a5c397ab3af6b4ee0173b980f614af.png" 
                  alt="Sacelady Project Brief"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="pt-12 mt-12 border-t border-black/5 dark:border-white/10 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-sm">
              <h2 className="text-[24px] font-bold mb-2 tracking-tight">{content.contact.title}</h2>
              <p className={`text-[14px] ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {content.contact.sub}
              </p>
            </div>
            <div className="flex gap-3">
              <a href="mailto:alenliew0@gmail.com" className={`p-3 rounded-full transition-all hover:scale-105 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-[#f0f0f0] hover:bg-[#e4e4e4] text-black'}`}><Mail size={18} /></a>
              <a href="https://github.com/alenliu-space" target="_blank" className={`p-3 rounded-full transition-all hover:scale-105 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-[#f0f0f0] hover:bg-[#e4e4e4] text-black'}`}><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/%E5%9D%9A%E9%91%AB-%E5%BB%96-965203303/" target="_blank" className={`p-3 rounded-full transition-all hover:scale-105 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-[#f0f0f0] hover:bg-[#e4e4e4] text-black'}`}><Linkedin size={18} /></a>
            </div>
          </div>
          <p className="mt-16 text-[12px] opacity-40 font-mono text-center md:text-left">
            © 2026 AlenLiew·Resume.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;