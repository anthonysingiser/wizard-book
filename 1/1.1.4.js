/* 
-compound function given the name 'square'
-the function represents the operation of mulitiplying something by itself

*/
function square(x) {
    return x * x
}

console.log(square(21))

// square as a building block in defining other functions

square(x) + square(y)