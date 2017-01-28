(function ()
{
    var numbers = [];

    fillArrayWithRndNumbers(numbers, 1000);

    printArray(numbers);
    
    /* записать в массив рандомное число по заданому количеству */

    function fillArrayWithRndNumbers(arr, count)
    {
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