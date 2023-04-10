#|
   
   Observe that our model of evaluation allows for 
   combinations whose operators are compound expressions. 
   
   Use this observation to describe 
   the behavior of the following procedure:
   
   (define (a-plus-abs-b a b)
      ((if (> b 0) + -) a b)) 
    
    The procedure a-plus-abs-b takes two parameters, a and b. 
    If b is greater than 0 b is added to a, if b is less than 0 b is subtracted from a.

    Given (a-plus-b-abs-b 3 4):

        ((if (> 4 0) + -) 3 4)
        (+ 3 4)
        7

    Given (a-plus-abs-b 3 -2):

        ((if (> 3 -2) + -) 3 -2)
        (- 3 -2)
        5

    In this procedure the operators "+" and "-" are the consequent and alternative expressions,
    the predicate is (> b 0).
|#