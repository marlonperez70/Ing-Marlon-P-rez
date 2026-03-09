import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
    try {
        const supabase = createServerSupabaseClient();
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Nombre, email y mensaje son requeridos' },
                { status: 400 }
            );
        }

        // Save to Supabase
        const { error } = await supabase
            .from('contact_messages')
            .insert([{ name, email, subject, message }]);

        if (error) throw error;

        return NextResponse.json(
            { success: true, message: 'Mensaje enviado correctamente' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Contact POST error:', error);
        return NextResponse.json(
            { error: 'Error al enviar el mensaje. Intenta nuevamente.' },
            { status: 500 }
        );
    }
}
