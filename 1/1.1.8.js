/*
    BLACK-BOX ABSTRACTION
        -the function sqrt is our first example of a process that is defined by a set of 
        mutually defined functions.
        -the entire sqrt program is a cluster of functions that mirror the decomposition
        of the problem into subproblems.
        -it is crucial that each function accomplishes an identifiable task that can be used as
        a module in defining other functions.
        -example: when the function is_good_enough is defined in terms of square we can regard
        the function square as a "black box".
        **it does not matter how the function computes the result, it only matters that it does compute 
        the result.**

all of the following should be treated the same at this level of abstraction:

function square(x){
    return x * x
}

function square(x) {
    return math_exp(double(math_log(x)))
}

function double(x) {
    return x + x
}
*/

/*
    LOCAL NAMES
        -the meaning of a function is independent of the parameter names
        used by its author.
        -the name of a function parameter is called a 'bound name', the function declaration 'binds' its parameters
        -if a name is not 'bound' it is 'free'
        -a set of statements in which a binding declares a name is called the 'scope' of that name.
        -in a function declaration, the parameters with bound names have the body of that function as their scope.

    INTERNAL DECLARATIONS AND BLOCK STRUCTURE
        -problems of the same local names increase on large projects with many developers
        -nesting declarations, block structure, is the right solution to the simplest name packaging problem.
        -allowing a parameter to be a free name in the internal declarations simplifies the auxillary functions.
        -the parameter gets its value from the argument of the enclosing function, this is called 'lexical scoping'
*/