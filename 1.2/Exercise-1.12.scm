#|
    EXERCISE 1.12
        The following pattern of numbers is called Pascal's Triangle.

          1
        1   1
      1   2   1
    1   3   3   1
  1   4   6   4   1
         ...

    The numbers at the edge of the triangle are all 1, and each
    number inside the triangle is the sum of the two numbers above it.
    Write a procedure that computes elements of Pascal's triangle by means
    of a recursive process: 

        each element can be given a coordinate described by the number of the row and the 
        number of the element's position on that row. : (row, pos).

        (row 0 pos 0)
        (row 1 pos 0) (row 1 pos 1) 
        (row 2 pos 0) (row 2 pos 1) (row 2 pos 2)
        (row 3 pos 0) (row 3 pos 1) (row 3 pos 2) (row 3 pos 3)
        (row 4 pos 0) (row 4 pos 2) (row 4 pos 2) (row 4 pos 3) (row 4 pos 4)

        some thoughts:
            -if pos is equal to 0 or equal to the row than it should return 1
            -if pos is greater than row than it is not a coordinate on the triangle and 
            should return an error
            -the value of an element not at the start or end of a row is equal to the sum
            of the same pos on the previous row + the element to the left of that element. 
        
                ex. (row 3 pos 1) = (row 2 pos 0) + (row 2 pos 1)
|#

(define (pascal row pos)
  (cond ((or (< row 0) (> pos row)) "not a valid coordinate")
        ((or (= pos 0) (= pos row)) 1)
        (else (+ (pascal (- row 1) (- pos 1)) (pascal (- row 1) pos)))
  )
)