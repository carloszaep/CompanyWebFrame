// select html element

const overlay = document.querySelector(".overlay");
const contacUsBtn = document.querySelectorAll(".btnContact");
const closeBtn = document.querySelector(".btnExitOnshow");
const exitFrom = document.querySelector(".exitFrom");
const contactFrom = document.getElementById("medal");
const nav = document.querySelector("nav");

// add event listenir to btns

contacUsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    contactFrom.classList.remove("hidden");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  contactFrom.classList.add("hidden");
  exitFrom.innerHTML =
    '<button class="btn btn-primary exitFrom" type="submit">Send</button>';
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  contactFrom.classList.add("hidden");
  exitFrom.innerHTML =
    '<button class="btn btn-primary exitFrom" type="submit">Send</button>';
});

exitFrom.addEventListener("click", () => {
  exitFrom.innerHTML =
    '<button class="btn btn-primary exitFrom" type="submit">Waiting</button>';
});

// functions to add stimates

const addEstimate1 = {
  element: document.querySelector(".addEstimate1"),
  cliecked: false,
  value1: 80,
  value2: 100,
};
const addEstimate2 = {
  element: document.querySelector(".addEstimate2"),
  cliecked: false,
  value1: 70,
  value2: 90,
};
const addEstimate3 = {
  element: document.querySelector(".addEstimate3"),
  cliecked: false,
  value1: 50,
  value2: 70,
};
const addEstimate4 = {
  element: document.querySelector(".addEstimate4"),
  cliecked: false,
  value1: 80,
  value2: 100,
};
const addEstimate5 = {
  element: document.querySelector(".addEstimate5"),
  cliecked: false,
  value1: 50,
  value2: 70,
};

const allAddEsimates = [
  addEstimate1,
  addEstimate2,
  addEstimate3,
  addEstimate4,
  addEstimate5,
];
// estimate value display
const estimate1 = document.getElementById("estimate1");
const estimate2 = document.getElementById("estimate2");

let estimateValue1 = 0;
let estimateValue2 = 0;

allAddEsimates.forEach((button) => {
  button.element.addEventListener("click", () => {
    if (!button.cliecked) {
      estimateValue1 += button.value1;
      estimateValue2 += button.value2;
      estimate1.textContent = `$${estimateValue1}`;
      estimate2.textContent = `$${estimateValue2}`;
      button.cliecked = true;
    }
  });
});

// reload

document.querySelector(".fa-rotate-right").addEventListener("click", () => {
  estimateValue1 = 0;
  estimateValue2 = 0;
  estimate1.textContent = `$${estimateValue1}`;
  estimate2.textContent = `$${estimateValue2}`;
  allAddEsimates.forEach((element) => {
    element.cliecked = false;
  });
});

// menue fade animation
nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".navbar-nav").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el != link) {
        el.style.opacity = 0.5;
      }
    });
  }
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".navbar-nav").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el != link) {
        el.style.opacity = 1;
      }
    });
  }
});
