const repeatString = function(str, times) {
    let joining = []
    if(times < 0){
        return joining = "ERROR";
    }
    
    for(i=0; i < times; i++){
        joining.push(str);
    }
    
    return joining.join('');

};

// Do not edit below this line
module.exports = repeatString;
