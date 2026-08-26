const nav = document.querySelector('.nav');
const reveals = document.querySelectorAll('.reveal');

addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40), { passive: true });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

reveals.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
  observer.observe(el);
});

document.querySelector('.menu').addEventListener('click', function () {
  const open = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', String(!open));
  document.querySelector('.nav nav').classList.toggle('mobile-open', !open);
});
