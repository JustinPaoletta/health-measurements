# jp-healthmeasurements - Calculating Health Measurements Made Easy

Are you building a health/fitness application and don't feel like doing all the calculations for things like BMI, Body Fat Percentage, Daliy Calories Needed, and more?  

jp-healthmeasurements is compatible with both the metric and imperial measurement systems and allows you to calculate some of the most common health/fitness related measurements without having to do any of the Math yourself

### Health Calculations

- bodyMassIndex
- waistToHeightRatio
- caloriesNeeded
- bodyFatPct
- leanBodyFat
- dailyMacros

### Utility Functions for Converting Units

- cmToInches
- inchesToCentimeters
- poundsToKilos
- kilosToPounds
- caloriesToGrams

## Installation

> npm i jp-healthmeasurements

Import into project

> import { 
  > bodyMassIndex,
  > waistToHeightRatio,
  > caloriesNeeded,
  > bodyFatPct,
  > leanBodyMass,
  > dailyMacros,
> } from 'jp-healthmeasurements';

## How It Works

### bodyMassIndex

> bodyMassIndex(weight: number, height: number, imperial?: boolean): number

- weight is specified as kgs || lbs
- height is specified as cms || inches
- if using the metric system imperial is not needed or can be false
- if using the imperial system imperial must be true

Metric
> bodyMassIndex(83.9146, 165.1); returns 30.79

> bodyMassIndex(83.9146, 165.1, false); returns 30.79

Imperial
> bodyMassIndex(185, 65, true); returns 30.78

** Due to some approximations on the agreed upon formulas the results may vary between systems. The differences are statistically insignificant and can be ignored. ** 

### waistToHeightRatio

> waistToHeightRatio(waist: number, height: number, imperial?: boolean): number

- waist is specified as cms || inches
- height is specified as cms || inches
- if using the metric system imperial is not needed or can be false
- if using the imperial system imperial must be true

Metric
> waistToHeightRatio(91.44, 165.1); returns 55.38

Imperial
> waistToHeightRatio(36, 65, true); returns 55.38

### caloriesNeeded

> caloriesNeeded(weight: number, height: number, age:number, male: boolean, imperial?: boolean): number

- weight is specified as kgs || lbs
- height is specified as cms || inches
- age is specified in years
- male is a boolean: true or false depending on gender
- if using the metric system imperial is not needed or can be false
- if using the imperial system imperial must be true

Metric
> caloriesNeeded(83.9146, 165.1, 30, true); returns 1726.02

Imperial
> caloriesNeeded(185, 65, 30, true, true); returns 1725.88

### bodyFatPct

> bodyFatPct(bmi: number, age:number, male: boolean): number

- bmi is a number returned from the bodyMassIndex method above
- age is a number specified in years
- male is a boolean: true or false depending on gender

> bodyFatPct(30.78, age:30, male: true) returns 27.64

### leanBodyMass

> leanBodyMass(weight: number, height:number, male: boolean, imperial?: boolean): number

- weight is specified as kgs || lbs
- height is specified as cms || inches
- male is a boolean: true or false depending on gender
- if using the metric system imperial is not needed or can be false
- if using the imperial system imperial must be true

Metric
> leanBodyMass(83.9146, 165.1, true); returns 59.03

Imperial
> leanBodyMass(185, 65, true, true); returns 59.03

### dailyMacros

> dailyMacros(calories: number, fat: number = .20, carbs: number = .55, protein: number = .25): Macros

** Returns a 'Macros' object **

> Macros {
  >  fCal: number,
  >  fGram: number,
  >  cCal: number,
  >  cGram: number,
  >  pCal: number,
  >  pGram: number
>}

** Unless otherwise specified the macro values are predefined based on CDC recommendations **

- fat = 20%
- carbs = 55%
- protein = 25%

Calculate the calories parameter from the caloriesNeeded method above

> dailyMacros(1726.02) returns
>> { "fCal": 345.2, "fGram": 38.36, "cCal": 949.31, "cGram": 237.33, "pCal": 431.5, "pGram": 107.88 }

> dailyMacros(1726.02, .25, .45, .30) returns
>> { "fCal": 431.5, "fGram": 47.94, "cCal": 776.71, "cGram": 194.18, "pCal": 517.81, "pGram": 129.45 }

##### Project is free to use and improvements are welcome. Source code found at https://github.com/JustinPaoletta/health-measurements