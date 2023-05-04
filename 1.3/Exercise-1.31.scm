#|
    EXERCISE 1.31
    
    a.    The sum procedure is only the simplest of a 
        vast number of similar abstractions that can be
        captured as higher-order procedures. Write an 
        analagous procedure called product that returns
        the product of the values of a function at points
        over a given range. Show how to define factorial
        in terms of product. Also use product to compute
        approximations to pi using the formula:

    pi/4 = (/ (* 2 4 4 6 6 8 8 ...) (* 3 3 5 5 7 7 ...))

    b.     If your product procedure generates a recursive
        process, write one that generates an iterative process.
        If it generates an iterative process, write one that
        generates a recursive process.         
|#

; a.

(define (product term a next b)
    (if (> a b)
        1
        (* (term a)
           (product term (next a) next b))))

; factorial

(define (inc x) (+ x 1))

(define (factorial a)
    (define (id x) x) 
    (product id 1 inc a))

; approximations to pi
 
(define (even? x) (= (remainder x 2) 0))

(define (pi-approx a)
    (define (term x) 
        (if (even? x) 
            (/ (+ x 2) (+ x 1))
            (/ (+ x 1) (+ x 2))))
    (* (product term 1.0 inc a) 4))

; b.
; iterative product

(define (product-iter term a next b)
    (define (iter a result)
        (if (> a b)
            result
            (iter (next a) (* result (term a)))))
    (iter a 1))

(define (factorial-iter a)
    (define (id x) x)
    (product-iter id 1 inc a))