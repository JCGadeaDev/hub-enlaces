interface EnlaceBase {
    titulo: string;
    descripcion: string;
    host: string;
    icono: string;
    tono: string;
}

export type Enlace =
    | (EnlaceBase & { estado: 'activo'; url: string })
    | (EnlaceBase & { estado: 'construccion'; url?: never });


export const perfil = {
    nombre: ' Juan Carlos Gadea Brenes',
    rol: 'Full Stack Developer, Data Engineer & Cloud Engineer | Solutions Architect | Technical Lead',
    especialidad: 'Data Analyst · Cloud · Full-Stack Developer',
    ubicacion: 'Roma, IT',
    disponibilidad: 'Remoto · LATAM · ES · EU',
    email: 'jcgambeta89@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jcgadeadev/',
    github: 'https://github.com/JCGadeaDev',
} as const;

export const portafolios = [
    {
        titulo: 'Portafolio de Datos & BI',
        descripcion:
            'Pipelines ETL/ELT, arquitectura Medallion, dashboards en Power BI y análisis con Python.',
        host: 'datascienceportfol.io/jcgambeta89',
        url: 'https://www.datascienceportfol.io/jcgambeta89',
        estado: 'activo',
        icono: 'lucide:chart-no-axes-combined',
        tono: 'accent', 
    },
    {
        titulo: 'Portafolio Full-Stack & Cloud',
        descripcion:
            'Aplicaciones .NET, React, Astro y Next.js con despliegue en Azure, AWS y Google Cloud.',
        host: 'portafolio-jc-gadea.vercel.app',
        url: 'https://portafolio-jc-gadea.vercel.app/',
        estado: 'activo',
        icono: 'lucide:layers', 
        tono: 'accent-2',
    },
] satisfies Enlace[];

export const blogs = [
    {
        titulo: 'Blog de tecnología y datos',
        descripcion:
            'Arquitectura, ingeniería de datos, desarrollo de software, artículos, novedades y notas de campo sobre proyectos en producción.',
        host: 'tech.jcgadeadev.com',
        estado: 'construccion',
        icono: 'lucide:terminal',
        tono: 'accent', 
    },
    {
        titulo: 'Blog de cine y entretenimiento',
        descripcion: 'Reseñas, ensayos y apuntes de lo que veo dentro y fuera de la sala.',
        host: 'fotograma.jcgadeadev.com',
        estado: 'construccion',
        icono: 'lucide:clapperboard',
        tono: 'accent-3'      
    },
] satisfies Enlace[];

export const contacto = [
  { etiqueta: 'LinkedIn', url: perfil.linkedin, host: 'in/jcgadeadev', icono: 'simple-icons:linkedin' },
  { etiqueta: 'GitHub', url: perfil.github, host: 'JCGadeaDev', icono: 'simple-icons:github' },
  { etiqueta: 'Email', url: `mailto:${perfil.email}`, host: perfil.email, icono: 'lucide:mail' },
] as const;