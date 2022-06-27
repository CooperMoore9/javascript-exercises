const sumAll = function(num1, num2) {
    let biggestNum = 0;
    let smallestNum = 0;
    let finalSum = 0;
    let tempNum = 0;
    if(num1 > num2){
        biggestNum = num1;
        smallestNum = num2;
    }else{
        biggestNum = num2;
        smallestNum = num1;
    }

    for(i = smallestNum; i = biggestNum; i++){

        console.log(smallestNum);
        tempNum = i + 1;
        finalSum = smallestNum + tempNum;
        
    }

    console.log(finalSum);
    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
