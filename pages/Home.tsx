import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ShieldCheck, Microscope, Award } from 'lucide-react';
import { IMAGES, TIMELINE } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* S1: Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_BG} 
            alt="Pure Water Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium text-white mb-6 tracking-widest uppercase">
            Premium Research Water
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6">
            75개의 특허,<br />
            하나의 물.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            김부열 박사의 40년 연구 인생이 담긴 와즈라.<br className="hidden md:block"/>
            단순한 수분을 넘어, 공정의 차이가 만든 품격을 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.coupang.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-wazra-900 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2"
            >
              쿠팡에서 구매하기 <ArrowRight size={18} />
            </a>
            <Link 
              to="/story" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white rounded-full font-medium hover:bg-white/10 transition flex items-center justify-center"
            >
              브랜드 스토리 보기
            </Link>
          </div>
          <p className="mt-8 text-xs text-gray-400">
            * 1+1 체험팩 이벤트 진행 중 (한정수량)
          </p>
        </div>
      </section>

      {/* S2: Price Defense Block */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-wazra-900 mb-8 font-serif">"물인데 왜 비싸죠?"</h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              와즈라는 단순한 취수 과정을 거친 일반 생수가 아닙니다.
            </p>
            <p>
              <strong className="text-wazra-900">75개의 특허 기술</strong>을 기반으로 한 
              독자적인 정화 및 블렌딩 공정을 거쳐 탄생합니다.
            </p>
            <p>
              대량 생산을 위한 타협 대신, <br/>
              김부열 박사의 연구 원칙을 지키는 <strong>엄격한 생산 공정</strong>을 선택했습니다.
            </p>
            <p className="text-gray-500 text-sm pt-4">
              공정의 차이가 가치의 차이를 만듭니다.
            </p>
          </div>
        </div>
      </section>

      {/* S3: Founder Proof */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src={IMAGES.FOUNDER} 
                  alt="Dr. Kim Bu-yeol" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white font-serif text-2xl">김부열 박사</p>
                  <p className="text-gray-300 text-sm">와즈라 연구소장 / 공학박사</p>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -top-6 -right-6 bg-wazra-gold rounded-full w-32 h-32 flex flex-col items-center justify-center text-white shadow-xl animate-pulse-slow">
                <span className="text-3xl font-bold">75</span>
                <span className="text-xs uppercase tracking-wide">Patents</span>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold text-wazra-blue tracking-widest uppercase mb-3">Founder Story</h2>
              <h3 className="text-4xl font-serif font-bold text-wazra-900 mb-6">
                보이지 않는 것을 연구하다,<br/>
                물에 도달하기까지.
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "공기를 정화하는 기술에서 시작했습니다. 유체의 흐름과 본질을 연구하던 중, 
                우리 몸의 70%를 차지하는 '물'에 대한 의문이 생겼습니다."
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                수많은 실험과 실패, 그리고 75개의 특허 등록. 
                와즈라는 그 치열했던 연구 시간의 증명입니다. 
                효능을 과장하지 않습니다. 오직 팩트와 연구 결과로만 이야기합니다.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Microscope className="text-wazra-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-wazra-900">끊임없는 연구</h4>
                    <p className="text-sm text-gray-500">40여 년간 이어진 유체 역학 및 정화 기술 연구</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-wazra-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-wazra-900">타협없는 품질</h4>
                    <p className="text-sm text-gray-500">생산 효율보다 품질을 우선시하는 공정 철학</p>
                  </div>
                </div>
              </div>

              <Link to="/story" className="text-wazra-900 font-bold border-b-2 border-wazra-900 pb-1 hover:text-wazra-700 transition inline-flex items-center gap-1">
                연구 이야기 더 보기 <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S4: Timeline Snapshot */}
      <section className="py-24 bg-wazra-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">연구의 궤적</h2>
            <p className="text-gray-400">한 순간에 만들어진 물이 아닙니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-0 md:pt-8 border-l-2 md:border-l-0 md:border-t-2 border-gray-700">
                <div className="absolute -left-[9px] top-0 md:-top-[9px] md:left-0 w-4 h-4 bg-wazra-gold rounded-full"></div>
                <span className="text-wazra-gold font-bold text-xl block mb-2">{item.year}</span>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: Product Snapshot / Points */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-wazra-900 mb-16">프리미엄 루틴 워터</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-wazra-900 group-hover:bg-wazra-900 group-hover:text-white transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">안전한 공정</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                연구실 수준의 엄격한 관리 하에<br/>
                생산되는 안전한 물입니다.
              </p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-wazra-900 group-hover:bg-wazra-900 group-hover:text-white transition-colors">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">검증된 기술력</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                75개의 특허가 증명하는<br/>
                독보적인 기술적 배경을 가집니다.
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-wazra-900 group-hover:bg-wazra-900 group-hover:text-white transition-colors">
                <Microscope size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">지속적인 연구</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                현실에 안주하지 않고<br/>
                더 나은 물을 위해 끊임없이 연구합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S6: CTA Bar */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-wazra-900 mb-8">당신의 일상에 와즈라를 더하세요.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a 
              href="https://www.coupang.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-wazra-900 text-white rounded-lg font-bold hover:bg-wazra-800 transition shadow-lg flex items-center justify-center"
            >
              쿠팡 로켓배송 구매
            </a>
             <Link 
              to="/product"
              className="px-8 py-4 bg-white text-wazra-900 border border-gray-300 rounded-lg font-bold hover:bg-gray-50 transition flex items-center justify-center"
            >
              1+1 체험팩 신청
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-wazra-900 border border-gray-300 rounded-lg font-bold hover:bg-gray-50 transition flex items-center justify-center"
            >
              기업/대량납품 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;