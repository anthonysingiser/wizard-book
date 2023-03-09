/*
    Newton's method for cube roots is based on the fact that if y is an
    approximation to the cube root of x, then a better approximation is
    given by the value:
        (x / ((y * y) + 2y)) / 3 
*/

function abs(x) {
    return x > 0
    ? x
    : x === 0
    ? 0
    : -x
}

function dividend(guess, x) {
    return (x / ((guess * guess) + (2 * guess)))
}
function improve(guess, x) {
    return dividend(guess, x) / 3
}

function is_good_enough(last_guess, improved_guess){
    console.log(last_guess, improved_guess)
    return ((abs(last_guess - improved_guess) / last_guess) * 100) < 5
}

function cbrt_iter(guess, x){
    const improved_guess = improve(guess, x)
    return is_good_enough(guess, improved_guess)
    ? improved_guess
    : cbrt_iter(improved_guess, x)
}

function cbrt(x) {
    return cbrt_iter(x, 1)
}

console.log(cbrt(64))