"use strict";
// INTERFACES
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyMacros = exports.leanBodyMass = exports.bodyFatPct = exports.caloriesNeeded = exports.waistToHeightRatio = exports.bodyMassIndex = exports.caloriesToGrams = exports.kilosToPounds = exports.poundsToKilos = exports.inchesToCentimeters = exports.cmToInches = void 0;
// UTILITY FUNCTIONS (CONVERSIONS)
function cmToInches(centimeters) {
    return centimeters / 2.54;
}
exports.cmToInches = cmToInches;
function inchesToCentimeters(inches) {
    return inches * 2.54;
}
exports.inchesToCentimeters = inchesToCentimeters;
function poundsToKilos(pounds) {
    return pounds / 2.205;
}
exports.poundsToKilos = poundsToKilos;
function kilosToPounds(kilos) {
    return kilos * 2.54;
}
exports.kilosToPounds = kilosToPounds;
function caloriesToGrams(type, calories) {
    if (type === 'f') {
        return Number((calories / 9).toFixed(2));
    }
    if (type === 'c' || type === 'p') {
        return Number((calories / 4).toFixed(2));
    }
    return NaN;
}
exports.caloriesToGrams = caloriesToGrams;
// HEALTH CALCULATIONS
// Body Mass Index - Measure of Overall Health
function bodyMassIndex(weight, height, imperial) {
    if (imperial) {
        weight = poundsToKilos(weight);
        height = inchesToCentimeters(height);
    }
    return Number(((weight / ((height * height) / 10000))).toFixed(2));
}
exports.bodyMassIndex = bodyMassIndex;
// More Accurate Measure of Overall Health than BMI
function waistToHeightRatio(waist, height, imperial) {
    if (imperial) {
        waist = inchesToCentimeters(waist);
        height = inchesToCentimeters(height);
    }
    return Number(((waist / height) * 100).toFixed(2));
}
exports.waistToHeightRatio = waistToHeightRatio;
// Daily Calories Needed
function caloriesNeeded(weight, height, age, male, imperial) {
    if (imperial) {
        weight = poundsToKilos(weight);
        height = inchesToCentimeters(height);
    }
    if (male) {
        return Number(((10 * weight) + (6.25 * height) - (5 * age) + 5).toFixed(2));
    }
    return Number(((10 * weight) + (6.25 * height) - (5 * age) - 161).toFixed(2));
}
exports.caloriesNeeded = caloriesNeeded;
// Body Fat % 
function bodyFatPct(bmi, age, male) {
    if (male) {
        return Number(((1.20 * bmi) + (0.23 * age) - 16.2).toFixed(2));
    }
    return Number(((1.20 * bmi) + (0.23 * age) - 5.4).toFixed(2));
}
exports.bodyFatPct = bodyFatPct;
// Lean Body Mass Calculator
function leanBodyMass(weight, height, male, imperial) {
    if (imperial) {
        weight = poundsToKilos(weight);
        height = inchesToCentimeters(height);
    }
    if (male) {
        return Number(((0.407 * weight) + (0.267 * height) - 19.2).toFixed(2));
    }
    return Number(((0.252 * weight) + (0.473 * height) - 48.3).toFixed(2));
}
exports.leanBodyMass = leanBodyMass;
// Estimate Daily Carbs, Fat, Protein Needed
function dailyMacros(calories, fat, carbs, protein) {
    if (fat === void 0) { fat = .20; }
    if (carbs === void 0) { carbs = .55; }
    if (protein === void 0) { protein = .25; }
    var fCals = Number((calories * fat).toFixed(2));
    var fGrams = caloriesToGrams('f', fCals);
    var cCals = Number((calories * carbs).toFixed(2));
    var cGrams = caloriesToGrams('c', cCals);
    var pCals = Number((calories * protein).toFixed(2));
    var pGrams = caloriesToGrams('p', pCals);
    return { fCal: fCals, fGram: fGrams, cCal: cCals, cGram: cGrams, pCal: pCals, pGram: pGrams };
}
exports.dailyMacros = dailyMacros;
//# sourceMappingURL=index.js.map