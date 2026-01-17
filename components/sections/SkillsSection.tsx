"use client";

import { motion } from "framer-motion";
import { TerminalCard } from "@/components/ui/TerminalCard";

const technicalSkills = [
    {
        name: "CYBERSECURITY",
        percentage: 100,
        subskills: ["Network Security", "Forensic Computing", "IT Audit (CISA track)", "Incident Response"],
    },
    {
        name: "SOFTWARE DEVELOPMENT",
        percentage: 95,
        subskills: ["Python (OOP, APIs, Automation)", "Web Development (Full-stack)", "Mobile Computing", "Database Management (SQL/NoSQL)"],
    },
    {
        name: "CLOUD & INFRASTRUCTURE",
        percentage: 90,
        subskills: ["Google Cloud Platform (GCP)", "System Administration (Linux/Windows)", "Network Architecture", "Virtualization"],
    },
    {
        name: "ARTIFICIAL INTELLIGENCE",
        percentage: 85,
        subskills: ["Machine Learning Fundamentals", "Data Mining & Analysis", "Gemini AI Integration", "Business Intelligence"],
    },
];

const transferableSkills = [
    "Risk Assessment & Management",
    "Regulatory Compliance (10 años en sector público)",
    "Advanced Analytical Thinking",
    "Team Leadership & Collaboration",
    "Technological Adaptability",
    "Crisis Management (entornos de alta presión)",
];

function ProgressBar({ percentage }: { percentage: number }) {
    const filled = Math.round((percentage / 100) * 12);
    const empty = 12 - filled;

    return (
        <span className="text-[#00ff00]">
            [{"█".repeat(filled)}{"░".repeat(empty)}] {percentage}%
        </span>
    );
}

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <TerminalCard
                    variant="default"
                    promptPath="~/skills"
                    showPrompt={true}
                >
                    {/* Command */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[#00ff00] mb-4"
                    >
                        ./skill-scanner.sh --detailed
                    </motion.div>

                    {/* Loading Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[#c0c0c0] mb-6"
                    >
                        [████████████████████████████] Scanning skill matrix... 100%
                    </motion.div>

                    {/* Main Skills Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border border-[#00ff0050] bg-[#0a0a0a]/50 p-6"
                    >
                        <div className="text-[#00ff00] text-xs mb-4">
                            ╔══════════════════════════════════════════════════════════════╗
                        </div>
                        <h3 className="text-[#00ff00] font-semibold mb-2">
                            COMPETENCIAS TÉCNICAS
                        </h3>
                        <div className="text-[#00ff00] text-xs mb-6">
                            ╠══════════════════════════════════════════════════════════════╣
                        </div>

                        {/* Technical Skills */}
                        <div className="space-y-6">
                            {technicalSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                        <span className="text-[#00ffff] font-medium">{skill.name}</span>
                                        <ProgressBar percentage={skill.percentage} />
                                    </div>
                                    <div className="ml-4 text-sm text-[#c0c0c0]">
                                        {skill.subskills.map((sub, i) => (
                                            <p key={i} className="flex items-start gap-2">
                                                <span className="text-[#00ff00]">{i === skill.subskills.length - 1 ? "└─" : "├─"}</span>
                                                {sub}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Separator */}
                        <div className="text-[#00ff00] text-xs my-6">
                            ╠══════════════════════════════════════════════════════════════╣
                        </div>

                        {/* Transferable Skills Header */}
                        <h3 className="text-[#00ff00] font-semibold mb-4">
                            COMPETENCIAS TRANSFERIBLES
                        </h3>
                        <div className="text-[#00ff00] text-xs mb-4">
                            ╠══════════════════════════════════════════════════════════════╣
                        </div>

                        {/* Transferable Skills List */}
                        <div className="space-y-2">
                            {transferableSkills.map((skill, index) => (
                                <motion.p
                                    key={skill}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.05 }}
                                    className="text-[#c0c0c0] flex items-center gap-2"
                                >
                                    <span className="text-[#00ff00]">•</span>
                                    {skill}
                                </motion.p>
                            ))}
                        </div>

                        <div className="text-[#00ff00] text-xs mt-6">
                            ╚══════════════════════════════════════════════════════════════╝
                        </div>
                    </motion.div>

                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-6"
                    >
                        <p className="text-[#00ff00] mb-2">$ ./languages.sh</p>
                        <div className="text-[#c0c0c0] text-sm border-l-2 border-[#00ff0050] pl-4">
                            <p className="text-[#ffaa00]">IDIOMAS:</p>
                            <p>├─ Español: <span className="text-[#00ff00]">Nativo</span></p>
                            <p>└─ Inglés: <span className="text-[#00ffff]">B1.2 (UNEMI Certified)</span></p>
                        </div>
                    </motion.div>
                </TerminalCard>
            </div>
        </section>
    );
}
