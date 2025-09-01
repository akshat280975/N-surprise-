const startBtn = document.getElementById("startBtn");
const balloons = document.getElementById("balloons");
const decorations = document.getElementById("decorations");
const cake = document.getElementById("cake");
const card = document.getElementById("card");
const cutCakeBtn = document.getElementById("cutCakeBtn");
const flipSection = document.getElementById("flip-section");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  balloons.classList.remove("hidden");

  setTimeout(() => {
    decorations.classList.remove("hidden");
  }, 2000);

  setTimeout(() => {
    cake.classList.remove("hidden");
  }, 4000);
});

cutCakeBtn.addEventListener("click", () => {
  cake.classList.add("hidden");
  card.classList.remove("hidden");

  setTimeout(() => {
    flipSection.classList.remove("hidden");
  }, 3000);
});

// Flip card logic
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
