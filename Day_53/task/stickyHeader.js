
const navBar = document.querySelector('.nav-bar');
if (!navBar) {
    console.warn('No element with class \'nav-bar\' found. Sticky header script aborted.');
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

        if (y > 0) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    function recalcOffset() {
        const wasSticky = navBar.classList.contains('sticky');
        if (wasSticky) {
            navBar.classList.remove('sticky');
            document.body.style.paddingTop = '';
        }
        stickOffset = navBar.getBoundingClientRect().top + window.pageYOffset;
        if (wasSticky) {
            if (window.pageYOffset >= stickOffset) {
                navBar.classList.add('sticky');
                document.body.style.paddingTop = `${navBar.offsetHeight}px`;
            }
        }
    }

    window.addEventListener('resize', recalcOffset);

    recalcOffset();
    onScroll();
}

