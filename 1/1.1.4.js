/* 
-compound function given the name 'square'
-the function represents the operation of 
'mulitiplying something by itself' */

function square(x) {
    return x * x
}

console.log("function square return: ", square(21))

/* example of square as a building block in 
defining other functions: square(x) + square(y)*/

/*  declare a function sum_of_squares that, given 
any two numbers as arguments, produces the sum of 
their squares. */

function sum_of_squares(x,y) {
    return square(x) + square(y) 
}
 
console.log("function sum_of_squares return: ", sum_of_squares(3,4))

// as a building block in further functions

function f(a){
    return sum_of_squares(a+1, a*2)
}

console.log('function f return:', f(5))

/* takeaway: 
-the argument expressions and the function expression are evaluated separately-
-the value of the function expression is then applied to the argument expressions-
-argument expressions can be primitive expressions, named expressions, compound expressions,
function applications expressions, etc. so long as they interpret to a value- */