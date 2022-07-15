const findTheOldest = function(people) {
    // use .map to check if it has 'date of death'
    // then use that sort method you had to filter by oldest
    // be good at programming
    people.map(x => {
        if(!x.yearOfDeath){
            x.yearOfDeath = (new Date()).getFullYear();
            console.log(x);
        }
    });

    const orderByOldest = people.sort((a, b) => (a.yearOfBirth - a.yearOfDeath) > (b.yearOfBirth - b.yearOfDeath) ? 1 : -1);
    console.table(orderByOldest);
    return orderByOldest.at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
