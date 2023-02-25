/* 
    Observe that our model of evaluation allows for applications
    whose function expressions are compound expressions. Use this
    observation to describe the behavior of a_plus_abs_b:
*/

    function plus(a,b) { 
        return a + b;
    }

    function minus(a,b) {
        return a - b;
    }

    function a_plus_abs_b(a,b) {
        return (b >= 0 ? plus : minus (a,b));
    }


/*
    -the function a_plus_abs_b takes two arguments, both numbers.
    -the expression starts with a conditional that evaluates to 
    the function expression plus if the value of the number b is greater
    than or equal to 0. 
    -It is the value of the function itself since the expression is not followed
    by arguments for the argument expression. 
    -If b is less than 0 the conditional expression evaluates to the function expression
    minus, taking the arguments of a and b, it then returns the value of a minus b.
*/
