document.getElementById("year").innerText = new Date().getFullYear();

let currentLang = "en";

const text = {

// ================= ENGLISH =================
en:{

navBlog:"Blog",
navGallery:"Gallery",
navLinkedin:"LinkedIn",
navContact:"Contact",

role:"Overseas Business & Digital Marketing Practitioner",

intro:"A practitioner in overseas business and digital marketing, with hands-on experience in KOL execution, cross-regional operations, and TikTok Shop growth. Focused on structured execution, measurable outcomes, and stable delivery under pressure.",

whatido:"What I Do",
experienceTitle:"Experience",
socialTitle:"Socials",


do1t:"KOL Campaign Execution (AE)",
do1:"Built structured execution workflows, coordinated 200+ creators across regions, managed 11+ campaigns, ensured near 100% approval and ≈95% on-time delivery through briefing standardization, review control and risk handling.",

do2t:"KOL Business Development (BD)",
do2:"Responsible for influencer sourcing strategy, qualification standards, negotiation communication, expectation alignment, pricing framework and sustainable creator ecosystem building.",

do3t:"TikTok Shop Operations",
do3:"Full-chain operations including Channel Strategy · User Acquisition · Conversion Optimization · Pricing · Logistics · Fulfillment execution ensuring real closed-loop growth.",

do4t:"Creative & Content Capability",
do4:"Photography & video experience with PR & DaVinci workflow, understanding narrative rhythm and audience reactions to bridge business goals with creative execution.",


exp1t:"KOL Project Execution (AE)",
exp1:"Led 11+ campaigns, coordinated 200+ creators (up to 40/project), built SOP execution systems, achieved ≈100% approval and ≈95% delivery rate across consumer electronics, beauty and gaming sectors.",

exp2t:"KOL Business Development (BD)",
exp2:"Established creator sourcing methodology, negotiation frameworks, and long-term partnership pipelines to balance cost-effectiveness and delivery stability.",

exp3t:"TikTok Shop Operations – Full Chain",
exp3:"Participated in channel strategy, user acquisition, conversion growth, logistics coordination and fulfillment management supporting measurable performance growth.",

exp4t:"Creative & Content Capability",
exp4:"Creative understanding improves communication with creators, enhancing campaign efficiency and alignment between commercial goals and creative performance.",


socialGithub:"GitHub",
socialIg:"Instagram",
socialDouyin:"Douyin / TikTok",
socialLinkedin:"LinkedIn"

},


// ================= 中文 =================
zh:{

navBlog:"博客",
navGallery:"作品集",
navLinkedin:"领英",
navContact:"联系",

role:"海外业务与数字营销从业者",

intro:"专注海外业务与数字营销实践，拥有 KOL 项目执行、跨区域协作与 TikTok Shop 增长经验，注重结构化执行、可量化结果与在高压环境下的稳定交付。",

whatido:"我能做什么",
experienceTitle:"工作经历",
socialTitle:"社交帐号",

do1t:"KOL 项目执行（AE）",
do1:"搭建结构化执行流程，协作 200+ 达人，负责 11+ 项目推进，通过标准化 Brief、创意对齐、审核机制与风险管理，维持 ≈100% 通过率与 ≈95% 准时交付。",

do2t:"KOL 商务拓展（BD）",
do2:"负责达人筛选策略、资质标准搭建、谈判沟通机制、报价预期管理、关系维护与达人生态沉淀，支持业务长期发展。",

do3t:"TikTok Shop 全链路运营",
do3:"参与渠道布局 · 获客增长 · 转化优化 · 定价与商品管理 · 物流与履约执行，确保真实商业闭环。",

do4t:"内容与创意能力",
do4:"具备摄影与视频创作经验，掌握 PR 与达芬奇剪辑工作流，理解内容节奏与受众反馈，更好连接商业目标与创意表达。",


exp1t:"KOL 执行（AE）",
exp1:"负责 11+ 海外 KOL 项目，协作 200+ 达人（单项目最高 40 人），覆盖 3C、美妆与游戏领域，建立 SOP 执行体系，项目整体保持 ≈100% 审核通过与 ≈95% 准时交付。",

exp2t:"KOL 商务拓展（BD）",
exp2:"搭建达人筛选标准，建立沟通与价格谈判结构，沉淀长期合作达人资源池，在成本效率与交付效果之间实现平衡。",

exp3t:"TikTok Shop 全链路实践",
exp3:"参与渠道策略、内容驱动获客、转化提升、物流协同与履约管理，推动店铺增长并维持可交付性与稳定性。",

exp4t:"内容与创意能力",
exp4:"创意背景帮助理解创作者思维、生产流程与用户心理，更高效衔接商业目标与创意落地，提升项目协作效率。",

socialGithub:"GitHub",
socialIg:"Instagram",
socialDouyin:"抖音 / TikTok",
socialLinkedin:"领英"

}

};


function applyLang(){
  for(let k in text[currentLang]){
    const el=document.querySelector(`[data-i18n="${k}"]`);
    if(el) el.innerText=text[currentLang][k];
  }
}

document.getElementById("lang-toggle").onclick=function(){
  currentLang=currentLang==="en"?"zh":"en";
  this.innerText=currentLang==="en"?"ZH":"EN";
  applyLang();
};

document.getElementById("theme-toggle")
.onclick=()=>document.body.classList.toggle("dark");

applyLang();


/* ================= Mobile Menu ================= */
const menuBtn = document.getElementById("menuToggle");
const overlay = document.querySelector(".menu-overlay");

if(menuBtn){
  menuBtn.onclick = ()=>{
    document.body.classList.toggle("menu-open");
  };
}

if(overlay){
  overlay.onclick = ()=>{
    document.body.classList.remove("menu-open");
  };
}
