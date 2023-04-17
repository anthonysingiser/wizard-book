#|
    EXERCISE 1.8
        Newton's method for cube roots is based on the fact that
        if y is an approximation to the cube root of x, then a better
        approximation is given by the value:

            (/ (+ (/ x (y*y)) (2 * y)) 3) 

        Use this formula to implement a cube-root procedure analagous to 
        the square-root procedure.
|#
    
(define (improve guess x)
    (/ (+ (/ x (square guess)) (* 2 guess)) 3))

(define (good-enough? improved-guess guess)
    (< (abs (- improved-guess guess)) .001))

(define (cbrt-iter guess x)
    (if (good-enough? (improve guess x)guess)
    (improve guess x)
    (cbrt-iter (improve guess x) x)))

(define (cbrt x)
    (cbrt-iter 1.0 x))