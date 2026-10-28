export type Lang = 'zh' | 'en';

export const languages: Record<Lang, { htmlLang: string; label: string }> = {
  zh: { htmlLang: 'zh-CN', label: '中文' },
  en: { htmlLang: 'en', label: 'EN' },
};

export function getLang(locale: string | undefined): Lang {
  return locale === 'en' ? 'en' : 'zh';
}

/** 给站内路径加上语言前缀：'/gallery' -> '/en/gallery'，'/#about' -> '/en/#about' */
export function localizePath(path: string, lang: Lang): string {
  return lang === 'zh' ? path : `/en${path}`;
}

/** 去掉路径里的语言前缀，得到中文版对应路径 */
export function stripLang(pathname: string): string {
  return pathname.replace(/^\/en(?=\/|$)/, '') || '/';
}

/**
 * 数据条目里的英文字段放在 `en` 对象中，英文页面用它覆盖中文字段。
 * 没写 `en` 的新条目会回退显示中文，不会让页面报错。
 */
export function pick<T extends object>(item: T & { en?: Partial<T> }, lang: Lang): T {
  if (lang === 'en' && item.en) return { ...item, ...item.en };
  return item;
}

const zh = {
  'site.title': 'DeepLearner 人工智能学习社',
  'site.description': 'DeepLearner - 南通大学唯一的也是最具影响力的 AI 学习社区。',
  'site.name': '人工智能学习社',
  'site.fullName': '南通大学DeepLearner人工智能学习社',
  'slogan.main': '永不停止前进的步伐',
  'slogan.sub': 'Unstoppable. Always Forward.',

  'nav.about': '关于',
  'nav.activities': '活动',
  'nav.gallery': '影像',
  'nav.partners': '伙伴',
  'nav.join': '加入',
  'nav.contact': '联系',
  'nav.home': '返回首页',
  'nav.switchLabel': 'Switch to English',

  'common.backHome': '返回首页',
  'common.backActivities': '返回活动',
  'common.backTo': '返回 ',
  'common.viewDetails': '查看详情',
  'common.viewMore': '查看更多',
  'common.poster': '活动海报',
  'common.downloadMaterials': '下载活动资料',
  'common.downloadSlides': '下载嘉宾演讲 PPT',

  'about.heading': '这里是<br />DeepLearner！',
  'about.p1': '<strong class="text-white font-semibold">DeepLearner</strong> 是南通大学校内具有广泛影响力的 AI 学习社群。我们汇聚了来自计算机、设计、经济、管理等不同学科背景的成员，以共同的好奇心为纽带，探索人工智能技术的无限可能。',
  'about.p2': '我们相信，AI <strong class="text-white font-semibold">不只属于程序员</strong>。无论你是初次接触机器学习的新手，还是已有项目经验的实践者，DeepLearner 都是一个可以真正学到东西、找到同路人的地方。',
  'about.p3': '在这里，我们动手做项目，分享前沿资讯，也讨论 AI 与各个领域碰撞出的新思路。我们<strong class="text-white font-semibold">不以竞赛成绩定义价值</strong>，而以每一次真实的学习与协作，推动成员持续向前。',
  'about.slogan': '永不停止前进的步伐。',
  'about.sloganSub': 'Never Stop Moving Forward.',
  'about.statDays': '社团已成立天数',
  'about.statMembers': '已有社员数',
  'about.statEvents': '已举办活动数',

  'activities.heading': '核心活动',
  'gallery.heading': '影像资料',
  'gallery.intro': '记录 DeepLearner 的每一个重要瞬间。每一张照片背后，都是一次真实的学习与协作。',
  'partners.heading': '企业联系',

  'join.heading': '加入我们',
  'join.tagline': '探索你的能力边界，就在这里',
  'join.qqTitle': 'QQ 群',
  'join.qqAlt': 'QQ交流群二维码',
  'join.qqDesc': '扫描二维码，加入 DeepLearner 官方 QQ 交流群，获取最新活动资讯与资源。',
  'join.platformTitle': '系统报名',
  'join.platformDesc': '通过学校社团管理平台正式加入，享有完整社团成员权益。',

  'contact.heading': '联系我们',

  'footer.backToTop': '返回顶部',
  'footer.supervisor': '指导单位',
  'footer.schoolAlt': '人工智能与计算机学院',

  'challenge.teams': '参赛队伍',
  'challenge.participants': '参赛人数',
  'challenge.winners': '获奖队伍',
  'challenge.schedule': '赛程日历',
  'challenge.legendDays': '赛程日期',
  'challenge.legendMilestones': '重要节点',
  'challenge.topics': '赛题回顾',

  'pubs.heading': '学术成果',
  'pubs.intro': 'DeepLearner 社员在科研、开发与创新实践中的成果记录。',
  'pubs.all': '全部',
  'pubs.paper': '论文',
  'pubs.software': '软著',
  'pubs.patent': '专利',
  'pubs.other': '其他',
};

