const dayOutput = document.getElementById("dayResult");
const monthOutput = document.getElementById("monthResult");
const yearOutput = document.getElementById("yearResult");

let isValid = false;
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const errorDay = document.querySelector("#errorMessage-day");
const errorMonth = document.querySelector("#errorMessage-month");
const errorYear = document.querySelector("#errorMessage-year");

const submit = document.querySelector(".submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  calculateDate();
});

dayInput.addEventListener("input", (e) => {
  if (+dayInput.value > 31) {
    errorDay.style.display = "block";
    dayInput.classList.add("error-border");
    isValid = false;
    return;
  } else {
    errorDay.style.display = "none";
    dayInput.classList.remove("error-border");
    isValid = true;
  }

  if (+dayInput.value === 0) {
    errorDay.style.display = "block";
    dayInput.classList.add("error-border");
    isValid = false;
  } else {
    errorDay.style.display = "none";
    dayInput.classList.remove("error-border");
    isValid = true;
  }
});

monthInput.addEventListener("input", (e) => {
  if (+monthInput.value > 12) {
    errorMonth.style.display = "block";
    monthInput.classList.add("error-border");
    isValid = false;
    return;
  } else {
    errorMonth.style.display = "none";
    monthInput.classList.remove("error-border");
    isValid = true;
  }

  if (+monthInput.value === 0) {
    errorMonth.style.display = "block";
    monthInput.classList.add("error-border");
    isValid = false;
  } else {
    errorMonth.style.display = "none";
    monthInput.classList.remove("error-border");
    isValid = true;
  }
});

yearInput.addEventListener("input", (e) => {
  if (+yearInput.value > 2024) {
    errorYear.style.display = "block";
    yearInput.classList.add("error-border");
    isValid = false;
    return;
  } else {
    errorYear.style.display = "none";
    yearInput.classList.remove("error-border");
    isValid = true;
  }

  if (+yearInput.value === 0) {
    errorYear.style.display = "block";
    yearInput.classList.add("error-border");
    isValid = false;
  } else {
    errorYear.style.display = "none";
    yearInput.classList.remove("error-border");
    isValid = true;
  }
});

function calculateDate() {
  if (isValid) {
    let birthday = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYear = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 1;
    dayOutput.textContent = ageDay;
    monthOutput.textContent = ageMonth;
    yearOutput.textContent = ageYear;
  } else {
    alert("error");
  }
}

