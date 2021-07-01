// постоянные, используемые в формулах для расчета

const WEIGHT_RATE = 10;
const HEIGHT_RATE = 6.25;
const AGE_RATE = 5;
const MALE_RATE = 5;
const FEMALE_RATE = 161;

// формулы для расчета

const getFemaleWeight = (weight, height, age) => {
    (WEIGHT_RATE * weight) + (HEIGHT_RATE * height) + (AGE_RATE * age) - FEMALE_RATE;
}

const getMaleWeight = (weight, height, age) => {
    (WEIGHT_RATE * weight) + (HEIGHT_RATE * height) + (AGE_RATE * age) + MALE_RATE;
}

export {
    getFemaleWeight,
    getMaleWeight
};
