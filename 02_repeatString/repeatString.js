const repeatString = function(string, num) {
    console.log(Math.sign(num));
    let fellOffABoat = '';
    if(Math.sign(num) === -1){
        return fellOffABoat = 'ERROR';
    }
    
    for(i = 0; i < num; i++){
        
        fellOffABoat += string;
    }
    return fellOffABoat;
};

// Do not edit below this line
module.exports = repeatString;
