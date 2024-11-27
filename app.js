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

const errorLabelRequired = document.querySelector(".form__error-required");
const errorLabelValidate = document.querySelector(".form__error-validation");
const formLabel = document.querySelector(".form__label");

// fix the function

function errorCheck(inputData) {
    let day = Number(inputData.day);
    let month = Number(inputData.month);
    let year = Number(inputData.year);

    for (let element in inputData) {
        // NOTE: NEED more work . Tomorrow !

        if (inputData[element] == "") {
            errorLabelRequired.style.display = "block";
            errorLabelValidate.style.display = "none";
            formLabel.style.color = "red";
        } else {
            errorLabelRequired.style.display = "none";
        }

        // if (day <= 0 || day > 31) {
        //     errorLabelValidate.style.display = "block";
        //     errorLabelRequired.style.display = "none";
        // } else {
        //     errorLabelValidate.style.display = "none";
        // }
    }
}
