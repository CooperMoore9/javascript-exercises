const removeFromArray = function(array, ...removedElement) {
    let arrayLength = array.length;
    console.log(arrayLength)
    for(i = arrayLength; i > 0; 1--){    
        for (const mainElement of array){
            for (const subElements of removedElement )

            if(mainElement === subElements){
                let removedPosition = array.indexOf(mainElement);
                array.splice(removedPosition, 1);
                
            }

        }
        return array;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
