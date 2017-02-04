/*github.com/oyushche */
/* Задача про птиц (Помощь другу с хранением птиц)*/




(function (){
    
    One Bird [type,price,count,sold];
    
    stock [[type,price,count,sold],[type,price,count,sold],[type,price,count,sold]];
    
    var allBirdsType = [];
    
    var allBirdsCount  = [];
    
    var allBirdsPrice  = [];
    
     
    addBirdsType("gus");
    addBirdsType("hen");
    addBirdsType("eagle");
    
    console.log("Birds Type: " + allBirdsType);
    
    addBirdToStock("gus", 10, 5);
    addBirdToStock("hen", 33, 12);
    addBirdToStock("eagle", 16, 30);
    
    console.log(allBirdsCount);
    console.log(allBirdsPrice);
    
    
    sellBirdfromStock("gus", 10);
    console.log(allBirdsCount);
  
    
    /* Add Birds TypeMethod */
    
    function addBirdsType (birsdsType) {
        allBirdsType.push(birsdsType);  
    }
    
    /* Add Birds To Stock Method */
    
    function addBirdToStock(birdsName,count,price) {       
       for (var i = 0; i < allBirdsType.length; i++) {
          if (birdsName == allBirdsType[i]) {
            allBirdsCount[birdsName] = count;
            allBirdsPrice[birdsName] = price;
          }
       }       
    }
    
    /* Sell Bird from Stock */
    
    function sellBirdfromStock (birdsName,sellCount) {
       for (index in allBirdsCount) {
          if (birdsName == allBirdsCount[index]) {
            allBirdsCount[birdsName] = sellCount;
          }
        }
    }      


    
})();

