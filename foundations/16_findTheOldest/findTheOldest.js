const findTheOldest = function(arr) {
    //return person object
    const oldest = arr.sort((a,b) => ((b.yearOfDeath || ((new Date()).getFullYear())) - b.yearOfBirth) - ((a.yearOfDeath || ((new Date()).getFullYear()))- a.yearOfBirth));
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
