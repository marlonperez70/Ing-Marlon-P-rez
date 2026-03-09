"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Brain, Monitor } from "lucide-react";

const skillCategories = [
    {
        icon: Shield,
        title: "Ciberseguridad",
        color: "var(--neon-cyan)",
        skills: [
            { name: "Kali Linux / Metasploit", level: 90 },
            { name: "Wireshark / Análisis de Red", level: 88 },
            { name: "Computación Forense", level: 85 },
            { name: "Pentesting & OWASP", level: 80 },
            { name: "SOC / SIEM", level: 75 },
        ],
    },
    {
        icon: Code2,
        title: "Desarrollo & DevOps",
        color: "var(--neon-violet)",
        skills: [
            { name: "Python", level: 85 },
            { name: "TypeScript / Next.js", level: 80 },
            { name: "React / Node.js", level: 78 },
            { name: "SQL / PostgreSQL", level: 82 },
            { name: "Docker / Linux", level: 75 },
        ],
    },
    {
        icon: Brain,
        title: "Inteligencia Artificial",
        color: "var(--neon-green)",
        skills: [
            { name: "Machine Learning", level: 82 },
            { name: "Redes Neuronales (CNN)", level: 78 },
            { name: "Scikit-learn / TensorFlow", level: 75 },
            { name: "Análisis de Datos", level: 85 },
            { name: "Prompt Engineering", level: 88 },
        ],
    },
    {
        icon: Monitor,
        title: "Auditoría TI",
        color: "var(--neon-amber)",
        skills: [
            { name: "COBIT 5 / 2019", level: 90 },
            { name: "ISO 27001 / 27002", level: 88 },
            { name: "NIST Cybersecurity Framework", level: 85 },
            { name: "Evaluación de Riesgos", level: 90 },
            { name: "Cumplimiento Normativo", level: 88 },
        ],
    },
];

const toolBadges = [
    { name: "Kali Linux", cat: "cyan" },
    { name: "Wireshark", cat: "cyan" },
    { name: "Metasploit", cat: "cyan" },
    { name: "Python", cat: "violet" },
    { name: "Next.js", cat: "violet" },
    { name: "Supabase", cat: "violet" },
    { name: "TensorFlow", cat: "green" },
    { name: "Scikit-learn", cat: "green" },
    { name: "COBIT", cat: "amber" },
    { name: "ISO 27001", cat: "amber" },
    { name: "NIST", cat: "amber" },
    { name: "Docker", cat: "violet" },
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="section-badge">
                        <Code2 className="w-3 h-3" />
                        Habilidades
                    </span>
                    <h2 className="section-title">
                        Stack <span>Técnico</span>
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="glass-card rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{ background: `${category.color}18`, border: `1px solid ${category.color}30` }}
                                >
                                    <category.icon className="w-4.5 h-4.5" style={{ color: category.color }} />
                                </div>
                                <h3 className="text-[var(--text-primary)] font-semibold font-sans">{category.title}</h3>
                            </div>

                            <div className="space-y-3.5">
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 + i * 0.06 }}
                                        className="skill-item py-0"
                                    >
                                        <div className="skill-header mb-1.5">
                                            <span className="skill-name text-xs">{skill.name}</span>
                                            <span className="skill-level text-xs" style={{ color: category.color }}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="progress-track">
                                            <motion.div
                                                className="progress-fill"
                                                style={{
                                                    background: `linear-gradient(90deg, ${category.color}, ${category.color}99)`,
                                                    boxShadow: `0 0 8px ${category.color}60`,
                                                }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.1, delay: catIndex * 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tools badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6"
                >
                    <h3 className="text-[var(--text-secondary)] text-sm font-mono mb-4">
                        <span className="text-[var(--neon-cyan)]">$</span> ls -la tools/
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {toolBadges.map((tool, i) => (
                            <motion.span
                                key={tool.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className={`badge badge-${tool.cat}`}
                            >
                                {tool.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
