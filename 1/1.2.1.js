/*
    LINEAR RECURSION AND ITERATION
        -consider factorial function
            n! = n * (n-1) * (n-2)...
            3! = 3 * (3-1) * (3-2)
        -many ways to compute this problem:
        
        ex 1. n! = n * (n-1)! 
        function:
            
            function factorial(n){
                return n === 1
                    ? 1
                    : n * factorial(n-1)
            }
            
        shape:

            factorial(6)
            6 * factorial(5)
            6 * (5 * factorial(4))
            6 * (5 * (4 * factorial(3)))
            6 * (5 * (4 * (3 * factorial(2))
            6 * (5 * (4 * (3 * (2 * factorial(1)))))
            6 * (5 * (4 * (3 * (2 * 1))))
            6 * (5 * (4 * (3 * 2)))
            6 * (5 * (4 * 6))
            6 * (5 * 24)
            6 * (120)
            720
        
        ex. 2 running product with a counter that counts from 1 to n
        function:
            
            function factorial(n) {
                return fact_iter(1,1,n)
            }

            function fact_iter(product, counter, max_count){
                return counter > max_count
                    ? product
                    :fact_iter(counter * product,
                                    counter + 1,
                                    max_count)
            }
        
            shape:
            
            factorial(6)
            fact_iter(1, 1, 6)
            fact_iter(1, 2, 6)
            fact_iter(2, 3, 6)
            fact_iter(6, 4, 6)
            fact_iter(24, 5, 6)
            fact_iter(120, 6, 6)
            fact_iter(720, 7, 6)
        
        -both processes:
            *compute the same mathematical function
            *require a number of steps propotional to n to compute n!
            *perform the same sequence of multiplications
        
        -evaluating the 'shapes' of the process it is seen that  
        they evolve differently
        
        example 1
            *the shape of the first example shows us expansion followed by 
            contraction.
            *the process of expansion builds a chain of 'deferred operations', 
            the contraction occurs as the operations are performed.
            *this process is called a 'recursive process'
            *the length of operations in the chain is proportional to n,
            this type of process is a 'linear recursive process'
        
        example 2
            *does not grow or shrink, shape of the process is a straight line
            *fixed number of 'state variables' and a fixed rule describing 
            how the variables should be updated from state to state and an
            optional end test
            *this is an 'iterative process'
            *the number of steps for this process grows in proportion to n,
            this is a 'linear iterative process'

        

        


*/