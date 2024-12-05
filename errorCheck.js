export function errorCheck(inputData) {
    for (let element in inputData) {
        const errorValidationLabel = document.querySelector(`.form__error-validation-${element}`);
        const errorLabelRequired = document.querySelector(`.form__error-required-${element}`);

        const date = Number(inputData[element]);
        const currentDate = new Date();
        const presentYear = currentDate.getFullYear();
        const month = inputData["month"];
        const year = inputData["year"];

        if (inputData[element] == "") {
            errorLabelRequired.style.display = "block";
            errorValidationLabel.style.display = "none";
        } else {
            errorLabelRequired.style.display = "none";

            if (element === "year" && (date < 1900 || date > presentYear)) {
                errorValidationLabel.style.display = "block";
            } else if (element == "month" && (date < 1 || date > 12)) {
                errorValidationLabel.style.display = "block";
            } else if (element == "day" && (date <= 0 || date > daysMaxRange(month, year))) {
                errorValidationLabel.style.display = "block";
            } else {
                errorValidationLabel.style.display = "none";
            }
        }
    }
}

function daysMaxRange(month, year) {
    let thirtyDayMonths = [4, 6, 9, 11];

    if (isLeapYear(year) && month == 2) {
        return 29;
    }

    if (thirtyDayMonths.includes(month)) {
        return 30;
    }
    return 31;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
