#|
    EXERCISE 2.1
        Define a better version of make-rat that handles both
        positive and negative arguments. make-rat should normalize
        the sign so that if the rational number is positive, both
        the numerator and denominator are positive, and if the rational
        number is negative, only the numerator is negative. 

    ex.
        if the rational number 'one-half' is positive: 1/2
        if the rational number 'one-half' is negative: -1/2     

    notes:

    if numer and denom have same sign = positive
    if numer and denom have opposite signs = negative

    make a function make-neg that returns a negative number 
    when given a positive or negative number

    make a function negative-rat? that returns #t if numer and denom have opposite signs
    and returns #f if numer and denom have the same signs
|#

(define (make-neg num)
    (if (< num 0) num 
        (- num (* num 2))))

(define (negative-rat? n d)
        (cond 
            ((and (> n 0) (< d 0)) #t) 
            ((and (< n 0) (> d 0)) #t)
            (else #f)))

(define (make-rat n d) 
    (if (negative-rat? n d) (cons (make-neg n) (abs d))
        (cons (abs n) (abs d))))