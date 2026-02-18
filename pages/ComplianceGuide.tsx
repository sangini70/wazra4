import React from 'react';
import { COMPLIANCE_RULES, SEO_CONFIG } from '../constants';

const ComplianceGuide: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">브랜드 가이드라인 및 SEO</h1>
        <p className="text-gray-500 mb-10">내부 검수용: 금칙어 리스트 및 SEO 설정값</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SEO Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-wazra-900 border-b pb-2">SEO 설정 (Home)</h2>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase">Page Title</span>
                <p className="font-medium">{SEO_CONFIG.HOME.title}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase">Meta Description</span>
                <p className="text-sm text-gray-600">{SEO_CONFIG.HOME.description}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase">Keywords</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {SEO_CONFIG.HOME.keywords.map(k => (
                    <span key={k} className="px-2 py-1 bg-gray-100 text-xs rounded">{k}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-red-700 border-b pb-2">광고 심의 금칙어 리스트</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-500">
                  <tr>
                    <th className="p-2">금칙어 (사용불가)</th>
                    <th className="p-2">대체 표현</th>
                    <th className="p-2">사유</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPLIANCE_RULES.map((rule, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="p-2 text-red-600 font-medium">{rule.forbidden}</td>
                      <td className="p-2 text-green-700">{rule.alternative}</td>
                      <td className="p-2 text-gray-400 text-xs">{rule.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceGuide;