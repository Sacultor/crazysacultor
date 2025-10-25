document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.timeline-point');
    
    // 设置时间点的垂直位置
    points.forEach((point, index) => {
        const year = parseInt(point.getAttribute('data-year'));
        const position = ((index + 1) / (points.length + 1)) * 100;
        point.style.top = `${position}%`;
        
        // 添加鼠标进入时的光效
        point.addEventListener('mouseenter', () => {
            point.style.boxShadow = `
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 40px rgba(255, 255, 255, 0.4)
            `;
        });
        
        // 添加鼠标离开时的效果
        point.addEventListener('mouseleave', () => {
            point.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
        });
    });
    
    // 添加滚动动画
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        points.forEach(point => {
            const pointTop = point.getBoundingClientRect().top;
            
            if (pointTop < triggerBottom) {
                point.style.opacity = '1';
                point.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // 初始检查
});