/**
 * Cookie Consent Banner - M-LAB İzmir
 * 
 * localStorage'da 'cookie_consent' anahtarı saklanır.
 * Kullanıcı bir kez "Kabul Et" dediğinde, tüm sayfalarda
 * ve sonraki ziyaretlerde banner gösterilmez.
 */
(function () {
    // Already accepted? Don't show.
    if (localStorage.getItem('cookie_consent') === 'accepted') return;

    // Detect language
    const lang = (typeof getCurrentLang === 'function') ? getCurrentLang() : 'tr';

    const text = {
        tr: {
            message: 'Bu web sitesi, deneyiminizi iyileştirmek için çerezleri kullanmaktadır.',
            accept: 'Kabul Et',
            policy: 'Çerez Politikası'
        },
        en: {
            message: 'This website uses cookies to improve your experience.',
            accept: 'Accept',
            policy: 'Cookie Policy'
        }
    };

    const t = text[lang] || text['tr'];

    // Create banner element
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      background: rgba(10, 25, 47, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-top: 1px solid rgba(0, 212, 255, 0.15);
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
      font-family: 'Inter', sans-serif;
      animation: slideUp 0.4s ease-out;
    ">
      <p style="
        color: rgba(255,255,255,0.85);
        font-size: 13px;
        margin: 0;
        line-height: 1.4;
      ">${t.message}
        <a href="yasal.html?page=cookie" style="
          color: #00d4ff;
          text-decoration: underline;
          text-underline-offset: 2px;
          margin-left: 6px;
          font-size: 13px;
        ">${t.policy}</a>
      </p>
      <button id="cookie-accept-btn" style="
        background: linear-gradient(135deg, #00d4ff, #7c3aed);
        color: white;
        border: none;
        padding: 8px 24px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
        transition: opacity 0.2s;
        font-family: 'Inter', sans-serif;
      ">${t.accept}</button>
    </div>
    <style>
      @keyframes slideUp {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      #cookie-accept-btn:hover { opacity: 0.85; }
    </style>
  `;

    // Wait for DOM
    if (document.body) {
        document.body.appendChild(banner);
    } else {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(banner));
    }

    // Accept handler — saves to localStorage permanently
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'cookie-accept-btn') {
            localStorage.setItem('cookie_consent', 'accepted');
            const b = document.getElementById('cookie-consent-banner');
            if (b) {
                b.style.transition = 'opacity 0.3s, transform 0.3s';
                b.style.opacity = '0';
                b.style.transform = 'translateY(100%)';
                setTimeout(() => b.remove(), 350);
            }
        }
    });
})();
