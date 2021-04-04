interface Macros {
    fCal: number;
    fGram: number;
    cCal: number;
    cGram: number;
    pCal: number;
    pGram: number;
}
export declare function cmToInches(centimeters: number): number;
export declare function inchesToCentimeters(inches: number): number;
export declare function poundsToKilos(pounds: number): number;
export declare function kilosToPounds(kilos: number): number;
export declare function caloriesToGrams(type: string, calories: number): number;
export declare function bodyMassIndex(weight: number, height: number, imperial?: boolean): number;
export declare function waistToHeightRatio(waist: number, height: number, imperial?: boolean): number;
export declare function caloriesNeeded(weight: number, height: number, age: number, male: boolean, imperial?: boolean): number;
export declare function bodyFatPct(bmi: number, age: number, male: boolean): number;
export declare function leanBodyMass(weight: number, height: number, male: boolean, imperial?: boolean): number;
export declare function dailyMacros(calories: number, fat?: number, carbs?: number, protein?: number): Macros;
export {};
//# sourceMappingURL=index.d.ts.map