 function showInputError(formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

function hideInputError(formElement, inputElement, config) {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

   inputElement.classList.remove(config.inputErrorClass);
   errorElement.classList.remove(config.errorClass);
   errorElement.textContent = '';
 }

 function checkInputValidity(formElement, inputElement, config) {
   const namePattern = /^[a-zA-Zа-яА-ЯёË\s\-]+$/;
   const customMessage = "Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы";

   if(!namePattern.test(inputElement.value) && inputElement.id === 'name-input' && inputElement.value) {
     inputElement.setCustomValidity(customMessage);
   } else {
     inputElement.setCustomValidity('');
   }

  if (!inputElement.validity.valid) {
     showInputError(formElement, inputElement, inputElement.validationMessage, config);
   } else {
     hideInputError(formElement, inputElement, config);
   }
 }

 function hasInvalidInput(inputList) {
   return inputList.some((inputElement) => {
     return !inputElement.validity.valid;
   });
 }

 function toggleButtonState(inputList, buttonElement, config) {
   if(hasInvalidInput(inputList)) {
     buttonElement.classList.add(config.inactiveButtonClass);
     buttonElement.disabled = true;
   } else {
     buttonElement.classList.remove(config.inactiveButtonClass);
     buttonElement.disabled = false;
   }
 }

 function setEventListeners(formElement,config) {
   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
   const buttonElement = formElement.querySelector(config.submitButtonSelector);

   toggleButtonState(inputList, buttonElement, config);

   inputList.forEach((inputElement) => {
     inputElement.addEventListener('input', function () {
       checkInputValidity(formElement, inputElement, config);
       toggleButtonState(inputList, buttonElement, config);
     });
   });
 }

 export function enableValidation(config) {
   const formList = Array.from(document.querySelectorAll(config.formSelector));

   formList.forEach(formElement => {
     setEventListeners(formElement, config);
   })
 }

 export function clearValidation(formElement, config) {
   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
   const buttonElement = formElement.querySelector(config.submitButtonSelector);

   inputList.forEach((inputElement) => {
     hideInputError(formElement, inputElement, config);
     inputElement.value = '';
   })

   buttonElement.classList.add(config.inactiveButtonClass);
   buttonElement.disabled = true;
 }