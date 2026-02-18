import React from 'react';
import { IMAGES } from '../constants';

const Story: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-wazra-900 py-24 text-center text-white">
        <h1 className="text-4xl font-serif font-bold mb-4">브랜드 스토리</h1>
        <p className="text-gray-400">연구자 김부열, 그리고 와즈라의 시작</p>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="prose prose-lg mx-auto text-gray-700">
          <p className="font-serif text-2xl leading-relaxed text-wazra-900 mb-10 text-center">
            "왜 공기 정화 기술자가 물을 연구하게 되었을까?"
          </p>
          
          <img src={IMAGES.LAB_BG} alt="Research Lab" className="w-full h-64 object-cover rounded-lg mb-10 shadow-lg"/>

          <h3 className="font-bold text-xl text-wazra-900 mt-10 mb-4">보이지 않는 세계에 대한 탐구</h3>
          <p className="mb-6">
            1985년, 김부열 박사는 보이지 않는 공기의 흐름과 정화 기술을 연구하기 시작했습니다. 
            산업 현장에서 발생하는 미세한 오염 물질을 제어하는 기술은 당시로서는 혁신적인 도전이었습니다. 
            수십 년간의 연구 끝에 그는 유체의 움직임을 제어하고 정화하는 독자적인 메커니즘을 발견했습니다.
          </p>

          <h3 className="font-bold text-xl text-wazra-900 mt-10 mb-4">물, 또 다른 유체</h3>
          <p className="mb-6">
            공기(기체)를 다루던 기술은 자연스럽게 물(액체)로 이어졌습니다. 
            "공기를 깨끗하게 만드는 기술 원리를 물에 적용한다면 어떨까?" 
            이 단순한 질문이 와즈라의 시작이었습니다.
            김부열 박사는 기존의 정수 방식과는 다른, 물리적인 유체 제어 기술을 물에 접목하기 위해 다시 10년의 시간을 연구실에서 보냈습니다.
          </p>

          <h3 className="font-bold text-xl text-wazra-900 mt-10 mb-4">75개의 특허가 말해주는 것</h3>
          <p className="mb-6">
            와즈라에는 기적 같은 효능은 없습니다. 
            하지만 75개의 특허로 증명된 치열한 연구 과정이 담겨 있습니다.
            우리는 '마법의 물'을 파는 것이 아닙니다. 
            가장 과학적이고, 가장 깨끗하며, 연구자의 양심을 걸고 만든 '제대로 된 물'을 전하고 싶을 뿐입니다.
          </p>
          
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 mt-12">
            <h4 className="font-bold text-lg mb-2">Dr. Kim's Note</h4>
            <p className="italic text-gray-600 text-sm">
              "물은 정직합니다. 공정도 정직해야 합니다. 제가 만든 물이 누군가의 건강한 습관이 되기를 바랍니다."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;