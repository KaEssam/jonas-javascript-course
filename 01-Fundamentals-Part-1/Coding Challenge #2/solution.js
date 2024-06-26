

let markMass = 78;
let markHeight= 1.69;
let johnMass = 92;
let johnHeight= 1.95;

let MarkBMI = markMass / markHeight**2;
let johnBMI = johnMass / johnHeight**2;

console.log(MarkBMI,johnBMI);

function comperBMI (fristBMI, secondBMI){
  if(fristBMI > secondBMI){
      console.log(`Mark's BMI ${MarkBMI} is higher than John's ${johnBMI}!`)
  }else{
      console.log(`John's BMI ${johnBMI} is higher than Mark's ${MarkBMI}!`)
  }
}

comperBMI (MarkBMI, johnBMI);

