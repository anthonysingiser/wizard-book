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
    : f_iter(n-1, n-2, n-3)
}

function f_iter(a, b, c){
    return a >= 3
    ? f_iter(a-1, b, c)
    : b >= 3
    ? f_iter(a, b-2, c)
    : c >= 3
    ? f_iter(a, b, c-3)
    : a + b*2 + c*3
}

console.log(f(4))
console.log(f2(4))