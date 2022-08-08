// select html element

const overlay = document.querySelector(".overlay");
const contacUsBtn = document.querySelector(".btnContact");
const closeBtn = document.querySelector(".btnExitOnshow");
const exitFrom = document.querySelector(".exitFrom");
const contactFrom = document.getElementById("medal");

// add event listenir to btns

contacUsBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  contactFrom.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  contactFrom.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  contactFrom.classList.add("hidden");
});

exitFrom.addEventListener("click", () => {
  overlay.classList.add("hidden");
  contactFrom.classList.add("hidden");
});
