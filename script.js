// select html element

const overlay = document.querySelector(".overlay");
const contacUsBtn = document.querySelectorAll(".btnContact");
const closeBtn = document.querySelector(".btnExitOnshow");
const exitFrom = document.querySelector(".exitFrom");
const contactFrom = document.getElementById("medal");

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
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  contactFrom.classList.add("hidden");
});

exitFrom.addEventListener("click", () => {
  exitFrom.innerHTML =
    '<button class="btn btn-primary exitFrom" type="submit">Waiting</button>';
});

// functions to add stimates

const addEstimate1 = document.querySelector(".addEstimate1");
const addEstimate2 = document.querySelector(".addEstimate2");
const addEstimate3 = document.querySelector(".addEstimate3");
const addEstimate4 = document.querySelector(".addEstimate4");
const addEstimate5 = document.querySelector(".addEstimate5");

let cliecked1 = false;
let cliecked2 = false;
let cliecked3 = false;
let cliecked4 = false;
let cliecked5 = false;

// estimate value display
const estimate1 = document.getElementById("estimate1");
const estimate2 = document.getElementById("estimate2");

let estimateValue1 = 0;
let estimateValue2 = 0;

function addToEstimate1() {
  if (cliecked1 === false) {
    estimateValue1 += 80;
    estimateValue2 += 100;
    estimate1.textContent = `$${estimateValue1}`;
    estimate2.textContent = `$${estimateValue2}`;
    cliecked1 = true;
  }
}

function addToEstimate2() {
  if (cliecked2 === false) {
    estimateValue1 += 70;
    estimateValue2 += 90;
    estimate1.textContent = `$${estimateValue1}`;
    estimate2.textContent = `$${estimateValue2}`;
    cliecked2 = true;
  }
}

function addToEstimate3() {
  if (cliecked3 === false) {
    estimateValue1 += 50;
    estimateValue2 += 70;
    estimate1.textContent = `$${estimateValue1}`;
    estimate2.textContent = `$${estimateValue2}`;
    cliecked3 = true;
  }
}

function addToEstimate4() {
  if (cliecked4 === false) {
    estimateValue1 += 80;
    estimateValue2 += 100;
    estimate1.textContent = `$${estimateValue1}`;
    estimate2.textContent = `$${estimateValue2}`;
    cliecked4 = true;
  }
}

function addToEstimate5() {
  if (cliecked5 === false) {
    estimateValue1 += 50;
    estimateValue2 += 70;
    estimate1.textContent = `$${estimateValue1}`;
    estimate2.textContent = `$${estimateValue2}`;
    cliecked5 = true;
  }
}

addEstimate1.addEventListener("click", addToEstimate1);

addEstimate2.addEventListener("click", addToEstimate2);

addEstimate3.addEventListener("click", addToEstimate3);

addEstimate4.addEventListener("click", addToEstimate4);

addEstimate5.addEventListener("click", addToEstimate5);
