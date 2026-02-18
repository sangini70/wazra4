import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import Technology from './pages/Technology';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ComplianceGuide from './pages/ComplianceGuide';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-slate-800">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<div className="pt-32 text-center text-xl">체험팩 페이지 준비중입니다 (Contact로 문의주세요)</div>} />
            
            {/* Hidden/Internal Route for Role Output Requirement */}
            <Route path="/legal/compliance" element={<ComplianceGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;