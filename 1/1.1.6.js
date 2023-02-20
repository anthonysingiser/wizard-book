
function abs(x) {
    return x >= 0 ? x:-x
}
/*
 "if x is greater than or equal to zero, return x; otherwise return -x"
 this statement is a case analysis and can be written using a conditional expression
 
 the formula for a conditional expression is:
   predicate ? consequent-expression : alternative-expression
*/

function abs2(x) {
    return x > 0
        ? x
        : x===0
        ? 0
        : -x    
}

/* - conditional-expression syntactic form is right-associative.
   - the interpreter ignores spaces and line breaks
    
   an example of the general form of a case analysis: 
        P1
        ? E1
        : P2
        ? E2
        ...
        :Pn
        ?En
        :final-alternative-expression
*/

console.log(abs(0))
console.log(abs2(-2))