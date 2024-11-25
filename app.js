import getAge from './getAge.js';


const form = document.querySelector(".form");
const submitButton = document.querySelector(".form__button");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const resultYears = document.querySelector(".result__years--purple");
  const resultMonths = document.querySelector(".result__months--purple");
  const resultDays = document.querySelector(".result__days--purple");

const testForm = document.forms.testForm



  const formData = new FormData(e.target)
  
  const inputData = Object.fromEntries(formData)
  

   errorCheck(inputData)


  const result = getAge(inputData);
  

  resultYears.textContent = `${result.years}`
  resultMonths.textContent = `${result.months}`
  resultDays.textContent = `${result.days}`



})


const errorLableRequired = document.querySelector(".form__error-required");
const errorLableValidate = document.querySelector(".form__error-validation");

// fix the function 

function errorCheck(inputData) {
  
  let day = Number(inputData.day);
  let month = Number(inputData.month)
  let year = Number(inputData.year)
  
  
  
  if(day == ""){
  errorLableRequired.style.display = "block"
  errorLableValidate.style.display = "none"
    return
    
  }else{
   errorLableRequired.style.display = "none";
   
  }
  
 
  
  if( checkedDate <= 0 || checkedDate > 31){
    errorLableValidate.style.display = "block"
     errorLableRequired.style.display = "none"
     return
     
  }else{
  errorLableValidate.style.display = "none"
  
  }
}