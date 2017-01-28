(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 10);

    bubbleSort(numbers);

    printArray(numbers);

    // do not check area that you already sorted

    function bubbleSort(arr){ 
        var n = arr.length; 
        for (var i = 0; i < n-1; i++) { 
            for (var j = 0; j < n-1-i; j++) {
                swap(arr, j, j + 1);
            }
        }
    }

    // Utils
    
    // should swap elements with given positions
    function swap(arr, pos1, pos2){
        
        if (arr[pos1] > arr[pos2]){
            var tempPos = arr[pos1];
            arr[pos1] = arr[pos2];
            arr[pos2] = tempPos; 
        }
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