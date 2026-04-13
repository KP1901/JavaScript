function sum(n) {
  if (n === 0) return 0;

  return n + sum(n - 1);
}

console.log(sum(5));

/*
    sum(5)

    n == 0  false

   = 5 + sum(4)
   = 5 + 4 + sum(3)
   = 5 + 4 + 3 + sum(2)
   = 5 + 4 + 3 + 2 + sum(1)
   = 5 + 4 + 3 + 2 + 1 + sum(0)  
   = 5 + 4 + 3 + 2 + 1 + undefined

   = 5 + (4 + (3 + (2 + (1 + 0))))

  = fun(1) + 2 + fn(1)
  = 0 + 2 + 0

 */

function fun(n) {
  if (n === 0) return 0;

  return fun(n - 1) + n + fun(n - 1);
}

console.log(fun(2));

/*
       fun(2) = fun(1) + 2 + fun(1)
        
        then
        =fun(1)
        = fun(0) + 1 + fun(0)
        = 0 + 1 + 0
        = 1
    
        then back to fun(2)
        = 1 + 2 + fun(1)

        then fun(1)
        = fun(1) + 2 + fun(1)sss
        = 1+ 2+ 1
        =4
    */

function test(n) {
  if (n === 0) return;

  test(n - 1);
  console.log(n);
  test(n - 1);
}   

test(2);

/*
        test(2)
        
        n =2 

        n == 0 false

        tes(2-1) = test(1)

        again called

        n = 1

        n == 0 false

        test(1-1) = test(0)

        again called

        n = 0 

        n== 0 true

        retrun to test(1) which we dont have consolge / to print
        
        */
