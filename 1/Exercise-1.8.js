/*
    Newton's method for cube roots is based on the fact that if y is an
    approximation to the cube root of x, then a better approximation is
    given by the value:
        ((x / (y * y)) + 2y) / 3 

    Use this formula to implement a cube-root function
    analagous to the square-root function.
*/

function abs(x) {
    return x > 0
    ? x
    : x === 0
    ? 0
    : -x
}

function cube(x){
    return x * x * x
}

function improve(guess, x) {
    return ((x / (guess * guess)) + (2 * guess)) / 3
}

function is_good_enough(last_guess, improved_guess) {
    return abs(last_guess - improved_guess) < .001
}

function cbrt_iter(guess, x){
    const improved_guess = improve(guess, x)
    return is_good_enough(guess, improved_guess)
    ? guess
    : cbrt_iter(improved_guess, x)
}

function cbrt(x) {
    return cbrt_iter(1, x)
}

console.log(cbrt(262144))
console.log(cbrt(.00004))
console.log(cbrt(9000000000000))

/*
    Here is the analagous function for cube-roots. I applied the same method as the final method
    in the last exercise, as well as similar testing. The trickiest part was converting the formula
    with the correct order of parentheses. I had a little trouble moving too quickly in the beginning 
    of the exercise, took a break, went back with fresh eyes, applied some log statements and saw my 
    error in the set-up of the formula. Fortitudine Vincimus 
*/