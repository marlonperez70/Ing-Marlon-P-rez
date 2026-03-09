import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client-side Supabase client (uses anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export type ResearchProject = {
    id: string;
    title: string;
    slug: string;
    area: string;
    description: string;
    objectives: string[];
    status: 'planning' | 'in_progress' | 'completed';
    progress: number;
    institution: string;
    year: number;
    keywords: string[];
    cover_image_url?: string;
    created_at: string;
    updated_at: string;
};

export type ResearchDocument = {
    id: string;
    project_id: string;
    title: string;
    type: 'paper' | 'propuesta' | 'avance' | 'presentacion' | 'otro';
    file_url: string;
    file_name: string;
    size_bytes: number;
    uploaded_at: string;
};

export type ContactMessage = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
};
