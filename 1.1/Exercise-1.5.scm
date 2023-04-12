#|
    EXERCISE 1.5:
        Ben Bitdiddle has invented a test to determine whether the
        interpreter he is faced with is using applicative-order evaluation
        or normal-order evaluation. He defines the following two procedures:

            (define (p) (p))
            (define (test x y))
                (if (= x 0) 0 y)
            
        Then he evaluates the expression:
            (test 0 (p))

        What behavior will Ben observe with an interpreter that
        uses applicative order evaluation?

            He will obeserve that the test will evaluate to 0 like so:

                (test 0 (p))
                (if (= 0 0) 0 (p))
                (0)
        
        What behavior will he observe if the interpreter uses
        applicative-order evaluation?

            He will observe that the test will be stuck in an infinite loop
            as the value of the procedure (p) is a call to the procedure (p):

                (test 0 (p))
                (if (= 0 0) 0 (p))
                (if (= 0 0) 0 (p(p)))
                (if (= 0 0) 0 (p(p(p))))
                (if (= 0 0) 0 (p(p(p(p)))))
                ...

            Evaluating in this way the procedure (p) will never be reduced to a
            primitive value and will instead infinitely expand, never reducing. 
|#