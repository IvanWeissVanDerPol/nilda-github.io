export const githubUsername = ""; // Tu usuario de GitHub

// Información Personal
export const Name = "Nilda"; // Tu nombre
export const LastName = "Patiño Avalos"; // Tu apellido
export const FullName = `${Name} ${LastName}`; // Concatenación de tu nombre y apellido
export const mail = "nildapatino12@gmail.com"; // Tu dirección de correo electrónico

// Información Meta
export const metaTitle = "Portafolio de Nilda Patiño Avalos"; // El título de tu sitio de portafolio
export const metaDescription = "Portafolio de Nilda Patiño Avalos, contadora pública."; // Una breve descripción de tu portafolio
export const metaKeywords = "Nilda Patiño Avalos, contadora pública, habilidades, experiencia"; // Palabras clave para SEO, por ejemplo, "tu nombre, tu profesión, habilidades"
export const metaAuthor = "Nilda Patiño Avalos"; // Tu nombre como autor del sitio

// Información de Contacto
export const contactInfo = `Estoy a solo un correo o un mensaje de distancia en cualquier plataforma. Envíame un correo a ${mail}, o encuéntrame en LinkedIn. Comencemos una conversación sobre tus ideas o simplemente disfrutemos de una charla casual.`; // Plantilla de información de contacto con tu correo

// Biografía
export const bio = [
    "Hola, soy Nilda Patiño Avalos.",
    "Tengo una sólida formación en contabilidad pública con amplia experiencia en roles administrativos.",
    "Habilidades en servicio al cliente, resolución de problemas y colaboración en equipo.",
    "Apasionada por el aprendizaje continuo y el desarrollo profesional.",
    "Explora mi portafolio para saber más sobre mis habilidades y experiencia."
];

// Idiomas
export const languages = [
    {
        title: "Hablante Nativa de Español",
        skillName: "Español",
        color: "1",
        percentage: "100",
    },
    {
        title: "Proficiencia Básica en Inglés",
        skillName: "Inglés",
        color: "2",
        percentage: "50",
    }
];

// Habilidades
export const skills = {
    "Habilidades Blandas": [
        {
            "skillName": "Comunicación",
            "description": "Fuertes habilidades de comunicación verbal, capaz de transmitir información de manera efectiva.",
        },
        {
            "skillName": "Trabajo en Equipo",
            "description": "Experiencia en trabajar colaborativamente dentro de equipos.",
        },
        {
            "skillName": "Resolución de Problemas",
            "description": "Capacidad para analizar situaciones y resolver problemas de manera eficiente.",
        }
    ],
    "Habilidades Administrativas": [
        {
            "skillName": "Atención al Cliente",
            "description": "Experiencia en brindar excelente servicio al cliente.",
        },
        {
            "skillName": "Adaptabilidad",
            "description": "Capaz de ajustarse a nuevas situaciones y desafíos.",
        }
    ]
};

// Certificaciones
export const certifications = {
    professionalCertifications: [
        {
            certificationName: "Operador de Computadora - SNPP",
            image: "path/to/computer_operator_certificate.jpg",
            preview: "URL para previsualizar la imagen de la certificación",
        },
        {
            certificationName: "Auxiliar Administrativo - SNPP",
            image: "path/to/administrative_assistant_certificate.jpg",
            preview: "URL para previsualizar la imagen de la certificación",
        },
        {
            certificationName: "Recepción Administrativa y Relación con el Cliente - SNPP",
            image: "path/to/customer_relations_certificate.jpg",
            preview: "URL para previsualizar la imagen de la certificación",
        },
        {
            certificationName: "Congreso Nacional de Administración y Contabilidad Pública - UNVES",
            image: "path/to/public_admin_congress_certificate.jpg",
            preview: "URL para previsualizar la imagen de la certificación",
        },
        {
            certificationName: "Charla sobre Impuesto a la Renta Personal",
            image: "path/to/tax_talk_certificate.jpg",
            preview: "URL para previsualizar la imagen de la certificación",
        }
    ]
};

// Experiencia
export const experience = [
    {
        title: "Empleada Doméstica",
        subtitle: "Varios Empleadores",
        duration: "2015 - 2024",
        details: [
            "Gestioné tareas domésticas, incluyendo limpieza, cocina y mantenimiento.",
            "Brindé un excelente servicio al cliente y mantuve relaciones profesionales.",
            "Demostré fuertes habilidades de resolución de problemas y adaptabilidad."
        ],
        tags: ["Responsabilidad", "Servicio al Cliente", "Adaptabilidad"],
        icon: "briefcase",
    }
];

// Educación
export const education = [
    {
        title: "Bachiller Científico con Énfasis en Ciencias Sociales",
        duration: "Completado",
        subtitle: "Colegio Nacional Rosario Guavira",
        details: [],
        tags: ["Educación Secundaria", "Ciencias Sociales"],
        icon: "graduation-cap",
    },
    {
        title: "Contador Público Nacional",
        duration: "En Proceso",
        subtitle: "Universidad Nacional de Villarrica del Espíritu Santo - UNVES, Caazapá",
        details: [],
        tags: ["Educación Universitaria", "Contabilidad Pública"],
        icon: "graduation-cap",
    }
];

// Testimonios
export const testimonials = {
    reviewer: "Milagros Cardozo Marecos",
    period: "2015 - 2024",
    company: "Varios Empleadores",
    feedback: [
        {
            title: "Ética Laboral",
            detail: "Nilda demuestra una fuerte ética laboral y dedicación en todas las tareas."
        },
        {
            title: "Servicio al Cliente",
            detail: "Ella brinda un excelente servicio al cliente, asegurando la satisfacción del cliente."
        }
    ]
};

// Pie de Página
export const footer = [
    {
        label: "Perfiles de Desarrollo",
        data: [
            {
                text: "GitHub",
                link: "URL a tu perfil de GitHub",
            }
        ],
    },
    {
        label: "Recursos",
        data: [
            {
                text: "Envíame un correo",
                link: `mailto:${mail}`,
            },
            {
                text: "Descargar Curriculum",
                link: "URL al curriculum",
                target: "_blank"
            }
        ],
    },
    {
        label: "Perfiles Sociales",
        data: [
            {
                text: "LinkedIn",
                link: "URL a tu perfil de LinkedIn",
            }
        ],
    },
    {
        label: "texto de derechos de autor",
        data: [
            "Hecho con ♥ por Nilda Patiño Avalos.",
            "&copy; Sin derechos de autor. Siéntase libre de usar esta plantilla.",
        ],
    },
];
