import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';

// GET - Fetch all research projects
export async function GET(req: NextRequest) {
    try {
        const supabase = createServerSupabaseClient();
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get('slug');

        if (slug) {
            // Fetch single project with its documents
            const { data: project, error: projectError } = await supabase
                .from('research_projects')
                .select('*')
                .eq('slug', slug)
                .single();

            if (projectError) throw projectError;

            const { data: documents, error: docsError } = await supabase
                .from('research_documents')
                .select('*')
                .eq('project_id', project.id)
                .order('uploaded_at', { ascending: false });

            if (docsError) throw docsError;

            return NextResponse.json({ project, documents });
        }

        // Fetch all projects
        const { data, error } = await supabase
            .from('research_projects')
            .select('*')
            .order('year', { ascending: false });

        if (error) throw error;

        return NextResponse.json({ projects: data });
    } catch (error) {
        console.error('Research GET error:', error);
        return NextResponse.json({ error: 'Error al obtener proyectos' }, { status: 500 });
    }
}

// POST - Create new research project (admin only)
export async function POST(req: NextRequest) {
    try {
        const supabase = createServerSupabaseClient();
        const body = await req.json();

        const { data, error } = await supabase
            .from('research_projects')
            .insert([body])
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({ project: data }, { status: 201 });
    } catch (error) {
        console.error('Research POST error:', error);
        return NextResponse.json({ error: 'Error al crear proyecto' }, { status: 500 });
    }
}

// PATCH - Update research project progress
export async function PATCH(req: NextRequest) {
    try {
        const supabase = createServerSupabaseClient();
        const body = await req.json();
        const { id, ...updates } = body;

        const { data, error } = await supabase
            .from('research_projects')
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({ project: data });
    } catch (error) {
        console.error('Research PATCH error:', error);
        return NextResponse.json({ error: 'Error al actualizar proyecto' }, { status: 500 });
    }
}
