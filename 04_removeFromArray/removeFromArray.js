const removeFromArray = function(array, ...removedElement) {
    let arrayLength = array.length;

    for(i = 0; i < arrayLength; i++){    
        for (const mainElement of array){
            for (const subElements of removedElement )

            if(mainElement === subElements){
                let removedPosition = array.indexOf(mainElement);
                array.splice(removedPosition, 1);
                
            }

        }
       
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
