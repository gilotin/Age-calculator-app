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

        if (inputData[element] == "") {
            errorLabelRequired.style.display = "block";
            errorValidationLabel.style.display = "none";
            hasError = true;
        } else {
            errorLabelRequired.style.display = "none";
            hasError = false;

            if (element === "year" && (date < 1900 || date > presentYear)) {
                errorValidationLabel.style.display = "block";
                return (hasError = true);
            } else if (element == "month" && (date < 1 || date > 12)) {
                errorValidationLabel.style.display = "block";
                return (hasError = true);
            } else if (element == "day" && (date <= 0 || date > daysMaxRange(month, year))) {
                errorValidationLabel.style.display = "block";
                return (hasError = true);
            } else {
                errorValidationLabel.style.display = "none";
            }
        }
    }
    return hasError;
}

function daysMaxRange(month, year) {
    let thirtyDayMonths = ["4", "6", "9", "11"];

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
