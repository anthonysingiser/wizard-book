/*
    a function f is defined by the rules:
        
        if n < 3 then f(n) = n
        if n >= 3 then f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3)

    write a JavaScript function that computes f by means of 
    a recursive process:   
*/

function f(n) {
    return n < 3
    ? n
    : f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3)
}

// write a function that computes f by means of an iterative process:

function f2(n){
    return n < 3
    ? n
    : f_iter(2, 1, 0, n)
}

function f_iter(a, b, c, count){
    return count < 3
    ? a
    : f_iter(a + (2*b) + (3*c), a, b, count - 1)
}

console.log(f(5))
console.log(f2(5))