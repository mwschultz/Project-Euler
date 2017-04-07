////If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//Project Euler: Problem 1

var summer = function() {
  var counter = 0;
  var i = 0;
  var userInt = parseInt(document.getElementById('inputValue').value);
    while(i<userInt) {

        if (i%3 === 0 || i%5 ===0)

            {counter+=i}

          i+=1;
        }
  /*return counter;*/
document.getElementById('displayOne').value = counter;
};
