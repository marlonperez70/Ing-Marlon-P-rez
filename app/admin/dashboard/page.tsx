"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { LogOut, Plus, Trash2, Edit3, Loader2, Save, X } from "lucide-react";

type Project = {
    id: string;
    title: string;
    slug: string;
    status: string;
    progress: number;
};

export default function AdminDashboard() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<Project[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<Partial<Project>>({});

    useEffect(() => {
        checkSession();
    }, []);

    const checkSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            router.push("/admin");
        } else {
            fetchProjects();
        }
    };

    const fetchProjects = async () => {
        const { data } = await supabase.from("research_projects").select("id, title, slug, status, progress").order("created_at", { ascending: false });
        if (data) setProjects(data);
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/admin");
    };

    const startEdit = (p: Project) => {
        setEditingId(p.id);
        setEditForm({ status: p.status, progress: p.progress });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditForm({});
    };

    const saveEdit = async () => {
        if (!editingId) return;
        const { error } = await supabase
            .from("research_projects")
            .update({ status: editForm.status, progress: editForm.progress })
            .eq("id", editingId);

        if (!error) {
            await fetchProjects();
            cancelEdit();
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-[var(--neon-cyan)]" />
            </div>
        );
    }

    return (
        <div className="min-h-screen p-6 md:p-12 relative">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-bold font-sans flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse" />
                            Panel de Administración
                        </h1>
                        <p className="text-[var(--text-muted)] text-sm mt-1 font-mono">Gestión de proyectos de investigación</p>
                    </div>
                    <button onClick={handleLogout} className="btn-secondary text-xs px-3 py-1.5 font-sans">
                        <LogOut className="w-3.5 h-3.5" /> Cerrar Sesión
                    </button>
                </div>

                <div className="glass-card rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold font-sans">Proyectos de Investigación</h2>
                        <button className="btn-primary text-xs px-3 py-1.5 font-sans">
                            <Plus className="w-3.5 h-3.5" /> Nuevo Proyecto
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-sans text-sm">
                            <thead>
                                <tr className="border-[var(--border-subtle)] border-b text-[var(--text-muted)]">
                                    <th className="pb-3 font-medium">Título</th>
                                    <th className="pb-3 font-medium">Estado</th>
                                    <th className="pb-3 font-medium w-24">Progreso</th>
                                    <th className="pb-3 font-medium text-right w-32">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                                {projects.map((p) => (
                                    <tr key={p.id} className="group hover:bg-[rgba(255,255,255,0.015)] transition-colors">
                                        <td className="py-4">
                                            <p className="font-semibold text-[var(--text-primary)]">{p.title}</p>
                                            <p className="text-xs font-mono text-[var(--text-muted)] mt-1">/{p.slug}</p>
                                        </td>

                                        <td className="py-4">
                                            {editingId === p.id ? (
                                                <select
                                                    className="form-input text-xs py-1 px-2 h-auto w-32"
                                                    value={editForm.status}
                                                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                                                >
                                                    <option value="planning">Planificación</option>
                                                    <option value="in_progress">En Progreso</option>
                                                    <option value="completed">Completado</option>
                                                </select>
                                            ) : (
                                                <span className="badge badge-cyan text-xs">{p.status}</span>
                                            )}
                                        </td>

                                        <td className="py-4">
                                            {editingId === p.id ? (
                                                <input
                                                    type="number"
                                                    min="0"
                                                    max="100"
                                                    className="form-input text-xs py-1 px-2 h-auto w-16"
                                                    value={editForm.progress}
                                                    onChange={(e) => setEditForm({ ...editForm, progress: parseInt(e.target.value) || 0 })}
                                                />
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <span className="font-mono text-xs">{p.progress}%</span>
                                                </div>
                                            )}
                                        </td>

                                        <td className="py-4 text-right">
                                            {editingId === p.id ? (
                                                <div className="flex items-center justify-end gap-2">
                                                    <button onClick={saveEdit} className="p-1.5 rounded-md hover:bg-[rgba(0,255,136,0.1)] text-[var(--neon-green)] transition-colors">
                                                        <Save className="w-4 h-4" />
                                                    </button>
                                                    <button onClick={cancelEdit} className="p-1.5 rounded-md hover:bg-[rgba(255,59,48,0.1)] text-[var(--neon-red)] transition-colors">
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => startEdit(p)} className="p-1.5 rounded-md hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                                        <Edit3 className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-1.5 rounded-md hover:bg-[rgba(255,59,48,0.1)] text-red-400 transition-colors">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {projects.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="py-8 text-center text-[var(--text-muted)] font-mono text-xs">
                                            No hay proyectos registrados.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
