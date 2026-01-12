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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal-text, .member-card, .section-title');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal-text');
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
        }, 5000);
    }

    // 3. MOBILE MENU TOGGLE
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        // Toggle menu open/close
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Handle dropdown clicks on mobile
        const dropbtns = document.querySelectorAll('.dropbtn');

dropbtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            e.stopPropagation(); // Prevents the click from bubbling up

            const parentLi = this.parentElement;

            // Toggle current dropdown
            parentLi.classList.toggle('active');

            // Close other open dropdowns (prevents layout "jumps")
            document.querySelectorAll('.nav-links > li').forEach(li => {
                if (li !== parentLi) {
                    li.classList.remove('active');
                }
            });
        }
    });
});
    }
});