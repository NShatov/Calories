// найдем блок модалкой и поля для вывода

const modal = document.querySelector('.counter__result');
const caloriesNorm = modal.querySelector('#calories-norm');
const caloriesMinimal = modal.querySelector('#calories-minimal');
const caloriesMaximal = modal.querySelector('#calories-maximal');

export {modal, caloriesNorm, caloriesMinimal, caloriesMaximal};
