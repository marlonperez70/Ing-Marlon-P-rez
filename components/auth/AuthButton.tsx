"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, LogOut, User, Loader2, Github, Chrome } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

export function AuthButton() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        };

        getUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, [supabase.auth]);

    const handleLogin = async (provider: "google" | "github") => {
        setLoading(true);
        setIsLoginMenuOpen(false);
        await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsMenuOpen(false);
    };

    if (loading) {
        return (
            <div className="p-2">
                <Loader2 className="w-5 h-5 text-[var(--neon-cyan)] animate-spin" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="relative">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-[rgba(0,229,255,0.1)] border border-[var(--neon-cyan)]/30 rounded-lg text-sm font-medium text-[var(--neon-cyan)] hover:bg-[rgba(0,229,255,0.2)] transition-all"
                >
                    <LogIn className="w-4 h-4" />
                    <span>Conectar</span>
                </motion.button>

                <AnimatePresence>
                    {isLoginMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 mt-2 w-56 bg-[var(--bg-void)] border border-white/10 rounded-xl shadow-2xl z-[100] overflow-hidden p-1"
                        >
                            <button
                                onClick={() => handleLogin("google")}
                                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-all rounded-lg group"
                            >
                                <Chrome className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
                                <span>Continuar con Google</span>
                            </button>
                            <button
                                onClick={() => handleLogin("github")}
                                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-all rounded-lg group"
                            >
                                <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                                <span>Continuar con GitHub</span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="relative">
            <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 p-1 pl-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
            >
                <span className="text-xs font-mono text-[var(--text-secondary)] hidden sm:block">
                    {user.user_metadata.full_name?.split(' ')[0]}
                </span>
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[var(--neon-cyan)]/50">
                    {user.user_metadata.avatar_url ? (
                        <Image
                            src={user.user_metadata.avatar_url}
                            alt="User avatar"
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-[var(--neon-cyan)]/20 flex items-center justify-center">
                            <User className="w-4 h-4 text-[var(--neon-cyan)]" />
                        </div>
                    )}
                </div>
            </motion.button>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-48 bg-[var(--bg-void)] border border-white/10 rounded-xl shadow-2xl z-[100] overflow-hidden"
                    >
                        <div className="p-3 border-b border-white/5 bg-white/5">
                            <p className="text-xs font-bold text-[var(--text-primary)] truncate">
                                {user.user_metadata.full_name}
                            </p>
                            <p className="text-[10px] text-[var(--text-muted)] truncate font-mono">
                                {user.email}
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            Cerrar sesión
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
