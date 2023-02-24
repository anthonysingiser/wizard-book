/*
    Declare a function that takes three numbers as arguments 
    and returns the sum of the squares of the two larger numbers

    -take three arguments, each one of them a number
    -find the two larger numbers (filter out the smallest)
    -square the two larger numbers
    -return the sum of the squared numbers 
*/

function sumLargestSquares(a, b, c){
    return (
        a < b && a < c
        ? (b*b) + (c*c)
        : b < a && b < c
        ? (a*a) + (c*c)
        : (a*a) + (b*b)
    )
}


console.log(sumLargestSquares(2, 20, 10))

console.log(sumLargestSquares(8, 15, 6))

console.log(sumLargestSquares(5, 1, 19))