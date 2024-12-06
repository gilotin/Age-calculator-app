import { getAge } from "./getAge.js";
import { errorCheck } from "./errorCheck.js";

const form = document.querySelector(".form");
const submitButton = document.querySelector(".form__button");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultYears = document.querySelector(".result__years--purple");
    const resultMonths = document.querySelector(".result__months--purple");
    const resultDays = document.querySelector(".result__days--purple");

    const formData = new FormData(e.target);

    const inputData = Object.fromEntries(formData);

    const hasError = errorCheck(inputData);

    if (hasError) {
        resultYears.textContent = `-- `;
        resultMonths.textContent = `-- `;
        resultDays.textContent = `-- `;
        return;
    }

    const result = getAge(inputData);

    resultYears.textContent = `${result.years} `;
    resultMonths.textContent = `${result.months} `;
    resultDays.textContent = `${result.days} `;
});
