// To calculate for mean//

let numbers = (823, 7482, 54156, 516, 546, 98, 7491, 3541, 8423, 1561);

const totalValue = 10;

let totalSum = 823 + 7482 + 54156 + 516 + 546 + 98 + 7491 + 3541 + 8423 + 1561;

console.log(totalSum);

const average = totalSum / totalValue;

console.log(average);

// To calculate for the variance of each individual numbers//

let x = 823;

let y = ( x - average)**2;

console.log(y);

const vOne = totalSum * y / totalValue;

console.log(vOne);

// To calculate for Variance Two //

x = 7482;

y = ( x - average)**2;

console.log(y);

const vTwo = totalSum * y / totalValue;
console.log(vTwo);

// To calculate for the 3rd variance//


x = 54156;

y = ( x - average)**2;

console.log(y);

const vThree = totalSum * y / totalValue;
console.log(vThree);

// To the fourth Var. //

x = 516;

y = ( x - average)**2;

console.log(y);

const vFour = totalSum * y / totalValue;
console.log(vFour);

// To the Five Var. //

x = 546;

y = ( x - average)**2;

console.log(y);

const vFive = totalSum * y / totalValue;
console.log(vFive);

// To the sixth Var. //

x = 98;

y = ( x - average)**2;

console.log(y);

const vSix = totalSum * y / totalValue;
console.log(vSix);

// To the seventh Var.//

x = 7491;

y = ( x - average)**2;

console.log(y);

const vSeven = totalSum * y / totalValue;
console.log(vSeven);

// To the eighth Var.//

x = 3541;

y = ( x - average)**2;

console.log(y);

const vEight = totalSum * y / totalValue;
console.log(vEight);

// To the ninth Var.//

x = 8423;

y = ( x - average)**2;

console.log(y);

const vNine = totalSum * y / totalValue;
console.log(vNine);

// To the tenth Var.//

x = 1561;

y = ( x - average)**2;

console.log(y);

const vTen = totalSum * y / totalValue;
console.log(vTen);