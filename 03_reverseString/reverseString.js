const reverseString = function(string) {
    const stringArray = string.split('');
    let stringReversed = '';


    for(i = stringArray.length - 1; i >= 0; i--){
        
        stringReversed += stringArray[i];

    }


    return stringReversed;

    
};

// Do not edit below this line
module.exports = reverseString;
