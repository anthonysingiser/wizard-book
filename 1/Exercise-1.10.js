/*
    The following function computes a mathematical 
    function called Ackermann's function:

        function A (x,y) {
            return y === 0
                ? 0
                : x === 0
                ? 2 * y
                : y === 1
                ? 2
                : A(x-1, A(x, y-1))
        }

    What are the values of the following statements?
    
        A(1, 10)

            answer: 1024

        A(2, 4)

            answer: 65,536

        A(3, 3)

            answer: 65,536
    
    Consider the following functions, where A is the function declared above:

        fucntion f(n) {
            return A(0, n)
        }

        function g(n) {
            return A(1,n)
        }
   
        function  h(n) {
            return A(2, n)
        }

        function k(n){
            return 5 * n * n
        }
    
    Give concise mathematical definitions for the functions computed by the
    functions f, g, and h for positive integer values of n. For example,
    k(n) computes 5(n*n):

        f(n):

            answer: 2 * n
        
        g(n)

            answer: A(1 - 1, A(1, n - 1))

        h(n):

            answer: A(2 - 1, A(2, n - 1))
            
*/

