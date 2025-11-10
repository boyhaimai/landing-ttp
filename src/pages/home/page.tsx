
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import CooperationModel from './components/CooperationModel';
import BrandEcosystem from './components/BrandEcosystem';
import PerformanceSection from './components/PerformanceSection';
import GrowthSection from './components/GrowthSection';
import FinalProcessSection from './components/FinalProcessSection';
import ContactSection from './components/ContactSection';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Trường Thành Phát Travel | Giải pháp Du lịch Chuyên nghiệp | 50+ Điểm đến';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyChooseUs />
      <ProcessSection />
      <CooperationModel />
      <BrandEcosystem />
      <PerformanceSection />
      <GrowthSection />
      <FinalProcessSection />
      <ContactSection />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
