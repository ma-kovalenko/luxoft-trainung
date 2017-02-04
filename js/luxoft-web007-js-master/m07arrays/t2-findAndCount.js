(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 1000);

    printArray(numbers);

    console.log(getCountOfElements(numbers, 23));

    // return count of elements el within array
    function getCountOfElements(arr, el) {
        var count = 0;
        
        for (var i = 0; i < arr.length; i++) {
           if (arr[i] == el) {
               count++;
           } 
        }
        
        return count;
    }

    // returns:
    //
    //     el if exists
    //    -1 if not
    function findElement(arr, el) {
        for (var i = 0; i < arr.length; i++) {
           if (arr[i] == el) {
               return el;
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