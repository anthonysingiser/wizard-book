#|
    EXERCISE 1.6:
        Alyssa P. Hacker doesn’t see why if needs to be provided as a special form. 
        “Why can’t I just define it as an ordinary procedure in terms of cond?” she asks. 
        Alyssa’s friend Eva Lu Ator claims this can indeed be done, and she defines 
        a new version of if:

            (define (new-if predicate then-clause else-clause)
                (cond (predicate then-clause)
                    (else else-clause)))
        
        Eva demonstrates the program for Alyssa:
            
            (new-if (= 2 3) 0 5)
            5
            (new-if (= 1 1) 0 5)
            0
        
        Delighted, Alyssa uses new-if to rewrite the square-root program:

            (define (sqrt-iter guess x)
                (new-if (good-enough? guess x)
                guess
                (sqrt-iter (improve guess x) x)))

        What happens when Alyssa attempts to use this to compute
        square roots? Explain.

            (sqrt x)

            (sqrt-iter guess x)

            (new-if 
                (good-enough? guess x) 
                (guess) 
                (sqrt-iter (improve guess x) x))
            
            (new-if
                (< (abs (- (square guess) x)) 0.001)
                (guess)
                (new-if 
                    (good-enough? (improve guess x) x) (guess) (x))
                    (guess)
                    (sqrt-iter (improve guess x) x))

            (new-if
                (< (abs (- (square guess) x)) 0.001)
                (guess)
                (new-if
                    (< (abs (- (square guess) x)) 0.001)
                    (guess)
                    (new-if
                        (good-enough? (improve guess) x)) 0.001)
                        (guess)
                        (sqrt-iter (improve guess x) x))

                    ...
            
        The program will be stuck in an infinite loop. Using the substitution model we evaluate the operators and the operands
        first. As we replace the operands with their values we find that there is no end to the operand (sqrt-iter (improve guess x) x)
        in the initial (new-if ). It continues to evaluate to another instance of the function (new-if ) with no end in sight.     

        The program never reaches the (cond ) or the (else ) statement in the function (new-if ) because it evaulates everything in the function,
        whereas the special form of if guarantees that only one of the resulting expressions is evaluated.
|#