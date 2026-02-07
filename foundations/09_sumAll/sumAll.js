const sumAll = function(numA, numB) {
    if(numA < 0 || numB < 0 || !Number.isInteger(numA) || !Number.isInteger(numB)){
        return "ERROR";
    }
    sum = 0
    if(numA < numB){
        for(i = numA; i <= numB; i++){
            sum += i;
        }
    }else{
        for(i = numB; i <= numA; i++){
            sum += i;
        }
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
