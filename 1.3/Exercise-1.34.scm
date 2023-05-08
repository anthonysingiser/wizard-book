#|
    EXERCISE 1.34
        
    Suppose we define the procedure:
        (define (f g) (g 2))
        
    Then we have:

        (f square) ; = 4
        (f (lambda (z) (* z (+ z 1)))) ; = 6


    What happens if we (perversely) ask the interpreter to 
    evaluate the combination (f f)? Explain.

    using the substitution model:

        (f f)

        (f 2) 

        (2 2)
    
    the interpreter gives the error "the object 2 is not applicable"

    The operand f evaluates to 2, and so does the operator f.
    2 is not a procedure that can operate on 2 and the interpreter returns the error. 
|#