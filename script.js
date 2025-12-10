document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // フェードインアニメーション
    // ============================================
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

    const elementsToAnimate = document.querySelectorAll('.feature-card, .hero-text, .hero-image, .scenario-block');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add visible class styles dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // ヘッダースクロール検知
    // ============================================
    const header = document.querySelector('.header');

    function handleHeaderScroll() {
        if (!header) return;
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // ============================================
    // おみくじギャラリー自動ローテーション
    // ============================================
    const galleryTrack = document.querySelector('.gallery-track');
    let autoRotateInterval;

    function startAutoRotate() {
        if (!autoRotateInterval && galleryTrack) {
            autoRotateInterval = setInterval(() => {
                const firstCard = galleryTrack.firstElementChild;
                if (firstCard) {
                    galleryTrack.appendChild(firstCard);
                }
            }, 1500);
        }
    }

    function stopAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
            autoRotateInterval = null;
        }
    }

    // IntersectionObserverで表示時のみ再生
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoRotate();
            } else {
                stopAutoRotate();
            }
        });
    }, { threshold: 0.5 });

    if (galleryTrack) {
        galleryObserver.observe(galleryTrack);

        // ホバー時に停止
        galleryTrack.addEventListener('mouseenter', stopAutoRotate);
        galleryTrack.addEventListener('mouseleave', startAutoRotate);

        // タッチデバイス対応
        galleryTrack.addEventListener('touchstart', stopAutoRotate);
        galleryTrack.addEventListener('touchend', startAutoRotate);
    }

    // ============================================
    // スクロールイベントハンドラ
    // ============================================
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleHeaderScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // 初期状態チェック
    handleHeaderScroll();
});
