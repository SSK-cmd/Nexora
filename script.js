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

document.querySelectorAll('.film-player').forEach(player => {
  const video = player.querySelector('video');
  const playButton = player.querySelector('.film-play');
  if (!video || !playButton) return;

  // Keep native controls as the fallback when JavaScript is unavailable.
  video.controls = false;
  playButton.hidden = false;

  playButton.addEventListener('click', async () => {
    video.controls = true;
    playButton.hidden = true;
    video.focus({ preventScroll: true });
    try {
      await video.play();
    } catch {
      // Native controls remain available to retry or show a media error.
      video.controls = true;
    }
  });
});
