"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface TerminalCardProps {
    title?: string;
    children: ReactNode;
    className?: string;
    variant?: "default" | "nmap" | "git" | "file";
    showPrompt?: boolean;
    promptUser?: string;
    promptPath?: string;
}

export function TerminalCard({
    title,
    children,
    className,
    variant = "default",
    showPrompt = true,
    promptUser = "visitor",
    promptPath = "~",
}: TerminalCardProps) {
    const variants = {
        default: "border-[#00ff0050]",
        nmap: "border-[#00ffff30]",
        git: "border-[#ffaa0030]",
        file: "border-[#0066ff30]",
    };

    const glowVariants = {
        default: "shadow-[0_0_15px_rgba(0,255,0,0.1)]",
        nmap: "shadow-[0_0_15px_rgba(0,255,255,0.1)]",
        git: "shadow-[0_0_15px_rgba(255,170,0,0.1)]",
        file: "shadow-[0_0_15px_rgba(0,102,255,0.1)]",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={clsx(
                "relative bg-[#0d1117]/80 backdrop-blur-sm border rounded-sm overflow-hidden",
                variants[variant],
                glowVariants[variant],
                className
            )}
        >
            {/* Terminal Header */}
            {title && (
                <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border-b border-[#00ff0030]">
                    <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-[#00ff00] text-sm ml-2">{title}</span>
                </div>
            )}

            {/* Prompt Line */}
            {showPrompt && (
                <div className="px-4 pt-3 text-sm">
                    <span className="text-[#00ff00]">┌─[</span>
                    <span className="text-[#00ffff]">{promptUser}@marlon-portfolio</span>
                    <span className="text-[#00ff00]">]─[</span>
                    <span className="text-[#ffaa00]">{promptPath}</span>
                    <span className="text-[#00ff00]">]</span>
                </div>
            )}
            {showPrompt && (
                <div className="px-4 pb-2 text-sm">
                    <span className="text-[#00ff00]">└──$ </span>
                </div>
            )}

            {/* Content */}
            <div className="px-4 pb-4">{children}</div>
        </motion.div>
    );
}
