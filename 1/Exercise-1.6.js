/*
    Alyssa P. Hacker doesn't like the syntax of conditional expressions,
    involving the characters ? and :. "Why can't I just declare an ordinary
    conditional function whose application works just like conditional expressions?"
    she asks. Alyssa's friend Eva Lu Ator claims this can indeed be done, and she
    declares a conditional function as follows:
*/    

function conditional(predicate, then_clause, else_clause){
    return predicate 
    ? then_clause
    : else_clause
}

console.log(conditional(2 === 3, 0, 5))
console.log(conditional(1 === 1, 0, 5))

/* 
    Alyssa then uses the conditional function to rewrite the square-root program:

    function sqrt_iter(guess, x) {
        return conditional(is_good_enough(guess, x), guess, sqrt_iter(improve(guess, x), x))
    }

    What happens when Alyssa attempts to use this to compute square roots?
    Explain.

    The program will be stuck in an infinite loop. 
    Javascript uses applicative order evaluation, which means the function arguments
    will be evaluated first before the function conditional is applied. The argument
    that will start the loop is sqrt_iter. When evaluated it will call itself and 
    this cycle will not stop.
    
*/