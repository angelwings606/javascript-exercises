const fibonacci = function(num) {
    //check that num is correct type
    let index;
    if(typeof num !== 'number'){
        index = parseInt(num);
    }else{
        index = num
    }

    if (index < 0) return "OOPS";//because negative
    if (index == 0) return 0;//zero check
    //fibonacci function

    let firstPrev = 1 //two variables to tracks, starts with 1 for index 1
    let secondPrev = 0;

    for(i = 2; i <= index; i++){
        let current = firstPrev + secondPrev; //current = 1 for index 0
        secondPrev = firstPrev; //secondPrev is the next in sequence
        firstPrev = current; //firstPrev is current iterator
    }

    return firstPrev
    

};

// Do not edit below this line
module.exports = fibonacci;
