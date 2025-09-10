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
    
    // Funcionalidad de arrastre para el slider de habilidades
    const skillsSlider = document.querySelector('.skills-slider');
    if (skillsSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        // Eventos para mouse
        skillsSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            skillsSlider.classList.add('dragging');
            startX = e.pageX - skillsSlider.offsetLeft;
            scrollLeft = skillsSlider.scrollLeft;
            e.preventDefault();
        });
        
        skillsSlider.addEventListener('mouseleave', () => {
            isDown = false;
            skillsSlider.classList.remove('dragging');
        });
        
        skillsSlider.addEventListener('mouseup', () => {
            isDown = false;
            skillsSlider.classList.remove('dragging');
        });
        
        skillsSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - skillsSlider.offsetLeft;
            const walk = (x - startX) * 2; // Velocidad de arrastre
            skillsSlider.scrollLeft = scrollLeft - walk;
        });
        
        // Eventos para touch
        skillsSlider.addEventListener('touchstart', (e) => {
            isDown = true;
            skillsSlider.classList.add('dragging');
            startX = e.touches[0].pageX - skillsSlider.offsetLeft;
            scrollLeft = skillsSlider.scrollLeft;
            e.preventDefault();
        });
        
        skillsSlider.addEventListener('touchend', () => {
            isDown = false;
            skillsSlider.classList.remove('dragging');
        });
        
        skillsSlider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - skillsSlider.offsetLeft;
            const walk = (x - startX) * 2; // Velocidad de arrastre
            skillsSlider.scrollLeft = scrollLeft - walk;
        });
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