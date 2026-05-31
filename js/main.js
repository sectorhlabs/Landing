document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('lit');
    const firstBlock = document.querySelector('.block');
    if (firstBlock) firstBlock.classList.add('in');
    initLenis();
    initNav();
    initReveal();
    initOceanDepth();
    initBathy();
});

const ABYSS_M = 4000; // profundidad simbólica del abismo (metros)

// Inmersión oceánica: actualiza --page-depth (0..1) según el scroll de toda la
// página, alimentando el fondo de profundidad y la atmósfera. Decorativo → se
// omite con reduced-motion (el fondo queda estático en la franja de superficie).
function initOceanDepth() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    let ticking = false;
    function update() {
        const max = root.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        root.style.setProperty('--page-depth', p.toFixed(4));
        ticking = false;
    }
    function onScroll() {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
}

// Batímetro: la regla mide toda la página; cada marca se ancla a la posición
// real de su sección y muestra su profundidad en metros. Se recalcula al cargar
// (alturas finales) y al redimensionar.
function initBathy() {
    const bathy = document.querySelector('.bathy');
    if (!bathy) return;
    const ticks = bathy.querySelectorAll('.bathy-tick[data-target]');

    function layout() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        ticks.forEach(tick => {
            const sec = document.querySelector(tick.dataset.target);
            if (!sec) return;
            const top = sec.offsetTop;
            tick.style.top = top + 'px';
            const depth = max > 0 ? Math.min(1, Math.max(0, top / max)) : 0;
            const m = Math.round(depth * ABYSS_M / 10) * 10;
            const label = tick.querySelector('b');
            if (label) label.textContent = m === 0 ? '0 m' : '−' + m + ' m';
        });
    }
    window.addEventListener('load', layout);
    window.addEventListener('resize', layout, { passive: true });
    layout();
}

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
