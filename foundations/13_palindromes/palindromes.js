const palindromes = function (arr) {
    const tempA = arr.slice(Math.floor(arr.length/2));
    const tempB = arr.slice(0,Math.ceil(arr.length/2));
    const reversed = tempB.slice().reverse();
    return tempA === reversed;
};

// Do not edit below this line
module.exports = palindromes;
