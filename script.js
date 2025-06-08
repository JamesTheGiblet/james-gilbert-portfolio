document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Navigation active state
    const navContainer = document.querySelector('nav');
    const allNavLinks = navContainer ? Array.from(navContainer.querySelectorAll('a.nav-link[href^="#"]')) : [];
    
    const sections = [];
    allNavLinks.forEach(link => {
        try {
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            if (section && !sections.find(s => s.id === sectionId)) {
                sections.push(section);
            }
        } catch (e) {
            console.warn(`Could not find section for nav link ${link.getAttribute('href')}`, e);
        }
    });
    sections.sort((a, b) => a.offsetTop - b.offsetTop);

    const navHeight = navContainer ? navContainer.offsetHeight : 70; // Default height

    function setActiveLink() {
        if (!allNavLinks.length || !sections.length) return;

        let currentSectionId = '';
        const scrollPosition = window.scrollY + navHeight + 40; // Offset to trigger a bit earlier/more accurately

        for (let i = sections.length - 1; i >= 0; i--) {
            if (sections[i].offsetTop <= scrollPosition) {
                currentSectionId = sections[i].id;
                break;
            }
        }
        
        // If scrolled to the very bottom, make sure the last section's link is active
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20 && sections.length > 0) {
            currentSectionId = sections[sections.length - 1].id;
        }

        allNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink(); // Set active link on page load

    // Scroll-triggered animations for sections
    const animatedSections = document.querySelectorAll('section[id]:not(#hero)');
    const prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!prefersReducedMotionQuery.matches) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    entry.target.classList.remove('section-hidden');
                    // observer.unobserve(entry.target); // Optional: unobserve after animation
                }
            });
        }, { rootMargin: '0px', threshold: 0.1 });

        animatedSections.forEach(section => {
            section.classList.add('section-hidden');
            sectionObserver.observe(section);
        });

        // Hero section animations
        const heroTitle = document.querySelector('#hero h1');
        const heroSubtitle = document.querySelector('#hero p');
        const heroButton = document.querySelector('#hero a[href="#projects"]');

        if (heroTitle) heroTitle.style.animation = 'fadeInUp 0.8s ease-out 0.2s forwards';
        if (heroSubtitle) heroSubtitle.style.animation = 'fadeInUp 0.8s ease-out 0.5s forwards';
        if (heroButton) heroButton.style.animation = 'fadeInUp 0.8s ease-out 0.8s forwards';
    } else { // If reduced motion is preferred, make sure elements are visible
            animatedSections.forEach(section => {
            section.classList.add('section-visible');
            section.classList.remove('section-hidden');
        });
    }

    // Smooth scroll for all anchor links, respecting prefers-reduced-motion
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            if (hrefAttribute && hrefAttribute.startsWith('#') && hrefAttribute.length > 1) {
                const targetId = hrefAttribute.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    const navBar = document.querySelector('nav');
                    const navBarHeight = navBar ? navBar.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navBarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: prefersReducedMotionQuery.matches ? 'auto' : 'smooth'
                    });
                }
            }
        });
    });
});