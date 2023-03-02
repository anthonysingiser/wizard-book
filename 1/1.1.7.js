/*
    Example: Square Roots by Newton's Method

    -there is an important difference between mathematical functions 
    and computer functions
    -consider the problem of computing square roots

    we can define a square-root function as:
    the square root of x equals y such that y is greater than or equal to
    zero and y squared equals x.

    in pseudo:
    function sqrt(x) {
        return the y with y >= 0 &&  square(y) === x
    }

    -mathematical functions describe properties of things (declarative knowledge)
    -computer functions describe how to do something (imperative knowledge)  


*/

function abs (x){
    return x > 0
    ? x
    : x === 0
    ? 0
    : - x
}

function square (x) {
    return x * x
}

function average (guess, y){
    return (guess + y) / 2
}

function improve(guess, x) {
    return average(guess, x / guess)

}

function is_good_enough(guess, x) {
    return abs (square(guess) - x) < 0.001
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess,x), x)
}

function sqrt(x) {
    return sqrt_iter(1,x)
}

console.log(sqrt(9))

console.log(sqrt(100+37))

console.log(sqrt(sqrt(2) + sqrt(3)))

console.log(square(sqrt(1000)))

//    the sqrt_iter function shows how iteration can be acheived using only function calls