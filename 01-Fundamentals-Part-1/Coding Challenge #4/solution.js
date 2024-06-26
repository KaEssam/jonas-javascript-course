
const bill = 275;

const tip = (bill >= 50 && bill <=300)? bill*.15 :bill*.2 ;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`)

