const palindromes = function (str) {
    const noPunct = str.replace(/[^\p{L}\p{N}\s]/gu, '').toLowerCase().replace(/\s/g, '');
    return noPunct === noPunct.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
