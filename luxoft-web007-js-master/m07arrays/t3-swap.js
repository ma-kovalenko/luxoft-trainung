(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 10);

    printArray(numbers);

    swap(numbers, 1, 4);

    printArray(numbers);


    // should swap elements with given positions
    function swap(arr, pos1, pos2)
    {
        var el1 = arr[pos1];
        var el2 = arr[pos2];
        
        arr[pos1] = el2;
        arr[pos2] = el1;
        
    }


    // Utils

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

    function printArray(arr)
    {
        console.log(JSON.stringify(arr));
    }

    function getRndNumber()
    {
        return Math.floor(Math.random() * 100);
    }

})();