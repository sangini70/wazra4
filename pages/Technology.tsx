import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

const Technology: React.FC = () => {
  const categories = [
    { title: "유체 제어 기술", count: 28, desc: "물의 흐름과 분자 구조에 물리적 영향을 주는 핵심 기술" },
    { title: "정화 및 필터링", count: 32, desc: "미세 오염 물질 제거 및 순도 유지를 위한 특수 공정" },
    { title: "보존 및 안정성", count: 15, desc: "장기간 품질을 유지하기 위한 보관 및 용기 관련 특허" },
  ];

  return (
    <div className="pt-20">
      <div className="bg-slate-50 py-24 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4 text-wazra-900">기술 & 특허</h1>
        <p className="text-gray-600">숫자로 증명하는 연구의 깊이</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <FileText className="text-wazra-blue" size={32} />
                <span className="text-4xl font-bold text-wazra-900">{cat.count}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-gray-500 text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200">주요 특허 리스트 (일부 발췌)</h2>
          <div className="space-y-4">
            {[
              { year: '2022', code: 'KR-10-234****', name: '와류 현상을 이용한 유체 정화 장치' },
              { year: '2020', code: 'KR-10-211****', name: '나노 기포 발생 및 용해 효율 증대 방법' },
              { year: '2018', code: 'US-9,876,***', name: 'Fluid treatment system utilizing magnetic fields' },
              { year: '2015', code: 'KR-10-156****', name: '다단 복합 필터링 시스템' },
              { year: '2012', code: 'KR-10-123****', name: '공기 및 수질 정화용 촉매 제조 방법' },
            ].map((patent, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-wazra-blue block">{patent.year} | {patent.code}</span>
                    <span className="font-medium text-gray-800">{patent.name}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400 mt-2 md:mt-0">Registered Patent</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-12">
            * 보안상의 이유로 전체 특허 목록은 기업 제휴 문의 시 별도 열람 가능합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;