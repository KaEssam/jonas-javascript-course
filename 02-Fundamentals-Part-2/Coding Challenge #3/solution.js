const Mark ={
    fristName: 'Mark',
    lastName:'Miller',
    mass:78,
    height:1.69,
    
    calcBMI: function(){
        this.bmi = this.mass / (this.height**2);
        return this.bmi;
    }
};

const John = {
    fristName: 'John',
    lastName:'Smith',
    mass:92,
    height:1.95,
    
    calcBMI: function(){
        this.bmi = this.mass / (this.height**2);
        return this.bmi;
    }
};

Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi, John.bmi);
console.log(Mark.bmi);



if(Mark.bmi > John.bmi){
    console.log(`${Mark.fristName}'s BMI ${Mark.bmi} is higher than ${John.fristName}'s ${John.bmi}!`)
}else{
    console.log(`${John.fristName}'s BMI ${John.bmi} is higher than ${Mark.fristName}'s ${Mark.bmi}!`)
}
