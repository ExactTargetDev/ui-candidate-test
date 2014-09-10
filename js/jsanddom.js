



     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
        var tmp = 0;
         for (var i = 0; i < values.length; i++) {
            if (tmp <= i ) {
                tmp = i;
            }
         }
         return tmp;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
        var outputArray =[];

        for( var i = 0; i < values.length; i++) {
            if (($.inArray(values[i], outputArray)) == -1) {
                outputArray.push(values[i]);
            }
        }
        return outputArray;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         var count = 1;
         while (count <= 100) {
             if ((count % 3 === 0 ) && (count % 5 == 0)){
                console.log('FizzBuzz');
             } else if (count % 3 == 0) {
                console.log('Fizz');
             } else if (count % 5 == 0) {
                console.log('Buzz');
             } else
             console.log(count);
             count++;
         }
         return true;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         for (var i=0; i < fruitsToRemove.length; i++) {
            for (var j=0; j < fruits.length; j++) {
                if (fruitsToRemove[i] == fruits[j]) {
                    fruits.splice(j,1);
                }
            }
         }
         return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if (toPush instanceof Array) {
            return array.push.apply(toPush);
         } else {
            return array.push(toPush);
         }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
        if (sourceStr === '') {
            return '';
        }
         return sourceStr.split(' ').join(', ');
    }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var sum = 0;
         for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
         }

         return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         var re = new RegExp('\\S');
         if (sourceStr.match(re)) {
            return false;
        } else {
            return true;
        }
     }


// See jsanddom-html-js for html examples