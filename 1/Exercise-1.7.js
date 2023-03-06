/*
    The is_good_enough test used in computing square roots will not be very effective
    for finding the square roots of very small numbers. Also, in real computers, 
    arithmetic operations are almost always performed with limited precision. This makes
    our test inadequate for very large numbers. Explain these statements, with examples
    showing how the test fails for small and large numbers.
*/

function abs(x){
    return x > 0
    ? x
    : x === 0
    ? 0
    : -x
}

function square(x) {
    return (x * x)
}

function average(guess, y){
    return (guess + y) / 2
}

function improve(guess, x) {
    return average(guess, x / guess)

}

function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess,x), x)
}

function sqrt(x) {
    return sqrt_iter(1,x)
}

console.log(sqrt(4))
/* 
    
*/