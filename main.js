
document.addEventListener("DOMContentLoaded", function() {
  const sponsorButtons = document.querySelectorAll(".sponsor-btn");
  sponsorButtons.forEach(button => {
    button.addEventListener("click", function() {
      const amount = this.getAttribute("data-amount");
      const unit = Number(amount) < 1 ? "центів" : "доларів";
      alert(`Ви обрали спонсорський внесок у розмірі ${amount} ${unit}.`);
    });
  });

  const buyButtons = document.querySelectorAll(".buy-btn");
  buyButtons.forEach(button => {
    button.addEventListener("click", function() {
      alert("Дякуємо за ваш інтерес. Функціонал покупки поки не реалізований.");
    });
  });
});
