// FARAMAYA — interactions premium

// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Reveal on scroll
const revealEls = document.querySelectorAll('.promise__grid article, .card, .voix__card, .origine__text, .origine__media, .faq details, .quote__text');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Card video autoplay on hover (desktop) + tap (mobile)
document.querySelectorAll('.card').forEach(card => {
  const video = card.querySelector('video');
  if (!video) return;
  card.addEventListener('mouseenter', () => video.play().catch(()=>{}));
  card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
});

// Order buttons → WhatsApp deeplink
const WA_NUMBER = '33XXXXXXXXX'; // ← À remplacer
document.querySelectorAll('[data-order]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const model = btn.dataset.order;
    const msg = encodeURIComponent(`Bonjour Faramaya, je souhaite commander le modèle « ${model} ». Pouvez-vous me conseiller sur la longueur et la quantité ?`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank', 'noopener');
  });
});

// Smooth scroll for anchors (extra polish)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
  });
});
