document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('lit');
    const firstBlock = document.querySelector('.block');
    if (firstBlock) firstBlock.classList.add('in');
    initLenis();
    initNav();
    initReveal();
});

function initLenis() {
    if (typeof Lenis === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    new Lenis({
        autoRaf: true,
        lerp: 0.08,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        anchors: true,
    });
}

function initNav() {
    const nav = document.getElementById('nav');
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 30);
        }, { passive: true });
    }

    if (!toggle || !links) return;

    function openMenu() {
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Cerrar menú');
        links.classList.add('active');
        if (main) main.setAttribute('inert', '');
        if (footer) footer.setAttribute('inert', '');
        document.addEventListener('keydown', onEscape);
        document.addEventListener('click', onClickOutside);
    }

    function closeMenu() {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
        links.classList.remove('active');
        if (main) main.removeAttribute('inert');
        if (footer) footer.removeAttribute('inert');
        document.removeEventListener('keydown', onEscape);
        document.removeEventListener('click', onClickOutside);
    }

    function onEscape(e) {
        if (e.key === 'Escape') {
            closeMenu();
            toggle.focus();
        }
    }

    function onClickOutside(e) {
        if (!links.contains(e.target) && !toggle.contains(e.target)) {
            closeMenu();
        }
    }

    toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        isOpen ? closeMenu() : openMenu();
    });

    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', closeMenu);
    });
}

function initReveal() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');

                const block = e.target.closest('.block');
                if (block && !block.classList.contains('in')) {
                    block.classList.add('in');
                }

                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-parent').forEach(el => io.observe(el));
}
