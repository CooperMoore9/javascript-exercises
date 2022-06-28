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

    if(Math.sign(num1) === -1 || Math.sign(num2) === -1 || typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return 'ERROR';
    }

    for(i = smallestNum; i <= biggestNum - 1; i++){

        tempNum = i + 1;
        smallestNum = smallestNum + tempNum
        finalSum = smallestNum
        
    }

    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
