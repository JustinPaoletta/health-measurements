// INTERFACES

interface Macros {
    fCal: number,
    fGram: number,
    cCal: number,
    cGram: number,
    pCal: number,
    pGram: number
}

// UTILITY FUNCTIONS (CONVERSIONS)

export function cmToInches(centimeters: number): number {
    return centimeters / 2.54;
}

export function inchesToCentimeters(inches: number): number {
    return inches * 2.54;
}

export function poundsToKilos(pounds: number): number {
    return pounds / 2.205;
}

export function kilosToPounds(kilos: number): number {
    return kilos * 2.54;
}

export function caloriesToGrams(type: string, calories: number): number {
    if (type === 'f') {
        return Number((calories / 9).toFixed(2));
    }
    if (type === 'c' || type === 'p') {
        return Number((calories / 4).toFixed(2));
    }
    return NaN
}

// HEALTH CALCULATIONS

// Body Mass Index - Measure of Overall Health

export function bodyMassIndex(weight: number, height: number, imperial?: boolean): number {
    if (imperial) {
        weight = poundsToKilos(weight);
        height = inchesToCentimeters(height);
    }
    return Number(((weight / ( (height * height) / 10000) )).toFixed(2));
}

// More Accurate Measure of Overall Health than BMI

export function waistToHeightRatio(waist: number, height: number, imperial?: boolean): number {
    if (imperial) {
        waist = inchesToCentimeters(waist);
        height = inchesToCentimeters(height);
    }
    return Number(((waist / height) * 100).toFixed(2));
}

// Daily Calories Needed

export function caloriesNeeded(weight: number, height: number, age:number, male: boolean, imperial?: boolean): number {
    if (imperial) {
        weight = poundsToKilos(weight);
        height = inchesToCentimeters(height);
    }
    if (male) {
        return Number(((10 * weight) + (6.25 * height) - (5 * age) + 5).toFixed(2));
    }
    return  Number(((10 * weight) + (6.25 * height) - (5 * age) - 161).toFixed(2));
}

// Body Fat % 

export function bodyFatPct(bmi: number, age:number, male: boolean): number {
    if (male) {
        return Number(((1.20 * bmi) + (0.23 * age) - 16.2).toFixed(2));
    }
    return Number(((1.20 * bmi) + (0.23 * age) - 5.4).toFixed(2));
}

// Lean Body Mass Calculator

export function leanBodyMass(weight: number, height:number, male: boolean, imperial?: boolean): number {
    if (imperial) {
        weight = poundsToKilos(weight);
        height = inchesToCentimeters(height);
    }
    if (male) {
        return Number(((0.407 * weight ) + (0.267 * height) - 19.2).toFixed(2));
    }
    return  Number(((0.252 * weight ) + (0.473 * height) - 48.3).toFixed(2));
}

// Estimate Daily Carbs, Fat, Protein Needed

export function dailyMacros(calories: number, fat: number = .20, carbs: number = .55, protein: number = .25): Macros {
    const fCals = Number((calories * fat).toFixed(2));
    const fGrams = caloriesToGrams('f', fCals);

    const cCals = Number((calories * carbs).toFixed(2));
    const cGrams = caloriesToGrams('c', cCals);

    const pCals = Number((calories * protein).toFixed(2));
    const pGrams = caloriesToGrams('p', pCals);

    return { fCal: fCals, fGram: fGrams, cCal: cCals, cGram: cGrams, pCal: pCals, pGram: pGrams }
}
