const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(nums) {
	return nums.reduce((total,num) => total + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((total,num) => total * num, 1);
};

const power = function(num, exp) {
  total = num;
	for(i = 1; i< exp; i++){
    total *= num;
  }
  return total;
};

const factorial = function(num) {
	total = 1;
  for(i=1; i<=num; i++){
    total *=i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
