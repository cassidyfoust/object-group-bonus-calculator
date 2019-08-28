const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
let qualityBonus = 0;
let seniorityBonus = 0; 
let incomeBonusAdjustment = 0;
let totalBonusSum = 0;
let finalBonus = 0;
let totalCompensationDollars = 0;

function individualBonusCalc( employees ){
  for (let i = 0; i < employees.length; i++){
    let employeeNumberlength = employees[i].employeeNumber;
      if( employeeNumberlength.length === 4 ){
        seniorityBonus = .05;
    } else{
        seniorityBonus = 0;
    } // end seniorityBonus calculation
    if( employees[i].reviewRating <= 2  ){
      qualityBonus = 0;
  } else if( employees[i].reviewRating == 3  ){
    qualityBonus = .04;
  } else if( employees[i].reviewRating == 4  ){
    qualityBonus = .06;
  } else if( employees[i].reviewRating == 5  ){
    qualityBonus = .10;
    } 
    // end qualityBonus calculation
  if( parseInt(employees[i].annualSalary) > 65000 ){
    incomeBonusAdjustment = -.01;
  } else {
    incomeBonusAdjustment = 0;
    }
    // end incomeBonusAdjustment calculation
  totalBonusSum = qualityBonus + seniorityBonus + incomeBonusAdjustment;
  if (totalBonusSum > .13){
    totalBonusSum = .13;
  }
  else if (totalBonusSum < 0){
    totalBonusSum = 0;
  }
  else {
   }
  // end totalBonusSum bookending
  finalBonus = employees[i].annualSalary * totalBonusSum;
  totalCompensationDollars = parseInt(employees[i].annualSalary) + finalBonus;

  // here there be monsters - attempting to make a new object
  console.log ({
    name: employees[i].name,
    bonusPercentage: totalBonusSum,
    totalCompensation: totalCompensationDollars,
    totalBonus: Math.round(finalBonus)
  })
}
}

individualBonusCalc(employees);