const en: typeof zh = {
  'site.title': 'DeepLearner Club',
  'site.description': 'DeepLearner is the one and only, and the most influential, AI learning community at Nantong University.',
  'site.name': 'Club',
  'site.fullName': 'DeepLearner Club, Nantong University',
  'slogan.main': 'Unstoppable. Always Forward.',
  'slogan.sub': '永不停止前进的步伐',

  'nav.about': 'About',
  'nav.activities': 'Activities',
  'nav.gallery': 'Gallery',
  'nav.partners': 'Partners',
  'nav.join': 'Join',
  'nav.contact': 'Contact',
  'nav.home': 'Back to home',
  'nav.switchLabel': '切换到中文',

  'common.backHome': 'Back to Home',
  'common.backActivities': 'Back to Activities',
  'common.backTo': 'Back to ',
  'common.viewDetails': 'View Details',
  'common.viewMore': 'View More',
  'common.poster': 'Event Poster',
  'common.downloadMaterials': 'Download Materials',
  'common.downloadSlides': 'Download Speaker Slides',

  'about.heading': 'Welcome to<br />DeepLearner!',
  'about.p1': '<strong class="text-white font-semibold">DeepLearner</strong> is a widely influential AI learning community at Nantong University. Our members come from computer science, design, economics, management and many other disciplines, brought together by a shared curiosity to explore the endless possibilities of artificial intelligence.',
  'about.p2': 'We believe AI <strong class="text-white font-semibold">isn’t just for programmers</strong>. Whether you’re meeting machine learning for the first time or already have hands-on project experience, DeepLearner is a place where you can genuinely learn and find people heading the same way.',
  'about.p3': 'Here, we build projects with our own hands, share the latest developments, and explore the new ideas that emerge when AI meets other fields. We <strong class="text-white font-semibold">don’t measure worth by competition results</strong>. Instead, every genuine moment of learning and collaboration keeps our members moving forward.',
  'about.slogan': 'Never stop moving forward.',
  'about.sloganSub': '永不停止前进的步伐',
  'about.statDays': 'Days since the club was founded',
  'about.statMembers': 'Members so far',
  'about.statEvents': 'Events hosted',

  'activities.heading': 'Core Activities',
  'gallery.heading': 'Gallery',
  'gallery.intro': 'Capturing every important moment at DeepLearner. Behind every photo is a real story of learning and collaboration.',
  'partners.heading': 'Industry Partners',

  'join.heading': 'Join Us',
  'join.tagline': 'Discover how far you can go, starting here',
  'join.qqTitle': 'QQ Group',
  'join.qqAlt': 'QR code for the DeepLearner QQ group',
  'join.qqDesc': 'Scan the QR code to join the official DeepLearner QQ group for the latest event news and resources.',
  'join.platformTitle': 'Official Registration',
  'join.platformDesc': 'Join officially through the university’s student club platform and enjoy full membership benefits.',

  'contact.heading': 'Contact Us',

  'footer.backToTop': 'Back to top',
  'footer.supervisor': 'Supervised by',
  'footer.schoolAlt': 'School of Artificial Intelligence and Computer Science, Nantong University',

  'challenge.teams': 'Teams',
  'challenge.participants': 'Participants',
  'challenge.winners': 'Winning Teams',
  'challenge.schedule': 'Schedule',
  'challenge.legendDays': 'Competition days',
  'challenge.legendMilestones': 'Milestones',
  'challenge.topics': 'Challenge Topics',

  'pubs.heading': 'Publications',
  'pubs.intro': 'A record of what DeepLearner members have achieved in research, development and innovation.',
  'pubs.all': 'All',
  'pubs.paper': 'Papers',
  'pubs.software': 'Software Copyrights',
  'pubs.patent': 'Patents',
  'pubs.other': 'Other',
};

export const ui = { zh, en };

export function useTranslations(lang: Lang) {
  return (key: keyof typeof zh) => ui[lang][key];
}
