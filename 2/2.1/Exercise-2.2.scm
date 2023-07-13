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
            add 
|#

(define (make-segment point-a point-b) (cons point-a point-b))

(define (start-segment point) (car point))
(define (end-segment point) (cdr point))

(define (make-point x y) (cons x y))

(define (x-point x) (car x))
(define (y-point x) (cdr x))

(define (mid-point-segment line-segment)
    (let (mid-x (/ 2 (+ (x-point (start-segment line-segment)) (x-point (end-segment line-segment)))))
         (mid-y (/ 2 (+ (y-point (start-segment line-segment)) (y-point (end-segment line-segment)))))
    (cons mid-x mid-y)))
