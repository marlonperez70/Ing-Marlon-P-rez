"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from "lucide-react";

type Message = {
    role: "user" | "assistant";
    content: string;
};

const WELCOME_MESSAGE: Message = {
    role: "assistant",
    content: "¡Hola! Soy el asistente de Marlon Pérez. Puedo contarte sobre su perfil profesional, investigaciones en IA y ciberseguridad, o cómo contactarle. ¿En qué te puedo ayudar?",
};

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
    }, [isOpen]);

    const sendMessage = async () => {
        const text = input.trim();
        if (!text || isLoading) return;

        const newUserMsg: Message = { role: "user", content: text };
        const updatedMessages = [...messages, newUserMsg];
        setMessages(updatedMessages);
        setInput("");
        setIsLoading(true);

        // Create placeholder for assistant response
        setMessages([...updatedMessages, { role: "assistant", content: "" }]);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
                }),
            });

            if (!res.ok) throw new Error("Error en la respuesta");

            const reader = res.body?.getReader();
            const decoder = new TextDecoder();
            let assistantContent = "";

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value);
                    const lines = chunk.split("\n");

                    for (const line of lines) {
                        if (line.startsWith("data: ")) {
                            const data = line.slice(6);
                            if (data === "[DONE]") break;
                            try {
                                const parsed = JSON.parse(data);
                                assistantContent += parsed.content || "";
                                setMessages([
                                    ...updatedMessages,
                                    { role: "assistant", content: assistantContent },
                                ]);
                            } catch { }
                        }
                    }
                }
            }
        } catch {
            setMessages([
                ...updatedMessages,
                { role: "assistant", content: "Lo siento, hubo un error. Por favor intenta nuevamente." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="chat-widget">
            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 10 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="chat-panel mb-4"
                    >
                        {/* Header */}
                        <div className="chat-header">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] flex items-center justify-center shrink-0">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-[var(--text-primary)] font-semibold text-sm font-sans">Asistente IA</p>
                                <p className="text-[10px] text-[var(--neon-cyan)] font-mono flex items-center gap-1">
                                    <Sparkles className="w-2.5 h-2.5" />
                                    Powered by Groq · Llama 3.3
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="chat-messages">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                                >
                                    {/* Avatar */}
                                    <div
                                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user"
                                                ? "bg-[rgba(168,85,247,0.2)] border border-[rgba(168,85,247,0.3)]"
                                                : "bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.2)]"
                                            }`}
                                    >
                                        {msg.role === "user" ? (
                                            <User className="w-3.5 h-3.5 text-[var(--neon-violet)]" />
                                        ) : (
                                            <Bot className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
                                        )}
                                    </div>

                                    {/* Bubble */}
                                    <div
                                        className={`max-w-[80%] px-4 py-3 rounded-2xl text-xs leading-relaxed font-sans ${msg.role === "user"
                                                ? "bg-[rgba(168,85,247,0.15)] text-[var(--text-primary)] rounded-tr-sm border border-[rgba(168,85,247,0.2)]"
                                                : "bg-[rgba(255,255,255,0.05)] text-[var(--text-secondary)] rounded-tl-sm border border-[var(--border-subtle)]"
                                            }`}
                                    >
                                        {msg.content ? (
                                            <div className="chat-content-formatted space-y-1">
                                                {msg.content.split('\n').map((line, lineIdx) => (
                                                    <p key={lineIdx}>
                                                        {line.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => {
                                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                                return (
                                                                    <strong key={partIdx} className="text-[var(--neon-cyan)] font-bold">
                                                                        {part.slice(2, -2)}
                                                                    </strong>
                                                                );
                                                            }
                                                            return part;
                                                        })}
                                                    </p>
                                                ))}
                                            </div>
                                        ) : (
                                            <span className="flex gap-1">
                                                <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                                <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                                <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="chat-input-area">
                            <input
                                ref={inputRef}
                                type="text"
                                className="chat-input"
                                placeholder="Pregunta sobre Marlon..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                disabled={isLoading}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={isLoading || !input.trim()}
                                className="chat-send-btn"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <Send className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="chat-bubble-btn"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Abrir asistente IA"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <X className="w-5 h-5 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <MessageCircle className="w-5 h-5 text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Pulse ring */}
            {!isOpen && (
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[var(--neon-cyan)]"
                    animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ pointerEvents: "none" }}
                />
            )}
        </div>
    );
}
