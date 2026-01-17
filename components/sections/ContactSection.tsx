"use client";

import { motion } from "framer-motion";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { Linkedin, Github, MessageCircle, Facebook, Mail, ExternalLink } from "lucide-react";

const contactLinks = [
    {
        id: 1,
        label: "LinkedIn Professional",
        url: "https://linkedin.com/in/ing-marlon-pérez-06ab32303",
        icon: Linkedin,
        color: "#0066ff",
    },
    {
        id: 2,
        label: "GitHub Repository",
        url: "https://github.com/marlonperez70",
        icon: Github,
        color: "#c0c0c0",
    },
    {
        id: 3,
        label: "WhatsApp Direct",
        url: "https://wa.me/593986023149?text=Hola%20Marlon%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conectar%20contigo.",
        displayText: "+593 98 602 3149",
        icon: MessageCircle,
        color: "#00ff00",
    },
    {
        id: 4,
        label: "Facebook Profile",
        url: "https://facebook.com/share/18DCUax9WT/",
        icon: Facebook,
        color: "#1877f2",
    },
    {
        id: 5,
        label: "Email Institucional",
        url: "mailto:malmachi@unemi.edu.ec",
        displayText: "malmachi@unemi.edu.ec",
        icon: Mail,
        color: "#ffaa00",
    },
];

export function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <TerminalCard
                    variant="default"
                    promptPath="~/contact"
                    showPrompt={true}
                >
                    {/* Command */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[#00ff00] mb-6"
                    >
                        cat contact-info.yml
                    </motion.div>

                    {/* Contact Box */}
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
                            CONEXIÓN ESTABLECIDA
                        </h3>
                        <div className="text-[#00ff00] text-xs mb-4">
                            ╠══════════════════════════════════════════════════════════════╣
                        </div>

                        <p className="text-[#c0c0c0] mb-6">
                            Selecciona tu canal preferido de comunicación:
                        </p>

                        {/* Contact Links */}
                        <div className="space-y-4">
                            {contactLinks.map((link, index) => (
                                <motion.a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 p-3 border border-transparent hover:border-[#00ff0030] rounded transition-all group"
                                    style={{ "--link-color": link.color } as React.CSSProperties}
                                >
                                    <span className="text-[#ffaa00]">[{link.id}]</span>
                                    <link.icon
                                        className="w-5 h-5 transition-colors"
                                        style={{ color: link.color }}
                                    />
                                    <div className="flex-1">
                                        <span className="text-[#00ffff]">{link.label}</span>
                                        {link.displayText && (
                                            <p className="text-[#c0c0c0] text-sm">{link.displayText}</p>
                                        )}
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-[#c0c0c0] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.a>
                            ))}
                        </div>

                        <div className="text-[#00ff00] text-xs mt-6">
                            ╠══════════════════════════════════════════════════════════════╣
                        </div>

                        {/* AI Assistant Promo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-4"
                        >
                            <h4 className="text-[#00ffff] mb-2">
                                ¿TIENES UNA CONSULTA RÁPIDA?
                            </h4>
                            <p className="text-[#c0c0c0] text-sm">
                                Pregúntale a mi asistente IA ↓ <span className="text-[#ffaa00]">(Próximamente)</span>
                            </p>
                        </motion.div>

                        <div className="text-[#00ff00] text-xs mt-4">
                            ╚══════════════════════════════════════════════════════════════╝
                        </div>
                    </motion.div>

                    {/* Interactive Prompt */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-6 flex items-center text-sm"
                    >
                        <span className="text-[#00ff00]">visitor@contact:~$ </span>
                        <motion.span
                            className="w-2 h-4 bg-[#00ff00] ml-1"
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        />
                    </motion.div>
                </TerminalCard>
            </div>
        </section>
    );
}
