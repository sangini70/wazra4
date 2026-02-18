import { FAQItem, TimelineEvent, ComplianceRule, SeoData } from './types';

// Images
export const IMAGES = {
  LOGO: 'https://github.com/sangini70/wazralogo/blob/main/%EC%99%80%EC%A6%88%EB%9D%BC%EB%A1%9C%EA%B3%A0_%ED%88%AC%EB%AA%852.png?raw=true',
  FOUNDER: 'https://github.com/sangini70/wazralogo/blob/main/%EA%B9%80%EB%B6%80%EC%97%B4%EB%B0%95%EC%82%AC_%EC%82%AC%EC%A7%84%EC%84%B8%EB%A1%9C.png?raw=true',
  HERO_BG: 'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&w=2530&auto=format&fit=crop', // Abstract water/glass
  LAB_BG: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop', // Research lab
  BOTTLE_MOCKUP: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2670&auto=format&fit=crop' // Clean glass water
};

// SEO Data
export const SEO_CONFIG: Record<string, SeoData> = {
  HOME: {
    title: "와즈라(WAZRA) | 75개 특허 기반의 프리미엄 워터",
    description: "김부열 박사의 40년 연구 철학이 담긴 물. 단순한 수분을 넘어선 연구의 결정체 와즈라를 경험하세요.",
    keywords: ["와즈라", "프리미엄워터", "김부열박사", "미네랄워터", "연구개발"]
  }
};

// FAQ Data
export const FAQ_LIST: FAQItem[] = [
  {
    category: 'price',
    question: "일반 생수보다 가격이 높은 이유는 무엇인가요?",
    answer: "와즈라는 단순한 취수 및 여과 과정을 거친 물이 아닙니다. 김부열 박사의 75개 특허 기술을 기반으로 한 공기 정화 및 수처리 기술이 집약된 연구의 결과물입니다. 일반적인 대량 생산 공정과 달리, 엄격한 품질 관리와 특수 공정을 거쳐 생산되기에 그 가치에 맞는 가격이 책정되었습니다."
  },
  {
    category: 'product',
    question: "특허 기술이 적용되었다는 것은 어떤 의미인가요?",
    answer: "와즈라의 생산 설비와 공정에는 김부열 박사가 평생을 바쳐 연구한 유체 역학 및 정화 기술이 적용되어 있습니다. 이는 물의 순도와 본질적인 품질을 최상으로 유지하기 위한 독자적인 기술력을 의미합니다."
  },
  {
    category: 'product',
    question: "하루에 얼마나 마시는 것이 좋은가요?",
    answer: "일반적인 수분 섭취 권장량에 따라 하루 1.5L~2L 섭취를 권장합니다. 와즈라는 기상 직후, 운동 전후 등 수분이 필요한 모든 순간에 편안하게 즐기실 수 있습니다."
  },
  {
    category: 'shipping',
    question: "1+1 체험팩은 언제까지 구매 가능한가요?",
    answer: "체험팩은 한정 수량으로 매월 갱신되며, 재고 소진 시 조기 마감될 수 있습니다. 현재 진행 중인 이벤트 배너를 확인해 주시기 바랍니다."
  }
];

// Timeline Data
export const TIMELINE: TimelineEvent[] = [
  {
    year: "1985",
    title: "연구의 시작",
    description: "김부열 박사, 유체 역학 및 기초 과학 연구 입문. 자연의 정화 원리에 대한 탐구 시작."
  },
  {
    year: "1998",
    title: "공기 정화 기술 특허",
    description: "보이지 않는 공기를 다루는 핵심 기술 확보. 국내외 주요 특허 등록 시작."
  },
  {
    year: "2010",
    title: "환경 기술의 확장",
    description: "공기에서 물로 연구 분야 확장. 유체의 본질적인 성질을 변화시키는 메커니즘 규명."
  },
  {
    year: "2022",
    title: "WAZRA 프로젝트 가동",
    description: "75개 누적 특허 기술을 집약한 프리미엄 워터 생산 공정 설계 완료."
  },
  {
    year: "2024",
    title: "와즈라 런칭",
    description: "타협하지 않는 품질의 결과물, 와즈라 공식 출시."
  }
];

// Compliance Rules (Internal Use/Transparency)
export const COMPLIANCE_RULES: ComplianceRule[] = [
  { forbidden: "치료", alternative: "연구/개발", reason: "의약품 오인 소지 차단" },
  { forbidden: "효과가 있다", alternative: "도움을 줄 수 있다/경험을 제공한다", reason: "단정적 표현 금지" },
  { forbidden: "혈액순환/혈압", alternative: "건강한 생활습관", reason: "질병명 직접 언급 불가" },
  { forbidden: "최고의", alternative: "프리미엄/엄격한", reason: "최상급 표현 광고법 주의" },
  { forbidden: "암 예방", alternative: "본 제품은 의약품이 아닙니다 (필수고지)", reason: "질병 예방 표방 절대 금지" }
];