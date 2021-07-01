import {
    MIN_RATE,
    LOW_RATE,
    MEDIUM_RATE,
    HIGHT_RATE,
    MAX_RATE
} from './data.js';

import {
    getFemaleWeight,
    getMaleWeight,
    WEIGHT_RATE,
    HEIGHT_RATE,
    AGE_RATE,
    MALE_RATE,
    FEMALE_RATE
} from './util.js';

import {
    caloriesNorm,
    caloriesMinimal,
    caloriesMaximal
} from './modal.js';

import {formAge, formHeight, formWeight} from './form.js'

caloriesNorm.textContent = getMaleWeight(formAge.value, formHeight.value, formWeight.value);
