#|
    EXERCISE 1.7
        The good-enough? test used in computing square roots
        will not be very effective for finding the square roots of 
        very small numbers. Also, in real computers, arithmetic 
        operations are almost always performed with limited precision.
        This makes our test inadequate for very large numbers.
        
        Explain these statements, with examples showing 
        how the test fails for small and large numbers:

            For very small numbers the difference of .001 will not be small enough 
            to yield a result that is close to the right answer. 

            given (sqrt .0001) the program outputs .03230844833048122
            checking this output by squaring it we get .00104...
            
            For very large numbers the program gets stuck in a loop. The guess does
            not change, nor does it pass the good-enough? test.

            given (sqrt 9000000000000) there is no result or progress toward a result.
        
        An alternative strategy for implementing good-enough? is to watch how 
        guess changes from one iteration to the next and to stop when the change 
        is a very small fraction of the guess. 
        
        Design a square-root procedure that uses this kind of end test:

            (define (good-enough? improved-guess guess)
                (< (abs (- improved-guess guess)) .001))

            (define (sqrt-iter guess x)
                (if (good-enough? (improve guess x) guess) 
                    (improve guess x)
                    (sqrt-iter (improve guess x) x)))
                    
|#