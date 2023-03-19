/*
    a function f is defined by the rules:
        
        if n < 3 then f(n) = n
        if n >= 3 then f(n) = f(n - 1)  + 2f(n - 2) + 3f(n - 3)

    write a JavaScript function that computes f by means of 
    a recursive process:   
*/
    function f(n) {
        return n < 3
        ? n
        : f(n - 1) + (2 * f(n - 2)) + (3 * f(n - 3))
    }

// write a function that computes f by means of an iterative process:
    
    function f2(n) {
        return 
         
    } 

    function f_iter() {
        return
    } 

    console.log(f2(40))