import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-4">제휴 및 대량 구매 문의</h1>
        <p className="text-center text-gray-500 mb-12">
          기업 특판, 정기 배송, OEM 관련 문의를 남겨주세요.
        </p>

        <form className="bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">회사/단체명</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wazra-blue focus:border-transparent outline-none" placeholder="(주)와즈라" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">담당자 성함</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wazra-blue focus:border-transparent outline-none" placeholder="홍길동" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
              <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wazra-blue focus:border-transparent outline-none" placeholder="010-0000-0000" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">이메일</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wazra-blue focus:border-transparent outline-none" placeholder="example@company.com" />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-2">문의 내용</label>
            <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wazra-blue focus:border-transparent outline-none h-32" placeholder="문의하실 내용을 자유롭게 적어주세요."></textarea>
          </div>

          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 w-4 h-4 text-wazra-900 rounded border-gray-300 focus:ring-wazra-blue" />
              <span className="text-sm text-gray-500">
                [필수] 개인정보 수집 및 이용에 동의합니다. 
                <span className="text-xs block text-gray-400 mt-1">
                  (수집항목: 성명, 연락처, 이메일 / 목적: 상담 문의 처리 / 보유기간: 3년)
                </span>
              </span>
            </label>
          </div>

          <button type="submit" className="w-full bg-wazra-900 text-white font-bold py-4 rounded-lg hover:bg-wazra-800 transition">
            문의하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;