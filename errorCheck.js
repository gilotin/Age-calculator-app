const formLabel = document.querySelectorAll(".form__label");
const formInput = document.querySelectorAll(".form__input");

export function errorCheck(inputData) {
    let hasError = false;
    for (let element in inputData) {
        const errorValidationLabel = document.querySelector(`.form__error-validation-${element}`);
        const errorLabelRequired = document.querySelector(`.form__error-required-${element}`);

        const date = Number(inputData[element]);
        const currentDate = new Date();
        const presentYear = currentDate.getFullYear();
        const month = inputData["month"];
        const year = inputData["year"];

        if (inputData[element] === "") {
            errorLabelRequired.style.display = "block";
            errorValidationLabel.style.display = "none";
            hasError = true;
            colorLabelRed(hasError);
        } else {
            errorLabelRequired.style.display = "none";

            if (element === "year" && (date < 1900 || date > presentYear)) {
                errorValidationLabel.style.display = "block";

                hasError = true;
            } else if (element === "year") {
                errorValidationLabel.style.display = "none";
            }

            if (element === "month" && (date < 1 || date > 12)) {
                errorValidationLabel.style.display = "block";
                hasError = true;
            } else if (element === "month") {
                errorValidationLabel.style.display = "none";
            }

            if (element === "day" && (date <= 0 || date > daysMaxRange(month, year))) {
                errorValidationLabel.style.display = "block";
                hasError = true;
            } else if (element === "day") {
                errorValidationLabel.style.display = "none";
            }
        }
    }
    colorLabelRed(hasError);
    return hasError;
}

function daysMaxRange(month, year) {
    const thirtyDayMonths = ["4", "6", "9", "11"];

    if (isLeapYear(year) && month == 2) {
        return 29;
    }

    if (month == 2) {
        return 28;
    }

    if (thirtyDayMonths.includes(month)) {
        return 30;
    }
    return 31;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function colorLabelRed(error) {
    if (error) {
        formLabel.forEach((e) => e.classList.add("form__label--error"));
        formInput.forEach((e) => e.classList.add("form__input--error"));
    } else {
        formLabel.forEach((e) => e.classList.remove("form__label--error"));
        formInput.forEach((e) => e.classList.remove("form__input--error"));
    }
}
