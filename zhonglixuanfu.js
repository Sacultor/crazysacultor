document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.profile-card');
    if (!card) {
        return;
    }

    const maxRotate = 8;

    window.addEventListener('deviceorientation', handleOrientation);
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', resetCard);
    card.addEventListener('mouseenter', function() {
        card.style.transition = 'transform 0.2s ease-out';
    });

    function handleOrientation(event) {
        if (event.beta == null || event.gamma == null) {
            return;
        }

        const rotateX = Math.min(Math.max(event.beta, -maxRotate), maxRotate);
        const rotateY = Math.min(Math.max(event.gamma, -maxRotate), maxRotate);
        updateCardTransform(rotateX, rotateY);
    }

    function handleMouseMove(event) {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateY = ((event.clientX - centerX) / (rect.width / 2)) * maxRotate;
        const rotateX = -((event.clientY - centerY) / (rect.height / 2)) * maxRotate;
        updateCardTransform(rotateX, rotateY);
    }

    function updateCardTransform(rotateX, rotateY) {
        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(1.02, 1.02, 1.02)
        `;

        const intensity = Math.sqrt(rotateX * rotateX + rotateY * rotateY) / maxRotate;
        const shadowX = rotateY / 2;
        const shadowY = rotateX / 2;
        card.style.boxShadow = `
            ${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.2),
            inset ${-shadowX}px ${-shadowY}px 30px rgba(255, 255, 255, ${0.1 + intensity * 0.1})
        `;
    }

    function resetCard() {
        card.style.transition = 'all 0.5s ease-out';
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1), inset 0 0 30px rgba(255, 255, 255, 0.1)';
    }
});
