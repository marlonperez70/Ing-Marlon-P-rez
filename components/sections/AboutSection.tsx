"use client";

import { motion } from "framer-motion";
import { TerminalCard } from "@/components/ui/TerminalCard";

const nmapScanData = [
    { port: "22/SSH", state: "OPEN", service: "Identity", version: "Marlon David Pérez Almachi" },
    { port: "80/HTTP", state: "OPEN", service: "Education", version: "Ing. Tecnologías de la Información" },
    { port: "443/HTTPS", state: "OPEN", service: "Experience", version: "10 años - Policía Nacional Ecuador" },
    { port: "3306/DB", state: "OPEN", service: "Specialization", version: "Cybersecurity | IT Audit | AI" },
    { port: "8080/API", state: "OPEN", service: "Certifications", version: "Cisco | Google | UNEMI" },
    { port: "9000/AI", state: "OPEN", service: "Languages", version: "Spanish (Native) | English (B1.2)" },
];

export function AboutSection() {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <TerminalCard
                    variant="nmap"
                    promptPath="~/about"
                    showPrompt={true}
                >
                    {/* Command */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[#00ffff] mb-4"
                    >
                        nmap -sV -A marlon-perez.profile
                    </motion.div>

                    {/* Nmap Header */}
                    <div className="text-[#c0c0c0] text-sm mb-4">
                        <p>Starting Nmap scan on target: <span className="text-[#00ff00]">MARLON_PEREZ</span></p>
                        <p>Host is up (latency: 0.001ms)</p>
                    </div>

                    {/* Port Table */}
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-[#00ffff]">
                                    <th className="pr-4 pb-2">PORT</th>
                                    <th className="pr-4 pb-2">STATE</th>
                                    <th className="pr-4 pb-2">SERVICE</th>
                                    <th className="pb-2">VERSION</th>
                                </tr>
                            </thead>
                            <tbody className="text-[#c0c0c0]">
                                <tr>
                                    <td colSpan={4} className="text-[#00ff00] py-1">
                                        ─────────────────────────────────────────────────────────────
                                    </td>
                                </tr>
                                {nmapScanData.map((row, index) => (
                                    <motion.tr
                                        key={row.port}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <td className="pr-4 py-1 text-[#ffaa00]">{row.port}</td>
                                        <td className="pr-4 py-1 text-[#00ff00]">{row.state}</td>
                                        <td className="pr-4 py-1 text-[#00ffff]">{row.service}</td>
                                        <td className="py-1">{row.version}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Profile Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border border-[#00ffff30] bg-[#0a0a0a]/50 p-6"
                    >
                        <div className="text-[#00ffff] text-xs mb-4">
                            ╔═══════════════════════════════════════════════════════════════════╗
                        </div>
                        <h3 className="text-[#00ffff] font-semibold mb-4 text-lg">
                            PERFIL PROFESIONAL
                        </h3>
                        <div className="text-[#00ffff] text-xs mb-4">
                            ╠═══════════════════════════════════════════════════════════════════╣
                        </div>

                        <div className="text-[#c0c0c0] space-y-3 text-sm leading-relaxed">
                            <p>
                                Ingeniero en Tecnologías de la Información con sólida trayectoria
                                en seguridad informática y gestión de información sensible.
                            </p>
                            <p>
                                Ex-agente investigador con <span className="text-[#00ff00]">10 años de experiencia</span> en la Policía
                                Judicial, especializado en:
                            </p>
                            <ul className="space-y-1 ml-4">
                                <li className="flex items-center gap-2">
                                    <span className="text-[#00ff00]">•</span>
                                    Resguardo de información confidencial
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#00ff00]">•</span>
                                    Implementación de controles de seguridad
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#00ff00]">•</span>
                                    Análisis de incidentes y prevención de riesgos
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#00ff00]">•</span>
                                    Auditoría de sistemas IT
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#00ff00]">•</span>
                                    Computación forense
                                </li>
                            </ul>
                            <p>
                                Actualmente cursando <span className="text-[#00ffff]">8vo nivel de Ingeniería en TI (UNEMI)</span> con
                                promedio de <span className="text-[#00ff00]">86.08/100</span>, destacando en materias críticas:
                            </p>
                            <p className="text-[#ffaa00]">
                                Seguridad Informática (100%), Auditoría TI (100%),
                                Inteligencia Artificial (96%) y Computación Móvil (96%).
                            </p>
                            <p>
                                Comprometido con la evaluación de riesgos, cumplimiento normativo
                                y desarrollo de soluciones tecnológicas seguras y escalables.
                            </p>
                        </div>

                        <div className="text-[#00ffff] text-xs mt-4">
                            ╚═══════════════════════════════════════════════════════════════════╝
                        </div>
                    </motion.div>

                    {/* Scan Summary */}
                    <div className="mt-4 text-sm text-[#00ff00]">
                        Nmap scan complete: 1 host scanned | 6 services detected | 0 vulnerabilities
                    </div>
                </TerminalCard>
            </div>
        </section>
    );
}
