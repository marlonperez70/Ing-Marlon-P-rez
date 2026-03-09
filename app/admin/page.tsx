"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Lock, Mail, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError("Credenciales incorrectas o usuario no autorizado.");
            setLoading(false);
        } else {
            router.push("/admin/dashboard");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--neon-violet)] opacity-[0.05] rounded-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors mb-6 font-sans"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al portfolio
                </Link>

                <div className="glass-card rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 rounded-xl bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.2)] flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-5 h-5 text-[var(--neon-violet)]" />
                        </div>
                        <h1 className="text-2xl font-bold text-[var(--text-primary)] font-sans mb-2">
                            Acceso Restringido
                        </h1>
                        <p className="text-[var(--text-muted)] text-sm font-sans">
                            Sistema de administración de investigaciones.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="form-label">
                                <Mail className="w-3 h-3 inline mr-1.5" />
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-input"
                                placeholder="marlon.perez@unemi.edu.ec"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <p className="text-[var(--neon-red)] text-xs font-mono text-center bg-[rgba(255,59,48,0.1)] py-2 rounded">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full justify-center mt-2"
                            style={{
                                background: "linear-gradient(90deg, var(--neon-violet), var(--neon-cyan))",
                                boxShadow: "0 0 15px rgba(168,85,247,0.4)",
                            }}
                        >
                            {loading ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> Verificando...</>
                            ) : (
                                "Sistema de Autenticación"
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <span className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-widest opacity-60">
                            Only authorized personnel
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
