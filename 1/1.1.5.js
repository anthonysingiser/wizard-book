/* The Substitution Model for Function Application

Assume the application of primitive functions is handled by the interpreter or libraries. 
For compound functions, the application process is:
    -apply compound function to arguments 
    -evaluate the return expression of the function
    -replace each parameter with the corresponding arguments
    
*/
//examples from 1.1.4
function square(x){
    return x * x
}
function sum_of_squares(x,y){
    return square(x) + square(y)
}
function f(a){
    return sum_of_squares(a+1,a*2)
}

//evaluate the application
    f(5)
//retrieve the return expression of f:
    sum_of_squares(a+1, a*2)
//replace the parameter a with the argument 5:
    sum_of_squares(5+1, 5*2)

/*the problem is now reduced to evaluating an application 
with two arguments and one function expression
    -evaluate the function expression
    -evaluate the arguments
*/

// 5+1=6  & 5*2=10 giving us 
    sum_of_squares(6, 10)
//evaluating sum_of_squares we get:
    square(6) + square(10)
//this reduces to 
    (6*6) + (10*10)
/*which reduces to 36 + 100 
which reduces to 136
this is the substitution model for function application

the substitution model for function application is the first of
a sequence of more elaborate models of how interpreters work presented in this book
*/