-- MARLON PORTFOLIO v2.0 — Supabase SQL Schema (Clean & Robust)

-- Enable pgcrypto extension for gen_random_uuid
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 1. Proyectos de investigación científica
CREATE TABLE IF NOT EXISTS public.research_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  area TEXT,
  description TEXT,
  objectives TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'in_progress' CHECK (status IN ('planning', 'in_progress', 'completed')),
  progress INT DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  institution TEXT,
  year INT,
  keywords TEXT[] DEFAULT '{}',
  cover_image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Documentos vinculados a proyectos
CREATE TABLE IF NOT EXISTS public.research_documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.research_projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT DEFAULT 'otro' CHECK (type IN ('paper', 'propuesta', 'avance', 'presentacion', 'otro')),
  file_url TEXT,
  file_name TEXT,
  size_bytes INT,
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Mensajes del formulario de contacto
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.research_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 4. Polices (Idempotent)

-- research_projects
DROP POLICY IF EXISTS "Public can read research_projects" ON public.research_projects;
CREATE POLICY "Public can read research_projects" ON public.research_projects FOR SELECT USING (true);

DROP POLICY IF EXISTS "Service role manages research_projects" ON public.research_projects;
CREATE POLICY "Service role manages research_projects" ON public.research_projects FOR ALL USING (auth.role() = 'service_role');

-- research_documents
DROP POLICY IF EXISTS "Public can read research_documents" ON public.research_documents;
CREATE POLICY "Public can read research_documents" ON public.research_documents FOR SELECT USING (true);

DROP POLICY IF EXISTS "Service role manages research_documents" ON public.research_documents;
CREATE POLICY "Service role manages research_documents" ON public.research_documents FOR ALL USING (auth.role() = 'service_role');

-- contact_messages
DROP POLICY IF EXISTS "Anyone can insert contact_messages" ON public.contact_messages;
CREATE POLICY "Anyone can insert contact_messages" ON public.contact_messages FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Service role reads contact_messages" ON public.contact_messages;
CREATE POLICY "Service role reads contact_messages" ON public.contact_messages FOR SELECT USING (auth.role() = 'service_role');

-- 5. Initial Data (Research Projects)
INSERT INTO public.research_projects (title, slug, area, description, objectives, status, progress, institution, year, keywords)
VALUES
(
  'IA para la Detección de Amenazas en Ciberseguridad',
  'ia-deteccion-amenazas-ciberseguridad',
  'Cybersecurity + IA',
  'Investigación sobre la aplicación de modelos de Machine Learning y Redes Neuronales para la detección automática de intrusiones y amenazas en redes corporativas.',
  ARRAY['Evaluar eficacia de algoritmos ML', 'Comparar modelos CNN vs Random Forest', 'Implementar prototipo de IDS'],
  'in_progress',
  60,
  'UNEMI',
  2025,
  ARRAY['IDS', 'Machine Learning', 'IA', 'Ciberseguridad']
),
(
  'Auditoría de Sistemas TIS con Marcos de Control Internacionales',
  'auditoria-tis-marcos-control',
  'Auditoría IT',
  'Estudio comparativo de marcos de control (COBIT, ISO 27001, NIST) aplicados a organizaciones del sector público en Ecuador.',
  ARRAY['Comparar marcos COBIT/ISO/NIST', 'Identificar brechas de cumplimiento', 'Proponer modelo híbrido'],
  'in_progress',
  40,
  'UNEMI',
  2025,
  ARRAY['Auditoría', 'COBIT', 'ISO 27001', 'Cumplimiento']
)
ON CONFLICT (slug) DO NOTHING;1
