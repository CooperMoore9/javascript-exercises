const removeFromArray = function(array, ...removedElement) {
    for (const mainElement of array){
        for (const subElements of removedElement )

        if(mainElement === subElements){
            let removedPosition = array.indexOf(mainElement);
            array.splice(removedPosition, 1);
            
        }

    }
    console.log(array);
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
