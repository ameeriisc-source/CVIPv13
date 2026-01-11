document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Animation Logic (The "Moving Text" Effect)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal-text, .member-card, .section-title');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal-text'); // Ensure class exists
        observer.observe(el);
    });

    // 2. Hero Slider Logic
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    if (slides.length > 0) {
        slides[0].classList.add('active');
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Change every 5 seconds
    }
});
