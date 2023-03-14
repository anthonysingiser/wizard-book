/*
    LINEAR RECURSION AND ITERATION
        -consider factorial function
            n! = n * (n-1) * (n-2)...
            3! = 3 * (3-1) * (3-2)
        -many ways to compute this problem:
        
        n! = n * (n-1)! 
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
        
        running product with a counter that counts from 1 to n
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
        
*/