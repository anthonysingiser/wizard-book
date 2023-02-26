/*
    Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with
    is using applicative-order evaluation or normal-order evaluation. He declares the following
    two functions:
*/

    function p() {
        return p() 
    }

    function test (x,y) {
        return x === 0 ? 0 : y
    }

// Then he evaluates the statement:

    console.log(test (0,p()))

/* 
    What behavior will Ben observe with an interpreter that uses applicative-order evaluation?
      Using applicative-order evaluation Ben will observe that the interpreter will be stuck in an infinite loop. 

    What behavior will he observe with an interpreter that uses normal-order evaluation?
      Using normal-order evaluation Ben will observe that the test will return 0.

 Explain:
    Applicative-order evaluation will first evaluate the arguments (0,p()) and then apply the function test.
    When the argument p() is evaluated the interpreter will be stuck in a loop because p() is a 
    function call to the function p whose body returns a function call to itself.
    With normal-order evaluation the interpreter would first evaluate the test function itself. 
    The arguments x and y will be evaluated when they are reached in the body of the function test. 
    The conditional in the body of test effectively stops y from being evaluated unless the argument x is
    not equal to zero, or if p() was the argument for x. Given the arguments (0, p()) the argument y will 
    not be evaluated and instead the function test will return 0. 

*/