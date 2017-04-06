////If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//Project Euler: Problem 1

var counter = 0;
var i = 0;
var userNumber = prompt("Enter a number!");
var userInt = parseInt(userNumber);

var summer = function(userInt) {

  while(i<userNumber) {

      if (i%3 === 0 || i%5 ===0)

          {counter+=i}

        i+=1;
      }
return counter;
};

summer();
