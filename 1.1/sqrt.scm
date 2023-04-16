(define (average x y)
   (/ (+ x y) 2))

(define (improve guess x)
    (average guess (/ x guess)))

(define (good-enough? improved-guess guess)
    (< (abs (- improved-guess guess)) .001))

(define (sqrt-iter guess x)
    (if (good-enough? (improve guess x) guess) 
        (improve guess x)
        (sqrt-iter (improve guess x) x)))

(define (sqrt x)
    (sqrt-iter 1.0 x))

