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
    return x * x
}

function is_good_enough (guess, x) {
    return abs(square(guess - x)) < 0.001
}

console.log(abs(square(.0003 - .0003)))
console.log(is_good_enough(.0003 - .0003))