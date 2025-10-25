function createSakura() {
    const sakura = document.createElement('div');
    sakura.className = 'sakura';
    
    // 随机起始位置
    sakura.style.left = Math.random() * 100 + '%';
    
    // 随机大小
    const size = (Math.random() * 10 + 10);
    sakura.style.width = size + 'px';
    sakura.style.height = (size * 0.75) + 'px';
    
    // 随机透明度
    sakura.style.opacity = Math.random() * 0.6 + 0.4;
    
    // 随机动画时间
    sakura.style.animationDuration = (Math.random() * 5 + 5) + 's';
    
    document.body.appendChild(sakura);
    
    // 动画结束后移除元素
    setTimeout(() => {
        sakura.remove();
    }, 10000);
}

// 定期创建樱花
setInterval(createSakura, 300); 