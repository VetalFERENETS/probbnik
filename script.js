// Речення, яке потрібно показати вертикально
const text = "Soilborne Ant Empire ";
const container = document.getElementById("verticalText");

// Розбиваємо на слова
const words = text.split(" ");

// Додаємо кожне слово з затримкою
words.forEach((word, index) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.animationDelay = `${index * 0.6}s`; // затримка для кожного слова
  container.appendChild(span);
});
