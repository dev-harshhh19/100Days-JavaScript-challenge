const navBar = document.getElementById('navbar');
if (!navBar || typeof window === 'undefined') {
    console.warn('No element with id \'navbar\' found. Sticky navbar script aborted.');
} else {
    let stickOffset = navBar.getBoundingClientRect().top + window.pageYOffset;
    function onScroll() {
        const y = window.pageYOffset;

        if (y >= stickOffset) {
            if (!navBar.classList.contains('sticky')) {
                navBar.classList.add('sticky');
                document.body.style.paddingTop = `${navBar.offsetHeight}px`;
            }
        } else {
            if (navBar.classList.contains('sticky')) {
                navBar.classList.remove('sticky');
                document.body.style.paddingTop = '';
            }
        }
    }

    let ticking = false;
    function optimizedScrollHandler() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                onScroll();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    function recalcOffset() {
        const wasSticky = navBar.classList.contains('sticky');
        if (wasSticky) {
            navBar.classList.remove('sticky');
            document.body.style.paddingTop = '';
        }
        stickOffset = navBar.getBoundingClientRect().top + window.pageYOffset;

        onScroll();
    }
    window.addEventListener('resize', recalcOffset);

    recalcOffset();
    onScroll();
}
