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

function average(guess, x){
    console.log((guess+x) / 2)
    return (guess + x) / 2
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

//very large number test
//console.log(square(sqrt(90000000000000)))

//very small number test
console.log(square(sqrt(.00004)))

/* 
    To test I am using the function square to return the square of the result of the function sqrt. 
    I did this to see how close the result of the function sqrt is to the actual sqrt of the input. 
    I also placed a console.log statement in the function average in order to print out the improved guesses 
    as they iterated. 
    
    With very large numbers (in this case the number 90,000,000,000,000) we see through
    the logs that the sqrt_iter gets stuck on the number 9486832.980505139 as it's guess. It no longer improves
    the number through the process of the function and continues guessing this number until the call stack size 
    is exceeded.
    
    With very small numbers (in this case the number .00004) we see through the logs that once the guess reaches
    a point that it is under the threshold of .001 of a differnce it no longer iterates, whether or not the result
    is close to being correct.
    
*/