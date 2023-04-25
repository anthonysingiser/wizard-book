#|
    EXERCISE 1.11
        
    A function f is defined by the rules:

        if n < 3 then f(n) = n
        if n >= 3 then f(n) = f(n -1) + 2f(n - 2) + 3f(n-3)

    Write a pricedure that computes f by means of a recursive process.
    Write a procedure that computes f by means of an iterative process. 
|#

(define (f n)
    (cond ((< n 3) n) 
    (else (+ (f(- n 1)) (* 2 (f(- n 2))) (* 3 (f(- n 3)))))))

(define (f-iterative n) 
    (cond ((< n 3) n)
    (else (f-iter 2 1 0 n))))

(define (f-iter a b c count)
    (cond ((< count 3) a)
    (else (f-iter (+ a (* 2 b) (* 3 c)) a b (- count 1)))))