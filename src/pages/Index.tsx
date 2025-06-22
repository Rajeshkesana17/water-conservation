
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MethodologySection from '@/components/MethodologySection';
import SurveySection from '@/components/SurveySection';
import ImpactSection from '@/components/ImpactSection';
import VolunteerSection from '@/components/VolunteerSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <SurveySection />
      <ImpactSection />
      <VolunteerSection />
      <Footer />
    </div>
  );
};

export default Index;
