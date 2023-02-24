/*
    translate the following expression into javascript:
        5 + 4 + (2 - (3 - (6 + 4/5 ))) / 3(6 - 2)(2 - 7)
*/

const expression = (5+4+(2-(3-(6+4/5)))) / (3*(6-2)*(2-7))

//first half of expression
console.log(5+4+(2-(3-(6+4/5))))

//second half of expression
console.log(3 * (6-2) * (2-7))

//evaluating division of first half by second half
console.log(14.8/-60)

console.log(expression)