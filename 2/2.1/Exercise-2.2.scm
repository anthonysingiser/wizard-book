#|
    EXERCISE 2.2: 
            
        Consider the problem of representing line segments in a plane. 
        
        Each segment is represented as a pair of points: 
        a starting point and an ending point. 
        
        Define a constructor make-segment and selectors start-segment and
        end-segment that define the representation of segments in
        terms of points. 
        
        Furthermore, a point can be represented
        as a pair of numbers: the x coordinate and the y coordinate. 
        
        Accordingly, specify a constructor make-point and selectors x-point 
        and y-point that define this representation. 
        
        Finally, using your selectors and constructors, define a procedure 
        midpoint-segment that takes a line segment as argument and returns its 
        midpoint (the point whose coordinates are the average of the coordinates of the endpoints).
        
        To try your procedures, you will need a way to print points:
            
            (define (print-point p)
                (newline)
                (display "(")
                (display (x-point p))
                (display ",")
                (display (y-point p))
                (display ")"))

    constructor: make-segment 
    selectors: start-segment, end-segment

    constructor: make-point
    selectors: x-point, y-point

    midpoint-segment, takes a line segment and returns the midpoint of that line segment

        make-segment will take two numbers, start-point and end-point, 
        and output a pair of those two numbers: (make-segment x y)

        start-segment will take a segment and output the start point, 
        the (car ) of that segment
        
        end-segment will take a segment and output the end point, 
        the (cdr ) of that segment

        mid-point-segment takes a line-segment and returns a midpoint.
            add x-1 and x-2, divide by 2
            add y-1 and y-2, divide by 2
|#

;; a segment is a pair of pairs 
(define (make-segment a-point b-point) (cons a-point b-point))

(define (start-segment start-point) (car start-point))
(define (end-segment end-point) (cdr end-point))

;; a point is a pair of x-point and y-point
(define (make-point x y) (cons x y))

(define (x-point x) (car x))
(define (y-point x) (cdr x))

(define (print-point p)
                (newline)
                (display "(")
                (display (x-point p))
                (display ",")
                (display (y-point p))
                (display ")"))

;; average of 2 numbers, for averaging x-one and x-two, y-one and y-two
(define (avg a b) (/ (+ a b) 2))

;; a procedure midpoint-segment that takes a segment and returns a point
;; between the start-segment and the end-segment 

(define (midpoint-segment segment)
    (let ((x-one (x-point (start-segment segment)))
         (x-two (x-point (end-segment segment)))
         (y-one (y-point (start-segment segment)))
         (y-two (y-point (end-segment segment))))
    (cons (avg x-one x-two) (avg y-one y-two))))