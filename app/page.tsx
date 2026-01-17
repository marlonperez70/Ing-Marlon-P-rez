import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#00ff0030]">
        <div className="max-w-5xl mx-auto text-center text-sm">
          <p className="text-[#00ff00] mb-2">
            <span className="text-[#c0c0c0]">$</span> echo &quot;© $(date +%Y) Marlon Pérez | Built with Next.js&quot;
          </p>
          <p className="text-[#c0c0c0]">
            © 2025 Marlon David Pérez Almachi | All rights reserved
          </p>
          <p className="text-[#00ff00] mt-4 text-xs">
            [root@security ~ ]# shutdown -h now <span className="cursor-blink inline-block w-2 h-4 bg-[#00ff00] ml-1 align-middle" />
          </p>
        </div>
      </footer>
    </>
  );
}
