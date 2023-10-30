// To calculate for mean//

let numbers = (823, 7482, 54156, 516, 546, 98, 7491, 3541, 8423, 1561);

const totalValue = 10;

let totalSum = 823 + 7482 + 54156 + 516 + 546 + 98 + 7491 + 3541 + 8423 + 1561;

const average = totalSum / totalValue;

console.log(average);

// To calculate for the variance of each individual numbers//

let x = 823;

let y = ( x - average)**2;


// To calculate for Variance Two //

let a = 7482;

let b = ( a - average)**2;

// To calculate for the 3rd variance//

let c  = 54156;

let d  = ( c - average)**2;

// To the fourth Var. //

let e = 516;

let f = ( e - average)**2;


// To the Five Var. //

let g = 546;

let h  = ( g - average)**2;

// To the sixth Var. //

let i = 98;

let j = ( i - average)**2;

// To the seventh Var.//

let k = 7491;

let l = ( k  - average)**2;

// To the eighth Var.//

let m  = 3541;

let n  = ( m- average)**2;

// To the ninth Var.//

let o = 8423;

let p  = ( o - average)**2;

// To the tenth Var.//

let q  = 1561;

let r = ( q - average)**2;

// To calculate for the variance of the given values//

const sumV = (y + b + d + f + h + j + l + n + p + r);

const variance = sumV / totalValue;

console.log(variance);


