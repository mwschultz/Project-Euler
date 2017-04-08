var anArray = []; //declare the Array outside of the function

  var numberchecker = function() {
  for (i=998001;i>0;i--) {
  var nm = i.toString();
  var numberArray = nm.split("");
  var numberArrayReverse = numberArray.reverse();
  var reversedNumber = numberArrayReverse.join("");

    if (reversedNumber === nm) {//Check -- is the number a palindrome?
      for (j=100; j<1000; j++) {//Now, we know it needs to be a three digit number.
        //thus, we START with 100 (because one of the divisors needs to be at least 100), and
        //work up to the largest 3 digit number, 999.
        if (i % j === 0 && (i/j) <1000) {anArray.push(i);} //within the function, push to the Array
      }//ONLY if j (our divisor) goes evenly into I AND (i/j) < 1000, then we can say that both
      //j and (i/j) are three digit numbers.
        }
      }
    var max = Math.max(...anArray); //within the function, we take the max of the array. 
    return max;

  }
numberchecker();



//Once you've checked if the number is a PALINDROME, you have to check if it is divisbly, evenly, by
//a three digit number, starting at 100 (IF STATEMENT), and then check to see if the RESULT is a three digit
//number.
