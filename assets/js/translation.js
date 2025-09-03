document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translate-btn');
    let currentLang = 'es';
    
    // Diccionario de traducciones
    const translations = {
        'es': {
            'title': 'Daniela Ramírez | Content Manager & Social Media Manager',
            'nav-sobre-mi': 'Sobre mí',
            'nav-habilidades': 'Habilidades',
            'nav-proyectos': 'Proyectos',
            'nav-contacto': 'Contacto',
            'hero-title': 'Daniela Ramírez',
            'hero-subtitle': 'Content Manager & Social Media Manager',
            'hero-text': 'Creando conexiones significativas a través de contenido estratégico y gestión de redes sociales.',
            'hero-cta': 'Contactar',
            'sobre-mi-title': 'Sobre mí',
            'sobre-mi-p1': 'Me especializo en crear contenido que conecta con la audiencia desde la autenticidad y la intención. Actualmente trabajo como Social Media Assistant en una agencia de marketing digital, donde desarrollo estrategias de contenido, redacto copys, programo publicaciones y gestiono grillas semanales. Me adapto con facilidad a distintos estilos de marca y combino creatividad con enfoque estratégico. También tengo conocimientos en diseño de landing pages, que aplico en proyectos personales como este portafolio. Mi objetivo es seguir creciendo en estrategia y liderazgo de cuentas, siempre con una comunicación que inspire y genere resultados.',
            'sobre-mi-p2': 'Mi experiencia abarca desde la planificación de estrategias de contenido hasta la ejecución y análisis de resultados, siempre con el objetivo de impulsar el crecimiento de las marcas que represento.',
            'habilidades-title': 'Habilidades',
            'habilidad1-titulo': 'Publicidad Digital',
            'habilidad1-desc': 'Google Ads (búsqueda y display), Meta Ads, TikTok Ads, LinkedIn Ads, Twitter Ads',
            'habilidad2-titulo': 'Analítica y Optimización',
            'habilidad2-desc': 'Google Analytics, SEO básico, SEM, análisis de métricas en redes sociales',
            'habilidad3-titulo': 'Marketing de Contenidos',
            'habilidad3-desc': 'Redacción de contenido, copywriting, edición básica, seguimiento de performance',
            'habilidad4-titulo': 'Email Marketing',
            'habilidad4-desc': 'Redacción de campañas, estructura de correos, segmentación de audiencias',
            'habilidad5-titulo': 'Gestión Estratégica',
            'habilidad5-desc': 'Planificación de campañas, elaboración de briefs, calendarios de contenido, manejo de crisis comunicacionales',
            'habilidad6-titulo': 'Herramientas',
            'habilidad6-desc': 'Meta Business Suite, Canva, Google Workspace, Trello, Notion',
            'habilidad7-titulo': 'Desarrollo Web (básico)',
            'habilidad7-desc': 'Conocimientos en HTML, CSS y JavaScript',
            'proyectos-title': 'Proyectos Destacados',
            'proyecto1-nombre': 'Eterna FuneralHome',
            'proyecto1-subnombre': 'Asistencia Funeraria',
            'proyecto1-objetivo': 'Objetivo: Diseñar una línea de contenido emocionalmente cuidadosa para una marca de asistencia funeraria con presencia internacional.',
            'proyecto1-estrategia': 'Estrategia aplicada:',
            'proyecto1-estrategia1': 'Redacción de copys sensibles y respetuosos',
            'proyecto1-estrategia2': 'Creación de grillas editoriales equilibradas',
            'proyecto1-estrategia3': 'Propuesta de enfoques temáticos y tono de voz',
            'proyecto1-vermas': 'Ver más',
            'proyecto2-nombre': 'ViaSure',
            'proyecto2-subnombre': 'Agencia de viajes',
            'proyecto2-objetivo': 'Objetivo: Crear contenido atractivo y confiable para una marca de asistencia en viajes.',
            'proyecto2-estrategia': 'Estrategia aplicada:',
            'proyecto2-estrategia1': 'Redacción de copys inspiradores sobre destinos',
            'proyecto2-estrategia2': 'Desarrollo de narrativas para reels con enfoque emocional',
            'proyecto2-estrategia3': 'Adaptación del tono de voz a público aventurero',
            'proyecto2-vermas': 'Ver más',
            'portafolio-title': 'Ejemplos de copy',
            'copy1-title': 'Copy para reel sobre destinos en Latinoamérica',
            'copy1-text': '"Descubre la magia escondida en cada rincón de Latinoamérica. Desde las playas del Caribe hasta las montañas de los Andes, cada destino tiene una historia única esperando por ti. ¿Cuál será tu próxima aventura?"',
            'copy2-title': 'Texto emocional para servicio de repatriación',
            'copy2-text': '"En los momentos más difíciles, estamos para ayudarte a traer a tus seres queridos a casa. Nuestro servicio de repatriación se maneja con el respeto y la sensibilidad que tu familia merece."',
            'copy3-title': 'Post informativo sobre cobertura internacional',
            'copy3-text': '"¿Viajas con frecuencia? Conoce nuestra cobertura internacional que te protege en más de 100 países. Porque tu tranquilidad no debería tener fronteras."',
            'contacto-title': 'Contacto',
            'contacto-text': '¿Interesado en trabajar juntos? ¡Me encantaría saber de ti!',
            'whatsapp': 'WhatsApp',
            'email': 'Email',
            'instagram': 'Instagram',
            'linkedin': 'LinkedIn',
            'footer': '© 2025 Daniela Ramírez. Todos los derechos reservados.'
        },
        'en': {
            'title': 'Daniela Ramírez | Content Manager & Social Media Manager',
            'nav-sobre-mi': 'About me',
            'nav-habilidades': 'Skills',
            'nav-proyectos': 'Projects',
            'nav-contacto': 'Contact',
            'hero-title': 'Daniela Ramírez',
            'hero-subtitle': 'Content Manager & Social Media Manager',
            'hero-text': 'Creating meaningful connections through strategic content and social media management.',
            'hero-cta': 'Contact',
            'sobre-mi-title': 'About me',
            'sobre-mi-p1': 'I specialize in creating content that connects with the audience from authenticity and intention. I currently work as a Social Media Assistant in a digital marketing agency, where I develop content strategies, write copies, schedule publications and manage weekly grids. I easily adapt to different brand styles and combine creativity with strategic focus. I also have knowledge in landing page design, which I apply in personal projects like this portfolio. My goal is to continue growing in strategy and account leadership, always with communication that inspires and generates results.',
            'sobre-mi-p2': 'My experience ranges from planning content strategies to execution and analysis of results, always with the goal of driving the growth of the brands I represent.',
            'habilidades-title': 'Skills',
            'habilidad1-titulo': 'Digital Advertising',
            'habilidad1-desc': 'Google Ads (search and display), Meta Ads, TikTok Ads, LinkedIn Ads, Twitter Ads',
            'habilidad2-titulo': 'Analytics and Optimization',
            'habilidad2-desc': 'Google Analytics, basic SEO, SEM, social media metrics analysis',
            'habilidad3-titulo': 'Content Marketing',
            'habilidad3-desc': 'Content writing, copywriting, basic editing, performance tracking',
            'habilidad4-titulo': 'Email Marketing',
            'habilidad4-desc': 'Campaign writing, email structure, audience segmentation',
            'habilidad5-titulo': 'Strategic Management',
            'habilidad5-desc': 'Campaign planning, brief development, content calendars, crisis communication management',
            'habilidad6-titulo': 'Tools',
            'habilidad6-desc': 'Meta Business Suite, Canva, Google Workspace, Trello, Notion',
            'habilidad7-titulo': 'Basic Web Development',
            'habilidad7-desc': 'Knowledge of HTML, CSS and JavaScript',
            'proyectos-title': 'Featured Projects',
            'proyecto1-nombre': 'Eterna FuneralHome',
            'proyecto1-subnombre': 'Funeral Assistance',
            'proyecto1-objetivo': 'Objective: To design an emotionally careful content line for an international funeral assistance brand.',
            'proyecto1-estrategia': 'Applied strategy:',
            'proyecto1-estrategia1': 'Writing sensitive and respectful copies',
            'proyecto1-estrategia2': 'Creation of balanced editorial grids',
            'proyecto1-estrategia3': 'Proposal of thematic approaches and tone of voice',
            'proyecto1-vermas': 'See more',
            'proyecto2-nombre': 'ViaSure',
            'proyecto2-subnombre': 'Travel Agency',
            'proyecto2-objetivo': 'Objective: To create attractive and reliable content for a travel assistance brand.',
            'proyecto2-estrategia': 'Applied strategy:',
            'proyecto2-estrategia1': 'Writing inspiring copies about destinations',
            'proyecto2-estrategia2': 'Development of emotional and descriptive narratives for reels',
            'proyecto2-estrategia3': 'Adaptation of tone of voice to an adventurous audience',
            'proyecto2-vermas': 'See more',
            'portafolio-title': 'Copy examples',
            'copy1-title': 'Copy for reel about destinations in Latin America',
            'copy1-text': '"Discover the hidden magic in every corner of Latin America. From the beaches of the Caribbean to the mountains of the Andes, each destination has a unique story waiting for you. What will be your next adventure?"',
            'copy2-title': 'Emotional text for repatriation service',
            'copy2-text': '"In the most difficult moments, we are here to help you bring your loved ones home. Our repatriation service is handled with the respect and sensitivity that your family deserves."',
            'copy3-title': 'Informative post about international coverage',
            'copy3-text': '"Do you travel frequently? Learn about our international coverage that protects you in more than 100 countries. Because your peace of mind should not have borders."',
            'contacto-title': 'Contact',
            'contacto-text': 'Interested in working together? I would love to hear from you!',
            'whatsapp': 'WhatsApp',
            'email': 'Email',
            'instagram': 'Instagram',
            'linkedin': 'LinkedIn',
            'footer': '© 2025 Daniela Ramírez. All rights reserved.'
        }
    };
    
    // Función para cambiar el idioma
    function changeLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        
        // Actualizar el texto del botón de traducción
        if (lang === 'es') {
            translateBtn.textContent = 'EN';
        } else {
            translateBtn.textContent = 'ES';
        }
        
        // Actualizar título
        document.title = translations[lang]['title'];
        
        // Actualizar navegación
        document.querySelector('a[href="#sobre-mi"]').textContent = translations[lang]['nav-sobre-mi'];
        document.querySelector('a[href="#habilidades"]').textContent = translations[lang]['nav-habilidades'];
        document.querySelector('a[href="#proyectos"]').textContent = translations[lang]['nav-proyectos'];
        document.querySelector('a[href="#contacto"]').textContent = translations[lang]['nav-contacto'];
        
        // Actualizar hero
        document.querySelector('.hero h1').textContent = translations[lang]['hero-title'];
        document.querySelector('.hero h2').textContent = translations[lang]['hero-subtitle'];
        document.querySelector('.hero p').textContent = translations[lang]['hero-text'];
        document.querySelector('.cta-button').textContent = translations[lang]['hero-cta'];
        
        // Actualizar sobre mí
        document.querySelector('#sobre-mi h2').textContent = translations[lang]['sobre-mi-title'];
        const sobreMiParagraphs = document.querySelectorAll('#sobre-mi .sobre-mi-content p');
        sobreMiParagraphs[0].textContent = translations[lang]['sobre-mi-p1'];
        sobreMiParagraphs[1].textContent = translations[lang]['sobre-mi-p2'];
        
        // Actualizar habilidades
        document.querySelector('#habilidades h2').textContent = translations[lang]['habilidades-title'];
        
        // Actualizar cada habilidad en el slider
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            const skillNum = (index % 7) + 1; // Hay 7 habilidades, usamos módulo para ciclar
            const icon = item.querySelector('.skill-icon');
            const title = item.querySelector('h3');
            const desc = item.querySelector('p');
            
            // Actualizar contenido según el idioma
            if (icon) icon.textContent = getSkillIcon(skillNum);
            if (title) title.textContent = translations[lang][`habilidad${skillNum}-titulo`];
            if (desc) desc.textContent = translations[lang][`habilidad${skillNum}-desc`];
        });
        
        // Función para obtener el icono de cada habilidad
        function getSkillIcon(num) {
            const icons = ['📣', '📊', '✍️', '📬', '🧠', '🧰', '💻'];
            return icons[num - 1];
        }
        
        // Actualizar proyectos
        document.querySelector('#proyectos h2').textContent = translations[lang]['proyectos-title'];
        
        // Proyecto 1
        const proyecto1 = document.querySelector('.proyecto-card:nth-child(1)');
        proyecto1.querySelector('.proyecto-header h3').textContent = translations[lang]['proyecto1-nombre'];
        proyecto1.querySelector('.proyecto-header p').textContent = translations[lang]['proyecto1-subnombre'];
        proyecto1.querySelector('.proyecto-content p strong').textContent = translations[lang]['proyecto1-objetivo'];
        proyecto1.querySelector('.proyecto-content p:nth-child(2) strong').textContent = translations[lang]['proyecto1-estrategia'];
        const proyecto1Items = proyecto1.querySelectorAll('.proyecto-content ul li');
        proyecto1Items[0].textContent = translations[lang]['proyecto1-estrategia1'];
        proyecto1Items[1].textContent = translations[lang]['proyecto1-estrategia2'];
        proyecto1Items[2].textContent = translations[lang]['proyecto1-estrategia3'];
        proyecto1.querySelector('.proyecto-link-btn').textContent = translations[lang]['proyecto1-vermas'];
        
        // Proyecto 2
        const proyecto2 = document.querySelector('.proyecto-card:nth-child(2)');
        proyecto2.querySelector('.proyecto-header h3').textContent = translations[lang]['proyecto2-nombre'];
        proyecto2.querySelector('.proyecto-header p').textContent = translations[lang]['proyecto2-subnombre'];
        proyecto2.querySelector('.proyecto-content p strong').textContent = translations[lang]['proyecto2-objetivo'];
        proyecto2.querySelector('.proyecto-content p:nth-child(2) strong').textContent = translations[lang]['proyecto2-estrategia'];
        const proyecto2Items = proyecto2.querySelectorAll('.proyecto-content ul li');
        proyecto2Items[0].textContent = translations[lang]['proyecto2-estrategia1'];
        proyecto2Items[1].textContent = translations[lang]['proyecto2-estrategia2'];
        proyecto2Items[2].textContent = translations[lang]['proyecto2-estrategia3'];
        proyecto2.querySelector('.proyecto-link-btn').textContent = translations[lang]['proyecto2-vermas'];
        
        // Actualizar portafolio visual
        document.querySelector('.portafolio-visual h3').textContent = translations[lang]['portafolio-title'];
        
        const copyExamples = document.querySelectorAll('.copy-example');
        copyExamples[0].querySelector('h4').textContent = translations[lang]['copy1-title'];
        copyExamples[0].querySelector('p').textContent = translations[lang]['copy1-text'];
        copyExamples[1].querySelector('h4').textContent = translations[lang]['copy2-title'];
        copyExamples[1].querySelector('p').textContent = translations[lang]['copy2-text'];
        copyExamples[2].querySelector('h4').textContent = translations[lang]['copy3-title'];
        copyExamples[2].querySelector('p').textContent = translations[lang]['copy3-text'];
        
        // Actualizar contacto
        document.querySelector('#contacto h2').textContent = translations[lang]['contacto-title'];
        document.querySelector('#contacto .contacto-info p').textContent = translations[lang]['contacto-text'];
        
        const contactLinks = document.querySelectorAll('.contacto-link');
        contactLinks[0].querySelector('span').textContent = translations[lang]['whatsapp'];
        contactLinks[1].querySelector('span').textContent = translations[lang]['email'];
        contactLinks[2].querySelector('span').textContent = translations[lang]['instagram'];
        contactLinks[3].querySelector('span').textContent = translations[lang]['linkedin'];
        
        // Actualizar footer
        document.querySelector('footer p').textContent = translations[lang]['footer'];
    }
    
    // Event listener para el botón de traducción
    if (translateBtn) {
        translateBtn.addEventListener('click', function() {
            if (currentLang === 'es') {
                changeLanguage('en');
            } else {
                changeLanguage('es');
            }
        });
    }
});