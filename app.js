import getAge from './getAge.js';


const form = document.querySelector(".form");
const submitButton = document.querySelector(".form__button");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const resultYears = document.querySelector(".result__years--purple");
  const resultMonths = document.querySelector(".result__months--purple");
  const resultDays = document.querySelector(".result__days--purple");


  const formData = new FormData(e.target)

  const day = formData.get("day");
  const month = formData.get("month")
  const year = formData.get("year")


  const result = getAge(day, month, year);

  resultYears.textContent = `${result.years}`
  resultMonths.textContent = `${result.months}`
  resultDays.textContent = `${result.days}`



})



