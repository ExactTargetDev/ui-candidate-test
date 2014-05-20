     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }
    /**
     * @method reverseString
     * Purpose Write a function that takes a single argument (a string) and returns the string reversed.
     * @param {Object} str
     * @author Luc Martin
     * @version 1.0
     */
     function reverseString(str) {
         // init return string
         var ret = '';
         
         // Iterate through each letter of the string
         for(var n = 0; n < str.length; n++){
             // reverse
             ret += str[n];
         }
         return ret;
     }

     /**
      * @method findMinValue
      * Purpose Write a function that takes an array of numbers and returns the minimum value
      * @param {Object} values
      * @author Luc Martin
      * @version 1.0
      */
     function findMinValue(values) {
         
         // init return value
         var minValue = undefined;
         
         // iterate through the array
         for(var n = 0; n< values.length; n++){
             
             //single element
             var val = values[n];
             
             // test if the element is a valid Number
             if(typeof val === 'number'){
                 
                 // Evaluate if the init value is set
                 // Evaluate if the new value is smaller than the precedent values
                 // set the new value if true
                 minValue = (typeof minValue == 'undefined') ? val : (val < minValue) ? val : minValue;
             }

         }
         return minValue;
     }

     /**
      * @method findDistinctValues
      * Purpose Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
      * @param {Object} values
      * 
      * @author Luc Martin
      * @version 1.0
      */
     function findDistinctValues(values) {
         
         // init return array
         var ret = [];
        
        // Iterate through all values
         for(var n = 0; n< values.length; n++){
             
             // single value
             var val = values[n];
             
             // test if the new value is in the return array
             if(ret.indexOf(val) == -1 ){
                 
                 // debug
                 console.log('PUSHING VALUES '+val)
                 
                 // if test is positive push into the ret array
                 ret.push(val);
             }
         }
         
         // feedback to the console
         console.log(ret);
         
         // return for testing
         return ret;
     }
    
     /**
      * @method doFizzBuzz
      * Purpose Write a function that logs the numbers from 1 to 100 to the console.
      * For multiples of three print "Fizz" instead of the number.
      * For multiples of five print "Buzz".
      * For numbers which are multiples of both three and five print "FizzBuzz".
      * 
      * @author Luc Martin
      * @version 1.0
      */
     function doFizzBuzz() {
         
         // return string for tests
         var retAr = '';
         
         // iterate through numbers from 1 - 100
         for(var n = 1; n <= 100 ; n++ ){
             
             // new clean var for return
             var ret = '';
             
             // Modulus 3 is Fizz
             if(n % 3 == 0 ){
                 ret += 'Fizz';
             }
             
             // Modulus 5 is Buzz
             if(n % 5 == 0){
                 ret += 'Buzz';
             }
             
             // No modulus is the number itself
             if(ret == ''){
                 ret = n;
             }
             
             // set the return array
             retAr += ret;
             
             // feedback to console
             console.log(ret);

         }
         
         // feedback final product
         console.log(retAr);
         
         // return for testing
         return retAr
     }

     /**
      * @method removeFruits
      * Purpose You have a master array of strings, where each element is a fruit name.
      * You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
      * For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
      * Write the function that will remove the values contained in fruitsToRemove from the array fruits.
      * @param {Object} fruits
      * @param {Object} fruitsToRemove
      * 
      * @author Luc Martin
      * @version 1.0      
      */
     function removeFruits(fruits, fruitsToRemove) {
         
         // Iterate through array
         for(var n = 0; n < fruitsToRemove.length; n++){
             
             // single item to remove from the master
             var toRemove = fruitsToRemove[n];
             
             // test if the remove item is in the master and get the index
             var index = fruits.indexOf(toRemove)
             
             // test
             if( index !== -1){
                
                 // Splice the array from value
                 fruits.splice(index, 1);
             }
         }
         
         // return 
         return fruits;
     }

     /**
      * @method pushOntoArray
      * Purpose Write a function to push either a simple value or an array of values onto a specified array.
      * For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
      * If toPush is a simple value, it should be pushed onto array as an element.
      *If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
      *
      * @param {Object} array
      * @param {Object} toPush
      * 
      * @author Luc Martin
      * @version 1.0      
      */
     function pushOntoArray(array, toPush) {
         
        // debug
        console.log( toPush.length);
        
        // iterate through array
        for(var n = 0; n < toPush.length; n++){
            
            // single item
            var item = toPush[n];
            
            // feedback
            console.log("PUSHING TO ARRAY ",typeof item);
            
            // test if the item is an Object
            if(typeof item !== 'object'){
                
                // push if Item is a number
                array.push(item)
            
            // it's an Object, one more round
            //TODO use a recursion for that following job
            }else{
                // second iteration (assuming that there is only one level nested array  possible)
                for(var m = 0 ; m < item.length; m++){
                    
                    // push
                    array.push(item[m]);
                }
            }
        }
        return array;
     }

     /**
      * @method splitListStrUsingComma
      * @param String sourceStr
      * 
      * Purpose Given a string, sourceStr, write some code that will split this string using comma as your delimiter, 
      * and producing an empty array if the string is empty.
      * 
      * @author Luc Martin
      * @version 1.0
      */
     function splitListStrUsingComma(sourceStr) {
         console.log('spsplitListStrUsingComma ???????? ')
         // test if we get a string and if the string is not empty
         if(typeof sourceStr == 'undefined' || sourceStr.length == 0){
             // empty or undefined, return
             return [];
         }
         // Init the array
         var splitted = [];
         // split using coma
         splitted = sourceStr.split(',');
         
         // double check if we get a result
         if (splitted.length == 0){
             // if the array is empty, return empty array
             return [];
         }
         console.log('splitListStrUsingComma >>>>> ',splitted);
         // return splitted array
         return splitted;
     }

     /**
      * @method sum
      * Purpose: Write a function that will take any number of arguments and return their sum
      * 
      * @author Luc Martin
      * @version 1.0
      */
     function sum() {
         var total = 0;
         for(var n = 0; n<arguments.length; n++){
             var item = arguments[n];
             if(!isNaN(item)){
                 total += item;
             }
         }
         return total;
     }

      /**
      * @method isOnlyWhitespace
      * Purpose: Write a function that will return true if a specified string consists of only whitespace.
      * 
      * @author Luc Martin
      * @version 1.0
      */
     function isOnlyWhitespace(sourceStr) {
         
         var ret = (sourceStr.length == 0) ? false : (sourceStr.strip().length > 0) ? false : true;
         return ret;
     }
     
     /**
      * @Object cookieMonsterClosure -- self executing function w closure
      * Purpose write an example of a javascript closure
      * 
      * @author Luc Martin
      * @version 1.0
      */
     var cookieMonsterClosure = (function(){
         
         // closure
         var monster = [];
         
         function privateFeedTheMonster(cookie){
             monster.push(cookie);
             if(monster.length > 1){
                 console.log('Monster is a closure and it likes cookies')
             }
         }
         return {
             'feedTheMonster' : function(cookie){
                 privateFeedTheMonster(cookie);
             }
         }
     })()
     

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     
     var singlePerson = {
            'first name' : '',
            'last name' : '',
            'city' : '',
            'state' : '',
            'zip' : '',
            'phone' : {
               'home' : '', 
               'work' : '', 
               'mobile' : '' 
            }
     };
     var bunchOPeople = {
        'James T Kirk' : {
            'first name' : 'James',
            'last name' : 'Kirk',
            'city' : 'San Francisco',
            'state' : 'California',
            'zip' : '94507',
            'phone' : {
               'home' : '1 425 235 2488', 
               'work' : 'No phone in the Enterprise', 
               'mobile' : 'Use Telecommunicator please' 
            }
        },
        'Bruce Lee' : {
            'first name' : 'Bruce',
            'last name' : 'Lee',
            'city' : 'Oakland',
            'state' : 'California',
            'zip' : '94507',
            'phone' : {
               'home' : '1 425 235 0099', 
               'work' : '1 415 123 4567', 
               'mobile' : '1 415 123 4567' 
            }
        }
    };

     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
