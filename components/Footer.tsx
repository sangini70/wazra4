import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wazra-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-4">WAZRA</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              와즈라는 김부열 박사의 40년 연구 철학을 담은 프리미엄 워터 브랜드입니다.
              우리는 물의 본질을 연구하고, 타협하지 않는 공정을 통해 여러분의 일상에 가치를 더합니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Menu</h3>
            <ul className="space-y-3">
              <li><Link to="/story" className="text-sm hover:text-wazra-blue transition">브랜드 스토리</Link></li>
              <li><Link to="/technology" className="text-sm hover:text-wazra-blue transition">기술 & 특허</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-wazra-blue transition">자주 묻는 질문</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-wazra-blue transition">제휴 문의</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>고객센터: 02-0000-0000</li>
              <li>이메일: support@wazra.co.kr</li>
              <li>평일 09:00 - 18:00 (주말/공휴일 휴무)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-xs text-gray-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="mb-2">
                (주)와즈라 | 대표: 홍길동 | 사업자등록번호: 000-00-00000<br/>
                주소: 서울특별시 강남구 테헤란로 000
              </p>
              <p>Copyright © 2024 WAZRA. All rights reserved.</p>
            </div>
            <div className="md:text-right">
              <Link to="/legal/privacy" className="hover:text-white mr-4">개인정보처리방침</Link>
              <Link to="/legal/terms" className="hover:text-white">이용약관</Link>
              <div className="mt-4 p-3 bg-gray-800 rounded text-left md:inline-block md:max-w-sm">
                <p className="text-orange-300 font-bold mb-1">⚠️ 필수 고지</p>
                <p>본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.</p>
                <p>개인의 생활습관과 상황에 따라 체감에는 차이가 있을 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;