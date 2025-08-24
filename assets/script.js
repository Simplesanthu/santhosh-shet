// Year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('show'));
}

// Typed.js headline (roles)
document.addEventListener('DOMContentLoaded', () => {
  if (window.Typed) {
    new Typed('#typed', {
      strings: [
        'Santhosh Shet',
        'an Oracle CPQ Developer',
        'exploring Data Science & Analytics',
        'a Tech Explorer'
      ],
      typeSpeed: 45,
      backSpeed: 22,
      backDelay: 1200,
      loop: true
    });
  }
});

// Reveal on scroll (GSAP or fallback)
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal');

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    items.forEach(el => {
      gsap.fromTo(el,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        }
      );
    });
  } else {
    // Fallback: IntersectionObserver
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
  }
});
