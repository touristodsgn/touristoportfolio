/* Плавающая кнопка «Хочу такой же сайт» на страницах-работах: ведёт в Telegram. */
(function () {
  var TG = 'https://t.me/sex030'; // <-- ваша ссылка на Telegram
  var a = document.createElement('a');
  a.href = TG; a.target = '_blank'; a.rel = 'noopener';
  a.setAttribute('aria-label', 'Заказать такой же сайт у TOURISTO в Telegram');
  a.innerHTML = '<span>Хочу такой же</span>';
  var css = document.createElement('style');
  css.textContent =
    '.want{position:fixed;right:16px;bottom:16px;z-index:100;display:flex;align-items:center;gap:10px;padding:12px 20px;border-radius:99px;' +
    'background:linear-gradient(135deg,#8B5CF6,#6D28D9);color:#fff;font:700 14px/1 system-ui,-apple-system,"Segoe UI",sans-serif;text-decoration:none;' +
    'box-shadow:0 12px 34px -6px rgba(109,40,217,.65);transition:transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s}' +
    '.want:hover{transform:translateY(-3px);box-shadow:0 18px 40px -6px rgba(109,40,217,.8)}' +
    '.want::before{content:"";width:8px;height:8px;border-radius:50%;background:#F0ABFC;box-shadow:0 0 0 0 rgba(240,171,252,.7);animation:wping 2s infinite}' +
    '@keyframes wping{70%{box-shadow:0 0 0 9px rgba(240,171,252,0)}100%{box-shadow:0 0 0 0 rgba(240,171,252,0)}}' +
    '@media(max-width:520px){.want{right:12px;bottom:12px;padding:12px 16px;font-size:13px}}' +
    '@media(prefers-reduced-motion:reduce){.want::before{animation:none}}';
  a.className = 'want';
  document.head.appendChild(css);
  document.body.appendChild(a);
})();
