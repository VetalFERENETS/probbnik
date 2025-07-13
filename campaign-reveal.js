// campaign-reveal.js

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.campaign');
  if (!section) return;

  const observerOptions = {
    root: null,            // спостереження вікна браузера
    rootMargin: '0px',     // без додаткових відступів
    threshold: 0.25        // коли 25% секції в полі зору
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(section);
});
