// js/viewport.js

// Функція для оновлення змінної --vh
function updateVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Слухаємо події resize та orientationchange
window.addEventListener('resize', updateVh);
window.addEventListener('orientationchange', updateVh);

// Після завантаження сторінки одразу встановлюємо значення
updateVh();
