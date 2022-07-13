const fibonacci = function(number) {
    let previousNumber = 0;
    let nextNumber = 1;
    let sum = 1;

    for(let i = 0; i < number - 1; i++){
        sum = previousNumber + nextNumber;
        previousNumber = nextNumber;
        nextNumber = sum;
    }

    if(Math.sign(number) === -1){
        return 'OOPS';
    }else{
    return sum;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
