function calculateBMI(mass, height) {
  return mass / (height ** 2);
}

// Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

let markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Data 1 - Mark has a higher BMI:", markHigherBMI1);

// Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Data 2 - Mark has a higher BMI:", markHigherBMI2);
