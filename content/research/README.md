# Documentos de Investigación Científica — Marlon Pérez

Esta carpeta contiene todos los documentos vinculados a los proyectos de investigación científica.

## Estructura recomendada

```
research/
├── [siglas-proyecto-año]/
│   ├── metadata.json        ← Información del proyecto (leer por el chatbot)
│   ├── propuesta.pdf
│   ├── avance-1.pdf
│   └── presentacion.pptx
```

## Ejemplo de metadata.json

```json
{
  "title": "Implementación de IA en Sistemas de Detección de Intrusiones",
  "area": "Cybersecurity + AI",
  "status": "in_progress",
  "progress": 65,
  "abstract": "Esta investigación explora el uso de modelos de Machine Learning...",
  "keywords": ["IDS", "Machine Learning", "Redes Neuronales", "Ciberseguridad"],
  "institution": "UNEMI",
  "year": 2025
}
```

## Proyectos actuales (completar)

- Crea una carpeta por cada proyecto de investigación
- Los archivos PDF se pueden subir opcionalmente a Supabase Storage para acceso público
- El chatbot usará el `abstract` y `keywords` del metadata.json para responder preguntas
