#|

    EXERCISE 1.33

    You can obtain an even more general version of accumulate (Exercise 1.32) 
    by introducing the notion of a filter on the terms to be combined. 
    That is, combine only those terms derived from values in the range that 
    satisfy a specified condition. The resulting filtered-accumulate abstraction 
    takes the same arguments as accumulate, together with an additional predicate 
    of one argument that specifies the filter. 
    
    Write filtered-accumulate as a procedure. 
    Show how to express the following using filtered-accumulate:

    a. the sum of the squares of the prime numbers in the interval a to b 
    (assuming that you have a prime? predicate already written)
    
    b. the product of all the positive integers less than n that are relatively prime 
    to n (i.e., all positive integers i < n such that gcd(i, n) = 1).

|#


(define (filtered-accumulate combiner null-value term a next b filter)
    (if (> a b)
        null-value
        (if (filter a)
            (combiner (term a)
                      (filtered-accumulate combiner null-value term (next a) next b filter))
            (filtered-accumulate combiner null-value term (next a) next b filter))))

(define (inc a) (+ a 1))

(define (id a) a)

;a. assume a procedure prime?

(define (sum-square-primes a b)
    (filtered-accumulate + 0 square a inc b prime?))

;b. assume a procedure gcd
(define (product-relprime a)
    (define (relprime? b)
        (= 1 (gcd b a)))
    (filtered-accumulate * 1 id 1 inc (- n 1) relprime?))
