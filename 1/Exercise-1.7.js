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



//very large number test
//  console.log(square(sqrt(90000000000000)))

//very small number test
//  console.log(square(sqrt(.00004)))

/* 
    To test I am using the function square to return the square of the result of the function sqrt. 
    I did this to see how close the result of the function sqrt is to the actual square root of the input. 
    I also placed a console.log statement in the function average in order to print out the improved guesses 
    as they iterated. 
    
    With very large numbers (in this case the number 90,000,000,000,000) we see through
    the logs that the sqrt_iter gets stuck on the number 9486832.980505139 as it's guess. It no longer 
    improves the number through the process of the function, nor does it pass the good_enough test as 
    designed and it continues guessing this number until the call stack size is exceeded.
    
    With very small numbers (in this case the number .00004) we see through the logs that once the guess reaches
    a point that it is under the threshold of .001 of a differnce it no longer iterates, whether or not the result
    is close to being correct.

    -An alternative strategy for implementing is_good_enough is to watch how 'guess' changes
    from one iteration to the next and to stop when the change is a very small fraction of the 
    guess. Design a square-root function that uses this kind of end test. Does this work better 
    for small and large numbers?
    
*/

function is_good_enough_guess_difference(last_guess, improved_guess){
    return (abs(last_guess - improved_guess)) < .001  
}

function sqrt_iter2(guess, x) {
    const improved_guess = improve(guess, x) 
    return is_good_enough_guess_difference(guess, improved_guess)
    ? improved_guess    
    : sqrt_iter2(improved_guess, x)
}

function sqrt(x) {
    return sqrt_iter2(1,x)
}

console.log(sqrt(.00004), ".00004")
console.log(sqrt(90000000000000), "9000000000000")
console.log(sqrt(16), "16")

/*
    
    In the function good_enough_guess_difference I apply the function abs to the difference between 
    the last guess and the improved guess. If that difference is less than .001 it is seen as good 
    enough and will return true. 
    
    I also had to make changes to the function sqrt_iter. In the function sqrt_iter2 I give 
    the return of the function improve to the function is_good_enough_guess_difference, as well as have 
    it as the return if it is good enough. I did this so the function is_good_enough_guess_difference would 
    have access to the last guess and the improved guess so that it could work as intended. This makes it
    so we are truly testing the improved_guess each iteration, and so I now return improved_guess if
    the function is_good_enough_guess_difference returns true. Returning 'guess' in this case would return what I
    was testing against and not what I was testing. I also added a const statement for improved_guess to 
    cleanup the function and have the function processed only one time per iteration.    

    This method works better for very small and very large numbers. It also still functions
    correctly for regular sized numbers. The iterations no longer get stuck on a guess with no
    improvement, as was the case with very large numbers, nor do they stop guessing before they 
    are even close to a good guess, as was the case with very small numbers. 

*/