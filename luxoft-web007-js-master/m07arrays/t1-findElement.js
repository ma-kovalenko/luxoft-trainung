/* найти елемент в массиве */

(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 20);

    printArray(numbers);

    // TODO test it here
    
    console.log(findElement(numbers, 99));

    // returns:
    //
    //     el if exists
    //    -1 if not
    
    function findElement(arr, el)
    {
        for (var i = 0; i < arr.length; i++) {
           if (arr[i] == el) {
               return i;
           } 
        }
        return -1;
    }

    function fillArrayWithRndNumbers(arr, count) {
        for (var i = 0; i < count; i++) {
           arr.push(getRndNumber()); 
        }
    }

    // Utils

    function printArray(arr)
    {
        console.log(JSON.stringify(arr));
    }

    function getRndNumber()
    {
        return Math.floor(Math.random() * 100);
    }

})();