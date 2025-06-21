const video = document.getElementById('hoverVideo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, {
  threshold: 0.5 // запуск/пауза, якщо 50% секції видно
});

observer.observe(video);
