/* The Substitution Model for Function Application

Assume the application of primitive functions is handled by the interpreter or libraries. 
For compound functions, the application process is:
    -apply compound function to arguments 
    -evaluate the return expression of the function
    -replace each parameter with the corresponding arguments
    
*/

//evaluate the application
    f(5)
//retrieve the return expression of f:
    sum_of_squares(a+1, a*2)
//replace the parameter a with the argument 5:
    sum_of_squares(5+1, 5*2)
