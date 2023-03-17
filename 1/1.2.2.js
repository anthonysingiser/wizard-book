/*
    TREE RECURSION  
        -consider computing the sequence of Fibonacci numbers
            0, 1, 1, 2, 3, 5, 8, 13, 21...

        as a function:

            function fib(n) {
                return n === 0
                ? 0
                : n === 1
                ? 1
                : fib(n-1) + fib(n-2)
            }
        

        - the shape of the process looks like a tree with each level splitting into
        two. This is because the function fib calls itself twice each time it is invoked.
        
        - in general the number of steps in a tree recursive process will be proportional
        to the number of nodes in the tree, while the space required will be proportional
        to the maximum depth of the tree.
        
        -we can also do this process iteratively:
        
        idea:
            
            a <-- a + b
            b <-- a

        function:
            
            function fib(n) {
                return fib_iter(1, 0, n)
            }
            function fib_iter(a, b, count) {
                return count === 0
                    ? b
                    : fib_iter(a + b, a, count - 1)
            }

        -the second process is linear in n. the first grows as fast as Fib(n) itself,
        having an enormous amount of steps even for small inputs.
        
        -this doesn't mean that tree recursion is useless however, even in these examples
        we can see that tree recursion is more straightforward than the iterative process 
        and it can help when designing and planning a program.

*/