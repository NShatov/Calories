import {modal} from './modal.js'

// найдем сначало форму
const form = document.querySelector('.counter__form');
console.log(form);

// найдем радио-кнопки мужчина и женщина
const maleButton = form.querySelector('#gender-male');
const femaleButton = form.querySelector('#gender-female');

//найдем значения введенные в поля возраст, рост и вес
const formInputGroup = form.querySelector('.inputs-group');
const formRadiosGroup = form.querySelector('.radios-group');
const formAge = form.querySelector('#age');
const formHeight = form.querySelector('#height');
const formWeight = form.querySelector('#weight');

const submitButton = form.querySelector('.form__submit-button'); // найдем кнопку рассчитать
const resetButton = form.querySelector('.form__reset-button'); // найдем кнопку очистить поля и расчет
// проверка на наличие данных в блоке
formInputGroup.addEventListener('change', () => {
    if (!formAge.value && !formHeight.value && !formWeight.value) {
      resetButton.disabled = true;
    } else resetButton.disabled = false;
});
// если данные во все поля введены, то кнопка Рассчитать становится активной
formInputGroup.addEventListener('change', () => {
    if (!formAge.value || !formHeight.value || !formWeight.value) {
        submitButton.disabled = true;
    } else submitButton.disabled = false;
});

// валидация формы

// проверка поля возраст
formAge.addEventListener('invalid', () => {
    if (formAge.validity.valueMissing) {
    formAge.setCustomValidity('Это поле нужно заполнить!');
    } else {
        formAge.setCustomValidity('');
    }
});
// проверка поля рост
formHeight.addEventListener('invalid', () => {
    if (formHeight.validity.valueMissing) {
        formHeight.setCustomValidity('Это поле нужно заполнить!');
    } else {
        formHeight.setCustomValidity('');
    }
});
// проверка поля вес
formWeight.addEventListener('invalid', () => {
    if (formWeight.validity.valueMissing) {
        formWeight.setCustomValidity('Это поле нужно заполнить!');
    } else {
        formWeight.setCustomValidity('');
    }
});

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (modal.classList.contains('counter__result--hidden')) {
        modal.classList.remove('counter__result--hidden');
    }
});

resetButton.addEventListener('click', (evt) => {
    submitButton.disabled = true;
    modal.classList.add('counter__result--hidden');
});

export {formAge, formHeight, formWeight};


