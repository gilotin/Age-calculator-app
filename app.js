import getAge from "./getAge.js";

const form = document.querySelector(".form");
const submitButton = document.querySelector(".form__button");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultYears = document.querySelector(".result__years--purple");
    const resultMonths = document.querySelector(".result__months--purple");
    const resultDays = document.querySelector(".result__days--purple");

    const testForm = document.forms.testForm;

    const formData = new FormData(e.target);

    const inputData = Object.fromEntries(formData);

    errorCheck(inputData);

    const result = getAge(inputData);

    resultYears.textContent = `${result.years}`;
    resultMonths.textContent = `${result.months}`;
    resultDays.textContent = `${result.days}`;
});

// fix the function

function errorCheck(inputData) {
    for (let element in inputData) {
        const errorValidationLabel = document.querySelector(`.form__error-validation-${element}`);
        const errorLabelRequired = document.querySelector(`.form__error-required-${element}`);
        const date = Number(inputData[element]);
        const currentDate = new Date();
        const presentYear = currentDate.getFullYear();

        // Do make every error check for dates like 31 of April or 30 of February !!!

        if (inputData[element] == "") {
            errorLabelRequired.style.display = "block";
        } else {
            errorLabelRequired.style.display = "none";
            if ((element == "day" && date <= 0) || date > 31) {
                errorValidationLabel.style.display = "block";
            } else {
                errorValidationLabel.style.display = "none";
            }

            if ((element == "month" && date <= 0) || date > 12) {
                errorValidationLabel.style.display = "block";
            } else {
                errorValidationLabel.style.display = "none";
            }

            if ((element == "year" && date <= 1900) || date > presentYear) {
                errorValidationLabel.style.display = "block";
            } else {
                errorValidationLabel.style.display = "none";
            }
        }
    }
}
