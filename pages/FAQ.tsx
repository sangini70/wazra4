import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_LIST } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-20">
      <div className="bg-wazra-900 py-20 text-center text-white">
        <h1 className="text-3xl font-bold">자주 묻는 질문</h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {FAQ_LIST.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-800">Q. {item.question}</span>
                {openIndex === index ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-slate-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;