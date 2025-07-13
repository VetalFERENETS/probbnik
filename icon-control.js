// icon-control.js
document.addEventListener('DOMContentLoaded', () => {
  const icon = document.querySelector('.swwd');
  if (!icon) return;

  icon.addEventListener('click', () => {
    icon.classList.toggle('stopped');
  });
});
