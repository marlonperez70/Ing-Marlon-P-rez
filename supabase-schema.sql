-- ============================================
-- MARLON PORTFOLIO v2.0 — Supabase SQL Schema
-- Ejecutar en: supabase.com → SQL Editor → New Query
-- ============================================

-- Proyectos de investigación científica
CREATE TABLE IF NOT EXISTS research_projects (
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

-- Documentos vinculados a proyectos
CREATE TABLE IF NOT EXISTS research_documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES research_projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT DEFAULT 'otro' CHECK (type IN ('paper', 'propuesta', 'avance', 'presentacion', 'otro')),
  file_url TEXT,
  file_name TEXT,
  size_bytes INT,
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Mensajes del formulario de contacto
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- RLS (Row Level Security)
-- ============================================
ALTER TABLE research_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Lectura pública para proyectos
CREATE POLICY "Public can read research_projects"
  ON research_projects FOR SELECT USING (true);

CREATE POLICY "Public can read research_documents"
  ON research_documents FOR SELECT USING (true);

-- Solo service role puede insertar/actualizar/borrar
CREATE POLICY "Service role manages research_projects"
  ON research_projects FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role manages research_documents"
  ON research_documents FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Anyone can insert contact_messages"
  ON contact_messages FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role reads contact_messages"
  ON contact_messages FOR SELECT USING (auth.role() = 'service_role');

-- ============================================
-- DATA INICIAL — Proyectos de Marlon
-- ============================================
INSERT INTO research_projects (title, slug, area, description, objectives, status, progress, institution, year, keywords)
VALUES
(
  'IA para la Detección de Amenazas en Ciberseguridad',
  'ia-deteccion-amenazas-ciberseguridad',
  'Cybersecurity + AI',
  'Investigación sobre la aplicación de modelos de Machine Learning y Redes Neuronales para la detección automática de intrusiones y amenazas en redes corporativas. Se evalúan algoritmos de clasificación supervisada sobre datasets públicos de ciberseguridad.',
  ARRAY['Evaluar la eficacia de algoritmos ML en detección de intrusiones', 'Comparar modelos CNN vs Random Forest en datasets de tráfico de red', 'Implementar un prototipo de IDS basado en IA'],
  'in_progress',
  60,
  'UNEMI',
  2025,
  ARRAY['IDS', 'Machine Learning', 'Redes Neuronales', 'Ciberseguridad', 'Detección de Intrusiones']
),
(
  'Auditoría de Sistemas TIS con Marcos de Control Internacionales',
  'auditoria-tis-marcos-control',
  'TIS + IT Audit',
  'Estudio comparativo de marcos de control para auditoría de Tecnologías de la Información (COBIT, ISO 27001, NIST) aplicados a organizaciones del sector público en Ecuador. Se propone un modelo híbrido adaptado al contexto latinoamericano.',
  ARRAY['Comparar marcos de control IT en organizaciones públicas ecuatorianas', 'Identificar brechas de cumplimiento normativo', 'Proponer un modelo híbrido de auditoría adaptado al contexto local'],
  'in_progress',
  40,
  'UNEMI',
  2025,
  ARRAY['Auditoría TI', 'COBIT', 'ISO 27001', 'NIST', 'Sector Público', 'Ecuador']
)
ON CONFLICT (slug) DO NOTHING;
