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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Introducción forzada en cada carga
    setIsLoading(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
    sessionStorage.setItem("v3_intro_shown", "true");

    // Lógica Senior: Si hay un hash en la URL, hacemos scroll después de la carga
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 800); // Esperamos a que la transición de opacidad termine
  }, []);

  if (!isClient) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <IntroLoader key="intro-loader" onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"}`}>
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
