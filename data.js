const cardData = {
    profile: {
        name: "Contifácil",
        title: "Distribuidor autorizado de Contifácil",
        description: "Asesoría Contable • Tributaría Laboral • Servicios Societarios",
        // La imagen que se cargará, sube tu logo a la carpeta assets/img/mostaza.png
        image: "assets/img/contifacil.png",
        // Imagen de respaldo si no encuentra la principal
        fallbackImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256"
    },
    contact: {
        phone: "593993578431", // Solo números y código de país, usado para enlaces de WhatsApp y llamada
        phoneDisplay: "+593 99 357 8431 ", // Usado para mostrar visualmente en la vCard
        email: "vguerra@contifacil.com",
        whatsappMessage: "Hola, me gustaría obtener más información sobre sus servicios.",
        company: "ContiFacil",
        note: "Asesoria Contable\nTributaria Laboral\nServicios societarios",
        url: typeof window !== 'undefined' ? window.location.href : "https://mostazaweb.net"
    },
    social: [
        { name: "Instagram", url: "https://www.instagram.com/contifacil/", icon: "instagram" },
        { name: "Facebook", url: "https://www.facebook.com/ContifacilContifico/", icon: "facebook" },
        // Lucide usa íconos generales así que 'music-2' o 'video' puede servir como tiktok de manera nativa sin recargar svgs personalizados
        { name: "TikTok", url: "https://www.tiktok.com/@contifacil", icon: "music-2" }
    ]
};
