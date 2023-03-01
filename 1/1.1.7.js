/*
    Example: Square Roots by Newton's Method

    -there is an important difference between mathematical functions 
    and computer functions
    -consider the problem of computing square roots

    we can define a square-root functio as:
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

function average (x, y){
    return (x + y) / 2
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

console.log(sqrt(9)

)