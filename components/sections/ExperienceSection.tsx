"use client";

import { motion } from "framer-motion";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { GitBranch, CheckCircle } from "lucide-react";

const experiences = [
    {
        date: "2025-Present",
        branch: "main",
        isHead: true,
        title: "Estudiante de Ingeniería TI",
        organization: "Universidad Estatal de Milagro (8vo/10 niveles)",
        details: [
            "Promedio: 86.08/100",
            "Especialización: Seguridad, Auditoría, IA",
        ],
        highlights: [],
    },
    {
        date: "2011-2021",
        branch: "experience",
        isHead: false,
        title: "Agente Investigador - Policía Nacional Ecuador",
        organization: "Departamento Administrativo - Policía Judicial Sub Zona Guayas",
        details: [
            "Resguardo de información confidencial",
            "Implementación de controles de seguridad",
            "Gestión de cadena de custodia digital",
            "Análisis de incidentes críticos",
            "Prevención de riesgos en entornos de alta exigencia y disciplina",
        ],
        highlights: [
            "10 años de servicio sin incidentes de seguridad",
            "Manejo de información clasificada nivel alto",
            "Implementación de protocolos de custodia digital",
        ],
    },
    {
        date: "1990-2011",
        branch: "origin",
        isHead: false,
        title: "Formación Académica y Profesional",
        organization: "",
        details: [
            "Bachiller en Ciencias Químico Biológicas",
            "Curso de Inteligencia Digital (Policía Nacional)",
        ],
        highlights: [],
    },
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <TerminalCard
                    variant="git"
                    promptPath="~/experience"
                    showPrompt={true}
                >
                    {/* Command */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[#ffaa00] mb-6"
                    >
                        git log --all --graph --decorate --oneline
                    </motion.div>

                    {/* Git Log Timeline */}
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.date}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                {/* Git Commit Line */}
                                <div className="flex items-start gap-4">
                                    {/* Git Graph */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#ffaa00]">*</span>
                                            <span className="text-[#c0c0c0]">{exp.date}</span>
                                        </div>
                                        {exp.isHead && (
                                            <span className="text-[#00ff00] text-xs mt-1">
                                                (HEAD -&gt; {exp.branch})
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <div className="flex-1">
                                        <h3 className="text-[#00ffff] font-medium">{exp.title}</h3>
                                        {exp.organization && (
                                            <p className="text-[#c0c0c0] text-sm">{exp.organization}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Branch Line */}
                                <div className="ml-2 pl-4 border-l border-[#ffaa0050] mt-2">
                                    {/* Details Box */}
                                    {exp.details.length > 0 && (
                                        <div className="border border-[#ffaa0030] bg-[#0a0a0a]/50 p-4 mb-3">
                                            {exp.details.map((detail, i) => (
                                                <p key={i} className="text-[#c0c0c0] text-sm flex items-start gap-2">
                                                    <span className="text-[#ffaa00]">•</span>
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    {/* Highlights */}
                                    {exp.highlights.length > 0 && (
                                        <div className="mt-3">
                                            <p className="text-[#ffaa00] text-sm mb-2 font-medium">
                                                LOGROS DESTACADOS:
                                            </p>
                                            {exp.highlights.map((highlight, i) => (
                                                <p
                                                    key={i}
                                                    className="text-[#00ff00] text-sm flex items-center gap-2"
                                                >
                                                    <CheckCircle className="w-4 h-4" />
                                                    {highlight}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Summary */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 pt-4 border-t border-[#ffaa0030] text-sm text-[#c0c0c0]"
                    >
                        <GitBranch className="inline w-4 h-4 text-[#ffaa00] mr-2" />
                        Total commits: 3 | Files changed: 34 años de experiencia acumulada
                    </motion.div>
                </TerminalCard>
            </div>
        </section>
    );
}
