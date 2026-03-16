"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { IntroLoader } from "@/components/ui/IntroLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if intro has been shown this session
    const hasShownIntro = sessionStorage.getItem("v3_intro_shown");
    if (hasShownIntro) {
      setIsLoading(false);
    }
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
    sessionStorage.setItem("v3_intro_shown", "true");
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <IntroLoader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      <div className={isLoading ? "fixed inset-0 overflow-hidden opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-1000"}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <CertificationsSection />
          <ResearchSection />
          <ContactSection />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </>
  );
}
