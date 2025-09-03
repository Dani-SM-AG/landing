document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Duplicar contenido del slider para efecto infinito
    const skillsTrack = document.querySelector('.skills-track');
    if (skillsTrack) {
        const skillsItems = skillsTrack.innerHTML;
        skillsTrack.innerHTML += skillsItems;
    }
    
    // Animación de aparición al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.skill-item, .proyecto-card, .copy-example');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Funcionalidad para el popup de mockups
    const popup = document.getElementById('mockup-popup');
    const mockupImage = popup.querySelector('.mockup-image');
    const closeBtn = popup.querySelector('.close-popup');
    
    // Función para abrir el popup
    function openPopup(imageSrc) {
        mockupImage.src = imageSrc;
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
    }
    
    // Función para cerrar el popup
    function closePopup() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }
    
    // Eventos para los botones "Ver más"
    document.querySelectorAll('.proyecto-link-btn').forEach(button => {
        button.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-mockup');
            openPopup(imageSrc);
        });
    });
    
    // Evento para cerrar el popup con el botón de cerrar
    closeBtn.addEventListener('click', closePopup);
    
    // Evento para cerrar el popup al hacer clic fuera de la imagen
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup();
        }
    });
    
    // Evento para cerrar el popup con la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && popup.style.display === 'block') {
            closePopup();
        }
    });
});