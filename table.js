document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.timeline-point');
    if (!points.length) {
        return;
    }

    function layoutPoints() {
        points.forEach((point, index) => {
            if (window.innerWidth > 768) {
                const position = ((index + 1) / (points.length + 1)) * 100;
                point.style.top = `${position}%`;
            } else {
                point.style.top = '';
            }
        });
    }

    points.forEach(point => {
        point.addEventListener('mouseenter', () => {
            point.style.boxShadow = `
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 40px rgba(255, 255, 255, 0.4)
            `;
        });

        point.addEventListener('mouseleave', () => {
            point.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
        });
    });

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        points.forEach(point => {
            const pointTop = point.getBoundingClientRect().top;
            if (pointTop < triggerBottom) {
                point.style.opacity = '1';
                point.style.transform = window.innerWidth > 768
                    ? 'translate(-50%, -50%) scale(1)'
                    : 'none';
            }
        });
    }

    layoutPoints();
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', () => {
        layoutPoints();
        checkScroll();
    });
    checkScroll();
});
