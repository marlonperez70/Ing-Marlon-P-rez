"use client";

import { motion } from "framer-motion";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { Shield, Cloud, Code, Brain, Languages, Search, GraduationCap } from "lucide-react";

const academicInfo = {
    title: "Ingeniería en Tecnologías de la Información",
    institution: "Universidad Estatal de Milagro (UNEMI)",
    status: "8vo nivel | Promedio: 86.08/100",
    credits: "Créditos ECTS: 232.32 | Total horas: 5,808",
    subjects: [
        { name: "Seguridad Informática", score: 100 },
        { name: "Auditoría de TI", score: 100 },
        { name: "Deontología", score: 100 },
        { name: "Inteligencia Artificial", score: 96 },
        { name: "Computación Móvil", score: 96 },
        { name: "Interacción Humano-Computador", score: 95 },
        { name: "Sistemas Operativos", score: 95 },
    ],
};

const certifications = [
    {
        category: "CYBERSECURITY",
        icon: Shield,
        items: [
            {
                name: "Introduction to Cybersecurity",
                issuer: "Cisco Networking Academy",
                year: "2025",
                description: "Fundamentos de seguridad de redes",
            },
            {
                name: "Curso de Inteligencia Digital",
                issuer: "Policía Nacional del Ecuador",
                year: "2013-2014",
                description: "Inteligencia operativa y análisis de datos",
            },
        ],
    },
    {
        category: "CLOUD COMPUTING",
        icon: Cloud,
        items: [
            {
                name: "Aprende Cloud Computing desde Cero (60 horas)",
                issuer: "Universidad Estatal de Milagro",
                year: "2025",
                description: "GCP: Seguridad, IAM, Gestión de Recursos",
            },
        ],
    },
    {
        category: "SOFTWARE DEVELOPMENT",
        icon: Code,
        items: [
            {
                name: "Python - Dominio Medio/Avanzado (40 horas)",
                issuer: "Universidad Estatal de Milagro",
                year: "2025",
                description: "POO, Decoradores, APIs, Automatización",
            },
        ],
    },
    {
        category: "ARTIFICIAL INTELLIGENCE",
        icon: Brain,
        items: [
            {
                name: "Gemini Certified Educator",
                issuer: "Google for Education",
                year: "2025",
                description: "Integración de IA en procesos educativos",
            },
        ],
    },
    {
        category: "LANGUAGES",
        icon: Languages,
        items: [
            {
                name: "General English Proficiency - Level B1.2",
                issuer: "Centro de Educación Permanente UNEMI",
                year: "2025",
                description: "5 módulos completados (500 horas)",
            },
        ],
    },
    {
        category: "RESEARCH",
        icon: Search,
        items: [
            {
                name: "Concurso #HilandoCiencia2025",
                issuer: "Organización de Estados Iberoamericanos (OEI)",
                year: "2025",
                description: "Divulgación científica internacional",
            },
        ],
    },
];

export function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <TerminalCard
                    variant="file"
                    promptPath="~/certifications"
                    showPrompt={true}
                >
                    {/* Command */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[#0066ff] mb-4"
                    >
                        ls -lah /credentials/verified/
                    </motion.div>

                    {/* Directory Info */}
                    <div className="text-[#c0c0c0] text-sm mb-6">
                        drwxr-xr-x  marlonperez  staff   2025  certifications/
                    </div>

                    {/* Academic Credentials Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border border-[#0066ff30] bg-[#0a0a0a]/50 p-6 mb-6"
                    >
                        <div className="text-[#0066ff] text-xs mb-4">
                            ╔════════════════════════════════════════════════════════════════╗
                        </div>
                        <h3 className="text-[#0066ff] font-semibold mb-2 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5" />
                            CERTIFICACIONES ACADÉMICAS
                        </h3>
                        <div className="text-[#0066ff] text-xs mb-4">
                            ╠════════════════════════════════════════════════════════════════╣
                        </div>

                        <div className="space-y-2 text-sm">
                            <p className="text-[#00ff00] flex items-center gap-2">
                                <span>[✓]</span>
                                <span className="text-[#c0c0c0]">{academicInfo.title}</span>
                            </p>
                            <p className="ml-6 text-[#c0c0c0]">{academicInfo.institution}</p>
                            <p className="ml-6 text-[#ffaa00]">Status: {academicInfo.status}</p>
                            <p className="ml-6 text-[#c0c0c0]">{academicInfo.credits}</p>

                            <div className="ml-6 mt-4">
                                <p className="text-[#00ffff] mb-2">Materias Destacadas:</p>
                                {academicInfo.subjects.map((subject) => (
                                    <p key={subject.name} className="text-[#c0c0c0] flex items-center">
                                        <span className="text-[#00ff00]">•</span>
                                        <span className="flex-1 ml-2">{subject.name}</span>
                                        <span className="text-[#00ff00] ml-2">
                                            {"·".repeat(20 - subject.name.length / 2)} {subject.score}/100
                                        </span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Technical Certifications Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="border border-[#0066ff30] bg-[#0a0a0a]/50 p-6"
                    >
                        <div className="text-[#0066ff] text-xs mb-4">
                            ╠════════════════════════════════════════════════════════════════╣
                        </div>
                        <h3 className="text-[#0066ff] font-semibold mb-4">
                            CERTIFICACIONES TÉCNICAS
                        </h3>
                        <div className="text-[#0066ff] text-xs mb-4">
                            ╠════════════════════════════════════════════════════════════════╣
                        </div>

                        <div className="space-y-6">
                            {certifications.map((category, catIndex) => (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + catIndex * 0.1 }}
                                >
                                    <p className="text-[#ffaa00] flex items-center gap-2 mb-2">
                                        <category.icon className="w-4 h-4" />
                                        [{category.category}]
                                    </p>
                                    {category.items.map((item, itemIndex) => (
                                        <div
                                            key={item.name}
                                            className="ml-4 mb-3 text-sm border-l-2 border-[#0066ff30] pl-3"
                                        >
                                            <p className="text-[#c0c0c0]">
                                                <span className="text-[#00ff00]">
                                                    {itemIndex === category.items.length - 1 ? "└─" : "├─"}
                                                </span>
                                                {" "}{item.name}
                                            </p>
                                            <p className="text-[#c0c0c0] ml-3 opacity-70">
                                                {item.issuer} | {item.year}
                                            </p>
                                            <p className="text-[#00ffff] ml-3">
                                                ⚡ {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-[#0066ff] text-xs mt-6">
                            ╚════════════════════════════════════════════════════════════════╝
                        </div>
                    </motion.div>

                    {/* Verify Command */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-6 text-sm"
                    >
                        <p className="text-[#0066ff]">$ ./verify-credentials.sh</p>
                        <p className="text-[#00ff00]">✓ All certifications verified and up-to-date</p>
                        <p className="text-[#00ff00]">✓ Documents available in /docs/certificates/</p>
                    </motion.div>
                </TerminalCard>
            </div>
        </section>
    );
}
